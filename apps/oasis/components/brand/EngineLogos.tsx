'use client'

import React from 'react'
import Image from 'next/image'
import { SUPPORTED_ENGINES, TRADEMARK_DISCLAIMER } from '@/lib/constants'

export function EngineLogos({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between gap-8">
        {SUPPORTED_ENGINES.map((engine) => (
          <div
            key={engine.name}
            className="flex flex-col items-center gap-3 flex-1 transition-all duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <EngineIcon icon={engine.icon} name={engine.name} />
            </div>
            <span className="text-xs font-medium text-muted-foreground text-center">
              {engine.name}
            </span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-6">
        {TRADEMARK_DISCLAIMER}
      </p>
    </div>
  )
}

function EngineIcon({ icon, name }: { icon: string; name: string }) {
  // Map icon names to actual file names
  const iconMap: Record<string, string> = {
    chatgpt: '/assets/chatgpt-icon.svg',
    claude: '/assets/claude-ai-icon.svg',
    gemini: '/assets/google-gemini-icon.svg',
    perplexity: '/assets/perplexity-ai-icon.svg',
    deepseek: '/assets/deepseek-logo-icon.svg',
    meta: '/assets/meta-ai-icon.svg', // fallback to placeholder if not exists
  }

  const iconPath = iconMap[icon]

  if (iconPath) {
    return (
      <Image
        src={iconPath}
        alt={`${name} logo`}
        width={40}
        height={40}
        className="w-full h-full object-contain"
      />
    )
  }

  // Fallback SVG if no image found
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
