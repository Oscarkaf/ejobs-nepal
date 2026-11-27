import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  text?: string;
  /** Optional illustration shown to the right of the text on large screens */
  visual?: ReactNode;
};

export function PageHero({ eyebrow, title, titleAccent, text, visual }: Props) {
  return (
    <section className="bg-brand-gradient mt-6 overflow-hidden py-20 md:py-24">
      <Container className={visual ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]" : ""}>
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

        {visual && <div className="animate-fade-up [animation-delay:200ms]">{visual}</div>}
      </Container>
    </section>
  );
}