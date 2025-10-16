import { Bot } from "lucide-react";

export default function FeatureSectionAlt() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 text-gray-900 dark:text-white">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-24">
        {/* KOLOM KIRI: DESKRIPSI */}
        {/* `order-last` membuat teks ini di bawah gambar pada layar kecil */}
        <div className="order-last flex flex-col items-start text-left md:order-first">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl lg:text-5xl">
            Kick. Ban. Control.
          </h2>
          <p className="text-justify mt-6 max-w-2xl text-lg text-gray-400">
            Sebagai admin, kamu butuh alat yang cepat, efisien, dan bisa
            diandalkan. Dengan Drew, kamu punya kendali penuh atas server—dari
            mengeluarkan member yang mengganggu, memblokir pelanggar aturan,
            hingga mengatur siapa yang boleh kembali.
          </p>
          <p className="text-justify mt-4 max-w-2xl text-lg text-gray-400">
            Semua perintah dirancang agar kamu bisa bertindak tegas tanpa ribet.
            Kick. Ban. Control. Satu bot, semua solusi moderasi.
          </p>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1322935290016567336&permissions=0&integration_type=0&scope=bot"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
          >
            <Bot size={20} />
            Add to Discord
          </a>
        </div>

        {/* KOLOM KANAN: GAMBAR */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="images/discordmanage.png" // Gambar untuk fitur kedua
            alt="Fitur Kualitas Audio Tinggi"
            className="w-full max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
