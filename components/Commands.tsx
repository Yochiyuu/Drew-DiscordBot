"use client";
import { HelpCircle, Music, Shield } from "lucide-react";
import React from "react";

interface Command {
  name: string;
  args: string;
  description: string;
}

interface CommandCategory {
  title: string;
  icon: React.ReactNode;
  commands: Command[];
}

const commandData: CommandCategory[] = [
  {
    title: "Music Commands",
    icon: <Music className="h-6 w-6" />,
    commands: [
      {
        name: "join",
        args: "",
        description: "Bot masuk ke voice channel kamu.",
      },
      {
        name: "leave",
        args: "",
        description: "Bot keluar dari voice channel.",
      },
      {
        name: "p",
        args: "<judul / link>",
        description: "Memutar lagu dari YouTube.",
      },
      {
        name: "pause",
        args: "",
        description: "Menjeda lagu yang sedang diputar.",
      },
      {
        name: "resume",
        args: "",
        description: "Melanjutkan lagu yang dijeda.",
      },
      { name: "stop", args: "", description: "Menghentikan lagu saat ini." },
      {
        name: "loop",
        args: "",
        description: "Mengaktifkan / menonaktifkan loop lagu.",
      },
    ],
  },
  {
    title: "Admin Commands",
    icon: <Shield className="h-6 w-6" />,
    commands: [
      {
        name: "kick",
        args: "@user [alasan]",
        description: "Kick member dari server.",
      },
      {
        name: "ban",
        args: "@user [alasan]",
        description: "Ban member dari server.",
      },
      {
        name: "unban",
        args: "nama#0000",
        description: "Unban member yang sudah di-ban.",
      },
    ],
  },
  {
    title: "Utility Commands",
    icon: <HelpCircle className="h-6 w-6" />,
    commands: [
      {
        name: "message",
        args: "@user",
        description: "Kirim pesan private ke user.",
      },
      {
        name: "help",
        args: "",
        description: "Menampilkan daftar perintah ini.",
      },
    ],
  },
];

const CommandCard = ({ name, args, description }: Command) => (
  // Update: Background transparan (white/50) + backdrop blur
  <div className="group rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm p-5 transition-all duration-300 hover:border-indigo-300 hover:bg-white/80 shadow-sm hover:shadow-md">
    <div className="font-mono text-base tracking-tight">
      <span className="text-indigo-400 font-bold">+</span>
      <span className="text-slate-900 group-hover:text-indigo-600 font-bold">
        {name}
      </span>
      {args && <span className="text-slate-500 text-sm"> {args}</span>}
    </div>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </div>
);

export default function CommandsPage() {
  return (
    // Update: Hapus background solid, biarkan transparan
    <div className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-6 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-slate-900">
            Daftar Perintah Bot
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Gunakan prefix{" "}
            <code className="rounded-md bg-indigo-100 px-2 py-1 font-mono text-base text-indigo-700">
              +
            </code>{" "}
            sebelum setiap perintah.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {commandData.map((category) => (
            <section key={category.title}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-indigo-600 p-2 bg-indigo-50 rounded-lg backdrop-blur-sm">
                  {category.icon}
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {category.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.commands.map((cmd) => (
                  <CommandCard key={cmd.name} {...cmd} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
