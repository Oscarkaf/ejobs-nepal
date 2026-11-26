import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
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
  title: "E-Jobs Nepal | Recruitment & BPO Partner",
  description: "A Creative Recruitment and BPO Agency based in Kathmandu, Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${jost.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}