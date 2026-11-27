"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

/** Passes the cursor position to every [data-spotlight] card inside, so their glow follows the mouse. */
export function SpotlightGrid({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    const cards = ref.current?.querySelectorAll<HTMLElement>("[data-spotlight]");
    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}