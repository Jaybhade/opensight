'use client'

import React from 'react'
import { Package, Blocks, ShoppingCart, Megaphone, FileText, BarChart3, Zap, Box } from 'lucide-react'
import { INTEGRATION_LOGOS, TRADEMARK_DISCLAIMER } from '@/lib/constants'

export function IntegrationLogos({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
        {INTEGRATION_LOGOS.map((name, index) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <IntegrationIcon name={name} />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">
              {name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-4">
        {TRADEMARK_DISCLAIMER}
      </p>
    </div>
  )
}

function IntegrationIcon({ name }: { name: string }) {
  const iconClass = "w-full h-full text-foreground"

  // Using generic icons - in production, use simple-icons package
  switch (name.toLowerCase()) {
    case 'wordpress':
      return <Package className={iconClass} />
    case 'webflow':
      return <Blocks className={iconClass} />
    case 'shopify':
      return <ShoppingCart className={iconClass} />
    case 'hubspot':
      return <Megaphone className={iconClass} />
    case 'notion':
      return <FileText className={iconClass} />
    case 'google analytics':
      return <BarChart3 className={iconClass} />
    case 'zapier':
      return <Zap className={iconClass} />
    case 'contentful':
      return <Box className={iconClass} />
    default:
      return <Package className={iconClass} />
  }
}
