"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Rocket, Zap, Globe, Shield } from "lucide-react"

const highlights = [
  {
    icon: Rocket,
    title: "World's First",
    description: "Web3 Multi-Agent Wearable",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Solana-Powered",
    description: "Lightning-Fast Blockchain",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "AI Orchestration",
    description: "3-Agent Intelligent Crew",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Shield,
    title: "Voice-to-Chain",
    description: "Hands-Free Web3 Execution",
    color: "from-orange-500 to-red-500"
  }
]

export function PreLaunchHighlights() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Pioneering the <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300"
              style={{
                textShadow: '0 0 30px rgba(34, 211, 238, 0.4)',
                filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))'
              }}
            >
              Future
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The convergence of AI agents, Solana blockchain, and wearable technology—launching the next era of Web3 interaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-panel p-8 rounded-3xl border-white/20 hover:border-primary/40 transition-all duration-300 h-full">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <highlight.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{highlight.title}</h3>
                  <p className="text-foreground/80 text-sm font-medium">{highlight.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pre-launch CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-panel px-6 py-4 rounded-full border-white/10">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <span className="text-sm font-medium">
              <span className="text-primary font-bold">Pre-Launch Phase</span> • Be among the first to experience Web3 wearables
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
