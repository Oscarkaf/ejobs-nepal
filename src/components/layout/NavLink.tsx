"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";

const normalize = (path: string) => path.replace(/\/$/, "") || "/";

type Props = { item: NavItem; onNavigate?: () => void };

export function NavLink({ item, onNavigate }: Props) {
  const pathname = usePathname();
  const base = "transition-colors hover:text-brand";

  if (item.external) {
    return (
      <a href={item.href} onClick={onNavigate} className={`${base} text-muted`}>
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
      className={`${base} ${isActive ? "text-nav-active" : "text-muted"}`}
    >
      {item.label}
    </Link>
  );
}