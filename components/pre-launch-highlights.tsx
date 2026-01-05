"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = ["AI-Powered", "Solana Native", "Voice-First", "Always On"]

export function PreLaunchHighlights() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="relative bg-black py-32 md:py-48 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 
            className="text-white font-extralight leading-[1.1]"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            The future of
            <br />
            <span className="text-white/40">wearable intelligence</span>
          </h2>
        </motion.div>

        {/* Minimal feature list */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:gap-x-20"
        >
          {features.map((feature, index) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="text-white/30 text-sm md:text-base tracking-[0.2em] uppercase font-light"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Single line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-32 mx-auto w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  )
}