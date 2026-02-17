'use client'

import React from 'react'
import { FEATURES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { LordIcon, LORDICONS } from '@/components/ui/lord-icon'
import { MagicBento } from '@/components/ui/magic-bento'

export function FeaturesBento() {
  return (
    <section className="py-20 md:py-32" id="features">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for modern content teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Templates, agents, and integrations to ship citation-ready content faster
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0], index: number }) {
  const iconMap = {
    target: LORDICONS.target,
    library: LORDICONS.library,
    workflow: LORDICONS.workflow,
    integrations: LORDICONS.integrations,
  }

  const iconSrc = iconMap[feature.icon as keyof typeof iconMap] || LORDICONS.target

  return (
    <MagicBento className="group relative p-8">
      {/* Icon */}
      <div className="mb-4">
        <LordIcon
          src={iconSrc}
          trigger="hover"
          colors="primary:#000000"
          size={64}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-muted-foreground mb-4">{feature.description}</p>

      {/* Bullets */}
      <ul className="space-y-2 mb-6">
        {feature.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-primary mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Learn More */}
      <a
        href="#"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
      >
        Learn more
        <ArrowRight className="w-4 h-4" />
      </a>
    </MagicBento>
  )
}
