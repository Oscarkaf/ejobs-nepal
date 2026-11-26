import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whyBuild } from "@/content/home";

export function WhyBuild() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
      <Image src="/images/why-build-bg.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
      <Container className="relative">
        <p className="font-semibold text-accent">{whyBuild.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          {whyBuild.title}{" "}
          <span className="font-normal italic text-[#e8e9e9]">{whyBuild.titleAccent}</span>
        </h2>

        <Reveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyBuild.points.map((point) => (
            <article key={point.title} className="h-full rounded-2xl border border-[#686464] bg-[rgba(7,24,60,0.85)] p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon name="users" />
              </span>
              <h3 className="mt-5 font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/80">{point.text}</p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}