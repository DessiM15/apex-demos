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
  packageName?: string
  emailCampaignCount?: number
}

function campaignIcon(type?: string) {
  if (type === 'holiday') return 'fa-solid fa-gift'
  if (type === 'flyer') return 'fa-solid fa-image'
  return 'fa-solid fa-envelope'
}

export default function EmailPreview({ campaigns, industryName, industrySlug, packageName, emailCampaignCount }: Props) {
  const [active, setActive] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const campaign = campaigns[active]

  const closeModal = useCallback(() => setOpenIndex(null), [])

  useEffect(() => {
    if (openIndex === null) return
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [openIndex, closeModal])

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [openIndex])

  const modalCampaign = openIndex !== null ? campaigns[openIndex] : null

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
          <h2 className="text-3xl font-bold text-brand-heading mt-4 mb-3 text-balance">
            Automated Email Campaigns
          </h2>
          {packageName && emailCampaignCount ? (
            <p className="text-brand-muted max-w-xl mx-auto">
              With your <span className="font-semibold text-brand-text">{packageName}</span> package, you get <span className="font-semibold text-brand-text">{emailCampaignCount} email campaigns per month</span>. Here is a sample:
            </p>
          ) : (
            <p className="text-brand-muted max-w-xl mx-auto">
              Strategic email campaigns sent to your list every month — keeping you top-of-mind with every prospect.
            </p>
          )}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Campaign selector */}
          <motion.div variants={fadeInUp} className="md:col-span-1 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-muted mb-3">
              Sample Campaigns
            </p>
            {campaigns.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-card border-2 transition-all duration-200 text-sm font-medium
                  ${active === i
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-brand-border bg-brand-surface text-brand-text hover:border-accent/50'}`}
              >
                <i className={campaignIcon(c.type)}></i> {c.subject}
              </button>
            ))}
            <p className="text-xs text-brand-muted pt-2">
              + {campaigns.length * 2} more campaigns/month
            </p>
          </motion.div>

          {/* Email preview */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="bg-brand-card rounded-card shadow-card border border-brand-border overflow-hidden">
              {/* Email header bar */}
              <div className="bg-brand-surface px-5 py-3 border-b border-brand-border flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-brand-muted ml-3">Email Preview</span>
              </div>
              {/* Email content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-brand-border">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text text-sm">Your {industryName} Team</p>
                    <p className="text-brand-muted text-xs">To: Your Clients & Prospects</p>
                  </div>
                </div>
                {/* Show image for holiday/flyer types */}
                {campaign.image && (campaign.type === 'holiday' || campaign.type === 'flyer') && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img src={campaign.image} alt="" className="w-full h-40 object-cover" />
                  </div>
                )}
                <p className="font-bold text-brand-text text-base mb-4">{campaign.subject}</p>
                <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">{campaign.bodyPreview}</p>
                <div className="mt-6">
                  <button
                    onClick={() => setOpenIndex(active)}
                    className="bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-btn cursor-pointer hover:bg-accent-dark transition-colors"
                  >
                    View Full Email →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalCampaign && (
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
                  <p><span className="text-gray-500 font-medium">From:</span> <span className="text-gray-800">{industryName} Team &lt;hello@your-domain.com&gt;</span></p>
                  <p><span className="text-gray-500 font-medium">To:</span> <span className="text-gray-800">Your Clients &amp; Prospects</span></p>
                  <p><span className="text-gray-500 font-medium">Subject:</span> <span className="text-gray-800 font-semibold">{modalCampaign.subject}</span></p>
                </div>
              </div>

              {/* Email body — layout varies by type */}
              <div className="p-6">
                {/* Logo area */}
                <div className="text-center py-6 border-b border-gray-200 mb-6">
                  <MockLogo industry={industrySlug} size={56} />
                </div>

                {modalCampaign.type === 'holiday' ? (
                  <>
                    {/* HOLIDAY layout: image → accent ribbon → warm body → soft CTA */}
                    {modalCampaign.image && (
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img src={modalCampaign.image} alt="" className="w-full h-56 object-cover" />
                      </div>
                    )}
                    <div className="bg-accent rounded-card px-6 py-4 text-center mb-6">
                      <p className="text-white/80 text-xs uppercase tracking-widest mb-1">
                        <i className="fa-solid fa-snowflake mr-1"></i> Season&apos;s Greetings <i className="fa-solid fa-snowflake ml-1"></i>
                      </p>
                      <h3 className="text-white font-bold text-xl leading-snug">
                        {modalCampaign.subject}
                      </h3>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed space-y-4 mb-8">
                      <p>Hi [First Name],</p>
                      <p>{modalCampaign.bodyPreview}</p>
                      <p>From all of us, we wish you and your loved ones a wonderful holiday season.</p>
                    </div>
                    <div className="text-center mb-8">
                      <span className="inline-block bg-accent text-white font-bold text-sm px-8 py-3 rounded-btn cursor-pointer">
                        {modalCampaign.ctaText || 'Learn More'} →
                      </span>
                    </div>
                  </>
                ) : modalCampaign.type === 'flyer' ? (
                  <>
                    {/* FLYER layout: image → bold banner → short body → prominent CTA */}
                    {modalCampaign.image && (
                      <div className="rounded-lg overflow-hidden mb-4">
                        <img src={modalCampaign.image} alt="" className="w-full h-56 object-cover" />
                      </div>
                    )}
                    <div className="bg-accent rounded-card p-8 text-center mb-6">
                      <p className="text-white/80 text-xs uppercase tracking-widest mb-2">Limited Time Offer</p>
                      <h3 className="text-white font-bold text-2xl leading-snug">
                        {modalCampaign.subject}
                      </h3>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed space-y-4 mb-8">
                      <p>Hi [First Name],</p>
                      <p>{modalCampaign.bodyPreview}</p>
                    </div>
                    <div className="text-center mb-8">
                      <span className="inline-block bg-accent text-white font-bold text-base px-10 py-4 rounded-btn cursor-pointer shadow-lg">
                        {modalCampaign.ctaText || 'Get Started'} →
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* STANDARD layout: accent banner → body → accent CTA */}
                    <div className="bg-accent rounded-card p-8 text-center mb-6">
                      <h3 className="text-white font-bold text-xl leading-snug">
                        {modalCampaign.subject}
                      </h3>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed space-y-4 mb-8">
                      <p>Hi [First Name],</p>
                      <p>{modalCampaign.bodyPreview}</p>
                      <p>We put this together because we genuinely believe it can make a difference for you. Whether you take action today or simply keep this in your back pocket, we want you to have the information you need to make smart decisions.</p>
                      <p>If you have any questions or want to discuss your specific situation, we are here for you. Just hit reply or use the button below to get in touch.</p>
                    </div>
                    <div className="text-center mb-8">
                      <span className="inline-block bg-accent text-white font-bold text-sm px-8 py-3 rounded-btn cursor-pointer">
                        {modalCampaign.ctaText || 'Get Started Today'} →
                      </span>
                    </div>
                  </>
                )}

                {/* Footer — shared across all types */}
                <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-400 space-y-2">
                  <p>You are receiving this email because you opted in to updates from our team.</p>
                  <p>
                    <span className="underline cursor-pointer">Unsubscribe</span> · <span className="underline cursor-pointer">Update Preferences</span> · <span className="underline cursor-pointer">View in Browser</span>
                  </p>
                  <p className="mt-3 text-gray-300">Powered by Pulse Marketing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
