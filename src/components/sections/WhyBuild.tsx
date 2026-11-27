import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whyBuild } from "@/content/home";

const SIGNAL_SECONDS = 4;

/** Time for a signal to reach card `index`, so its node and card pulse exactly as the signal arrives */
function arrivalDelay(index: number, count: number) {
  return `${((index * SIGNAL_SECONDS) / (count - 1)).toFixed(2)}s`;
}

export function WhyBuild() {
  const count = whyBuild.points.length;

  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
      <Image src="/images/why-build-bg.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <Container className="relative">
        <p className="font-semibold text-accent">{whyBuild.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          {whyBuild.title}{" "}
          <span className="font-normal italic text-[#e8e9e9]">{whyBuild.titleAccent}</span>
        </h2>

        <div className="relative mt-16">
          {/* Desktop: a horizontal line linking the four cards, with signals travelling along it */}
          <div
            aria-hidden="true"
            className="scroll-draw-x absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-white/20 lg:block"
          >
            <span className="signal" />
            <span className="signal" style={{ animationDelay: `-${SIGNAL_SECONDS / 2}s` }} />
          </div>

          {/* Mobile: the same idea, running vertically down the left */}
          <div aria-hidden="true" className="scroll-draw absolute bottom-6 left-[7px] top-6 w-px bg-white/20 sm:hidden">
            <span className="signal signal-y" />
            <span className="signal signal-y" style={{ animationDelay: `-${SIGNAL_SECONDS / 2}s` }} />
          </div>

          <Reveal stagger className="grid gap-5 pl-8 sm:grid-cols-2 sm:pl-0 lg:grid-cols-4 lg:pt-10">
            {whyBuild.points.map((point, index) => {
              const delay = arrivalDelay(index, count);
              return (
                <div key={point.title} className="relative h-full">
                  <span
                    aria-hidden="true"
                    className="node-ping absolute left-1/2 top-[-46px] hidden h-3 w-3 -translate-x-1/2 rounded-full border border-sky bg-navy-950 lg:block"
                    style={{ animationDelay: delay }}
                  />
                  <span
                    aria-hidden="true"
                    className="node-ping absolute -left-[31px] top-6 h-3 w-3 rounded-full border border-sky bg-navy-950 sm:hidden"
                    style={{ animationDelay: delay }}
                  />

                  <article
                    className="card-ping h-full rounded-2xl border border-[#686464] bg-[rgba(7,24,60,0.85)] p-5 transition duration-300 [--ping-rest:#686464] hover:-translate-y-1 hover:border-sky"
                    style={{ animationDelay: delay }}
                  >
                    {point.stat ? (
                      <p className="text-3xl font-semibold text-white">
                        <CountUp value={point.stat.value} prefix={point.stat.prefix} suffix={point.stat.suffix} />
                        <span className="mt-1 block text-xs font-normal text-sky">{point.stat.label}</span>
                      </p>
                    ) : (
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                        <Icon name="users" />
                      </span>
                    )}
                    <h3 className="mt-5 font-semibold text-white">{point.title}</h3>
                    <p className="mt-3 text-sm font-light leading-relaxed text-white/80">{point.text}</p>
                  </article>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}