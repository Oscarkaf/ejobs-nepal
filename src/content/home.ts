import type { IconName } from "@/components/ui/Icon";
import { APPLY_URL, LIVE_SITE } from "./site";

/* ---------- Hero ---------- */

export const hero = {
  eyebrow: "Nepal's Trusted Recruitment & BPO Partner",
  title: "Hire Smarter. Outsource Efficiently.",
  titleAccent: "Grow Faster.",
  text: "We connect businesses with skilled Nepali talent and deliver cost-effective outsourcing solutions that help organisations grow without the overhead.",
  primaryCta: { label: "Apply Now", href: APPLY_URL },
  secondaryCta: { label: "Browse Jobs", href: `${LIVE_SITE}/job-list/` },
};

/* ---------- Who we are ---------- */

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
  stat: { value: 400, suffix: "+", label: "Companies worldwide" },
  images: [
    { src: "/images/team-meeting.jpg", alt: "Recruitment consultant interviewing a candidate across a desk" },
    { src: "/images/call-centre.jpg", alt: "Customer support agent with a headset working at a computer" },
  ],
};

/* ---------- Two services ---------- */

export const twoServices = {
  title: "One Company.",
  titleAccent: "Two Powerful Services.",
  cards: [
    {
      title: "For Employers & Global Partners",
      text: "Outsource your critical business processes to our highly skilled, culturally adaptive BPO teams, or let our recruitment experts build your dream team in Nepal. Optimize. Scale. Succeed.",
    },
    {
      title: "For Job Seekers & Professionals",
      text: "Connect with top-tier local companies and international remote employers. We don't just find you a job — we pave your career path. Your Next Big Career Move Starts Here.",
    },
  ],
};

/* ---------- How we can help ---------- */

type Sector = { icon: IconName; title: string; roles: string };

export const howWeHelp = {
  eyebrow: "How we can help",
  title: "Services Across Every",
  titleAccent: "Business Function",
  text: "We recruit and outsource across Nepal's most active professional sectors matching the right talent to the right opportunity every time.",
  points: [
    "Verified candidates across 5 core sectors",
    "All roles from entry-level to senior management",
    "Compliance-checked and interview-ready professionals",
  ],
  cta: { label: "Explore All Services", href: `${LIVE_SITE}/our-services/` },
  sectors: [
    { icon: "laptop", title: "IT & Technology", roles: "Developers, engineers, QA, IT support" },
    { icon: "landmark", title: "Banking & Finance", roles: "Accountants, analysts, compliance officers" },
    { icon: "hotel", title: "Hospitality & Tourism", roles: "Hotel managers, F&B staff, front desk" },
    { icon: "hardHat", title: "Construction & Engineering", roles: "Engineers, PMs, quantity surveyors" },
    { icon: "briefcase", title: "General & All Sectors", roles: "Admin, HR, operations, customer service" },
  ] satisfies Sector[],
};

/* ---------- Why build your team ---------- */

type WhyBuildPoint = {
  title: string;
  text: string;
  stat?: { prefix?: string; value: number; suffix: string; label: string };
  words?: { list: string[]; label: string };
};

const whyBuildPoints: WhyBuildPoint[] = [
  {
    title: "A Vibrant, Young Workforce",
    text: "Over 60% of Nepal's population is under 30, offering a highly motivated, tech-savvy, and adaptive talent pool ready to deliver results for your business.",
    stat: { value: 60, suffix: "%+", label: "of Nepal's population is under 30" },
  },
  {
    title: "Significant Cost Savings", // original heading "Various Payment Gateways" didn't match its text
    text: "Achieve up to 50–60% savings on operational and labour costs compared to onshore teams without compromising quality or accountability.",
    stat: { prefix: "50–", value: 60, suffix: "%", label: "savings vs onshore teams" },
  },
  {
    title: "High English Fluency",
    text: "Our professionals are educated in English-medium systems, ensuring seamless and professional communication with global clients and stakeholders.",
    words: { list: ["Fluent.", "Clear.", "Professional."], label: "English-medium educated" },
  },
  {
    title: "Favorable Time Zone Coverage",
    text: "Our ability to run 24/7 shift rotations ensures your business stays online and operational even while you sleep.",
    stat: { value: 24, suffix: "/7", label: "shift coverage" },
  },
];

export const whyBuild = {
  eyebrow: "Why Nepal", // original repeats "Who we are" here
  title: "Why Build Your Team",
  titleAccent: "with E-Jobs Nepal?",
  points: whyBuildPoints,
};

