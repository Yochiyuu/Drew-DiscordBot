"use client";

import { motion } from "framer-motion";
import { Heart, MoreHorizontal, Music, Play } from "lucide-react";

const tracks = [
  {
    title: "Study Lo-Fi Beats",
    artist: "Chill Hop",
    duration: "3:45",
    active: true,
  },
  {
    title: "Gaming Session",
    artist: "DrewMix",
    duration: "4:20",
    active: false,
  },
  {
    title: "Nightcore Vibes",
    artist: "Anime Hits",
    duration: "2:55",
    active: false,
  },
  {
    title: "Indie Pop Santuy",
    artist: "Coffee Aft",
    duration: "3:10",
    active: false,
  },
  {
    title: "Bass Boosted Trap",
    artist: "Bass Nation",
    duration: "2:45",
    active: false,
  },
  {
    title: "Sleepy Rain",
    artist: "Nature Sounds",
    duration: "5:00",
    active: false,
  },
  {
    title: "Epic Orchestral",
    artist: "Hans Z",
    duration: "4:15",
    active: false,
  },
];

export default function MusicPlayerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-md bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl shadow-indigo-900/20 border border-white/50 z-10"
    >
      {/* Header Playlist */}
      <div className="flex items-end gap-5 mb-6">
        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shrink-0 group relative overflow-hidden">
          <Music className="text-white/50 w-14 h-14 group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play fill="white" className="text-white w-10 h-10" />
          </div>
        </div>

        <div className="mb-1 overflow-hidden">
          <p className="text-xs font-bold uppercase text-slate-400 mb-1">
            Music Playlist
          </p>
          <h2 className="text-2xl font-black text-slate-900 leading-none mb-2 truncate">
            Astons's Mix
          </h2>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <span>Astons</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4 border-b border-slate-100 pb-4">
        <button className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 text-white flex items-center justify-center shadow-lg shadow-green-500/30 transition-transform hover:scale-105">
          <Play fill="currentColor" size={20} className="ml-1" />
        </button>
        <Heart className="text-slate-300 hover:text-red-500 transition-colors cursor-pointer" />
        <MoreHorizontal className="text-slate-300 hover:text-slate-900 transition-colors ml-auto cursor-pointer" />
      </div>

      {/* --- TRACK LIST (SCROLLABLE AREA) --- */}
      <div className="space-y-1 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        {tracks.map((track, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer group ${
              track.active
                ? "bg-slate-50 border border-slate-100"
                : "hover:bg-slate-50 border border-transparent"
            }`}
          >
            <div className="w-6 text-center text-xs font-bold text-slate-400">
              {track.active ? (
                <div className="flex items-end justify-center gap-[2px] h-3">
                  <span className="w-0.5 h-2 bg-green-500 animate-pulse" />
                  <span className="w-0.5 h-3 bg-green-500 animate-pulse delay-75" />
                  <span className="w-0.5 h-1 bg-green-500 animate-pulse delay-150" />
                </div>
              ) : (
                <span className="group-hover:hidden">{i + 1}</span>
              )}
              {!track.active && (
                <Play
                  size={10}
                  className="hidden group-hover:inline text-slate-900 fill-slate-900"
                />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-bold truncate ${
                  track.active ? "text-green-600" : "text-slate-900"
                }`}
              >
                {track.title}
              </p>
              <p className="text-xs text-slate-400 truncate">{track.artist}</p>
            </div>
            <div className="text-xs font-medium text-slate-400">
              {track.duration}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
