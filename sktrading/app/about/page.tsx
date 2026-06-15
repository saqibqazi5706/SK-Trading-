import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import WhatWeDo from "../components/about/WhatWeDo";
import WhyChooseUs from "../components/WhyChooseUs";
import ProcessTimeline from "../components/about/ProcessTimeline";
import AboutCTA from "../components/about/AboutCTA";

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
