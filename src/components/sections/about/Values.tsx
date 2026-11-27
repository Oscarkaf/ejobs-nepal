import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { values } from "@/content/about";

const tones = {
  orange: "bg-[rgba(255,139,0,0.17)] text-accent",
  blue: "bg-tint text-brand",
};

export function Values() {
  const [large, wide, small] = values.images;

  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative row-span-2 aspect-[3/4] animate-[float_7s_ease-in-out_infinite] motion-reduce:animate-none">
              <Image src={large.src} alt={large.alt} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-contain" />
            </div>
            <div className="relative aspect-[3/2] animate-[float_6s_ease-in-out_infinite] [animation-delay:-2s] motion-reduce:animate-none">
              <Image src={wide.src} alt={wide.alt} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-contain" />
            </div>
            <div className="relative aspect-square animate-[float_8s_ease-in-out_infinite] [animation-delay:-4s] motion-reduce:animate-none">
              <Image src={small.src} alt={small.alt} fill sizes="(min-width: 1024px) 270px, 50vw" className="object-contain" />
            </div>
          </div>
        </Reveal>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{values.eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-[32px] sm:leading-[1.3]">
            {values.title}
            <span className="text-shimmer block font-normal italic">{values.titleAccent}</span>
          </h2>
          <p className="mt-4 font-light leading-relaxed">{values.text}</p>

          <Reveal stagger variant="right" className="mt-8 space-y-6">
            {values.items.map((item) => (
              <div key={item.title} className="group flex gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-700 group-hover:rotate-[360deg] ${tones[item.tone]}`}
                >
                  <Icon name={item.icon} className="icon-draw" />
                </span>
                <div>
                  <h3 className="font-medium text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}