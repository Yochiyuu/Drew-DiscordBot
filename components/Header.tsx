// file: components/Header.tsx

import React from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#FeatureSection" },
  { label: "Commands", href: "#commands" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-black/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="#home" className="flex items-center gap-2">
          <span className="text-4xl font-bold tracking-tight text-white">
            Drew
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}