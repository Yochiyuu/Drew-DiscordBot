"use client";

import { Check, Copy, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const discordUsername = "yochiyuu";

  const handleCopy = () => {
    navigator.clipboard.writeText(discordUsername);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Container utama transparan
    <div className="w-full py-20 relative">
      <div className="container mx-auto max-w-4xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl drop-shadow-md mb-4">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Punya pertanyaan, kritik, atau saran? Kami siap mendengarkan.
          </p>
        </div>

        {/* Card Area */}
        <div className="flex justify-center">
          {/* Glass Card Container */}
          <div className="w-full max-w-md flex flex-col items-center rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-8 md:p-10 text-center shadow-2xl transition-transform hover:scale-[1.01] duration-300">
            {/* Icon dengan Glow Effect */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <MessageSquare className="h-9 w-9" />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">
              Direct Message
            </h2>

            <p className="text-slate-400 mb-8 leading-relaxed">
              Untuk pertanyaan pribadi, kolaborasi, atau urusan bisnis. Silakan
              hubungi saya via Discord.
            </p>

            {/* Username & Action */}
            <div className="w-full space-y-4">
              {/* Username Box */}
              <div className="group relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/50 p-4 text-center">
                <p className="font-mono text-xl font-medium text-white tracking-wider select-all">
                  {discordUsername}
                </p>
                {/* Efek kilau halus saat hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300 shadow-lg ${
                  copied
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500 hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                }`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Berhasil Disalin!" : "Salin Username"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
