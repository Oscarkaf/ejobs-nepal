import Image from "next/image";
import Link from "next/link";
import { APPLY_URL, mainNav } from "@/content/site";
import { HeaderShell } from "./HeaderShell";
import { MobileMenu } from "./MobileMenu";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <HeaderShell>
      <div className="relative mx-auto flex h-20 max-w-wide items-center justify-between rounded-2xl bg-white px-5 shadow-[0_0_18px_6px_rgba(49,58,168,0.08)] transition-shadow duration-300 group-data-[scrolled=true]/header:shadow-[0_10px_30px_rgba(1,29,77,0.14)] sm:px-8">
        <Link href="/" aria-label="E-Jobs Nepal home" className="shrink-0">
          <Image
            src="/images/logo-hd.png"
            alt="E-Jobs Nepal"
            width={500}
            height={500}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10 text-base font-medium">
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
          className="hidden rounded bg-sky-button px-7 py-3.5 text-sm font-medium text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-brand hover:shadow-[0_8px_20px_rgba(5,164,234,0.35)] active:scale-[0.97] lg:inline-block"
        >
          Apply Now
        </a>

        <MobileMenu items={mainNav} applyUrl={APPLY_URL} />
      </div>
    </HeaderShell>
  );
}