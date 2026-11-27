import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  text?: string;
};

export function PageHero({ eyebrow, title, titleAccent, text }: Props) {
  return (
    <section className="bg-brand-gradient mt-6 py-20 md:py-28">
      <Container>
        <div className="animate-fade-up max-w-2xl">
          <p className="font-semibold text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl md:leading-[1.2]">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="font-normal italic text-accent">{titleAccent}</span>
              </>
            )}
          </h1>
          {text && <p className="mt-6 max-w-xl font-light leading-relaxed text-white">{text}</p>}
        </div>
      </Container>
    </section>
  );
}