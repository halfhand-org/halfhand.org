'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'CLI', href: '#cli' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Documentation', href: '/docs/' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            hh
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Halfhand
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors',
                'hover:text-foreground hover:bg-secondary',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/thehalfhand/halfhand"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center rounded-md border border-border/60 bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors',
              'hover:bg-secondary hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
          >
            GitHub
          </a>
          <a
            href="#install"
            className={cn(
              'inline-flex items-center justify-center rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background transition-colors',
              'hover:bg-foreground/90',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            )}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
