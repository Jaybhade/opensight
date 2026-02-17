'use client'

import React from 'react'
import { MessageSquare, Sparkles, Zap, Brain, Search, Bot } from 'lucide-react'
import { SUPPORTED_ENGINES, TRADEMARK_DISCLAIMER } from '@/lib/constants'

export function EngineLogos({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {SUPPORTED_ENGINES.map((engine) => (
          <div
            key={engine.name}
            className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <EngineIcon icon={engine.icon} />
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {engine.name}
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

function EngineIcon({ icon }: { icon: string }) {
  const iconClass = "w-full h-full text-foreground"

  // Using generic icons as fallbacks - in production, use simple-icons package
  switch (icon) {
    case 'chatgpt':
      return <MessageSquare className={iconClass} />
    case 'claude':
      return <Sparkles className={iconClass} />
    case 'gemini':
      return <Zap className={iconClass} />
    case 'meta':
      return <Brain className={iconClass} />
    case 'perplexity':
      return <Search className={iconClass} />
    case 'deepseek':
      return <Bot className={iconClass} />
    default:
      return <MessageSquare className={iconClass} />
  }
}
