import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { contact, footerGroups, footerTagline } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <Image src="/images/footer-bg.png" alt="" fill sizes="100vw" className="pointer-events-none object-cover" />

      <Container className="relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Image src="/images/logo-hd.png" alt="E-Jobs Nepal" width={500} height={500} className="h-20 w-auto" />
          <p className="mt-5 max-w-xs text-sm text-ink">{footerTagline}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            <li className="flex items-center gap-3">
              <Icon name="phone" size={18} className="text-nav-active" />
              <a href={contact.phoneHref} className="hover:text-brand">{contact.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" size={18} className="text-nav-active" />
              <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{contact.address}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" size={18} className="text-nav-active" />
              <a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a>
            </li>
          </ul>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="text-2xl font-normal text-[#003c9b]">{group.title}</h2>
            <ul className="mt-4 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className="text-ink transition-colors hover:text-brand">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="text-ink transition-colors hover:text-brand">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="relative border-t border-line">
        <Container className="py-6 text-sm text-body">© 2026 E-Jobs Nepal. All rights reserved.</Container>
      </div>
    </footer>
  );
}