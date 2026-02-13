"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FastForward,
  Heart,
  MoreHorizontal,
  Music,
  Pause,
  Play,
  Rewind,
  Volume2,
} from "lucide-react";
import Image from "next/image"; // Pakai next/image biar lebih optimal
import { useEffect, useState } from "react";

// Data Lagu (Hardcoded Image)
// Pastikan gambar-gambar ini ada di folder public/images/ kamu
const tracks = [
  {
    title: "Study Lo-Fi Beats",
    artist: "Chill Hop",
    duration: "3:45",
    image: "/images/drew.png", // Menggunakan gambar maskot kamu
    color: "from-[#723b3b] to-[#645464]",
  },
  {
    title: "Midnight Drive",
    artist: "Synthwave Mix",
    duration: "4:20",
    image: "/images/discordmusic.png", // Menggunakan aset lain yang ada
    color: "from-indigo-600 to-purple-800",
  },
  {
    title: "Coffee Shop Vibes",
    artist: "Jazz Hop",
    duration: "2:55",
    image: "/images/drew.png", // Bisa diulang atau ganti gambar lain
    color: "from-amber-700 to-orange-900",
  },
  {
    title: "Rainy Mood",
    artist: "Nature Sounds",
    duration: "5:00",
    image: "/images/discordmanage.png", // Menggunakan aset lain
    color: "from-slate-700 to-slate-900",
  },
];

export default function MusicPlayerCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Fungsi Next Track
  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
    setProgress(0);
  };

  // Fungsi Prev Track
  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
    setProgress(0);
  };

  // Simulasi Progress Bar
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex]);

  const currentTrack = tracks[currentTrackIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-sm bg-white/60 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl shadow-slate-900/10 border border-white/40 z-10 flex flex-col gap-6"
    >
      {/* --- ALBUM ART (STATIC DARI ASSETS) --- */}
      <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTrackIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full relative"
          >
            {/* Gambar Utama */}
            {currentTrack.image ? (
              <Image
                src={currentTrack.image}
                alt={currentTrack.title}
                fill
                className="object-cover"
                priority // Load prioritas biar ga kedip
              />
            ) : (
              // Fallback kalau gambar ga ada/error (pake gradient)
              <div
                className={`w-full h-full bg-gradient-to-br ${currentTrack.color} flex items-center justify-center`}
              >
                <Music className="w-24 h-24 text-white/30" />
              </div>
            )}

            {/* Overlay Gradient Tipis biar estetik */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-60" />
          </motion.div>
        </AnimatePresence>

        {/* Tombol Play Overlay (Hanya visual saat hover) */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px] cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <Pause fill="white" className="w-12 h-12 text-white" />
          ) : (
            <Play fill="white" className="w-12 h-12 text-white" />
          )}
        </div>
      </div>

      {/* --- CONTROLS & INFO --- */}
      <div className="flex flex-col gap-2">
        {/* Title & Artist */}
        <div className="flex justify-between items-start mb-2">
          <div className="min-w-0 pr-4">
            <motion.h2
              key={currentTrack.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-2xl font-black text-slate-900 leading-tight truncate"
            >
              {currentTrack.title}
            </motion.h2>
            <motion.p
              key={currentTrack.artist}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base text-slate-500 font-medium truncate"
            >
              {currentTrack.artist}
            </motion.p>
          </div>
          <button className="text-slate-400 hover:text-rose-500 transition-colors p-2 hover:bg-rose-50 rounded-full shrink-0">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div
          className="mb-4 group cursor-pointer"
          onClick={() => setProgress(Math.random() * 100)}
        >
          <div className="w-full h-1.5 bg-slate-200/60 rounded-full mb-2 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-slate-900 rounded-full"
              style={{ width: `${progress}%` }}
              layoutId="progressBar"
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-slate-400 font-mono">
            <span>
              {Math.floor(((progress / 100) * 240) / 60)}:
              {String(Math.floor(((progress / 100) * 240) % 60)).padStart(
                2,
                "0",
              )}
            </span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <button className="text-slate-400 hover:text-slate-600 transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="text-slate-800 hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95"
            >
              <Rewind fill="currentColor" className="w-7 h-7" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 hover:bg-slate-800 transition-all active:scale-95"
            >
              {isPlaying ? (
                <Pause fill="currentColor" className="w-6 h-6" />
              ) : (
                <Play fill="currentColor" className="w-6 h-6 ml-1" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="text-slate-800 hover:text-indigo-600 transition-colors hover:scale-110 active:scale-95"
            >
              <FastForward fill="currentColor" className="w-7 h-7" />
            </button>
          </div>

          <button className="text-slate-400 hover:text-slate-900 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
