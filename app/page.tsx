import CommandsPage from "@/components/Commands";
import ContactPage from "@/components/Contact";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Layer Depan: Konten Utama */}
      <div className="relative z-10">
        <Header />

        {/* Hero Section (Paling atas, tidak butuh ID khusus) */}
        <HeroSection />

        {/* Features Section */}
        {/* scroll-mt-32 memberi jarak agar tidak tertutup header saat discroll */}
        <section id="features" className="scroll-mt-32">
          <FeatureSection />
        </section>

        {/* Commands Section */}
        <section id="commands" className="scroll-mt-32">
          <CommandsPage />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </main>
  );
}
