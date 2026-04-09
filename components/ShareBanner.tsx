'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ShareBanner() {
  const [open, setOpen] = useState(false)

  function shareUrl() {
    if (typeof window === 'undefined') return ''
    return window.location.href
  }

  function shareText() {
    return 'Check out this demo from Apex Infinity Group!'
  }

  async function handleNativeShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Apex Demo',
          text: shareText(),
          url: shareUrl(),
        })
      } catch {
        // User cancelled or error — do nothing
      }
    } else {
      setOpen(o => !o)
    }
  }

  function handleCopyLink() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl())
    }
    setOpen(false)
  }

  const shareLinks = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      color: '#1877F2',
      url: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl())}`,
    },
    {
      name: 'X / Twitter',
      icon: 'fa-brands fa-x-twitter',
      color: '#000000',
      url: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(shareUrl())}`,
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      color: '#0A66C2',
      url: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl())}`,
    },
    {
      name: 'Email',
      icon: 'fa-solid fa-envelope',
      color: '#6B7280',
      url: () => `mailto:?subject=${encodeURIComponent('Check out this demo')}&body=${encodeURIComponent(shareText() + '\n\n' + shareUrl())}`,
    },
  ]

  return (
    <>
      {/* Floating share button */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute bottom-16 right-0 bg-white rounded-card shadow-card-hover border border-gray-200 p-3 min-w-[200px]"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 px-1">Share This Demo</p>
              {shareLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <i className={`${link.icon} text-sm w-4 text-center`} style={{ color: link.color }} />
                  <span className="text-sm font-medium text-gray-700">{link.name}</span>
                </a>
              ))}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-link text-sm w-4 text-center text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Copy Link</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={handleNativeShare}
          className="w-14 h-14 rounded-full bg-apex-blue text-white shadow-card-hover hover:bg-apex-blue-dark transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
          aria-label="Share this demo"
        >
          <i className="fa-solid fa-share-nodes text-lg" />
        </button>
      </div>

      {/* Overlay to close dropdown */}
      {open && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
