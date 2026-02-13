"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk scroll halus (opsional jika html { scroll-behavior: smooth } sudah ada di css)
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Tutup menu mobile jika diklik
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Container Kapsul */}
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-3xl w-full bg-white/70 backdrop-blur-md border border-white/20 shadow-sm">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>
            <span className="text-indigo-600">Astons</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link
            href="#features"
            className="hover:text-indigo-600 transition-colors"
          >
            Fitur
          </Link>
          <Link
            href="#commands"
            className="hover:text-indigo-600 transition-colors"
          >
            Commands
          </Link>
          <Link
            href="#contact"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Login
          </Link>
          <Link
            href="/invite"
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Invite Bot
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-4 md:hidden shadow-xl bg-white/90 backdrop-blur-md">
          <Link
            href="#features"
            className="text-slate-600 py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Fitur
          </Link>
          <Link
            href="#commands"
            className="text-slate-600 py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Commands
          </Link>
          <Link
            href="#contact"
            className="text-slate-600 py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="text-slate-600 py-2 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/invite"
            className="bg-indigo-600 text-white text-center py-3 rounded-xl font-medium"
            onClick={() => setIsOpen(false)}
          >
            Invite Bot
          </Link>
        </div>
      )}
    </motion.header>
  );
}
