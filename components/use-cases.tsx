"use client";

import { motion } from "framer-motion";
import { Briefcase, Coins, GraduationCap, Construction } from "lucide-react";

const cases = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    desc: "Record meetings, extract action items, and sync them with your calendar automatically.",
    image: "/professional-use-case.jpg",
  },
  {
    icon: Coins,
    title: "Crypto Traders",
    desc: "Execute swaps and monitor on-chain events using natural language commands while on the move.",
    image: "/crypto-trader-use-case.jpg",
  },
  {
    icon: GraduationCap,
    title: "Researchers",
    desc: "Capture fleeting insights and cross-reference them with your entire personal knowledge base.",
    image: "/researcher-use-case.jpg",
  },
  {
    icon: Construction,
    title: "Builders",
    desc: "Plan complex projects and coordinate multiple AI agents to execute your vision.",
    image: "/builder-use-case.jpg",
  },
];

export function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Designed for Every Workflow
            </h2>
            <p className="text-muted-foreground text-lg">
              Palvo adapts to how you think and work. Whether you&apos;re
              managing a team or a portfolio, it&apos;s your silent partner in
              execution.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden glass-panel border-white/5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${useCase.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {useCase.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {useCase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
