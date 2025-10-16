// file: components/HeroSection.tsx

import Link from 'next/link';
import { Plus, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
  <section className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-4rem)]">
      {/* Efek gradasi radial di latar belakang untuk menambah kedalaman */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto max-w-4xl text-center px-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100">
          Musik. Kualitas.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            Tanpa Gangguan.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
          Drew adalah bot musik Discord generasi baru yang dirancang untuk memberikan pengalaman audio berkualitas tinggi tanpa jeda. Fokus pada musik, lupakan yang lainnya.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://discord.com/oauth2/authorize?client_id=1322935290016567336&permissions=0&integration_type=0&scope=bot" // Ganti dengan link invite bot Anda
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 sm:w-auto"
          >
            <Plus size={18} />
            Invite
          </Link>
          <Link
            href="#commands"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 sm:w-auto"
          >
            <Terminal size={18} />
            Command
          </Link>
        </div>
      </div>
    </section>
  );
}