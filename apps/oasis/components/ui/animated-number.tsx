'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedNumberProps {
  value: string
  className?: string
}

// Magic UI inspired number ticker - modified for light theme
export function AnimatedNumber({ value, className = '' }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateValue()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, isVisible, reducedMotion])

  const animateValue = () => {
    // Extract number from string like "300M+" or "58%"
    const match = value.match(/[\d.]+/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(match[0])
    const suffix = value.replace(match[0], '')
    const duration = 2000
    const steps = 60
    const increment = targetNum / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetNum) {
        setDisplayValue(value)
        clearInterval(timer)
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`)
      }
    }, duration / steps)
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
