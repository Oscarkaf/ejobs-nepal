import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    // -mt-24 pulls the hero up behind the floating header, so it fills the whole first screen
    <section className="relative -mt-24 flex min-h-[100svh] items-center justify-center overflow-hidden bg-white px-6 pb-24 pt-36">
      <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover" />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="animate-fade-up inline-block rounded-full border border-white bg-navy-900 px-4 py-2 text-xs font-light text-white sm:text-sm">
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
    </section>
  );
}