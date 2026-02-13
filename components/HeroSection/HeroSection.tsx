"use client";
import MusicPlayerCard from "@/components/HeroSection/MusicPlayerCard";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- KIRI: TEKS --- */}
          <div className="w-full lg:w-1/2 text-left relative">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] drop-shadow-sm">
              Dengerin Musik <br />
              {/* UPDATED: Gradient Text menyesuaikan tema baru (#723b3b) */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Tanpa Iklan.
              </span>
            </h1>

            <p className="text-lg text-slate-700 font-medium mb-8 max-w-lg leading-relaxed">
              Stream lagu favorit dari Spotify & YouTube langsung di Discord.
              Audio jernih, bass boost, dan 100% gratis.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Tombol Primary */}
              <Link
                href="/invite"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-900/20 flex items-center gap-2 hover:bg-slate-800"
              >
                Add to Discord <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Tombol Secondary (UPDATED Hover Color) */}
              <Link
                href="#commands"
                className="px-8 py-4 bg-white/50 backdrop-blur-md border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-white hover:text-[#723b3b] hover:border-[#723b3b]/30 transition-all shadow-lg shadow-slate-200/50 flex items-center gap-2"
              >
                Commands <Terminal className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* --- KANAN: MUSIC PLAYER CARD --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <MusicPlayerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
