"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; prefix?: string; suffix?: string; duration?: number };

export function CountUp({ value, prefix = "", suffix = "", duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        setDisplay(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span ref={ref} aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </>
  );
}