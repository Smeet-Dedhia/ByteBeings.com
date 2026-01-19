"use client"

import { useState, useCallback } from "react"
import { cn } from "@/lib/utils"

interface PsstProps {
  /** The hidden content to reveal */
  children: React.ReactNode
  /** Custom label text (default: "psst…") */
  label?: string
  /** Position preset or custom styles */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "custom"
  /** Custom positioning via CSS variables or inline styles */
  style?: React.CSSProperties
  /** Additional className for the wrapper */
  className?: string
  /** Use fixed positioning instead of absolute */
  fixed?: boolean
}

export function Psst({
  children,
  label = "psst…",
  position = "custom",
  style,
  className,
  fixed = false,
}: PsstProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle for mobile tap interaction
  const handleTap = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // Close on blur for accessibility
  const handleBlur = useCallback((e: React.FocusEvent) => {
    // Only close if focus is leaving the entire component
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false)
    }
  }, [])

  const positionClasses = {
    "top-right": "psst--top-right",
    "top-left": "psst--top-left",
    "bottom-right": "psst--bottom-right",
    "bottom-left": "psst--bottom-left",
    custom: "",
  }

  return (
    <div
      className={cn(
        "psst",
        fixed ? "psst--fixed" : "psst--absolute",
        positionClasses[position],
        isOpen && "psst--open",
        className
      )}
      style={style}
      onClick={handleTap}
      onBlur={handleBlur}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${label} - click to ${isOpen ? "hide" : "reveal"} hint`}
    >
      <span className="psst__label">{label}</span>
      <div className="psst__content" aria-hidden={!isOpen}>
        {children}
      </div>
    </div>
  )
}
