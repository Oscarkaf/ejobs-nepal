import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { story } from "@/content/about";

export function OurStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <p className="border-l-2 border-[#e8bf96] pl-3 text-sm text-ink">{story.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl lg:text-5xl">
            {story.title} <span className="italic text-sky">{story.titleAccent}</span>
          </h2>
          <div className="mt-6 space-y-4 font-light leading-relaxed">
            {story.paragraphs.map((text) => (
              <p key={text.slice(0, 20)}>{text}</p>
            ))}
          </div>
          <Button href={story.cta.href} variant="brand" arrow className="mt-8">
            {story.cta.label}
          </Button>
        </div>

        <Reveal>
          <div className="bg-brand-gradient rounded-3xl p-8 text-white shadow-xl md:p-10">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs">{story.card.label}</span>
            <h3 className="mt-5 text-2xl font-semibold leading-snug text-white md:text-[32px] md:leading-[1.2]">
              {story.card.title}
              <span className="block font-normal italic text-[#f1efef]">{story.card.titleAccent}</span>
            </h3>
            <p className="mt-4 text-sm font-light text-[#dadada]">{story.card.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}