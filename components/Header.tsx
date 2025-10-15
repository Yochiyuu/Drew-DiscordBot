// file: components/Header.tsx

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToogle";

// Ubah href menjadi anchor link (#) untuk navigasi satu halaman
const navItems = [
  { label: "Home", href: "#home" }, // Menunjuk ke bagian atas
  { label: "Features", href: "#FeatureSection" }, // Menunjuk ke bagian atas
  { label: "Commands", href: "#commands" }, // Menunjuk ke section dengan id="commands"
  { label: "Contact", href: "#contact" }, // Menunjuk ke section dengan id="contact"
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Fungsi untuk menangani smooth scroll
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Tutup menu mobile setelah klik
  };

  // Efek untuk mendeteksi bagian mana yang sedang di-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // Opsi agar deteksi lebih akurat di tengah layar
    );

    navItems.forEach((item) => {
      const targetId = item.href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  // Mencegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 dark:border-gray-800/80 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-lg">
        <nav className="container mx-auto flex h-23 max-w-7xl items-center justify-between px-6">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-2"
          >
            <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Drew
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  // Logika baru untuk active link
                  "#" + activeSection === item.href
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-lg md:hidden">
          <div className="mt-8 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-xl font-medium ${
                  "#" + activeSection === item.href
                    ? "text-blue-500"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
