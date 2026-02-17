'use client'

import React from 'react'
import { AnimatedNumber } from '@/components/ui/animated-number'
import { MARKET_SCALE } from '@/lib/constants'
import { TrendingUp } from 'lucide-react'

export function MarketScale() {
  return (
    <section className="py-20 md:py-32" id="market">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {MARKET_SCALE.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {MARKET_SCALE.subtitle}
          </p>
        </div>

        {/* Engine DAU Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {MARKET_SCALE.engines.map((engine, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <AnimatedNumber value={engine.dau} />
              </div>
              <p className="text-lg font-semibold text-foreground mb-1">
                {engine.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {engine.source}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          {MARKET_SCALE.disclaimer}
        </p>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {MARKET_SCALE.additionalStats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {stat.growth}
                </div>
              </div>
              <p className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
