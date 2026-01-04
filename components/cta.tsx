"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 rounded-full blur-[120px] opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-24 rounded-[4rem] border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8 relative z-10"
          >
            <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center border border-white/20">
              <Sparkles className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-7xl font-bold max-w-4xl leading-[1.1] tracking-tight">
              The Future of Wearable <br /> <span className="text-accent">Intelligence Is On-Chain.</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the waitlist today to be among the first to experience the seamless integration of artificial
              intelligence and decentralized execution.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-10 h-14 text-lg">
                Join the Waitlist
              </Button>
              <Link href="#demo-video">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 hover:bg-white/10 px-10 h-14 text-lg bg-transparent"
                >
                  View Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
