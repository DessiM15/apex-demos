'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { EmailCampaign } from '@/data/mockContent'

interface Props { campaigns: EmailCampaign[]; industryName: string }

export default function EmailPreview({ campaigns, industryName }: Props) {
  const [active, setActive] = useState(0)
  const campaign = campaigns[active]

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
          <h2 className="text-3xl font-bold text-apex-blue mt-4 mb-3">
            Automated Email Campaigns
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Strategic email campaigns sent to your list every month — keeping you top-of-mind with every prospect.
          </p>
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
                    ? 'border-apex-blue bg-apex-blue-light text-apex-blue'
                    : 'border-brand-border bg-brand-surface text-brand-text hover:border-apex-blue'}`}
              >
                <i className="fa-solid fa-envelope"></i> {c.subject}
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
                  <div className="w-10 h-10 rounded-full bg-apex-blue flex items-center justify-center text-white font-bold text-sm">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-brand-text text-sm">Apex {industryName} Team</p>
                    <p className="text-brand-muted text-xs">To: Your Clients & Prospects</p>
                  </div>
                </div>
                <p className="font-bold text-brand-text text-base mb-4">{campaign.subject}</p>
                <p className="text-brand-muted text-sm leading-relaxed">{campaign.bodyPreview}</p>
                <div className="mt-6">
                  <span className="bg-apex-blue text-white text-sm font-semibold px-5 py-2.5 rounded-btn cursor-pointer hover:bg-apex-blue-dark transition-colors">
                    Read Full Email →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
