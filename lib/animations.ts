import { Variants } from "framer-motion"

// Reusable animation variants
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
}

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const cardHover: Variants = {
    rest: {
        scale: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
    }
}

// Custom easing functions
export const easings = {
    smooth: [0.22, 1, 0.36, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275]
} as const

// Scroll reveal hook utility
export const scrollRevealConfig = {
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px"
}
