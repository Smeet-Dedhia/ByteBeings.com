"use client"

import { motion, type Variants } from "framer-motion"
import * as React from "react"

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
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
