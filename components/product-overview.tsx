"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, MessageSquare, Smartphone } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Privacy-First Tracking",
    description:
      "Encrypted conversation logging with explicit consent triggers. Your data remains yours.",
  },
  {
    icon: Zap,
    title: "Instant Structuring",
    description:
      "Converts voice input into searchable, structured notes and action items in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language AI",
    description:
      "Understands context, tone, and intent to provide deep insights from every interaction.",
  },
  {
    icon: Smartphone,
    title: "Seamless Sync",
    description:
      "Full integration with the Palvo mobile app for instant access to your knowledge base.",
  },
];

export function ProductOverview() {
  return (
    <section id="product" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square glass-panel rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/wearable-pendant-close-up.jpg')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/30 rounded-full blur-[80px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Multi-Agent AI Meets{" "}
                <span className="text-primary">Solana Blockchain</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4 font-medium">
                The Palvo pendant isn't just a wearable—it's a{" "}
                <span className="text-accent font-bold">
                  Web3-native AI orchestration system
                </span>
                . Powered by Solana's lightning-fast blockchain and an
                intelligent multi-agent crew, it captures conversations,
                analyzes intent, verifies safety, and executes on-chain
                transactions autonomously.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Experience the convergence of{" "}
                <span className="text-primary font-bold">AI agents</span> and{" "}
                <span className="text-primary font-bold">
                  decentralized finance
                </span>
                —all in a sleek, wearable form factor designed for the future.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-3 p-4 glass-panel rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
