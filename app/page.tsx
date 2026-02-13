import CommandsPage from "@/components/Commands";
import ContactPage from "@/components/Contact";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Grainient from "@/components/react-bits/Grainient";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 selection:bg-indigo-100 selection:text-indigo-700 relative">
      {/* GLOBAL ANIMATED BACKGROUND (Fixed Position) */}
      {/* Ini akan diam di belakang saat user scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#723b3b"
          color2="#cfc7f0"
          color3="#645464"
          timeSpeed={0.25}
          warpStrength={1}
          warpFrequency={4.5}
          warpSpeed={2}
          warpAmplitude={50}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          className="w-full h-full"
        />
        {/* Overlay putih tipis agar teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-white/40 mix-blend-overlay" />
      </div>

      {/* KONTEN UTAMA */}
      <div className="relative z-10">
        <Header />

        <section id="home">
          <HeroSection />
        </section>

        <section id="features">
          <FeatureSection />
        </section>

        <section id="commands">
          <CommandsPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </main>
  );
}
