'use client'
import { useState, useEffect } from 'react'
import Link  from 'next/link'
import MockLogo from '@/components/MockLogo'
import { IndustrySlug } from '@/data/industries'

interface Props {
  industry: IndustrySlug
  navStyle?: 'white' | 'dark' | 'transparent-over-hero'
  accentColor?: string
}

export default function DemoNavbar({
  industry,
  navStyle = 'white',
  accentColor = '#243a8f',
}: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (navStyle !== 'transparent-over-hero') return

    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navStyle])

  /* ── WHITE (default) ── */
  if (navStyle === 'white') {
    return (
      <nav className="bg-white border-b border-[#E5E7EB] px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo">
            <MockLogo industry={industry} size={64} />
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-pill"
              style={{ backgroundColor: accentColor }}
            >
              Demo
            </span>
            <Link
              href="/demo/select"
              className="text-sm text-brand-muted hover:text-apex-blue transition-colors"
            >
              &larr; Back to demos
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  /* ── DARK ── */
  if (navStyle === 'dark') {
    return (
      <nav className="bg-[#1a1a2e] shadow-md px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo">
            <MockLogo industry={industry} size={64} color="#ffffff" />
          </Link>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-pill"
              style={{ backgroundColor: accentColor }}
            >
              Demo
            </span>
            <Link
              href="/demo/select"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              &larr; Back to demos
            </Link>
          </div>
        </div>
      </nav>
    )
  }

  /* ── TRANSPARENT-OVER-HERO ── */
  return (
    <nav
      className={[
        'sticky top-0 z-40 px-4 py-4 transition-all duration-300 -mb-[72px]',
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/demo">
          <MockLogo
            industry={industry}
            size={64}
            color={scrolled ? accentColor : '#ffffff'}
          />
        </Link>
        <div className="flex items-center gap-3">
          {scrolled ? (
            <span
              className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-pill"
              style={{ backgroundColor: accentColor }}
            >
              Demo
            </span>
          ) : (
            <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-pill border border-white/40 bg-transparent">
              Demo
            </span>
          )}
          <Link
            href="/demo/select"
            className={[
              'text-sm transition-colors',
              scrolled
                ? 'text-gray-500 hover:text-gray-800'
                : 'text-white/80 hover:text-white',
            ].join(' ')}
          >
            &larr; Back to demos
          </Link>
        </div>
      </div>
    </nav>
  )
}
