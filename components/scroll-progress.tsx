"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-cyan-400 origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
