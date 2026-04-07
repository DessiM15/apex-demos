'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideDown } from '@/lib/animations'

interface DemoBannerProps {
  packageName: string
  tier:        string
  industry:    string
  ctaLink:     string
}

export default function DemoBanner({ packageName, tier, industry, ctaLink }: DemoBannerProps) {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={slideDown}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -16, transition: { duration: 0.2 } }}
          className="sticky top-0 z-50 bg-apex-blue shadow-banner"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xl">👁️</span>
              <p className="text-white text-sm font-medium truncate">
                <span className="font-bold">DEMO PREVIEW</span>
                {' — '}
                <span className="text-white/90">{packageName} ({tier})</span>
                {' '}
                <span className="hidden sm:inline text-white/75">for {industry} professionals</span>
              </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-apex-blue text-xs sm:text-sm font-bold px-4 py-2 rounded-btn hover:bg-apex-blue-light transition-colors whitespace-nowrap"
              >
                Get This Built For Me →
              </a>
              <button
                onClick={() => setVisible(false)}
                className="text-white/60 hover:text-white transition-colors text-xl leading-none ml-1"
                aria-label="Dismiss banner"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
