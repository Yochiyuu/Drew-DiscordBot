// file: app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drew Discord Bot",
  description: "Drew Discord Bot",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body> sekarang bersih dan tidak punya className */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Semua class styling sekarang ada di <main> */}
          <main
            className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
          >
            <div className="min-h-screen flex flex-col">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}