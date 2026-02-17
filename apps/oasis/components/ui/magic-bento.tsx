'use client'

import React, { useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MagicBentoProps {
  children: React.ReactNode
  className?: string
}

// ReactBits inspired Magic Bento with spotlight effect - modified for light theme
export function MagicBento({ children, className = '' }: MagicBentoProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const reducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || reducedMotion || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden rounded-2xl border border-border bg-card
        transition-all duration-300
        hover:shadow-xl hover:border-primary/50
        ${className}
      `}
    >
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.1), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  )
}
