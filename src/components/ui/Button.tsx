import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-brand",
  outline: "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white",
  light: "bg-white text-navy-900 hover:bg-accent hover:text-white",
};

export function Button({ href, children, variant = "primary", external = false, className = "" }: Props) {
  const classes = `inline-flex items-center justify-center rounded px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}