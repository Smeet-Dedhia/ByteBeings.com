"use client"

import { useRef, useState, useCallback, ReactNode } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation (max 8 degrees for subtle effect)
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setTransform("")
  }, [])

  return (
    <div className={`tilt-card-container ${className}`}>
      {/* Static golden glow behind the card - peeks out when card tilts */}
      <div
        className="tilt-card-glow"
        style={{
          opacity: isHovering ? 1 : 0,
          transition: isHovering
            ? "opacity 0.3s ease-out"
            : "opacity 0.5s ease-out",
        }}
      />
      <div
        ref={cardRef}
        className="tilt-card-wrapper"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transform,
          transition: isHovering 
            ? "transform 0.1s ease-out" 
            : "transform 0.4s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  )
}
