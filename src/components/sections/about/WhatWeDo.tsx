import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { whatWeDo } from "@/content/about";

export function WhatWeDo() {
  return (
    <section className="overflow-hidden bg-tint py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{whatWeDo.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {whatWeDo.title}
            <span className="text-shimmer block font-normal italic">{whatWeDo.titleAccent}</span>
          </h2>
          <p className="mt-6 font-light">{whatWeDo.text}</p>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-2">
          <span
            aria-hidden="true"
            className="scroll-draw absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-sky via-brand to-accent md:block"
          />
          {whatWeDo.columns.map((column, index) => (
            <Reveal key={column.title} variant={index === 0 ? "left" : "right"} className={index === 0 ? "md:pr-12" : "md:pl-12"}>
              <h3 className="font-semibold text-brand">{column.title}</h3>
              <p className="mt-4 font-light leading-relaxed">{column.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}