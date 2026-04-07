'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

interface Props { packageName: string }

export default function ConversionTracking({ packageName }: Props) {
  const sources = [
    { name: 'Social Media', pct: 42, leads: 27 },
    { name: 'Google Search', pct: 28, leads: 18 },
    { name: 'Email Campaigns', pct: 18, leads: 12 },
    { name: 'Direct Traffic', pct: 12, leads: 7 },
  ]

  return (
    <section className="bg-brand-surface py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            {packageName} Feature
          </span>
          <h2 className="text-3xl font-bold text-apex-blue mt-4 mb-3">
            Conversion Tracking
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Know exactly which channels are generating your leads — and double down on what works.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Funnel Card */}
          <motion.div variants={fadeInUp} className="bg-white rounded-card shadow-card p-6">
            <h3 className="font-bold text-brand-text mb-6 flex items-center gap-2">
              <i className="fa-solid fa-filter text-apex-blue"></i> Lead Source Breakdown
            </h3>
            <div className="space-y-4">
              {sources.map(s => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-brand-text">{s.name}</span>
                    <span className="font-bold text-apex-blue">{s.pct}% — {s.leads} leads</span>
                  </div>
                  <div className="w-full bg-brand-surface rounded-full h-2.5">
                    <div className="bg-apex-blue h-2.5 rounded-full" style={{ width: `${s.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div variants={fadeInUp} className="bg-white rounded-card shadow-card p-6">
            <h3 className="font-bold text-brand-text mb-6 flex items-center gap-2">
              <i className="fa-solid fa-chart-line text-apex-blue"></i> Conversion Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-surface rounded-card p-4 text-center">
                <p className="text-2xl font-bold text-apex-blue">64</p>
                <p className="text-xs text-brand-muted font-medium mt-1">Form Submissions</p>
              </div>
              <div className="bg-brand-surface rounded-card p-4 text-center">
                <p className="text-2xl font-bold text-apex-blue">3.3%</p>
                <p className="text-xs text-brand-muted font-medium mt-1">Conversion Rate</p>
              </div>
              <div className="bg-brand-surface rounded-card p-4 text-center">
                <p className="text-2xl font-bold text-apex-blue">$18.40</p>
                <p className="text-xs text-brand-muted font-medium mt-1">Cost Per Lead</p>
              </div>
              <div className="bg-brand-surface rounded-card p-4 text-center">
                <p className="text-2xl font-bold text-green-600">+24%</p>
                <p className="text-xs text-brand-muted font-medium mt-1">Month Over Month</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
