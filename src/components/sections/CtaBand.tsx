import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cta } from "@/content/home";

export function CtaBand() {
  return (
    <section className="px-3 pt-16 sm:px-5">
      <div className="relative mx-auto max-w-wide overflow-hidden rounded-3xl">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          sizes="(min-width: 1320px) 1320px, 100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Darker on the left for readable text, lighter on the right so the photo shows through */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,25,73,0.9)_0%,rgba(4,25,73,0.65)_45%,rgba(23,62,143,0.25)_100%)]"
        />

        <div className="relative px-6 py-16 sm:px-12 md:py-24">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
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