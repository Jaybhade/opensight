'use client'

import React, { useState } from 'react'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { EngineLogos } from '@/components/brand/EngineLogos'
import { HERO } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { LordIcon, LORDICONS } from '@/components/ui/lord-icon'

export function Hero() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Analyzing:', url)
  }

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Subtle background effect - light theme only */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {HERO.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              {HERO.subheadline}
            </p>

            {/* Benefits */}
            <ul className="space-y-3">
              {HERO.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <LordIcon
                      src={LORDICONS.checkmark}
                      trigger="loop-on-hover"
                      colors="primary:#A52502"
                      size={24}
                    />
                  </div>
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="url" className="sr-only">
                    {HERO.urlLabel}
                  </label>
                  <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder={HERO.urlPlaceholder}
                    className="
                      w-full px-4 py-4 rounded-lg border border-input
                      bg-background text-foreground
                      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                      placeholder:text-muted-foreground
                    "
                  />
                </div>
                <ShimmerButton type="submit" className="sm:w-auto">
                  {HERO.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </ShimmerButton>
              </div>

              {/* Reassurance */}
              <p className="text-sm text-muted-foreground">
                {HERO.reassurance}
              </p>
            </form>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {HERO.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Supported Engines */}
            <div className="pt-8">
              <p className="text-sm font-medium text-muted-foreground mb-4">
                Supported engines
              </p>
              <EngineLogos />
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroDashboard() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Dashboard Card */}
        <rect x="20" y="40" width="360" height="320" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="2" />

        {/* Header */}
        <rect x="40" y="60" width="120" height="8" rx="4" fill="#f3f4f6" />
        <rect x="300" y="60" width="60" height="8" rx="4" fill="#f3f4f6" />

        {/* Visibility Score Circle */}
        <circle cx="200" cy="160" r="50" fill="#fef2f2" />
        <circle cx="200" cy="160" r="45" stroke="#A52502" strokeWidth="8" strokeLinecap="round" strokeDasharray="220 283" transform="rotate(-90 200 160)" />
        <text x="200" y="170" textAnchor="middle" className="text-2xl font-bold" fill="#A52502">87</text>

        {/* Stats Bars */}
        <rect x="60" y="240" width="280" height="20" rx="4" fill="#f3f4f6" />
        <rect x="60" y="240" width="200" height="20" rx="4" fill="#A52502" opacity="0.8" />

        <rect x="60" y="280" width="280" height="20" rx="4" fill="#f3f4f6" />
        <rect x="60" y="280" width="160" height="20" rx="4" fill="#A52502" opacity="0.6" />

        <rect x="60" y="320" width="280" height="20" rx="4" fill="#f3f4f6" />
        <rect x="60" y="320" width="240" height="20" rx="4" fill="#A52502" opacity="0.4" />
      </svg>
    </div>
  )
}
