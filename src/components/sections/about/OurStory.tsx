import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { story } from "@/content/about";

export function OurStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
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
          <TiltCard maxTilt={6}>
            <div className="bg-brand-gradient relative overflow-hidden rounded-[20px] bg-[length:200%_200%] p-8 text-white shadow-[0_20px_50px_rgba(23,85,183,0.3)] animate-[gradient-shift_10s_ease-in-out_infinite] motion-reduce:animate-none md:p-10">
              {/* Two soft orbs of light drifting inside the card */}
              <span
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/25 blur-2xl animate-[float_7s_ease-in-out_infinite] motion-reduce:animate-none"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-accent/35 blur-2xl animate-[float_9s_ease-in-out_infinite] [animation-delay:-3s] motion-reduce:animate-none"
              />

              <div className="relative">
                <span className="inline-block rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs backdrop-blur-sm">
                  {story.card.label}
                </span>
                <h3 className="mt-5 text-2xl font-semibold leading-snug text-white md:text-[32px] md:leading-[1.2]">
                  {story.card.title}
                  <span className="block font-normal italic text-[#f1efef]">{story.card.titleAccent}</span>
                </h3>
                <p className="mt-4 text-sm font-light text-white/85">{story.card.text}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Recruitment", "Outsourcing"].map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </Container>
    </section>
  );
}