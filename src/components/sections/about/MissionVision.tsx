import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { missionVision } from "@/content/about";

export function MissionVision() {
  return (
    <section className="bg-tint py-20 md:py-28">
      <Container>
        <h2 className="text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
          {missionVision.title} <span className="italic text-sky">{missionVision.titleAccent}</span>
        </h2>

        <Reveal stagger className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {missionVision.items.map((item) => (
            <div key={item.title} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-[0_8px_24px_rgba(23,62,143,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-sky via-brand to-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-0.5 w-10 rounded-full bg-sky transition-all duration-500 group-hover:w-20"
                />
                <p className="mt-4 font-light leading-relaxed">{item.text}</p>
              </article>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}