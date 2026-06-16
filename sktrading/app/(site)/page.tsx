import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Categories from "@/app/components/Categories";
import FeaturedMachines from "@/app/components/FeaturedMachines";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import ContactCTA from "@/app/components/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Categories />
      <FeaturedMachines />
      <WhyChooseUs />
      <ContactCTA />
    </main>
  );
}
