"use client";

import { useEffect, useState } from "react";

type Props = { words: string[] };

/** Types each word, pauses, erases it, then moves to the next. Shows the first word statically with reduced motion. */
export function Typewriter({ words }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % words.length);
      }, 300);
    } else {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? 45 : 90);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <>
      <span className="sr-only">{words.join(" ")}</span>
      <span aria-hidden="true" className="whitespace-nowrap">
        {text}
        <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse rounded-full bg-sky align-[-0.1em]" />
      </span>
    </>
  );
}