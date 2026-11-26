import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { howWeHelp } from "@/content/home";

const dotColours = ["bg-brand", "bg-accent", "bg-brand"];

export function HowWeHelp() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-semibold text-sky">{howWeHelp.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            {howWeHelp.title}{" "}
            <span className="font-normal italic text-sky">{howWeHelp.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-lg font-light leading-relaxed">{howWeHelp.text}</p>

          <ul className="mt-8 space-y-4">
            {howWeHelp.points.map((point, index) => (
              <li key={point} className="flex items-center gap-3 text-ink">
                <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColours[index % dotColours.length]}`} />
                {point}
              </li>
            ))}
          </ul>

          <Button href={howWeHelp.cta.href} variant="brand" arrow className="mt-10">
            {howWeHelp.cta.label}
          </Button>
        </div>

        <Reveal>
          <Image
            src={howWeHelp.image.src}
            alt={howWeHelp.image.alt}
            width={660}
            height={660}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="mx-auto w-full max-w-[540px]"
          />
        </Reveal>
      </Container>
    </section>
  );
}