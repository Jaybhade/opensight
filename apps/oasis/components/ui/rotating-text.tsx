'use client'

import React, { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface RotatingTextProps {
  words: string[]
  interval?: number
  className?: string
}

// ReactBits inspired rotating text component - modified for light theme
export function RotatingText({ words, interval = 3000, className = '' }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || words.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300) // Half of transition time
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval, reducedMotion])

  if (reducedMotion) {
    return <span className={className}>{words[0]}</span>
  }

  return (
    <span className={`inline-block ${className}`}>
      <span
        className={`inline-block transition-all duration-500 ${
          isAnimating
            ? 'opacity-0 -translate-y-4 blur-sm'
            : 'opacity-100 translate-y-0 blur-0'
        }`}
        style={{ transitionProperty: 'opacity, transform, filter' }}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}
