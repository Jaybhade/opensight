'use client'

import React, { useState } from 'react'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { ArrowRight } from 'lucide-react'

export function CTAStrip() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Analyzing:', url)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 via-orange-500/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold mb-8">
            Ready to see how AI represents your brand?
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="yourdomain.com"
              className="
                flex-1 px-6 py-4 rounded-lg border border-input
                bg-background text-foreground
                focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                placeholder:text-muted-foreground
              "
            />
            <ShimmerButton type="submit" className="sm:w-auto">
              Analyze my brand
              <ArrowRight className="w-5 h-5 ml-2" />
            </ShimmerButton>
          </form>
        </div>
      </div>
    </section>
  )
}
