import { APPLY_URL, LIVE_SITE } from "./site";

export const hero = {
  eyebrow: "Nepal's Trusted Recruitment & BPO Partner",
  title: "Hire Smarter. Outsource Efficiently.",
  titleAccent: "Grow Faster.",
  text: "We connect businesses with skilled Nepali talent and deliver cost-effective outsourcing solutions that help organisations grow without the overhead.",
  primaryCta: { label: "Apply Now", href: APPLY_URL },
  secondaryCta: { label: "Browse Jobs", href: `${LIVE_SITE}/job-list/` },
};

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "We're a trusted & professional BPO and",
  titleAccent: "recruitment company",
  paragraphs: [
    "Ejobs Nepal bridges the gap between world-class organizations and Nepal's finest professionals. Whether you need a fully managed BPO team to optimize operations or top-tier talent to drive your local growth, we deliver excellence without borders.",
    "We are a Kathmandu-based recruitment and BPO company helping businesses and professionals get ahead. We specialise in sourcing qualified candidates across key industries and delivering outsourced business operations that reduce costs without reducing quality.",
    "Whether you are a local enterprise, an international company looking to hire from Nepal, or an individual seeking your next career move — we are built to serve you.",
  ],
  cta: { label: "Read More About Us", href: "/about-us/" }, // original linked to /about/, which differs from the nav
  stat: { value: "400+", label: "Companies worldwide" },
  images: [
    { src: "/images/team-meeting.jpg", alt: "Recruitment consultant interviewing a candidate across a desk" },
    { src: "/images/call-centre.jpg", alt: "Customer support agent with a headset working at a computer" },
  ],
};