/* ---------- Why choose ---------- */

type WhyChoosePoint = { icon: IconName; title: string; text: string };

export const whyChoose = {
  title: "Why Choose",
  titleAccent: "E-Jobs Nepal",
  points: [
    {
      icon: "dollar",
      title: "Cost-Effective Without Compromise",
      text: "We structure every engagement to maximise cost savings without sacrificing the quality of people, process, or output. You get more for less guaranteed.",
    },
    {
      icon: "users",
      title: "End-to-End Support",
      text: "From the initial brief through to placement and beyond, we manage the entire process. You are never left to navigate a pipeline alone.",
    },
    {
      icon: "globe",
      title: "Local Expertise, Global Standards",
      text: "We know Nepal's talent market in depth and understand what global employers expect — making our placements more accurate from day one.",
    },
  ] satisfies WhyChoosePoint[],
  image: { src: "/images/why-choose.jpg", alt: "Two colleagues working together on a laptop" },
};

/* ---------- Global reach (live time zones) ---------- */

export const globalReach = {
  eyebrow: "Kathmandu ↔ United Kingdom",
  title: "Two Time Zones.",
  titleAccent: "One Working Day.",
  text: "Our clients include businesses across the UK. Here's how your working day lines up with our team in Kathmandu, right now.",
};

/* ---------- Clients ---------- */

export const clients = [
  { name: "AESN", href: "http://aesn.co.uk", logo: "/images/client-aesn.webp", width: 1440, height: 411 },
  { name: "AESN Care", href: "https://aesncare.co.uk/", logo: "/images/client-aesn-care.png", width: 500, height: 500 },
  { name: "MEL", href: "http://mymel.co.uk/", logo: "/images/client-mel.png", width: 790, height: 316 },
  { name: "E-Global", href: "http://e-global.uk/", logo: "/images/client-e-global.png", width: 500, height: 500 },
  { name: "Education Global", href: "http://education-global.com/", logo: "/images/client-education-global.png", width: 933, height: 267 },
];

/* ---------- Call to action ---------- */

export const cta = {
  title: "Ready to Hire, Outsource,",
  titleAccent: "or Find Work?",
  text: "Talk to our team today and find out exactly how Ejobs Nepal can support your business or your career",
  primary: { label: "Post a Job", href: `${LIVE_SITE}/contact/` }, // original linked to "#"
  secondary: { label: "Browse Jobs", href: `${LIVE_SITE}/job-list/` }, // original linked to "#"
};

/* ---------- Insights (local fallback for the WordPress API) ---------- */

export const insights = {
  eyebrow: "Insights",
  title: "Recent News Articles",
  text: "Career guides, salary insights, hiring advice, and industry updates from our team.",
  posts: [
    {
      title: "Xero Certification 2026: A Step-by-Step Guide for Accountants in Nepal (Plus QuickBooks ProAdvisor)",
      excerpt: "Xero certification is free, taken online, and now comes in three levels: Level 1 (associate), Level 2 (professional) and Level 3 (specialist).",
      href: `${LIVE_SITE}/2026/10/26/xero-certification-guide-nepal-2026/`,
      image: "/images/blog-xero.png",
      alt: "Nepali accountant studying for Xero certification on a laptop in a Kathmandu office",
    },
    {
      title: "Accounting Jobs in Nepal 2026: Roles, Qualifications, Skills and How to Get Hired",
      excerpt: "Accounting jobs in Nepal range from accounts assistant and tax assistant roles in local businesses to audit associate posts in CA firms and bookkeeping roles serving clients in the UK.",
      href: `${LIVE_SITE}/2026/10/14/accounting-jobs-in-nepal-2026/`,
      image: "/images/blog-accounting-jobs.png",
      alt: "Young Nepali accountant reconciling accounts on a laptop in a Kathmandu office",
    },
    {
      title: "Outsourced Bookkeeping Services from Nepal: A 2026 Guide for UK Businesses",
      excerpt: "Outsourced bookkeeping services from Nepal give UK accountancy practices and small businesses a dedicated, English-speaking finance team that works in Xero, QuickBooks, Sage and similar cloud software.",
      href: `${LIVE_SITE}/2026/10/07/outsourced-bookkeeping-services-nepal-uk/`,
      image: "/images/blog-bookkeeping.png",
      alt: "UK accountant reviewing outsourced bookkeeping services from Nepal on a laptop",
    },
  ],
};