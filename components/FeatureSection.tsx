"use client";
import { BarChart3, Globe, Music, Radio, ShieldCheck, Zap } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "High-Res Audio",
      desc: "Nikmati musik tanpa kompresi kasar. Support FLAC & 320kbps.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Auto Moderation",
      desc: "Jaga server tetap bersih dari spam link dan kata-kata kasar otomatis.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Latency",
      desc: "Respon bot instan di bawah 20ms. Gak pake loading lama.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Dashboard",
      desc: "Kontrol penuh bot lewat browser. Gak perlu hafal command ribet.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Server Analytics",
      desc: "Lihat statistik member, aktivitas chat, dan jam paling ramai.",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "24/7 Radio",
      desc: "Putar lofi hip hop atau radio favorit nonstop tanpa putus.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        {/* Header Tengah */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Semua yang kamu butuhin.
          </h2>
          <p className="text-lg text-slate-600">
            Fitur lengkap untuk bikin server Discord kamu makin hidup dan aman.
          </p>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl hover:bg-white/60 transition-all hover:-translate-y-1 hover:shadow-lg shadow-sm group"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
