export const LIVE_SITE = "https://ejobsnp.com";
export const APPLY_URL = "PASTE_THE_GOOGLE_FORM_LINK_HERE";

export type NavItem = { label: string; href: string; external?: boolean };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: `${LIVE_SITE}/our-services/`, external: true },
  { label: "Blog", href: `${LIVE_SITE}/blog/`, external: true },
  { label: "Contact", href: `${LIVE_SITE}/contact/`, external: true },
];