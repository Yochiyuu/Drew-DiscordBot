// file: app/contact/page.tsx

"use client";

import React, { useState } from 'react';
import { Clipboard, ClipboardCheck, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [buttonText, setButtonText] = useState("Copy Username");
  const [buttonIcon, setButtonIcon] = useState(<Clipboard size={16} />);

  const discordUsername = "yochiyuu";

  const handleCopy = () => {
    navigator.clipboard.writeText(discordUsername);
    setButtonText("Copied!");
    setButtonIcon(<ClipboardCheck size={16} className="text-green-400" />);

    setTimeout(() => {
      setButtonText("Copy Username");
      setButtonIcon(<Clipboard size={16} />);
    }, 2000);
  };

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header Halaman */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl text-white">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Punya pertanyaan, kritik, atau saran? Kami siap mendengarkan. Silakan hubungi saya langsung di Discord.
          </p>
        </div>

        {/* Konten Utama (Flexbox) */}
        <div className="mt-16 flex justify-center">
          
          {/* Kartu Direct Message */}
          <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900/50 p-15 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/20 text-purple-400">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-white">Direct Message Me</h2>
            <p className="mt-2 text-base text-gray-400">
              Untuk pertanyaan pribadi, kolaborasi, atau urusan bisnis. Tambahkan saya di Discord.
            </p>
            <div className="mt-6 w-full">
              <div className="w-full rounded-md bg-gray-800 p-3 text-center font-mono text-lg text-white">
                {discordUsername}
              </div>
              <button
                onClick={handleCopy}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
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