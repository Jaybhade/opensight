'use client'

import React, { useState } from 'react'
import { USE_CASES } from '@/lib/constants'
import { ChevronDown } from 'lucide-react'
import { LordIcon, LORDICONS } from '@/components/ui/lord-icon'

export function UseCases() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50" id="use-cases">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for every team
          </h2>
          <p className="text-lg text-muted-foreground">
            From brand to product, see how teams use OpenSight to shape AI visibility
          </p>
        </div>

        {/* Use Cases Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {USE_CASES.map((useCase, index) => {
            // Map each use case to an appropriate icon
            const iconMap = [
              LORDICONS.sparkles,     // Brand Marketing
              LORDICONS.citation,     // SEO & Content
              LORDICONS.visibility,   // PR & Communications
              LORDICONS.target        // Product Marketing
            ]

            return (
              <div
                key={index}
                className="border border-border rounded-xl bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center gap-4 text-left hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <LordIcon
                      src={iconMap[index] || LORDICONS.sparkles}
                      trigger="hover"
                      colors="primary:#A52502"
                      size={40}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

              {openIndex === index && (
                <div className="px-6 pb-6 space-y-6">
                  {/* Before/After */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm font-semibold text-red-600 mb-3">Before</div>
                      <ul className="space-y-2">
                        {useCase.before.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-red-600 mt-0.5">✗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-600 mb-3">After</div>
                      <ul className="space-y-2">
                        {useCase.after.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <div className="text-sm font-semibold mb-3">Key metrics</div>
                    <div className="flex flex-wrap gap-2">
                      {useCase.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary rounded-full"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
