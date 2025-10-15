import CommandsPage from "@/components/Commands";
import ContactPage from "@/components/Contact";
import FeatureSection from "@/components/FeatureSection";
import FeatureSectionAlt from "@/components/FeatureSectionAlt";
import FeatureSectionVertical from "@/components/FeatureSectionVertikal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* Section Home */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Section Feature */}
      <section id="FeatureSection" className="py-12 md:py-12">
        <FeatureSection />
        <FeatureSectionAlt />
        <FeatureSectionVertical />
      </section>

      {/* Section Command */}
      <section id="commands" className="py-16 md:py-24">
        <CommandsPage />
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 md:py-24">
        <ContactPage />
      </section>
      <Footer />
    </>
  );
}
