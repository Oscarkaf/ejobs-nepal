import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { contact, footerGroups, footerTagline } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/images/logo.png"
            alt="E-Jobs Nepal"
            width={116}
            height={96}
            className="h-16 w-auto rounded bg-white p-1"
          />
          <p className="mt-4 max-w-sm font-light">{footerTagline}</p>
          <address className="mt-6 space-y-2 not-italic">
            <p><a href={contact.phoneHref} className="transition-colors hover:text-white">{contact.phone}</a></p>
            <p><a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">{contact.email}</a></p>
            <p>
              <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {contact.address}
              </a>
            </p>
          </address>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="mb-4 text-base font-semibold text-white">{group.title}</h2>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className="transition-colors hover:text-accent">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="transition-colors hover:text-accent">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-sm">© 2026 E-Jobs Nepal. All rights reserved.</Container>
      </div>
    </footer>
  );
}