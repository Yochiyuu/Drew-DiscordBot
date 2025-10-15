// file: components/FeatureSection.tsx

import { Bot } from "lucide-react"; // Kita hanya butuh ikon Bot sekarang

export default function FeatureSection() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 text-white">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-24">
        {/* Kolom Kiri: Gambar Fitur */}
        <div className="relative flex justify-center md:justify-start">
          <img
            // Ganti path ini jika Anda menamai file atau folder secara berbeda
            src="images/discordmusic.png"
            alt="Advanced Custom Commands Panel"
            className="w-full max-w-2xl rounded-xl"
          />
        </div>

        {/* Kolom Kanan: Teks Deskripsi */}
        <div className="flex flex-col items-start text-left">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl lg:text-5xl">
            Experience Your Music.
          </h2>
          <p className="text-justify mt-6 max-w-2xl text-lg text-gray-400">
            Musik adalah jantung dari setiap momen, dan Drew hadir untuk
            memastikan kamu nggak pernah kehabisan beat. Dari lagu santai buat
            nemenin kerja, sampai playlist party buat rame-rame bareng teman,
            Drew siap muter semuanya langsung dari Discord. Nggak ribet, nggak
            delay—cukup panggil, dan biarkan musiknya jalan.
          </p>
          <p className="text-justify mt-4 max-w-2xl text-lg text-gray-400">
            Bot lain mungkin terasa rumit di awal. Drew hadir untuk bikin
            semuanya jadi mudah—cukup panggil, dan biarkan musiknya jalan.
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1322935290016567336&permissions=0&integration_type=0&scope=bot" // Ganti dengan link invite bot Anda
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          >
            <Bot size={20} />
            Add to Discord
          </a>
        </div>
      </div>

    </section>
    
    
  );
}
