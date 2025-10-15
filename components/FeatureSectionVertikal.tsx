// file: components/FeatureSectionVertical.tsx

import { Rocket } from "lucide-react"; // Mengganti ikon sebagai contoh
import Image from "next/image";

export default function FeatureSectionVertical() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 text-white">
      {/* Container utama dibuat lebih ramping (max-w-4xl) agar teks lebih mudah dibaca */}
      <div className="container mx-auto max-w-4xl px-6">
        {/* Menggunakan flexbox untuk menyusun elemen secara vertikal (flex-col) dan menengahkan (items-center) */}
        <div className="flex flex-col items-center gap-12">
          {/* Bagian Atas: Gambar */}
          <div className="relative flex justify-center">
            {/* Gunakan komponen Image dari Next.js untuk optimasi */}
            <Image
              // Pastikan gambar ini ada di folder public/images/
              src="/images/drew.png"
              alt="Fitur Kualitas Audio Tinggi"
              width={400} // Ganti dengan lebar asli gambar Anda
              height={200} // Ganti dengan tinggi asli gambar Anda
              className="w-full max-w-3xl h-auto rounded-xl shadow-2xl shadow-blue-500/10"
            />
          </div>

          {/* Bagian Bawah: Teks Deskripsi */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl lg:text-5xl">
              Utility Commands
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              Dari pesan personal hingga daftar perintah lengkap, bagian ini
              menyederhanakan interaksi kamu dengan bot. Utility Commands
              dirancang untuk kecepatan dan kenyamanan, cocok buat admin maupun
              member biasa.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-400">
              Nikmati pengalaman menggunakan yang superior tanpa kompromi,
              seolah-olah kamu sedang mengujinya.
            </p>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1322935290016567336&permissions=0&integration_type=0&scope=bot" // Ganti dengan link invite bot Anda
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105"
            >
              <Rocket size={20} />
              Add to Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
