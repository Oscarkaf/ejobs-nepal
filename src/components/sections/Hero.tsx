import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="relative mx-auto max-w-wide overflow-hidden rounded-2xl bg-white px-6 py-24 text-center shadow-[0_0_18px_6px_rgba(49,58,168,0.08)] md:py-40">
        <Image src="/images/hero-bg.png" alt="" fill priority sizes="(min-width: 1320px) 1320px, 100vw" className="object-cover" />

        <div className="relative mx-auto max-w-3xl">
          <p className="animate-fade-up inline-block rounded-full border border-white bg-navy-900 px-4 py-2 text-sm font-light text-white">
            {hero.eyebrow}
          </p>

          <h1 className="animate-fade-up mx-auto mt-8 max-w-[680px] text-4xl leading-tight text-hero [animation-delay:100ms] sm:text-5xl md:text-[64px] md:leading-[1.2]">
            {hero.title} <span className="text-accent">{hero.titleAccent}</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-8 max-w-[680px] font-light leading-[30px] text-[#111] [animation-delay:200ms]">
            {hero.text}
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 [animation-delay:300ms]">
            <Button href={hero.primaryCta.href} external arrow className="text-base font-normal">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="navy">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}