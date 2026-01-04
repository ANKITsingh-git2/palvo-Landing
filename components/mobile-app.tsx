"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "/app-screenshot-1.png",
    alt: "Trade Details - Solana Transaction Executed",
    title: "Executor Agent in Action",
    description: "Watch the AI execute a verified Solana transaction. The agent bought 0.1000 SOL on Testnet with 90% confidence after analyzing your voice command and confirming safety checks.",
    badge: "Transaction Complete"
  },
  {
    src: "/app-screenshot-2.png",
    alt: "Voice Recording - Blockchain Storage",
    title: "Real-Time Transcription",
    description: "Your conversations are transcribed in real-time with 90% accuracy. Every word is stored on the blockchain via IPFS, creating an immutable record of your knowledge.",
    badge: "Recording Active"
  },
  {
    src: "/app-screenshot-3.png",
    alt: "Trading Agent - Intent Detection",
    title: "Decoder Agent Listening",
    description: "The AI agent detects trading intent from your natural speech. It scans for Solana trading commands and displays your transaction history, ready to execute on your command.",
    badge: "Intent Detected"
  },
  {
    src: "/app-screenshot-4.png",
    alt: "Settings - Solana Wallet Connected",
    title: "Solana Trading Agent Setup",
    description: "Your Solana wallet is securely connected with customizable trading limits. Set max trade amounts, enable auto-trade, and monitor your activity with a visual heatmap of your usage.",
    badge: "Wallet Connected"
  },
  {
    src: "/app-screenshot-5.png",
    alt: "Notes - AI Summary Generation",
    title: "AI Knowledge Synthesis",
    description: "The AI automatically generates summaries and extracts key points from your conversations. Every transcript becomes searchable, organized knowledge in your personal database.",
    badge: "Summary Generated"
  }
];

export function MobileAppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-32 relative bg-background/50 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Your Second Brain, <br />{" "}
            <span className="text-accent">Perfectly Synced.</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground font-medium">
            The Palvo mobile application gives you a dashboard for your life.
            Search through months of conversations, review AI insights, and
            execute on-chain actions with a tap.
          </p>
        </div>

        {/* Interactive Feature Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side: Swipeable Screenshot Carousel */}
          <div className="relative w-full max-w-[400px] mx-auto lg:mx-0">
            {/* Main Screenshot Display */}
            <div className="relative aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-black border-[8px] border-zinc-900 shadow-2xl z-20">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-zinc-900 rounded-b-2xl z-40" />
              
              {/* Screenshot with Animation */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Navigation Overlay */}
              <div className="absolute inset-0 z-30 flex items-center justify-between px-4 pointer-events-none">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-all pointer-events-auto"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-all pointer-events-auto"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] blur-3xl opacity-50 -z-10 animate-pulse-slow" />
          </div>

          {/* Right Side: Dynamic Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {screenshots[currentIndex].badge}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                {screenshots[currentIndex].title}
              </h3>

              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {screenshots[currentIndex].description}
              </p>

              {/* Progress/Step Dots */}
              <div className="flex gap-3 mt-4">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-12"
                        : "bg-white/10 hover:bg-white/20 w-4"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Action Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-6 glass-panel rounded-2xl border-white/10 bg-white/5"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center border border-accent/20">
                  <BrainCircuit className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">AI Orchestration Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-agent crew is currently processing {currentIndex + 3} background tasks based on your speech activity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BrainCircuit = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.96.46 2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5Z" />
    <path d="M11 11.5v6" />
    <path d="M13 11.5v6" />
    <path d="M9 14.5h6" />
  </svg>
);
