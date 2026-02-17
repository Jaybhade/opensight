'use client'

import React from 'react'
import { UNDERSTANDING } from '@/lib/constants'
import { LordIcon, LORDICONS } from '@/components/ui/lord-icon'

export function Understanding() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {UNDERSTANDING.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {UNDERSTANDING.subtitle}
          </p>
        </div>

        {/* What We Measure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {UNDERSTANDING.measurements.map((item, index) => {
            // Map each measurement to an appropriate icon
            const iconMap = [
              LORDICONS.visibility, // Visibility share
              LORDICONS.analytics,  // Mention frequency
              LORDICONS.sparkles,   // Sentiment & descriptors
              LORDICONS.integrations // Co-mentions
            ]

            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all"
              >
                <div className="mb-3">
                  <LordIcon
                    src={iconMap[index] || LORDICONS.visibility}
                    trigger="hover"
                    colors="primary:#000000"
                    size={48}
                  />
                </div>
                <div className="font-semibold mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* What We Fix */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What we help you fix</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {UNDERSTANDING.fixes.map((fix, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">!</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground/80 mb-1">{fix.problem}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>→</span>
                      <span>{fix.solution}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">How it works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {UNDERSTANDING.howItWorks.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < UNDERSTANDING.howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%+1rem)] w-8 h-0.5 bg-border" />
                )}

                {/* Step */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
