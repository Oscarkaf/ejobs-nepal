"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade" | "clip" | "left" | "right";

type Props = {
  children: ReactNode;
  delay?: number;
  stagger?: boolean;
  variant?: Variant;
  className?: string;
};

export function Reveal({ children, delay = 0, stagger = false, variant = "fade", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-stagger={stagger || undefined}
      data-variant={variant === "fade" ? undefined : variant}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}