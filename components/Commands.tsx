"use client";

import { Music, Shield, Zap } from "lucide-react";
import React, { useState } from "react";

interface Command {
  name: string;
  args?: string;
  description: string;
}

interface CommandCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  commands: Command[];
}

const commandData: CommandCategory[] = [
  {
    id: "music",
    title: "Music",
    icon: <Music className="h-4 w-4" />,
    commands: [
      { name: "join", description: "Joins your current voice channel." },
      { name: "leave", description: "Disconnects from the voice channel." },
      {
        name: "play",
        args: "<title/link>",
        description: "Streams audio from YouTube or Spotify.",
      },
      { name: "pause", description: "Pauses the current track." },
      { name: "resume", description: "Resumes playback." },
    ],
  },
  {
    id: "admin",
    title: "Moderation",
    icon: <Shield className="h-4 w-4" />,
    commands: [
      {
        name: "kick",
        args: "@user",
        description: "Removes a user from the server.",
      },
      { name: "ban", args: "@user", description: "Permanently bans a user." },
      {
        name: "clear",
        args: "<amount>",
        description: "Bulk deletes messages.",
      },
      {
        name: "mute",
        args: "@user",
        description: "Temporarily mutes a member.",
      },
    ],
  },
  {
    id: "utility",
    title: "Utility",
    icon: <Zap className="h-4 w-4" />,
    commands: [
      { name: "ping", description: "Checks bot latency and response time." },
      { name: "info", description: "Displays server statistics." },
      {
        name: "help",
        args: "[cmd]",
        description: "Shows detailed command usage.",
      },
    ],
  },
];

export default function CommandsPage() {
  const [activeTab, setActiveTab] = useState("music");
  const activeCategory = commandData.find((c) => c.id === activeTab);

  return (
    <div className="w-full py-20 relative">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md mb-3">
            Command List
          </h1>
          <p className="text-slate-200/80 text-lg">
            Use prefix{" "}
            <span className="bg-white/20 px-2 py-0.5 rounded font-mono font-bold text-white backdrop-blur-sm">
              +
            </span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {commandData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border ${
                activeTab === cat.id
                  ? "bg-indigo-600/90 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  : "bg-black/40 border-white/10 text-slate-300 hover:bg-black/60 hover:text-white"
              }`}
            >
              {cat.icon}
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeCategory?.commands.map((cmd, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md hover:bg-black/60 hover:border-indigo-500/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-lg font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {cmd.name}
                </span>
                {cmd.args && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                    {cmd.args}
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                {cmd.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
