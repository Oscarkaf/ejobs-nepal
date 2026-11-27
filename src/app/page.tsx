import { ClientLogos } from "@/components/sections/ClientLogos";
import { CtaBand } from "@/components/sections/CtaBand";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { Hero } from "@/components/sections/Hero";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { LatestPosts } from "@/components/sections/LatestPosts";
import { TwoServices } from "@/components/sections/TwoServices";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhyBuild } from "@/components/sections/WhyBuild";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TwoServices />
      <HowWeHelp />
      <WhyBuild />
      <WhyChoose />
      <GlobalReach />
      <ClientLogos />
      <CtaBand />
      <LatestPosts />
    </>
  );
}