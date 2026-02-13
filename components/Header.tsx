"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi khusus untuk Logo agar scroll ke paling atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  // List menu agar kodingan lebih rapi & tidak berulang
  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Commands", href: "/#commands" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Container Kapsul */}
      <nav className="rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-3xl w-full bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex items-center gap-2 text-white"
          onClick={scrollToTop}
        >
          <span className="text-indigo-500">Astons</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href="/invite"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95"
          >
            Invite Bot
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-4 right-4 rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-2xl bg-[#0f172a]/95 backdrop-blur-xl border border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 py-3 px-4 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="h-px bg-white/10 my-2" />

          <Link
            href="/login"
            className="text-slate-300 py-3 px-4 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/invite"
            className="bg-indigo-600 text-white text-center py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20 mt-2"
            onClick={() => setIsOpen(false)}
          >
            Invite Bot
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
