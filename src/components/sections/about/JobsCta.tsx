import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { jobsCta } from "@/content/about";

export function JobsCta() {
  return (
    <section className="bg-brand-gradient py-20 md:py-24">
      <Container className="text-center">
        <h2 className="text-3xl font-semibold text-[#f2f3f5] sm:text-4xl lg:text-5xl">
          {jobsCta.titleStart} <span className="font-medium italic text-accent">{jobsCta.titleAccent}</span>{" "}
          {jobsCta.titleEnd}
        </h2>
        <p className="mt-5 font-light text-white/90">{jobsCta.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={jobsCta.primary.href}>{jobsCta.primary.label}</Button>
          <Button href={jobsCta.secondary.href} variant="glass" external>
            {jobsCta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}