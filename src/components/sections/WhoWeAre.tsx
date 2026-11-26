import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { whoWeAre } from "@/content/home";

export function WhoWeAre() {
  const [first, second] = whoWeAre.images;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="rounded-3xl bg-tint p-6 sm:p-10">
            <div className="relative aspect-[3/2] w-3/5 overflow-hidden rounded-2xl">
              <Image
                src={first.src}
                alt={first.alt}
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-5 aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image
                src={second.src}
                alt={second.alt}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 right-4 rounded-xl bg-white px-5 py-3 shadow-lg">
                <p className="text-2xl font-semibold text-brand">
                  <CountUp value={whoWeAre.stat.value} suffix={whoWeAre.stat.suffix} />
                </p>
                <p className="text-xs text-body">{whoWeAre.stat.label}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <p className="font-semibold text-accent">{whoWeAre.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            {whoWeAre.title} <span className="font-normal italic text-sky">{whoWeAre.titleAccent}</span>
          </h2>
          <div className="mt-6 space-y-4 font-light leading-relaxed">
            {whoWeAre.paragraphs.map((text) => (
              <p key={text.slice(0, 20)}>{text}</p>
            ))}
          </div>
          <Button href={whoWeAre.cta.href} variant="outline" arrow className="mt-8">
            {whoWeAre.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}