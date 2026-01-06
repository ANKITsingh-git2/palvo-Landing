"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <footer ref={ref} className="relative bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10">
        
        {/* Top Section */}
        <div className="container mx-auto px-6 pt-32 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: easing }}
            className="text-center mb-16"
          >
            <span className="text-white/30 text-[11px] uppercase tracking-[0.4em] font-light">
              The future of wearable intelligence
            </span>
          </motion.div>
        </div>

        {/* Giant PALVO Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: easing }}
          className="relative"
        >
          <Link href="/" className="block group">
            <h2 
              className="text-center font-extralight text-white/[0.08] 
                         group-hover:text-white/[0.15] transition-colors duration-700
                         select-none cursor-pointer"
              style={{
                fontSize: 'clamp(6rem, 28vw, 28rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.85,
              }}
            >
              PALVO
            </h2>
          </Link>

          {/* Gradient overlay on text */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
        </motion.div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 pb-12 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Left - Links */}
            <div className="flex items-center gap-8">
              {["Twitter", "Discord", "GitHub"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-white/25 text-[11px] uppercase tracking-[0.2em] font-light
                             hover:text-white/60 transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Center - Divider (desktop) */}
            <div className="hidden md:block w-px h-4 bg-white/10" />

            {/* Right - Copyright */}
            <span className="text-white/20 text-[11px] uppercase tracking-[0.15em] font-light">
              © 2025 Palvo. All rights reserved.
            </span>
          </motion.div>
        </div>

        {/* Bottom line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.6, ease: easing }}
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </div>
    </footer>
  )
}

export default Footer