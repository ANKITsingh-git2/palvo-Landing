"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"

import Link from "next/link"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Intelligence."
  const [showCursor, setShowCursor] = useState(true)
  
  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 })
  
  const pendantRef = useRef<HTMLDivElement>(null)

  // Typewriter effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pendantRef.current) return
    const rect = pendantRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Background with animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-purple-500/20 to-accent/20 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-cyan-400/20 border-2 border-primary/40 w-fit shadow-lg shadow-primary/20"
            >
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-sm md:text-base font-bold text-white uppercase tracking-wide">
                World's First Web3 Multi-Agent Wearable
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-pretty">
              AI Pendent Meets <br />
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 inline-flex items-baseline"
                style={{
                  textShadow: '0 0 40px rgba(34, 211, 238, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
                  filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.6))'
                }}
              >
                {text}
                <span className={`inline-block w-1 h-[0.8em] bg-accent ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </span>
              <br />
              On Solana.
            </h1>

            <p className="text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed font-medium">
              The world's first <span className="text-primary font-bold">Solana-powered</span> wearable pendant with <span className="text-accent font-bold">multi-agent AI orchestration</span>. 
              Listen, analyze, verify, and execute blockchain transactions—all through natural conversation.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="#demo-video">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 group shadow-lg shadow-primary/30"
                >
                  Watch Demo
                  <Play className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary/50 hover:bg-primary/10 px-8 group bg-transparent text-white font-semibold"
              >
                Explore Vision
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Pre-Launch Innovation</p>
                  <p className="text-xs text-muted-foreground">Pioneering Web3 Wearables</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={pendantRef}
          >
            {/* Visual Placeholder for Pendant with 3D effect */}
            <motion.div 
              className="relative z-10 w-full aspect-square max-w-[500px] mx-auto group perspective-1000"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[2rem] blur-[100px] group-hover:blur-[120px] transition-all duration-500" />
              <div className="relative w-full h-full rounded-[2rem] flex items-center justify-center overflow-hidden border-2 border-white/30 shadow-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <div className="absolute inset-0 bg-[url('/futuristic-smart-pendant-jewelry.jpg')] bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Floating UI Elements with enhanced animations */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-4 rounded-2xl border-2 border-white/30 shadow-lg bg-black/60 backdrop-blur-md"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </div>
                    <span className="text-xs font-mono uppercase">Recording active</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10 p-4 rounded-2xl border-2 border-white/30 shadow-lg bg-black/60 backdrop-blur-md"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <p className="text-xs font-mono text-primary leading-tight font-bold">
                    SOLANA TRANSITION: <br />
                    BUY 2.4 SOL
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced orbiting particles with varied sizes */}
            {[0, 72, 144, 216, 288].map((degree, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: i % 2 === 0 ? "8px" : "6px",
                  height: i % 2 === 0 ? "8px" : "6px",
                  background: i % 2 === 0 
                    ? "linear-gradient(135deg, var(--color-primary), var(--color-accent))"
                    : "var(--color-accent)",
                  transformOrigin: `${Math.cos((degree * Math.PI) / 180) * 220}px ${Math.sin((degree * Math.PI) / 180) * 220}px`
                }}
                animate={{
                  rotate: [degree, degree + 360],
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  rotate: { duration: 10 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY }
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  )
}
