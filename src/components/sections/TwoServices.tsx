import { Container } from "@/components/ui/Container";
import { twoServices } from "@/content/home";

export function TwoServices() {
  return (
    <section className="bg-tint py-20 md:py-28">
      <Container>
        <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {twoServices.title}{" "}
          <span className="font-normal italic text-sky">{twoServices.titleAccent}</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {twoServices.cards.map((card) => (
            <article key={card.title} className="rounded-[20px] border border-line bg-white p-8 text-center md:p-10">
              <h3 className="text-xl font-semibold text-ink md:text-2xl">{card.title}</h3>
              <p className="mt-4 font-light leading-relaxed">{card.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}