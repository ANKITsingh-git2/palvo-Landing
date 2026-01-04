"use client";

import { motion } from "framer-motion";
import { Lock, EyeOff, KeySquare } from "lucide-react";

export function PrivacySecurity() {
  return (
    <section id="security" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="text-center max-w-3xl mx-auto relative z-10 mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center mx-auto mb-8"
            >
              <Lock className="w-8 h-8 text-accent" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security as a Foundation
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe privacy is a human right. Palvo is built with a
              zero-trust architecture, ensuring your conversations never leave
              your control without permission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              {
                icon: EyeOff,
                title: "User Consent First",
                desc: "Recording only activates when triggered by your unique biometric voice signature.",
              },
              {
                icon: KeySquare,
                title: "End-to-End Encryption",
                desc: "Your data is encrypted with keys only you hold. Even we can't see your conversations.",
              },
              {
                icon: ShieldCheck,
                title: "On-Chain Verification",
                desc: "Authorization for blockchain actions is cryptographically verified via your secure enclave.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-white/10 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ShieldCheck = ({ className }: { className?: string }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
