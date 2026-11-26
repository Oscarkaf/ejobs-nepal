export const LIVE_SITE = "https://ejobsnp.com";
export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf2-EZfdlEOvDC9noUJ96wmXf7Of4WBNsQG_7YI_GjKhvh1jQ/viewform";

export type NavItem = { label: string; href: string; external?: boolean };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Our Services", href: `${LIVE_SITE}/our-services/`, external: true },
  { label: "Blog", href: `${LIVE_SITE}/blog/`, external: true },
  { label: "Contact", href: `${LIVE_SITE}/contact/`, external: true },
];

export const contact = {
  phone: "+977-14533922",
  phoneHref: "tel:+97714533922",
  email: "info@ejobsnp.com",
  address: "Putalisadak, Kathmandu, Nepal",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Putalisadak%2C%20Kathmandu",
};

export const footerTagline = "Nepal's trusted recruitment & BPO partner — helping businesses hire smarter and operate leaner.";

export const footerGroups: { title: string; links: NavItem[] }[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us/" },
      { label: "Our Services", href: `${LIVE_SITE}/our-services/`, external: true },
      { label: "Contact", href: `${LIVE_SITE}/contact/`, external: true },
      { label: "Blog", href: `${LIVE_SITE}/blog/`, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: `${LIVE_SITE}/privacy-policy/`, external: true },
      { label: "Terms & Conditions", href: `${LIVE_SITE}/termsconditions/`, external: true },
    ],
  },
];