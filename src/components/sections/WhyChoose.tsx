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

          <ul className="mt-10 space-y-8">
            {whyChoose.points.map((point) => (
              <li key={point.title} className="flex gap-5">
                <Icon name={point.icon} size={28} className="mt-0.5 shrink-0 text-brand" />
                <div>
                  <h3 className="font-semibold text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
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