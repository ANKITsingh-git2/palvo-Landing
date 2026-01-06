"use client"

import { useEffect, useState, useRef } from 'react'
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring, 
  useMotionValueEvent,
  AnimatePresence
} from 'framer-motion'

// ============================================
// CONFIGURATION
// ============================================
const TOTAL_FRAMES = 40
const SCROLL_HEIGHT = '900vh' // Slower, more time to read
const END_FRAME = 7

const getFramePath = (index: number) => 
  `/frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`

// Custom frame sequence: 0→39→7
const getFrameIndex = (progress: number): number => {
  if (progress < 0.88) {
    return Math.min(TOTAL_FRAMES - 1, Math.floor((progress / 0.88) * TOTAL_FRAMES))
  } else {
    const reverseProgress = (progress - 0.88) / 0.12
    const startFrame = TOTAL_FRAMES - 1
    const framesToReverse = startFrame - END_FRAME
    return Math.round(startFrame - (reverseProgress * framesToReverse))
  }
}

// ============================================
// SCENE DEFINITIONS - More time per scene
// ============================================
type TextPosition = 'center' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'top-center'

interface Scene {
  id: number
  start: number
  end: number
  title: string
  subtitle: string | null
  textPosition: TextPosition
  highlight?: string
}

const scenes: Scene[] = [
  { 
    id: 1, 
    start: 0, 
    end: 0.10, 
    title: "Meet Palvo.", 
    subtitle: null,
    textPosition: 'center',
  },
  { 
    id: 2, 
    start: 0.10, 
    end: 0.20, 
    title: "An AI pendant.", 
    subtitle: "Ultra-thin. Always with you.",
    textPosition: 'top-center',
  },
  { 
    id: 3, 
    start: 0.20, 
    end: 0.30, 
    title: "Wearable intelligence.", 
    subtitle: "Designed for life.",
    textPosition: 'left',
  },
  { 
    id: 4, 
    start: 0.30, 
    end: 0.40, 
    title: "Press once.", 
    subtitle: "Palvo remembers everything.",
    textPosition: 'right',
  },
  { 
    id: 5, 
    start: 0.40, 
    end: 0.50, 
    title: "The P button.", 
    subtitle: "Your gateway to memory.",
    textPosition: 'top-left',
  },
  { 
    id: 6, 
    start: 0.50, 
    end: 0.60, 
    title: "Crafted precision.", 
    subtitle: "Every curve, intentional.",
    textPosition: 'bottom',
  },
  { 
    id: 7, 
    start: 0.60, 
    end: 0.70, 
    title: "Matte black.", 
    subtitle: "Understated elegance.",
    textPosition: 'top-right',
  },
  { 
    id: 8, 
    start: 0.70, 
    end: 0.80, 
    title: "Intelligence,", 
    subtitle: "quietly inside.",
    textPosition: 'left',
  },
  { 
    id: 9, 
    start: 0.80, 
    end: 0.90, 
    title: "Powered by Solana.", 
    subtitle: "Web3 native.",
    textPosition: 'right',
    highlight: 'Solana',
  },
  { 
    id: 10, 
    start: 0.90, 
    end: 1, 
    title: "Palvo.", 
    subtitle: "Your memory, always on.",
    textPosition: 'center',
  },
]

// ============================================
// POSITION STYLES
// ============================================
const getPositionStyles = (position: TextPosition): string => {
  const map: Record<TextPosition, string> = {
    'center': 'items-center justify-center',
    'top-center': 'items-center justify-start pt-32 md:pt-40',
    'bottom': 'items-center justify-end pb-32 md:pb-40',
    'left': 'items-start justify-center pl-10 md:pl-28 lg:pl-36',
    'right': 'items-end justify-center pr-10 md:pr-28 lg:pr-36',
    'top-left': 'items-start justify-start pt-32 md:pt-40 pl-10 md:pl-28 lg:pl-36',
    'top-right': 'items-end justify-start pt-32 md:pt-40 pr-10 md:pr-28 lg:pr-36',
  }
  return map[position]
}

const getTextAlign = (position: TextPosition): string => {
  if (position.includes('left')) return 'text-left'
  if (position.includes('right')) return 'text-right'
  return 'text-center'
}

// ============================================
// SMOOTHER SPRING CONFIG
// ============================================
const springConfig = {
  stiffness: 35,
  damping: 18,
  restDelta: 0.0001,
  mass: 0.8
}

const frameSpringConfig = {
  stiffness: 60,
  damping: 22,
  restDelta: 0.001
}

