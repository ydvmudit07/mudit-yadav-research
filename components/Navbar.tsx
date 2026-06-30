'use client'

import { useEffect, useState } from 'react'
import { Share2, Code, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const updateScrollState = () => {
      setScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const navPaddingClass = scrolled ? 'py-2' : 'py-4'
  const nameContainerClass = scrolled
    ? 'w-[2.5rem] sm:w-[2.65rem]'
    : 'w-[10.75rem] sm:w-[11.5rem]'

  if (!mounted) {
    return (
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className={`max-w-6xl mx-auto px-6 ${navPaddingClass} flex items-center justify-between transition-[padding] duration-300 ease-out`}>
          <h1 className="text-[1.25rem] sm:text-[1.5rem] font-sans tracking-wider" style={{ fontWeight: 700 }}>Mudit Yadav</h1>
          <div className="flex gap-6" />
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className={`max-w-6xl mx-auto px-6 ${navPaddingClass} flex items-center justify-between transition-[padding] duration-300 ease-out`}>
        <div
          className={`relative inline-flex h-8 sm:h-9 shrink-0 overflow-hidden transition-[width] duration-500 ease-out ${nameContainerClass}`}
          aria-label="Mudit Yadav"
          title="Mudit Yadav"
        >
          <span
            className="absolute inset-0 flex items-center whitespace-nowrap font-sans text-[1.25rem] sm:text-[1.5rem] tracking-wider"
            style={{ fontWeight: 700 }}
          >
            <span className="inline-flex items-center">
              <span>M</span>
              <span className={scrolled ? 'opacity-0' : 'opacity-100'}>udit</span>
            </span>
            <span className="inline-block w-[0.25em]" aria-hidden="true" />
            <span
              className={`inline-flex items-center transition-transform duration-500 ease-out ${
                scrolled ? '-translate-x-10 sm:-translate-x-12' : 'translate-x-0'
              }`}
            >
              <span>Y</span>
              <span className={scrolled ? 'opacity-0' : 'opacity-100'}>adav</span>
            </span>
          </span>
        </div>

        <div className="flex items-center gap-5 sm:gap-6">
          <a
            href="https://www.linkedin.com/in/ydvmudit07/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.25rem] sm:text-[1.5rem] text-primary hover:text-accent transition-colors leading-none"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ydvmudit07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[1.25rem] sm:text-[1.5rem] text-primary hover:text-accent transition-colors leading-none"
            aria-label="GitHub"
            title="GitHub"
          >
            Github
          </a>

          <button
            onClick={toggleTheme}
            className="text-[1.75rem] sm:text-[1.75rem] text-primary hover:text-accent transition-colors p-2 -m-2 leading-none"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {resolvedTheme === 'light' ? '◐' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  )
}