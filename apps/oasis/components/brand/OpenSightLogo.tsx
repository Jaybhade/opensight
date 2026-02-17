'use client'

import React from 'react'

interface OpenSightLogoProps {
  variant?: 'default' | 'compact'
  className?: string
}

export function OpenSightLogo({ variant = 'default', className = '' }: OpenSightLogoProps) {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <EyeIcon className="w-6 h-6" />
        <span className="font-bold text-lg">OS</span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <EyeIcon className="w-7 h-7" />
      <span className="font-bold text-xl tracking-tight">OpenSight</span>
    </div>
  )
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Custom minimal eye icon - not copying any trademark */}
      <path
        d="M12 5C7 5 2.73 8.11 1 12.5 2.73 16.89 7 20 12 20s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      <circle
        cx="12"
        cy="12.5"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
      <circle
        cx="12"
        cy="12.5"
        r="1"
        fill="currentColor"
        className="text-primary"
      />
    </svg>
  )
}
