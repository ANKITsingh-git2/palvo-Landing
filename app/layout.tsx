import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Palvo | AI Wearable Intelligence On-Chain",
  description:
    "The futuristic smart pendant powered by AI and Solana. Your conversations, your intelligence, on-chain.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-cyan-500/30`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
