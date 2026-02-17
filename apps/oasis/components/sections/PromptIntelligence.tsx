'use client'

import React, { useState } from 'react'
import { PROMPT_INTELLIGENCE } from '@/lib/constants'

export function PromptIntelligence() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 md:py-32" id="prompts">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {PROMPT_INTELLIGENCE.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {PROMPT_INTELLIGENCE.subtitle}
          </p>
        </div>

        {/* Funnel Stage Tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {PROMPT_INTELLIGENCE.funnelStages.map((stage, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  px-6 py-3 rounded-lg font-medium transition-all
                  ${activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }
                `}
              >
                {stage.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {PROMPT_INTELLIGENCE.funnelStages[activeTab] && (
            <div className="p-8 rounded-2xl border border-border bg-card">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  {PROMPT_INTELLIGENCE.funnelStages[activeTab].name}
                </h3>
                <p className="text-muted-foreground">
                  {PROMPT_INTELLIGENCE.funnelStages[activeTab].description}
                </p>
              </div>

              <div className="space-y-3">
                {PROMPT_INTELLIGENCE.funnelStages[activeTab].examples.map((example, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <code className="text-sm text-foreground/90">{example}</code>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
