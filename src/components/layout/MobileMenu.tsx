"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/content/site";
import { NavLink } from "./NavLink";

type Props = { items: NavItem[]; applyUrl: string };

export function MobileMenu({ items, applyUrl }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="rounded-lg p-2 text-ink outline-none transition-colors hover:bg-tint focus-visible:ring-2 focus-visible:ring-brand"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="animate-fade-up absolute inset-x-0 top-full mt-2 rounded-2xl bg-white p-6 shadow-[0_0_18px_6px_rgba(49,58,168,0.08)]"
        >
          <ul className="flex flex-col gap-5 text-lg font-medium">
            {items.map((item) => (
              <li key={item.href}>
                <NavLink item={item} onNavigate={() => setOpen(false)} />
              </li>
            ))}
          </ul>
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded bg-sky-button px-6 py-3 font-medium text-white transition duration-300 hover:bg-brand active:scale-[0.97]"
          >
            Apply Now
          </a>
        </nav>
      )}
    </div>
  );
}