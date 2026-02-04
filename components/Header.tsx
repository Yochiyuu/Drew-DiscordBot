"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* Container Kapsul */}
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-3xl w-full">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight flex items-center gap-2"
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
            href="#pricing"
            className="hover:text-indigo-600 transition-colors"
          >
            Premium
          </Link>
          <Link
            href="/docs"
            className="hover:text-indigo-600 transition-colors"
          >
            Docs
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

      {/* Mobile Menu Dropdown (Kalo dibuka) */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-4 md:hidden shadow-xl">
          <Link href="#features" className="text-slate-600 py-2">
            Fitur
          </Link>
          <Link href="/login" className="text-slate-600 py-2">
            Login
          </Link>
          <Link
            href="/invite"
            className="bg-indigo-600 text-white text-center py-3 rounded-xl font-medium"
          >
            Invite Bot
          </Link>
        </div>
      )}
    </motion.header>
  );
}
