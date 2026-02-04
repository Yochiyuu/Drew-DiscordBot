import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DrewBot - Music & Moderation",
  description: "Bot Discord terbaik karya anak bangsa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${inter.className} bg-white text-slate-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
