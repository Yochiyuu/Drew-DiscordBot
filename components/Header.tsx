// file: components/Header.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#FeatureSection" },
  { label: "Commands", href: "#commands" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navItems.forEach((item) => {
      const targetId = item.href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Latar header diubah menjadi biru tua (bg-slate-900) */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/80 backdrop-blur-lg">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-2">
            {/* Warna teks diubah menjadi putih agar terbaca */}
            <span className="text-4xl font-bold tracking-tight text-white">
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
                  '#' + activeSection === item.href
                    ? "text-blue-400" // Warna link aktif dibuat lebih cerah
                    : "text-slate-300 hover:text-white" // Warna link non-aktif & hover disesuaikan
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            {/* Warna ikon menu diubah menjadi putih */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Bagian menu mobile tidak diubah, tetap dengan latar terang */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white/80 backdrop-blur-lg md:hidden">
          <div className="mt-8 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-xl font-medium ${
                  '#' + activeSection === item.href
                    ? "text-blue-500"
                    : "text-gray-700"
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