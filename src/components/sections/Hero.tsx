import { Button } from "@/components/ui/Button";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="relative mx-auto max-w-wide overflow-hidden rounded-2xl bg-white px-6 py-24 text-center shadow-[0_0_18px_6px_rgba(49,58,168,0.08)] md:py-40">
        {/* Soft background shapes and dot grid, echoing the original */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-tint blur-3xl" />
          <div className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-tint blur-3xl" />
          <div className="absolute right-10 top-10 h-28 w-40 bg-[radial-gradient(circle,#b9d9f3_1.5px,transparent_1.5px)] bg-[length:14px_14px]" />
        </div>

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
            <Button href={hero.secondaryCta.href} variant="navy" external>
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}