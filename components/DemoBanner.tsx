'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { slideDown } from '@/lib/animations'

interface DemoBannerProps {
  packageName: string
  tier:        string
  industry:    string
}

const shareLinks = [
  {
    name: 'Facebook',
    icon: 'fa-brands fa-facebook-f',
    color: '#1877F2',
    url: (href: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`,
  },
  {
    name: 'X / Twitter',
    icon: 'fa-brands fa-x-twitter',
    color: '#000000',
    url: (href: string, text: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(href)}`,
  },
  {
    name: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
    color: '#0A66C2',
    url: (href: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(href)}`,
  },
  {
    name: 'Email',
    icon: 'fa-solid fa-envelope',
    color: '#6B7280',
    url: (href: string, text: string) => `mailto:?subject=${encodeURIComponent('Check out this demo')}&body=${encodeURIComponent(text + '\n\n' + href)}`,
  },
]

export default function DemoBanner({ packageName, tier, industry }: DemoBannerProps) {
  const [visible, setVisible] = useState(true)
  const [shareOpen, setShareOpen] = useState(false)

  const shareText = 'Check out this demo from Apex Infinity Group!'

  function getUrl() {
    return typeof window !== 'undefined' ? window.location.href : ''
  }

  async function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: 'Apex Demo', text: shareText, url: getUrl() })
      } catch { /* user cancelled */ }
    } else {
      setShareOpen(o => !o)
    }
  }

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(getUrl())
    }
    setShareOpen(false)
  }

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
              <span className="text-base"><i className="fa-solid fa-eye"></i></span>
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
              {/* Share button */}
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-btn hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="fa-solid fa-share-nodes text-xs" />
                  <span className="hidden sm:inline">Share</span>
                </button>

                <AnimatePresence>
                  {shareOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 bg-white rounded-card shadow-card-hover border border-gray-200 p-3 min-w-[200px]"
                      initial={{ opacity: 0, y: -6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                    >
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 px-1">Share This Demo</p>
                      {shareLinks.map(link => (
                        <a
                          key={link.name}
                          href={link.url(getUrl(), shareText)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setShareOpen(false)}
                        >
                          <i className={`${link.icon} text-sm w-4 text-center`} style={{ color: link.color }} />
                          <span className="text-sm font-medium text-gray-700">{link.name}</span>
                        </a>
                      ))}
                      <button
                        onClick={handleCopy}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <i className="fa-solid fa-link text-sm w-4 text-center text-gray-400" />
                        <span className="text-sm font-medium text-gray-700">Copy Link</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/demo/select"
                className="bg-white text-apex-blue text-xs sm:text-sm font-bold px-4 py-2 rounded-btn hover:bg-apex-blue-light transition-colors whitespace-nowrap"
              >
                View Other Demos
              </Link>
              <button
                onClick={() => setVisible(false)}
                className="text-white/60 hover:text-white transition-colors text-xl leading-none ml-1"
                aria-label="Dismiss banner"
              >
                ×
              </button>
            </div>
          </div>

          {/* Overlay to close dropdown */}
          {shareOpen && (
            <div
              className="fixed inset-0 z-[-1]"
              onClick={() => setShareOpen(false)}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
