"use client";

import { motion } from "framer-motion";
import { Wallet } from "lucide-react";

export function SolanaIntegration() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel p-8 md:p-16 rounded-[3rem] border-white/10 overflow-hidden relative">
          {/* Solana Gradient Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 via-purple-500/10 to-transparent opacity-50" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Powered by Solana Blockchain
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Voice Commands to <br />{" "}
                <span className="text-primary">Solana Transactions</span>
              </h2>

              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                Palvo leverages{" "}
                <span className="text-primary font-bold">
                  Solana's high-speed blockchain
                </span>{" "}
                and{" "}
                <span className="text-accent font-bold">
                  multi-agent AI orchestration
                </span>{" "}
                to transform natural speech into verified, executed Web3
                actions. Simply speak your intent—the AI agents handle the rest.
              </p>

              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  How It Works:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-400">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Decoder Agent Listens
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Transcribes and analyzes your voice command
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-emerald-400">
                        2
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Auditor Agent Verifies
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Checks safety, market conditions, and risks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-400">
                        3
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Executor Agent Acts
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Executes transaction on Solana blockchain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative group">
                {/* Visual representation of Solana/Wallet interface */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-purple-600/20 rounded-full blur-[60px]" />
                <motion.div
                  initial={{ rotate: -10, y: 20 }}
                  whileInView={{ rotate: 0, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-panel p-8 rounded-3xl border-white/20 relative z-10 shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Wallet className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-mono">0x71C...3A90</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-[10px] text-emerald-400 font-bold uppercase">
                      Active
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-[10px] text-muted-foreground mb-1">
                        VOICE COMMAND DETECTED
                      </p>
                      <p className="text-sm font-medium">
                        &quot;Buy 5 SOL when price hits $145&quot;
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Status</span>
                        <span className="text-primary">
                          Planning Transaction...
                        </span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "70%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>

                    <button className="w-full py-3 rounded-xl bg-emerald-500 text-emerald-950 font-bold text-sm hover:brightness-110 transition-all">
                      Confirm on Solana
                    </button>
                  </div>
                </motion.div>

                {/* Floating SOL logo or icons */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-10 -right-10 w-24 h-24 glass-panel rounded-2xl flex items-center justify-center border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#14F195] to-[#9945FF] rounded-lg" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
