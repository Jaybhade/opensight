'use client'

import React, { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface LordIconProps {
  src: string
  trigger?: 'hover' | 'loop' | 'loop-on-hover' | 'morph' | 'boomerang'
  colors?: string
  size?: number
  className?: string
}

// Lordicon wrapper component with reduced motion support
export function LordIcon({
  src,
  trigger = 'hover',
  colors,
  size = 96,
  className = ''
}: LordIconProps) {
  const ref = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    // If reduced motion is preferred, set trigger to none
    if (reducedMotion && ref.current) {
      ref.current.setAttribute('trigger', 'none')
    }
  }, [reducedMotion])

  return (
    <lord-icon
      ref={ref as any}
      src={src}
      trigger={reducedMotion ? 'none' : trigger}
      colors={colors}
      style={{ width: size, height: size }}
      className={className}
    />
  )
}

// Free Lordicon icon URLs (from lordicon.com/icons)
export const LORDICONS = {
  target: 'https://cdn.lordicon.com/hrjifpbq.json', // target/aim
  library: 'https://cdn.lordicon.com/nocovwne.json', // books/library
  workflow: 'https://cdn.lordicon.com/gqdnbnwt.json', // workflow/gears
  integrations: 'https://cdn.lordicon.com/fhtaantg.json', // connected nodes
  search: 'https://cdn.lordicon.com/kkvxgpti.json', // search/magnify
  visibility: 'https://cdn.lordicon.com/fmjvulyw.json', // eye/visibility
  analytics: 'https://cdn.lordicon.com/qhviklyi.json', // chart/analytics
  citation: 'https://cdn.lordicon.com/egiwmiit.json', // document/file
  checkmark: 'https://cdn.lordicon.com/oqdmuxru.json', // checkmark/success
  sparkles: 'https://cdn.lordicon.com/gzmvjjvs.json', // sparkles/magic
}
