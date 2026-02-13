"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FastForward,
  Heart,
  MoreHorizontal,
  Pause,
  Play,
  Rewind,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// --- DATA LAGU ---
const tracks = [
  {
    title: "Passionfruit",
    artist: "Drake",
    image: "/images/Passionfruit.jpeg",
    src: "/audio/Passionfruit.mp3",
  },
  {
    title: "Who Knows",
    artist: "Daniel Caesar",
    image: "/images/WhoKnows.png",
    src: "/audio/WhoKnows.mp3",
  },
  {
    title: "Love Me Not (feat. Rex Orange County)",
    artist: "Ravyn Lenae, Rex Orange County",
    image: "/images/LoveMeNot.jpeg",
    src: "/audio/LoveMeNot.mp3",
  },
];

// Helper Format Waktu (MM:SS)
const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

// Komponen Visualizer (Warna Default Indigo)
const AudioVisualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-center justify-center gap-1.5 h-6">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full bg-indigo-500" // Warna statis
          animate={{
            height: isPlaying ? [6, 16, 6] : 4,
            opacity: isPlaying ? 1 : 0.3,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function MusicPlayerCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = tracks[currentTrackIndex];

  // --- 1. LOGIKA PLAYBACK SAAT TRACK BERUBAH ---
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Playback interrupted:", error);
        }
      }
    };

    if (isPlaying) {
      playAudio();
    }
  }, [currentTrackIndex]);

  // --- 2. LOGIKA AUTOPLAY & USER INTERACTION ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Coba autoplay awal
    const attemptInitialPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Autoplay awal diblokir, menunggu klik user.");
      }
    };
    attemptInitialPlay();

    // Fallback: Play saat interaksi pertama
    const handleUserInteraction = () => {
      if (audio.paused && !isPlaying) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch((e) => console.error("Gagal play:", e));
      }
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Sync State Play/Pause
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying && audioRef.current.paused) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else if (!isPlaying && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle Update Waktu
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
      if (current >= total) handleNext();
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress((newTime / audioRef.current.duration) * 100);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-sm p-7 rounded-[2.5rem] backdrop-blur-3xl z-10 flex flex-col gap-5 border border-white/20"
      style={{
        // Background Default: Putih transparan + Gradient halus Indigo
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)", // Shadow hitam standar
      }}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        crossOrigin="anonymous"
      />

      {/* --- HEADER --- */}
      <div className="flex justify-between items-center px-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
          <AudioVisualizer isPlaying={isPlaying} />
          <span>NOW PLAYING</span>
        </div>
        <button className="text-slate-400 hover:text-white transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* --- ALBUM ART --- */}
      <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTrackIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full relative"
          >
            <Image
              src={currentTrack.image}
              alt={currentTrack.title}
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradient hitam halus */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </motion.div>
        </AnimatePresence>

        {/* Play Overlay */}
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-xl">
            {isPlaying ? (
              <Pause fill="white" />
            ) : (
              <Play fill="white" className="ml-1" />
            )}
          </div>
        </div>
      </div>

      {/* --- INFO LAGU --- */}
      <div className="px-1">
        <div className="flex justify-between items-end mb-4">
          <div className="min-w-0 pr-4">
            <motion.h2
              key={currentTrack.title}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // Warna Teks Judul: Putih
              className="text-2xl font-black text-white leading-tight truncate drop-shadow-md"
            >
              {currentTrack.title}
            </motion.h2>
            <motion.p
              key={currentTrack.artist}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              // Warna Teks Artis: Slate Terang
              className="text-sm font-bold truncate text-slate-300"
            >
              {currentTrack.artist}
            </motion.p>
          </div>
          <button className="text-slate-400 hover:text-rose-500 transition-colors pb-1 hover:scale-110 active:scale-95">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        {/* --- PROGRESS BAR --- */}
        <div
          className="mb-6 group cursor-pointer"
          onClick={handleProgressClick}
        >
          <div className="w-full h-2 bg-white/10 rounded-full mb-2 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${progress}%`,
                // Warna Progress Bar: Gradient Indigo-Violet Default
                background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
              }}
              layoutId="progressBar"
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-slate-400 font-mono">
            <span>{formatTime(currentTime)}</span>
            <span className="bg-white/10 px-2 py-0.5 rounded-md text-slate-300">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* --- CONTROLS --- */}
        <div className="flex items-center justify-between">
          <button className="text-slate-400 hover:text-white transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-5">
            <button
              onClick={handlePrev}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all"
            >
              <Rewind fill="currentColor" className="w-6 h-6" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all active:scale-95 bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30"
            >
              {isPlaying ? (
                <Pause fill="currentColor" className="w-5 h-5" />
              ) : (
                <Play fill="currentColor" className="w-5 h-5 ml-1" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="text-slate-300 hover:text-white hover:scale-110 transition-all"
            >
              <FastForward fill="currentColor" className="w-6 h-6" />
            </button>
          </div>

          <div className="w-5" />
        </div>
      </div>
    </motion.div>
  );
}
