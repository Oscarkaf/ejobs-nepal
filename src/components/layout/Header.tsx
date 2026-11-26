import Image from "next/image";
import Link from "next/link";
import { APPLY_URL, mainNav } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-4">
        <Link href="/" aria-label="E-Jobs Nepal home">
          <Image
            src="/images/logo.png"
            alt="E-Jobs Nepal"
            width={116}
            height={96}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-nav font-medium">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded bg-navy-900 px-6 py-3 text-sm text-white transition-colors hover:bg-brand lg:inline-block"
        >
          Apply now
        </a>

        <MobileMenu items={mainNav} applyUrl={APPLY_URL} />
      </div>
    </header>
  );
}