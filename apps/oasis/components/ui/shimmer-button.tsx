'use client'

import React from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

// Magic UI inspired shimmer button - modified for light theme only
export function ShimmerButton({ children, className = '', ...props }: ShimmerButtonProps) {
  const reducedMotion = useReducedMotion()

  return (
    <button
      className={`
        relative inline-flex items-center justify-center
        px-8 py-4 rounded-lg font-semibold
        bg-primary text-primary-foreground
        overflow-hidden
        hover:bg-primary/90
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        transition-colors
        ${className}
      `}
      {...props}
    >
      {!reducedMotion && (
        <div
          className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: 'shimmer 3s infinite',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
