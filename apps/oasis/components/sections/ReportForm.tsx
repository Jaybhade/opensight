'use client'

import React, { useState } from 'react'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { REPORT_OFFER } from '@/lib/constants'
import { Lock, Zap } from 'lucide-react'
import { LordIcon, LORDICONS } from '@/components/ui/lord-icon'

export function ReportForm() {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Handle form submission
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50" id="report">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {REPORT_OFFER.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {REPORT_OFFER.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch">
            {/* Left: Checklist */}
            <div className="space-y-4">
              {REPORT_OFFER.checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <LordIcon
                      src={LORDICONS.checkmark}
                      trigger="hover"
                      colors="primary:#000000"
                      size={24}
                    />
                  </div>
                  <span className="text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Right: Form */}
            <div className="relative h-full">
              {/* Animated border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-orange-600 rounded-2xl blur opacity-20" />

              <div className="relative h-full p-8 rounded-2xl border-2 border-border bg-card flex flex-col">
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  <div className="flex-1 space-y-4">
                    {/* URL Field */}
                    <div>
                      <label htmlFor="report-url" className="block text-sm font-medium mb-2">
                        Website URL *
                      </label>
                      <input
                        type="text"
                        id="report-url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="yourdomain.com"
                        required
                        className="
                          w-full px-4 py-3 rounded-lg border border-input
                          bg-background text-foreground
                          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                          placeholder:text-muted-foreground
                        "
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="report-email" className="block text-sm font-medium mb-2">
                        Email (optional)
                      </label>
                      <input
                        type="email"
                        id="report-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="
                          w-full px-4 py-3 rounded-lg border border-input
                          bg-background text-foreground
                          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                          placeholder:text-muted-foreground
                        "
                      />
                    </div>
                  </div>

                  {/* Microcopy */}
                  <div className="space-y-2 pt-4 mt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>{REPORT_OFFER.privacy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-4 h-4" />
                      <span>{REPORT_OFFER.speed}</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <ShimmerButton
                      type="submit"
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? 'Analyzing...' : REPORT_OFFER.cta}
                    </ShimmerButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
