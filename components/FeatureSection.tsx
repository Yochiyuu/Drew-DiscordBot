"use client";
import { Code, Globe, Music, ShieldAlert, Zap } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="py-24 relative bg-slate-950/50">
      <div className="container mx-auto px-6">
        {/* Header Section Kiri */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Fitur Kelas Atas.
            </h2>
            <p className="text-slate-400 text-lg">
              Dibangun dengan teknologi terbaru buat performa maksimal.
            </p>
          </div>
          <button className="px-6 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium">
            Lihat Semua Fitur
          </button>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Besar (Music) */}
          <div className="md:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Music size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
                <Music size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                High-Res Music Player
              </h3>
              <p className="text-slate-400 max-w-md">
                Support Spotify, YouTube, SoundCloud dengan kualitas suara
                lossless. Dilengkapi filter audio bass boost & nightcore.
              </p>
            </div>
          </div>

          {/* Card 2: Kecil (Moderasi) */}
          <div className="md:col-span-1 glass p-8 rounded-3xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6">
              <ShieldAlert size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Auto Moderation
            </h3>
            <p className="text-slate-400 text-sm">
              Hapus link spam & bad words secara instan sebelum member lain
              liat.
            </p>
          </div>

          {/* Card 3: Kecil (Uptime) */}
          <div className="md:col-span-1 glass p-8 rounded-3xl hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">99.9% Uptime</h3>
            <p className="text-slate-400 text-sm">
              Server online 24/7. Gak ada cerita bot mati pas lagi asik karaoke.
            </p>
          </div>

          {/* Card 4: Besar (Dashboard) */}
          <div className="md:col-span-2 glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={200} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Web Dashboard
                </h3>
                <p className="text-slate-400">
                  Atur prefix, welcome message, dan role auto-assign langsung
                  dari browser. UI intuitif, gak perlu ketik command panjang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
