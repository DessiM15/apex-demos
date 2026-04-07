'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'

interface Props { fields: string[]; cta: string; industryName: string }

export default function LeadCaptureForm({ fields, cta, industryName }: Props) {
  return (
    <section className="bg-apex-blue-light py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-10"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-brand-card px-3 py-1 rounded-pill">
            Free — No Obligation
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-apex-blue mt-4 mb-3">
            Get Started Today
          </h2>
          <p className="text-brand-muted">
            Fill out the form below and a {industryName} specialist will contact you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="bg-brand-card rounded-card shadow-card-hover p-8"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {fields.map((field, i) => (
              <motion.div key={i} variants={fadeInUp} className={fields.length % 2 !== 0 && i === fields.length - 1 ? 'sm:col-span-2' : ''}>
                <label className="block text-sm font-semibold text-brand-text mb-1.5">{field}</label>
                <input
                  type="text"
                  placeholder={`Enter ${field.toLowerCase()}`}
                  className="w-full border border-brand-border rounded-btn px-4 py-3 text-brand-text text-sm focus:outline-none focus:border-apex-blue focus:ring-2 focus:ring-apex-blue/20 transition-all bg-brand-surface"
                />
              </motion.div>
            ))}
          </motion.div>
          <button className="w-full bg-apex-blue hover:bg-apex-blue-dark text-white font-bold py-4 rounded-btn transition-colors text-base shadow-card hover:shadow-card-hover mt-2">
            {cta}
          </button>
          <p className="text-center text-brand-muted text-xs mt-4">
            <i className="fa-solid fa-lock"></i> Your information is 100% secure and never shared.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
