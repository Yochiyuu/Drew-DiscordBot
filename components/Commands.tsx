// file: app/commands/page.tsx

import React from 'react';
import { Music, Shield, MessageSquare, HelpCircle } from 'lucide-react';

// Tipe data untuk setiap perintah agar kode lebih rapi
interface Command {
  name: string;
  args: string;
  description: string;
}

// Tipe data untuk setiap kategori perintah
interface CommandCategory {
  title: string;
  icon: React.ReactNode;
  commands: Command[];
}

// Semua data perintah kita definisikan di sini
const commandData: CommandCategory[] = [
  {
    title: "Music Commands",
    icon: <Music className="h-6 w-6" />,
    commands: [
      { name: "join", args: "", description: "Bot masuk ke voice channel kamu." },
      { name: "leave", args: "", description: "Bot keluar dari voice channel." },
      { name: "p", args: "<judul / link>", description: "Memutar lagu dari YouTube." },
      { name: "pause", args: "", description: "Menjeda lagu yang sedang diputar." },
      { name: "resume", args: "", description: "Melanjutkan lagu yang dijeda." },
      { name: "stop", args: "", description: "Menghentikan lagu saat ini." },
      { name: "loop", args: "", description: "Mengaktifkan / menonaktifkan loop lagu." },
    ],
  },
  {
    title: "Admin Commands",
    icon: <Shield className="h-6 w-6" />,
    commands: [
      { name: "kick", args: "@user [alasan]", description: "Kick member dari server." },
      { name: "ban", args: "@user [alasan]", description: "Ban member dari server." },
      { name: "unban", args: "nama#0000", description: "Unban member yang sudah di-ban." },
    ],
  },
  {
    title: "Utility Commands",
    icon: <HelpCircle className="h-6 w-6" />,
    commands: [
      { name: "message", args: "@user", description: "Kirim pesan private ke user." },
      { name: "help", args: "", description: "Menampilkan daftar perintah ini." },
    ],
  },
];

// Komponen Card untuk setiap perintah
const CommandCard = ({ name, args, description }: Command) => (
  <div className="group rounded-lg border border-gray-200/10 bg-gray-900/50 p-5 transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/60">
    <div className="font-mono text-base tracking-tight">
      <span className="text-gray-500">+</span>
      <span className="text-white group-hover:text-blue-400">{name}</span>
      {args && <span className="text-cyan-400"> {args}</span>}
    </div>
    <p className="mt-2 text-sm text-gray-400">{description}</p>
  </div>
);

// Halaman utama untuk menampilkan semua perintah
export default function CommandsPage() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Header Halaman */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-white">
            Daftar Perintah Bot
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Gunakan prefix <code className="rounded-md bg-gray-700 px-2 py-1 font-mono text-base text-white">+</code> sebelum setiap perintah.
            Contoh: <code className="rounded-md bg-gray-700 px-2 py-1 font-mono text-base text-white">+p luther sza</code>
          </p>
        </div>

        {/* Daftar Kategori dan Perintah */}
        <div className="mt-16 space-y-12">
          {commandData.map((category) => (
            <section key={category.title}>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">{category.icon}</span>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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