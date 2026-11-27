import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { mainNav } from "@/content/site";

export default function NotFound() {
  return (
    <section className="px-3 pt-6 sm:px-5">
      <div className="relative mx-auto max-w-wide overflow-hidden rounded-2xl bg-white px-6 py-24 text-center shadow-[0_0_18px_6px_rgba(49,58,168,0.08)] md:py-32">
        <Image src="/images/hero-bg.png" alt="" fill sizes="(min-width: 1320px) 1320px, 100vw" className="object-cover" />

        <div className="relative mx-auto max-w-2xl">
          <p
            aria-hidden="true"
            className="bg-brand-gradient animate-[float_6s_ease-in-out_infinite] select-none bg-clip-text text-[120px] font-semibold leading-none text-transparent motion-reduce:animate-none sm:text-[180px]"
          >
            404
          </p>

          <h1 className="animate-fade-up mt-6 text-3xl text-hero sm:text-4xl">We couldn&apos;t find that page</h1>
          <p className="animate-fade-up mx-auto mt-4 max-w-md font-light leading-relaxed [animation-delay:100ms]">
            The link may be broken, or the page may have moved. Here are some places to go instead.
          </p>

          <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 [animation-delay:200ms]">
            <Button href="/" arrow>
              <Icon name="home" size={16} />
              Back to home
            </Button>
            <Button href="/about-us/" variant="outline">
              About us
            </Button>
          </div>

          <nav aria-label="Helpful links" className="animate-fade-up mt-12 [animation-delay:300ms]">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-body underline-offset-4 transition-colors hover:text-brand hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}