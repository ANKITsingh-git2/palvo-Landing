"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

const agents = [
  {
    number: "01",
    name: "Decoder",
    role: "Transcript Analysis",
    description: "Real-time speech processing. Context-aware intent recognition. Your words, understood.",
    capabilities: ["Speech-to-text", "Intent recognition", "Multi-language", "Summarization"],
    image: "/app-screenshot-2.png" // Voice recording screenshot
  },
  {
    number: "02",
    name: "Auditor",
    role: "Safety Verification",
    description: "Your security guardian. Analyzes conditions, verifies safety, assesses risk before execution.",
    capabilities: ["Market analysis", "Contract verification", "Risk scoring", "Fraud prevention"],
    image: "/app-screenshot-3.png" // Wallet/settings screenshot
  },
  {
    number: "03",
    name: "Executor",
    role: "On-Chain Action",
    description: "Lightning-fast execution. Token swaps, transfers, DeFi—all verified, all hands-free.",
    capabilities: ["Sub-second tx", "Multi-sig", "Gas optimization", "Auto strategies"],
    image: "/app-screenshot-1.png" // Trade execution screenshot
  }
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function MultiAgentCrew() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeAgent, setActiveAgent] = useState(0)
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"])
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])
  const phoneScale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])

  return (
    <section ref={containerRef} className="relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Header */}
      <div className="relative z-10 pt-32 md:pt-48 pb-20">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easing }}
          className="text-center px-6"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-light mb-6 block"
          >
            Multi-Agent Architecture
          </motion.span>
          
          <h2 
            className="text-white font-extralight leading-[1.1]"
            style={{
              fontSize: 'clamp(2.2rem, 7vw, 5rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 0 80px rgba(255,255,255,0.1)',
            }}
          >
            Three agents.
            <br />
            <span className="text-white/50">One seamless action.</span>
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Section */}
      <div className="relative min-h-[300vh]">
        
        {/* Sticky Phone - Now with dynamic image */}
        <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-20">
          <motion.div
            style={{ y: phoneY, rotate: phoneRotate, scale: phoneScale }}
            className="relative"
          >
            <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[3rem] overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl z-40" />
              
              {/* Dynamic Screenshot */}
              <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAgent}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: easing }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={agents[activeAgent].image}
                      alt={`${agents[activeAgent].name} Agent Interface`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
            </div>

            {/* Phone glow */}
            <div className="absolute -inset-20 bg-white/[0.03] rounded-full blur-[80px] -z-10" />

            {/* Active agent indicator */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {agents.map((_, index) => (
                <div
                  key={index}
                  className={`
                    h-1 rounded-full transition-all duration-500
                    ${index === activeAgent ? 'w-6 bg-white/50' : 'w-2 bg-white/15'}
                  `}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="absolute inset-0 z-10">
          <div className="h-full flex flex-col justify-around py-[15vh]">
            {agents.map((agent, index) => (
              <AgentCard 
                key={agent.number} 
                agent={agent} 
                index={index}
                side={index % 2 === 0 ? 'left' : 'right'}
                onInView={() => setActiveAgent(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 pb-32 md:pb-48">
        <BottomStats />
      </div>
    </section>
  )
}

function AgentCard({ 
  agent, 
  index, 
  side,
  onInView
}: { 
  agent: typeof agents[0]
  index: number
  side: 'left' | 'right'
  onInView: () => void
}) {
  const [cardRef, cardInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
    rootMargin: "-10% 0px -10% 0px",
    onChange: (inView) => {
      if (inView) onInView()
    }
  })

  const isLeft = side === 'left'

  return (
    <div 
      ref={cardRef}
      className={`
        flex px-6 md:px-12 lg:px-20
        ${isLeft ? 'justify-start' : 'justify-end'}
      `}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={{ 
          opacity: cardInView ? 1 : 0.15,
          x: cardInView ? 0 : (isLeft ? -30 : 30),
          scale: cardInView ? 1 : 0.95,
          filter: cardInView ? 'blur(0px)' : 'blur(4px)'
        }}
        transition={{ duration: 0.7, ease: easing }}
        className={`
          relative max-w-md lg:max-w-lg p-8 md:p-10 rounded-2xl 
          border border-white/[0.08] bg-black/70 backdrop-blur-md
          ${isLeft ? 'text-left' : 'text-right'}
        `}
      >
        <span className="text-white/[0.12] text-5xl md:text-6xl font-extralight block mb-4">
          {agent.number}
        </span>

        <div className="mb-5">
          <h3 
            className="text-white font-light mb-2"
            style={{ 
              fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', 
              letterSpacing: '-0.02em',
              textShadow: '0 0 40px rgba(255,255,255,0.08)',
            }}
          >
            {agent.name}
            <span className="text-white/40">.</span>
          </h3>
          <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-light">
            {agent.role}
          </span>
        </div>

        <p 
          className="text-white/60 font-light leading-relaxed mb-6"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)' }}
        >
          {agent.description}
        </p>

        <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          {agent.capabilities.map((cap, i) => (
            <span
              key={i}
              className="text-white/30 text-[10px] uppercase tracking-[0.12em] font-light 
                         px-3 py-1.5 rounded-full border border-white/[0.08]
                         hover:text-white/50 hover:border-white/15 transition-all duration-300"
            >
              {cap}
            </span>
          ))}
        </div>

        <motion.div 
          className={`
            absolute bottom-0 h-px bg-gradient-to-r from-white/30 to-transparent
            ${isLeft ? 'left-8 right-1/3' : 'right-8 left-1/3 bg-gradient-to-l'}
          `}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: cardInView ? 1 : 0 }}
          transition={{ duration: 0.6, ease: easing }}
          style={{ transformOrigin: isLeft ? 'left' : 'right' }}
        />
      </motion.div>
    </div>
  )
}

function BottomStats() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const stats = [
    { value: "<1s", label: "Execution" },
    { value: "3-layer", label: "Verification" },
    { value: "100%", label: "Hands-free" },
  ]

  return (
    <div ref={ref} className="px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-x-16 gap-y-8 md:gap-x-24 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: easing }}
            className="text-center"
          >
            <div 
              className="text-white font-extralight mb-2"
              style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
                letterSpacing: '-0.02em',
                textShadow: '0 0 30px rgba(255,255,255,0.1)',
              }}
            >
              {stat.value}
            </div>
            <div className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-light">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.5, ease: easing }}
        className="mx-auto w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
    </div>
  )
}

export default MultiAgentCrew