import type { Metadata } from "next";
import { Differentiators } from "@/components/sections/about/Differentiators";
import { JobsCta } from "@/components/sections/about/JobsCta";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { OurStory } from "@/components/sections/about/OurStory";
import { Values } from "@/components/sections/about/Values";
import { WhatWeDo } from "@/components/sections/about/WhatWeDo";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PageHero } from "@/components/sections/PageHero";
import { aboutHero } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutHero.text,
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutHero} />
      <OurStory />
      <MissionVision />
      <Values />
      <WhatWeDo />
      <Differentiators />
      <JobsCta />
      <ClientLogos />
    </>
  );
}