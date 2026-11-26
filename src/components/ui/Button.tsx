import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "navy" | "outline" | "brand" | "glass";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  accent: "bg-accent text-white hover:bg-[#e07d08]",
  navy: "border border-white bg-navy-850 font-light text-white hover:bg-navy-950",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  brand: "bg-brand text-white hover:bg-nav-active",
  glass: "border border-white bg-[rgba(77,110,165,0.35)] font-light text-white hover:bg-white/20",
};

export function Button({
  href,
  children,
  variant = "accent",
  external = false,
  arrow = false,
  className = "",
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}