type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-3 font-semibold text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 font-light leading-relaxed">{intro}</p>}
    </div>
  );
}