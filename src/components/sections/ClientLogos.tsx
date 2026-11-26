import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { clients } from "@/content/home";

export function ClientLogos() {
  return (
    <section aria-label="Our clients" className="bg-tint py-14">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map((client) => (
            <li key={client.name}>
              <a href={client.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-12 w-auto object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}