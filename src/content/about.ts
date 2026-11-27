import type { IconName } from "@/components/ui/Icon";
import { APPLY_URL, LIVE_SITE } from "./site";

export const aboutHero = {
  eyebrow: "About E-Jobs Nepal",
  title: "Bridging Nepal's Talent with the",
  titleAccent: "World's Demand",
  text: "Ejobs Nepal was built on a simple belief that skilled Nepali professionals deserve access to the right opportunities, and that businesses deserve access to reliable, cost-effective talent and outsourcing solutions.",
};

export const story = {
  eyebrow: "Our Story",
  title: "About",
  titleAccent: "E-Jobs Nepal",
  paragraphs: [
    "Nepal has no shortage of capable, ambitious professionals. What it has lacked is a structured, trustworthy platform that connects that talent to employers both locally and internationally.",
    "E-Jobs Nepal was founded to close that gap. We started with a clear focus: to provide businesses in Nepal, the UK, and Europe with recruitment and business process outsourcing services that are professional, transparent, and genuinely cost-effective.",
    "In a short time, we have grown into a company that serves two distinct but connected needs — helping organisations find and hire the right people, and helping them outsource business functions to skilled Nepali teams at a fraction of in-house costs.",
    "We are based in Kathmandu, but our work reaches far beyond Nepal's borders.",
  ],
  cta: { label: "Find Jobs Now", href: `${LIVE_SITE}/job-list/` },
  card: {
    label: "E-Jobs",
    title: "Recruitment & BPO",
    titleAccent: "from one trusted partner",
    text: "Two service lines. One company. Complete end-to-end support from first conversation to post-placement follow-through.",
  },
};

export const missionVision = {
  title: "Our Mission",
  titleAccent: "and Vision",
  items: [
    {
      title: "Our Mission",
      text: "To bridge Nepal's professional talent with global demand — delivering recruitment and outsourcing solutions that create real value for businesses and real opportunity for people.",
    },
    {
      title: "Our Vision",
      text: "To become the most trusted recruitment and BPO partner for businesses operating between Nepal and the international market — known for integrity, quality, and results.",
    },
  ],
};

type Value = { icon: IconName; tone: "orange" | "blue"; title: string; text: string };

export const values = {
  eyebrow: "Our values",
  title: "Integrity Is Not a Policy.",
  titleAccent: "It Is How We Operate.",
  text: "Every business we work with and every candidate we represent is treated with the same standard of honesty and transparency. We do not overpromise. We do not cut corners. We tell you what we can do, and then we do it.",
  items: [
    {
      icon: "heart",
      tone: "orange",
      title: "Transparent by Default",
      text: "We communicate clearly at every stage with clients, candidates, and partners. No hidden steps, no vague timelines, no surprises.",
    },
    {
      icon: "globe",
      tone: "blue",
      title: "Accountable in Everything",
      text: "We take ownership of the work we deliver. If something is not right, we fix it. Our reputation is built on how we handle problems, not just successes.",
    },
    {
      icon: "lightbulb",
      tone: "orange",
      title: "Honest Representation",
      text: "Every role we list is genuine. Every candidate we put forward has been properly screened. We do not place people to fill a quota — we place people to make a lasting fit.",
    },
  ] satisfies Value[],
  images: [
    { src: "/images/values-1.jpg", alt: "" },
    { src: "/images/values-2.jpg", alt: "" },
    { src: "/images/values-3.jpg", alt: "" },
  ],
};

export const whatWeDo = {
  eyebrow: "What we do",
  title: "Two Services.",
  titleAccent: "One Trusted Partner.",
  text: "E-Jobs Nepal operates across two core service lines, designed to serve businesses at every stage of their growth.",
  columns: [
    {
      title: "Finding the Right People for the Right Roles",
      text: "We source, screen, and place qualified candidates across key sectors including IT and technology, banking and finance, hospitality and tourism, and construction and engineering. Whether you are hiring one specialist or building an entire team, we manage the process from start to placement.",
    },
    {
      title: "Outsourcing That Delivers Real Cost Savings",
      text: "We provide end-to-end business process outsourcing across data entry, customer support, HR and payroll, back-office operations, IT support, and finance and accounting. Our teams are trained, managed, and accountable so you get the output without the overhead.",
    },
  ],
};

type Differentiator = { icon: IconName; title: string; text: string };

export const differentiators = {
  title: "What Makes E-Jobs",
  titleAccent: "Different",
  items: [
    {
      icon: "userCheck",
      title: "Nepal-Specific Expertise",
      text: "We know the Nepali talent market in depth — the sectors, the salary expectations, the skills available, and the professional culture. That knowledge makes our placements more accurate and our outsourcing teams more effective.",
    },
    {
      icon: "globe",
      title: "International Standards",
      text: "We work with clients in the UK and Europe, which means we understand what global employers expect in terms of communication, accountability, and output quality. We bring those standards home to every engagement.",
    },
    {
      icon: "dollar",
      title: "Cost-Effective by Design",
      text: "Outsourcing to Nepal offers some of the best value in Asia. We structure our services to maximize that advantage for our clients without compromising on the quality of people or process.",
    },
    {
      icon: "users",
      title: "End-to-End Management",
      text: "From the first conversation to post-placement support, we handle the full process. You are not left to manage a pipeline — we manage it for you.",
    },
  ] satisfies Differentiator[],
};

export const jobsCta = {
  titleStart: "Your Dream",
  titleAccent: "Jobs",
  titleEnd: "Are Waiting",
  text: "Over 1 Million Interactions, 50,000 Success Stories. Make Yours Now.",
  primary: { label: "Search Jobs", href: `${LIVE_SITE}/job-list/` },
  secondary: { label: "Apply Now", href: APPLY_URL },
};