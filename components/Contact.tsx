"use client";

import { Clipboard, ClipboardCheck, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [buttonText, setButtonText] = useState("Copy Username");
  const [buttonIcon, setButtonIcon] = useState(<Clipboard size={16} />);

  const discordUsername = "yochiyuu";

  const handleCopy = () => {
    navigator.clipboard.writeText(discordUsername);
    setButtonText("Copied!");
    setButtonIcon(<ClipboardCheck size={16} className="text-green-600" />);

    setTimeout(() => {
      setButtonText("Copy Username");
      setButtonIcon(<Clipboard size={16} />);
    }, 2000);
  };

  return (
    // Update: Hapus background, biarkan transparan
    <div className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-6 relative z-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-slate-900">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Punya pertanyaan, kritik, atau saran? Kami siap mendengarkan.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          {/* Kartu Direct Message (Transparan / Glass) */}
          <div className="flex w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md p-10 text-center shadow-lg shadow-indigo-100/50">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Direct Message Me
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-md">
              Untuk pertanyaan pribadi, kolaborasi, atau urusan bisnis.
              Tambahkan saya di Discord.
            </p>
            <div className="mt-6 w-full max-w-sm">
              <div className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 text-center font-mono text-lg text-slate-800 mb-3 select-all">
                {discordUsername}
              </div>
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                {buttonIcon}
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
