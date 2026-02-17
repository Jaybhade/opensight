'use client'

import React, { useState, useEffect } from 'react'
import { OpenSightLogo } from '@/components/brand/OpenSightLogo'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { NAV_LINKS } from '@/lib/constants'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <OpenSightLogo />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative text-sm font-medium text-foreground/80
                  hover:text-foreground transition-colors
                  after:absolute after:bottom-0 after:left-0 after:h-0.5
                  after:w-0 hover:after:w-full after:bg-primary
                  after:transition-all after:duration-300
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ShimmerButton onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })}>
              Analyze my brand
            </ShimmerButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <ShimmerButton
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Analyze my brand
              </ShimmerButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
