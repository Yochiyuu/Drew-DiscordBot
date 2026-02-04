import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-700">
      <Header />
      <HeroSection />
    </main>
  );
}
