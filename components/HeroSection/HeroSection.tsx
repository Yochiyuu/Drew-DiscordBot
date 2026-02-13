"use client";
import MusicPlayerCard from "@/components/HeroSection/MusicPlayerCard";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-left relative">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
              Listen to Music <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Ad-Free.
              </span>
            </h1>

            <p className="text-lg text-slate-400 font-medium mb-8 max-w-lg leading-relaxed">
              Stream your favorite tracks from Spotify & YouTube directly in
              Discord. Crystal clear audio, bass boost, and 100% free.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://discord.com/oauth2/authorize?client_id=1322935290016567336"
                className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-indigo-500/20 flex items-center gap-2 hover:bg-indigo-500"
              >
                Add to Discord <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#commands"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/10 text-slate-200 rounded-full font-bold hover:bg-white/20 hover:text-white transition-all shadow-lg flex items-center gap-2"
              >
                Commands <Terminal className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <MusicPlayerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
