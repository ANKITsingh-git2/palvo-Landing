"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Users, Zap, TrendingUp, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Early Adopters",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    value: 1200000,
    suffix: "+",
    label: "Transactions Processed",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    value: 99.9,
    suffix: "%",
    label: "Uptime Reliability",
    color: "from-emerald-500 to-green-500",
    decimals: 1
  },
  {
    icon: Globe,
    value: 45,
    suffix: "+",
    label: "Countries Supported",
    color: "from-orange-500 to-red-500"
  }
]

export function AnimatedStats() {
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
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community of users who are experiencing the future of wearable intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-panel p-8 rounded-3xl border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-full h-full text-white" />
                  </div>
                  
                  <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        decimals={stat.decimals || 0}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
