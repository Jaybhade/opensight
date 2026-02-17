'use client'

import React from 'react'
import { PROOF_POINTS } from '@/lib/constants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ProofStrip() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden">
          <div className={`flex gap-12 ${!reducedMotion ? 'animate-marquee' : ''}`}>
            {[...PROOF_POINTS, ...PROOF_POINTS].map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground/80">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