// ============================================
// MAIN COMPONENT
// ============================================
export function PalvoHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [activeScene, setActiveScene] = useState(0)
  const [displayFrame, setDisplayFrame] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, springConfig)
  const frameProgress = useSpring(scrollYProgress, frameSpringConfig)

  // Preload images
  useEffect(() => {
    let loaded = 0
    const images: HTMLImageElement[] = []
    
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      img.onload = () => {
        loaded++
        setLoadProgress((loaded / TOTAL_FRAMES) * 100)
        if (loaded === TOTAL_FRAMES) {
          setTimeout(() => setImagesLoaded(true), 300)
        }
      }
      img.onerror = () => {
        loaded++
        setLoadProgress((loaded / TOTAL_FRAMES) * 100)
      }
      img.src = getFramePath(i)
      images.push(img)
    }

    return () => {
      images.forEach(img => { img.onload = null; img.onerror = null })
    }
  }, [])

  useMotionValueEvent(frameProgress, "change", (latest) => {
    const frameIndex = getFrameIndex(latest)
    setCurrentFrame(frameIndex)
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayFrame(currentFrame)
    }, 20)
    return () => clearTimeout(timeout)
  }, [currentFrame])

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const scene = scenes.findIndex(s => latest >= s.start && latest < s.end)
    setActiveScene(scene >= 0 ? scene : scenes.length - 1)
  })

  // Transforms
  const imageScale = useTransform(smoothProgress, [0, 0.06, 0.94, 1], [1.12, 1, 1, 1.06])
  const imageOpacity = useTransform(smoothProgress, [0, 0.03], [0, 1])
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.03], [1, 0])
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '-3%'])
  const overlayOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.35, 0.25, 0.45])

  const renderTitle = (scene: Scene) => {
    if (scene.highlight) {
      const parts = scene.title.split(scene.highlight)
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            {scene.highlight}
          </span>
          {parts[1]}
        </>
      )
    }
    return scene.title
  }

  return (
    <div 
      ref={containerRef} 
      className="relative bg-black" 
      style={{ height: SCROLL_HEIGHT }}
    >
      {/* ===== LOADING SCREEN ===== */}
      <AnimatePresence>
        {!imagesLoaded && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center gap-10">
              <motion.span 
                className="text-white/90 text-3xl md:text-4xl font-extralight tracking-[0.4em]"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                PALVO
              </motion.span>
              
              <div className="w-56 md:w-64 h-[1px] bg-white/10 overflow-hidden rounded-full">
                <motion.div 
                  className="h-full bg-white/70 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <span className="text-white/25 text-xs tracking-[0.3em] font-light">
                {Math.round(loadProgress)}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== STICKY VIEWPORT ===== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ===== FULLSCREEN IMAGE ===== */}
        <motion.div 
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{ 
            opacity: imageOpacity,
            scale: imageScale,
            y: imageY,
          }}
        >
          {imagesLoaded && (
            <motion.img
              key={displayFrame}
              src={getFramePath(displayFrame)}
              alt="Palvo AI Pendant"
              className="w-full h-full object-cover object-center"
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ filter: 'brightness(0.9) contrast(1.08)' }}
              draggable={false}
            />
          )}
          
          {/* Overlays */}
          <motion.div 
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none" />
        </motion.div>

        {/* ===== TEXT OVERLAYS ===== */}
        <AnimatePresence mode="wait">
          {scenes.map((scene, index) => (
            activeScene === index && (
              <motion.div
                key={scene.id}
                className={`absolute inset-0 flex flex-col ${getPositionStyles(scene.textPosition)} pointer-events-none px-6 z-30`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`max-w-2xl ${getTextAlign(scene.textPosition)}`}
                  initial={{ y: 60, opacity: 0, filter: 'blur(8px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.22, 1, 0.36, 1],
                    opacity: { duration: 0.5 }
                  }}
                >
                  <motion.h2 
                    className="text-white font-extralight leading-[1] drop-shadow-2xl"
                    style={{
                      fontSize: 'clamp(2.8rem, 11vw, 6.5rem)',
                      letterSpacing: '-0.04em',
                      textShadow: '0 4px 40px rgba(0,0,0,0.6)',
                    }}
                  >
                    {renderTitle(scene)}
                  </motion.h2>
                  
                  {scene.subtitle && (
                    <motion.p 
                      className="text-white/65 font-light mt-5 md:mt-8 drop-shadow-lg"
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2, 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      style={{
                        fontSize: 'clamp(1.15rem, 3vw, 1.75rem)',
                        letterSpacing: '0.02em',
                        textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                      }}
                    >
                      {scene.subtitle}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* ===== SCROLL INDICATOR ===== */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 z-40"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <motion.span 
            className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-light"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.span>
          <div className="relative w-[1px] h-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent" />
            <motion.div 
              className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/70 to-transparent"
              animate={{ y: ['0%', '250%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
            />
          </div>
        </motion.div>

        {/* ===== PROGRESS DOTS ===== */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
          {scenes.map((_, index) => (
            <motion.div
              key={index}
              className="rounded-full backdrop-blur-sm"
              initial={false}
              animate={{
                width: 4,
                height: activeScene === index ? 28 : 8,
                backgroundColor: activeScene === index 
                  ? 'rgba(255,255,255,0.95)' 
                  : 'rgba(255,255,255,0.2)',
                boxShadow: activeScene === index 
                  ? '0 0 20px rgba(255,255,255,0.3)' 
                  : 'none',
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        {/* ===== FRAME COUNTER ===== */}
        <motion.div 
          className="absolute bottom-12 right-6 md:right-10 text-white/25 text-[11px] font-mono tracking-wider z-40"
          style={{ opacity: imageOpacity }}
        >
          <motion.span 
            className="text-white/45"
            key={displayFrame}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {String(displayFrame + 1).padStart(2, '0')}
          </motion.span>
          <span className="mx-1.5 text-white/15">—</span>
          <span>{TOTAL_FRAMES}</span>
        </motion.div>

        {/* ===== BRAND MARK ===== */}
        <motion.div 
          className="absolute top-10 left-8 md:left-12 z-40"
          style={{ opacity: imageOpacity }}
        >
          <span className="text-white/50 text-sm tracking-[0.35em] font-light">
            PALVO
          </span>
        </motion.div>

        {/* ===== LIVE INDICATOR ===== */}
        <motion.div 
          className="absolute top-10 right-8 md:right-12 z-40 flex items-center gap-3"
          style={{ opacity: imageOpacity }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-light hidden md:block">
            Live
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default PalvoHero