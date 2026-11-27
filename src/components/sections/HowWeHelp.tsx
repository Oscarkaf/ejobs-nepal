import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { howWeHelp } from "@/content/home";

const dotColours = ["bg-brand", "bg-accent", "bg-brand"];

export function HowWeHelp() {
  return (
    <section className="bg-white py-20 md:py-28">
            <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

        <div className="bg-brand-gradient animate-[gradient-shift_10s_ease-in-out_infinite] rounded-3xl bg-[length:200%_200%] p-5 shadow-[0_20px_50px_rgba(23,85,183,0.3)] motion-reduce:animate-none sm:p-8">
          <Reveal stagger className="space-y-4">
            {howWeHelp.sectors.map((sector) => (
              <div key={sector.title}>
                <article className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition duration-300 hover:translate-x-1 hover:border-white/40 hover:bg-white/20">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-brand">
                    <Icon name={sector.icon} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{sector.title}</h3>
                    <p className="truncate text-sm font-light text-white/80">{sector.roles}</p>
                  </div>
                  <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-accent/70 bg-accent/20 px-3 py-1 text-xs font-semibold text-white">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:hidden" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Active
                  </span>
                </article>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}