import { APPLY_URL , LIVE_SITE } from "./site";

export const hero = {
  eyebrow: "Nepal's Trusted Recruitment & BPO Partner",
  title: "Hire Smarter. Outsource Efficiently. Grow Faster.",
  text: "COPY THE SUBHEADING FROM THEIR HERO",
  primaryCta: { label: "Apply Now", href: APPLY_URL },
  secondaryCta: { label: "Browse Jobs", href: `${LIVE_SITE}/job-list/` },
  images: [
    { src: "/images/hero-1.jpg", alt: "DESCRIBE WHAT THE IMAGE SHOWS" },
    { src: "/images/hero-2.jpg", alt: "DESCRIBE WHAT THE IMAGE SHOWS" },
    { src: "/images/hero-3.png", alt: "DESCRIBE WHAT THE IMAGE SHOWS" },
  ],
};