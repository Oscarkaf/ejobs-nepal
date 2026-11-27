import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoose } from "@/content/home";

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {whyChoose.title}{" "}
            <span className="font-normal italic text-sky">{whyChoose.titleAccent}</span>
          </h2>

          <div className="relative mt-10">
            <span aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-0.5 rounded-full bg-line" />
            <span
              aria-hidden="true"
              className="scroll-draw absolute bottom-6 left-[23px] top-6 w-0.5 rounded-full bg-linear-to-b from-sky to-brand"
            />

            <Reveal stagger className="space-y-10">
              {whyChoose.points.map((point) => (
                <div key={point.title} className="group relative flex gap-5">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-[0_0_0_6px_#fbf7f4] ring-1 ring-line transition duration-300 group-hover:bg-brand group-hover:text-white group-hover:ring-brand">
                    <Icon name={point.icon} className="icon-draw" />
                  </span>
                  <div className="pt-1">
                    <h3 className="font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed">{point.text}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal variant="clip">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-3xl lg:max-w-md">
            <Image
              src={whyChoose.image.src}
              alt={whyChoose.image.alt}
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}