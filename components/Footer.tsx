"use client";

import { Github, MessageSquare, Twitter } from "lucide-react";
import React from "react";

const footerNavItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#FeatureSection" },
  { label: "Commands", href: "#commands" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Discord", href: "#", icon: <MessageSquare size={20} /> },
  { label: "GitHub", href: "#", icon: <Github size={20} /> },
  { label: "Twitter", href: "#", icon: <Twitter size={20} /> },
];

export default function Footer() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0e0e10] text-gray-400">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "#home")}
              className="mb-2"
            >
              <span className="text-2xl font-bold text-white">Astons</span>
            </a>
            <p className="max-w-xs text-sm">
              A next-generation Discord music bot designed for high-fidelity
              audio.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 md:items-end">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
              {footerNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Astons. All Rights Reserved. Developed
            by{" "}
            <a
              href="https://github.com/yochiyuu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              @yochiyuu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
