"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function MobileAppShowcase() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section ref={ref} className="relative bg-black py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easing }}
          className="text-center mb-20 md:mb-28"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-light mb-6 block"
          >
            Mobile Experience
          </motion.span>
          
          <h2 
            className="text-white font-extralight leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.2rem, 7vw, 5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Your second brain.
            <br />
            <span className="text-white/40">Always in sync.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/40 font-light max-w-lg mx-auto"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            Search through months of conversations. Review AI insights. 
            Execute on-chain actions with a tap.
          </motion.p>
        </motion.div>

        {/* Phone Gallery */}
        <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12">
          
          {/* Left Phone - Blurred (Intent detection) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: easing }}
            className="hidden md:block relative"
          >
            <div 
              className="relative w-[180px] lg:w-[220px] aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-neutral-950 border border-white/5"
              style={{ filter: 'blur(2px)' }}
            >
              <Image
                src="/app-screenshot-3.png"
                alt="Intent detection"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          {/* Center Phone - Focused (Agent files - original) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: easing }}
            className="relative z-10"
          >
            <div className="relative w-[280px] md:w-[300px] lg:w-[320px] aspect-[9/19.5] rounded-[3rem] overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-40" />
              
              <Image
                src="/agent-files-screenshot.png"
                alt="Palvo Agent Files"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
            </div>

            {/* Glow */}
            <div className="absolute -inset-16 bg-white/[0.03] rounded-full blur-[80px] -z-10" />
          </motion.div>

          {/* Right Phone - Blurred (AI summary) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: easing }}
            className="hidden md:block relative"
          >
            <div 
              className="relative w-[180px] lg:w-[220px] aspect-[9/19.5] rounded-[2rem] overflow-hidden bg-neutral-950 border border-white/5"
              style={{ filter: 'blur(2px)' }}
            >
              <Image
                src="/app-screenshot-5.png"
                alt="AI summary"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>
        </div>

        {/* Feature Labels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: easing }}
          className="mt-16 md:mt-24 flex flex-wrap justify-center gap-x-12 gap-y-4 md:gap-x-20"
        >
          {["Voice-first", "Real-time sync", "On-chain ready"].map((feature, index) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1, ease: easing }}
              className="text-white/30 text-[11px] uppercase tracking-[0.2em] font-light"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9, ease: easing }}
          className="mt-24 md:mt-32 mx-auto w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  )
}

export default MobileAppShowcase