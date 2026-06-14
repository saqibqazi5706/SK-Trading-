import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import FeaturedMachines from "./components/FeaturedMachines";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactCTA from "./components/ContactCTA";

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
