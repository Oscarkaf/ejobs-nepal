import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-mist/30 to-white">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="animate-fade-up">
          <p className="mb-4 font-semibold text-accent">{hero.eyebrow}</p>
          <h1 className="text-4xl leading-tight md:text-[50px] md:leading-[55px]">{hero.title}</h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} external>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline" external>{hero.secondaryCta.label}</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 animate-fade-up [animation-delay:200ms]">
          {hero.images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl shadow-xl ${index === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                priority={index === 0}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}