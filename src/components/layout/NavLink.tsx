"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";

const normalize = (path: string) => path.replace(/\/$/, "") || "/";

const underline =
  "relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:rounded-full after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100";

type Props = { item: NavItem; onNavigate?: () => void };

export function NavLink({ item, onNavigate }: Props) {
  const pathname = usePathname();
  const base = `${underline} transition-colors hover:text-brand`;

  if (item.external) {
    return (
      <a href={item.href} onClick={onNavigate} className={`${base} text-muted after:scale-x-0`}>
        {item.label}
      </a>
    );
  }

  const isActive = normalize(pathname) === normalize(item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={`${base} ${isActive ? "text-nav-active after:scale-x-100" : "text-muted after:scale-x-0"}`}
    >
      {item.label}
    </Link>
  );
}