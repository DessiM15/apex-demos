'use client'
import Link  from 'next/link'
import MockLogo from '@/components/MockLogo'
import { IndustrySlug } from '@/data/industries'

interface Props { industry: IndustrySlug }

export default function DemoNavbar({ industry }: Props) {
  return (
    <nav className="bg-white border-b border-brand-border px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/demo">
          <MockLogo industry={industry} size={64} />
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            Demo
          </span>
          <Link
            href="/demo/select"
            className="text-sm text-brand-muted hover:text-apex-blue transition-colors"
          >
            ← Back to demos
          </Link>
        </div>
      </div>
    </nav>
  )
}
