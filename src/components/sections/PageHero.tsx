import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Props = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  text?: string;
  /** Optional illustration shown to the right of the text on large screens */
  visual?: ReactNode;
  /** Makes the hero run edge to edge behind the floating header and fill most of the screen */
  tall?: boolean;
};

export function PageHero({ eyebrow, title, titleAccent, text, visual, tall = false }: Props) {
  const sizing = tall
    ? "-mt-24 flex min-h-[85svh] items-center pb-20 pt-36" // pulled up behind the header, like the homepage hero
    : "mt-6 py-20 md:py-24";

  return (
    <section className={`bg-brand-gradient overflow-hidden ${sizing}`}>
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