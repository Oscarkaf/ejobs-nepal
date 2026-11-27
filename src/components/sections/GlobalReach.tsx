import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { globalReach } from "@/content/home";
import { TimeZoneBridge } from "./TimeZoneBridge";

export function GlobalReach() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-accent">{globalReach.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {globalReach.title} <span className="font-normal italic text-sky">{globalReach.titleAccent}</span>
          </h2>
          <p className="mt-6 font-light">{globalReach.text}</p>
        </div>

        <Reveal className="mt-14">
          <TimeZoneBridge />
        </Reveal>
      </Container>
    </section>
  );
}