"use client"

import { motion } from "framer-motion"
import { Brain, ListTodo, Database, Workflow } from "lucide-react"

const agents = [
  {
    icon: Brain,
    title: "Understanding Agent",
    desc: "Analyzes semantic meaning and emotional context in real-time conversations.",
    accent: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: ListTodo,
    title: "Task Planning Agent",
    desc: "Identifies commitments and schedules action items across your digital tools.",
    accent: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: Database,
    title: "Knowledge Agent",
    desc: "Categorizes and indexes information into your private searchable database.",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: Workflow,
    title: "On-Chain Agent",
    desc: "Executes authorized blockchain transactions based on voice triggers.",
    accent: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
]

export function AIIntelligence() {
  return (
    <section id="intelligence" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Multi-Agent Orchestration
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Palvo doesn&apos;t rely on a single model. Our system orchestrates specialized AI agents that collaborate
            to manage your knowledge and execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-[2rem] flex flex-col gap-6 relative group border-white/5"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 ${agent.accent}`}
              >
                <agent.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{agent.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
              </div>

              {/* Decorative background glow */}
              <div
                className={`absolute -bottom-2 -right-2 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${agent.accent.split(" ")[0]}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
