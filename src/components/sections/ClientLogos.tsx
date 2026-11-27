import Image from "next/image";
import { clients } from "@/content/home";

const COPIES = 4;

export function ClientLogos() {
  const track = Array.from({ length: COPIES }, () => clients).flat();

  return (
    <section aria-label="Our clients" className="overflow-hidden bg-tint py-14">
      <div className="group relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="flex w-max animate-[marquee_35s_linear_infinite] items-center group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {track.map((client, index) => {
            const isCopy = index >= clients.length;
            return (
              <li
                key={`${client.name}-${index}`}
                aria-hidden={isCopy || undefined}
                className={`shrink-0 px-8 sm:px-10 ${isCopy ? "motion-reduce:hidden" : ""}`}
              >
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isCopy ? -1 : undefined}
                  className="relative block h-16 w-40 transition duration-300 hover:scale-110 focus-visible:scale-110"
                >
                  <Image
                    src={client.logo}
                    alt={isCopy ? "" : client.name}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}