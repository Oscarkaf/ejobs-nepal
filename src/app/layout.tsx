import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ejobs-nepal-seven.vercel.app"),
  title: {
    default: "E-Jobs Nepal | Recruitment & BPO Partner",
    template: "%s | E-Jobs Nepal",
  },
  description: "A Creative Recruitment and BPO Agency based in Kathmandu, Nepal.",
  openGraph: {
    siteName: "E-Jobs Nepal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jost.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] bg-linear-to-r from-sky via-brand to-accent"
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}