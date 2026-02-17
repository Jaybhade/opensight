'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = '#000000',
  colorTo = '#000000',
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--border-width': borderWidth,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
        '[background:linear-gradient(to_right,var(--color-from),var(--color-to),transparent)_border-box]',
        '[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        '[mask-composite:exclude]',
        className
      )}
    >
      <div
        className={cn(
          'absolute aspect-square w-[calc(var(--size)*1px)] animate-border-beam',
          '[animation-delay:var(--delay)] [background:linear-gradient(to_right,var(--color-from),var(--color-to),transparent)]',
          '[offset-anchor:calc(var(--size)*-0.5px)_calc(var(--size)*-0.5px)]',
          '[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]'
        )}
      />
    </div>
  )
}
