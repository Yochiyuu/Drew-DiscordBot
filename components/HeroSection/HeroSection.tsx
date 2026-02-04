"use client";
import MusicPlayerCard from "@/components/HeroSection/MusicPlayerCard"; // Import komponen baru
import Grainient from "@/components/react-bits/Grainient";
import { ArrowRight, Disc } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#f8f7f7"
          color2="#5227FF"
          color3="#bdb2bd"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={4.5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-white/40 z-10 pointer-events-none" />
      </div>

      {/* KONTEN UTAMA */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* --- KIRI: TEKS --- */}
          <div className="w-full lg:w-1/2 text-left relative">

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] drop-shadow-sm">
              Dengerin Musik <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700">
                Tanpa Iklan.
              </span>
            </h1>

            <p className="text-lg text-slate-700 font-medium mb-8 max-w-lg leading-relaxed drop-shadow-sm">
              Stream lagu favorit dari Spotify & YouTube langsung di Discord.
              Audio jernih, bass boost, dan 100% gratis.
            </p>

            <div className="flex gap-4">
              <Link
                href="/invite"
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-900/20 flex items-center gap-2"
              >
                Add to Discord <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* --- KANAN: MUSIC PLAYER CARD --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* Panggil Komponen Disini */}
            <MusicPlayerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
