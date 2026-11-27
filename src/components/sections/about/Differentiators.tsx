import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightGrid } from "@/components/ui/SpotlightGrid";
import { differentiators } from "@/content/about";

export function Differentiators() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <h2 className="text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {differentiators.title}
          <span className="block font-medium italic text-sky">{differentiators.titleAccent}</span>
        </h2>

        <SpotlightGrid className="mt-14">
          <Reveal stagger className="grid gap-6 md:grid-cols-2">
            {differentiators.items.map((item) => (
              <article
                key={item.title}
                data-spotlight
                className="spotlight-card group rounded-[20px] border border-[#c4edff] bg-white p-6 md:px-12 md:py-8"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-tint text-sky transition duration-500 group-hover:bg-sky group-hover:text-white">
                  <Icon name={item.icon} size={32} className="icon-draw" />
                </span>
                <h3 className="mt-5 text-xl text-ink md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed">{item.text}</p>
              </article>
            ))}
          </Reveal>
        </SpotlightGrid>
      </Container>
    </section>
  );
}