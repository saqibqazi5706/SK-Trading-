import type { Metadata } from "next";
import AboutHero from "@/app/components/about/AboutHero";
import CompanyStory from "@/app/components/about/CompanyStory";
import WhatWeDo from "@/app/components/about/WhatWeDo";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ProcessTimeline from "@/app/components/about/ProcessTimeline";
import AboutCTA from "@/app/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | SK Trading",
  description:
    "Learn about SK Trading — your trusted partner for quality used Plastic Injection Moulding and Aluminum Die Casting Machines imported from China and Japan.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyStory />
      <WhatWeDo />
      <WhyChooseUs />
      <ProcessTimeline />
      <AboutCTA />
    </main>
  );
}
