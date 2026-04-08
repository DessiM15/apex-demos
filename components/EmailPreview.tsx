'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { EmailCampaign } from '@/data/mockContent'
import { IndustrySlug } from '@/data/industries'
import MockLogo from '@/components/MockLogo'

interface Props {
  campaigns: EmailCampaign[]
  industryName: string
  industrySlug: IndustrySlug
}

export default function EmailPreview({ campaigns, industryName, industrySlug }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const closeModal = useCallback(() => setOpenIndex(null), [])

  useEffect(() => {
    if (openIndex === null) return
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [openIndex, closeModal])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [openIndex])

  const activeCampaign = openIndex !== null ? campaigns[openIndex] : null

  return (
    <section className="bg-brand-bg py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            Email Marketing
          </span>
          <h2 className="text-3xl font-bold text-brand-heading mt-4 mb-3">
            Email Campaigns
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Strategic email campaigns sent to your list every month — keeping you top-of-mind with every prospect.
          </p>
        </motion.div>

        {/* Email list */}
        <motion.div
          className="space-y-3"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {campaigns.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-center gap-4 p-5 rounded-card border border-brand-border bg-brand-card hover:bg-brand-surface transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-apex-blue flex items-center justify-center text-white shrink-0">
                <i className="fa-solid fa-envelope text-sm"></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-brand-text text-sm truncate">{c.subject}</p>
                <p className="text-brand-muted text-xs truncate">{c.bodyPreview}</p>
              </div>
              <button
                onClick={() => setOpenIndex(i)}
                className="text-sm text-apex-blue font-semibold hover:underline whitespace-nowrap cursor-pointer shrink-0"
              >
                View Full Email
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCampaign && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={closeModal}
            />

            {/* Modal card */}
            <motion.div
              className="relative bg-white rounded-card shadow-card-hover max-w-[600px] w-full max-h-[85vh] overflow-y-auto z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 z-20 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>

              {/* Email client header */}
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 rounded-t-card">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1 text-sm pr-8">
                  <p><span className="text-gray-500 font-medium">From:</span> <span className="text-gray-800">{industryName} Team &lt;hello@apex-demo.com&gt;</span></p>
                  <p><span className="text-gray-500 font-medium">To:</span> <span className="text-gray-800">Your Clients &amp; Prospects</span></p>
                  <p><span className="text-gray-500 font-medium">Subject:</span> <span className="text-gray-800 font-semibold">{activeCampaign.subject}</span></p>
                </div>
              </div>

              {/* Email body */}
              <div className="p-6">
                {/* Logo area */}
                <div className="text-center py-6 border-b border-gray-200 mb-6">
                  <MockLogo industry={industrySlug} size={56} />
                </div>

                {/* Hero banner */}
                <div className="bg-[#243a8f] rounded-card p-8 text-center mb-6">
                  <h3 className="text-white font-bold text-xl leading-snug">
                    {activeCampaign.subject}
                  </h3>
                </div>

                {/* Body text */}
                <div className="text-gray-700 text-sm leading-relaxed space-y-4 mb-8">
                  <p>Hi [First Name],</p>
                  <p>{activeCampaign.bodyPreview}</p>
                  <p>We put this together because we genuinely believe it can make a difference for you. Whether you take action today or simply keep this in your back pocket, we want you to have the information you need to make smart decisions.</p>
                  <p>If you have any questions or want to discuss your specific situation, we are here for you. Just hit reply or use the button below to get in touch.</p>
                </div>

                {/* CTA button */}
                <div className="text-center mb-8">
                  <span className="inline-block bg-[#cf181d] text-white font-bold text-sm px-8 py-3 rounded-btn cursor-pointer">
                    Get Started Today →
                  </span>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-400 space-y-2">
                  <p>You are receiving this email because you opted in to updates from our team.</p>
                  <p>
                    <span className="underline cursor-pointer">Unsubscribe</span> · <span className="underline cursor-pointer">Update Preferences</span> · <span className="underline cursor-pointer">View in Browser</span>
                  </p>
                  <p className="mt-3 text-gray-300">Powered by Apex Affinity Group · reachtheapex.net</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
