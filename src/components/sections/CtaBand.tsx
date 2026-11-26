import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cta } from "@/content/home";

export function CtaBand() {
  return (
    <section className="px-3 pt-16 sm:px-5">
      <div className="relative mx-auto max-w-wide overflow-hidden rounded-3xl">
        <Image src="/images/cta-bg.jpg" alt="" fill sizes="(min-width: 1320px) 1320px, 100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />

        <div className="relative px-6 py-16 sm:px-12 md:py-24">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              {cta.title}{" "}
              <span className="font-normal italic text-[#e8e9e9]">{cta.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-md font-light text-white/90">{cta.text}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={cta.primary.href} className="text-base font-normal shadow-[0_0_11px_rgba(245,140,15,0.78)]">
                {cta.primary.label}
              </Button>
              <Button href={cta.secondary.href} variant="glass">
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}