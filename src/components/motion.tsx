"use client"

import { motion, useInView, type Variants } from "framer-motion"
import * as React from "react"
import { useRef, useEffect, useState } from "react"

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

interface MotionSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function MotionSection({
  children,
  delay = 0,
  className,
}: MotionSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Fallback: if element hasn't animated after 1 second, force it visible
  // This handles rapid navigation edge cases
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [hasAnimated])

  // Track when animation completes
  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView || hasAnimated ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: MotionSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Fallback: if element hasn't animated after 1 second, force it visible
  // This handles rapid navigation edge cases
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [hasAnimated])

  // Track when animation completes
  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || hasAnimated ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
