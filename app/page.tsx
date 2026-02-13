import CommandsPage from "@/components/Commands";
import ContactPage from "@/components/Contact";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="relative z-10">
        <Header />

        <HeroSection />

        <section id="features" className="scroll-mt-32">
          <FeatureSection />
        </section>

        <section id="commands" className="scroll-mt-32">
          <CommandsPage />
        </section>

        <section id="contact" className="scroll-mt-32">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </main>
  );
}
