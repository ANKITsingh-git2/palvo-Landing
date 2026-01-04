"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"

const agents = [
  {
    number: "01",
    name: "Decoder Agent",
    role: "Transcript Analysis & Summarization",
    icon: Brain,
    color: "from-blue-400 to-cyan-300",
    description: "Listens to your conversations and voice commands in real-time. Uses advanced NLP to decode intent, extract key information, and summarize complex discussions into actionable insights.",
    capabilities: [
      "Real-time speech-to-text transcription",
      "Context-aware intent recognition",
      "Multi-language support",
      "Intelligent summarization"
    ]
  },
  {
    number: "02",
    name: "Auditor Agent",
    role: "Safety Verification & Risk Assessment",
    icon: ShieldCheck,
    color: "from-emerald-400 to-green-300",
    description: "Acts as your personal security guardian. Analyzes market conditions, verifies transaction safety, and assesses risks before any Solana blockchain action is executed.",
    capabilities: [
      "Real-time market analysis",
      "Smart contract verification",
      "Risk scoring algorithms",
      "Fraud detection & prevention"
    ]
  },
  {
    number: "03",
    name: "Executor Agent",
    role: "On-Chain Transaction Execution",
    icon: Zap,
    color: "from-purple-400 to-pink-300",
    description: "The action-taker of the crew. Once verified by the Auditor, it executes Solana transactions at lightning speed—token swaps, transfers, or DeFi interactions—all hands-free.",
    capabilities: [
      "Sub-second Solana transactions",
      "Multi-signature support",
      "Gas optimization",
      "Automated DeFi strategies"
    ]
  }
]

export function MultiAgentCrew() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Multi-Agent AI Orchestration</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The AI Agent crew <br /> Behind Every Action
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 max-w-7xl mx-auto relative">
          {/* Left Column: Phone Mockup (Sticky) */}
          <div className="hidden lg:block">
            <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                {/* Phone Frame */}
                <div className="relative w-[340px] aspect-[9/19.5] rounded-[2.5rem] overflow-hidden bg-black border-[8px] border-zinc-900 shadow-2xl z-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-zinc-900 rounded-b-2xl z-40" />
                  <Image
                    src="/agent-files-screenshot.png"
                    alt="Multi-Agent File Management"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Animated Glow */}
                <div className="absolute -inset-12 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse-slow -z-10" />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolling Cards */}
          <div className="relative">
            <div className="flex flex-col gap-24 py-24">
              {agents.map((agent, index) => (
                 <AgentCard key={index} agent={agent} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Action Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-primary font-bold text-2xl mb-1">Sub-second</div>
            <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Execution</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-accent font-bold text-2xl mb-1">Multi-layer</div>
            <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Verification</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-emerald-500 font-bold text-2xl mb-1">99.9%</div>
            <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">Automated</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AgentCard({ agent, index }: { agent: any; index: number }) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
    rootMargin: "-20% 0px -20% 0px"
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, y: 20 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.2, y: 20, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <div className={`p-8 rounded-3xl border transition-all duration-500 shadow-xl overflow-hidden ${inView ? 'border-primary/40 bg-white/10' : 'border-white/5 bg-white/5 blur-[1px]'}`}>
        <div className="absolute top-4 right-6 text-5xl font-bold text-white/5 group-hover:text-primary/10 transition-colors duration-500">
          {agent.number}
        </div>

        <div className="flex items-start gap-6">
          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} p-3.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <agent.icon className="w-full h-full text-white" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{agent.name}</h3>
            <p className={`text-sm font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}>
              {agent.role}
            </p>
            
            <p className="text-foreground/80 leading-relaxed mb-6 font-medium">
              {agent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {agent.capabilities.map((cap: string, i: number) => (
                <div key={i} className="flex items-center gap-2 group/item">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.color} group-hover/item:scale-150 transition-transform`} />
                  <span className="text-sm text-foreground/90 font-medium">{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
