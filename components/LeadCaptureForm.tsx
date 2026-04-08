'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'

interface FormTheme {
  formStyle?: 'light' | 'dark' | 'split'
  accentColor?: string
}

interface Props {
  fields: string[]
  cta: string
  industryName: string
  theme?: FormTheme
}

export default function LeadCaptureForm({ fields, cta, industryName, theme }: Props) {
  const formStyle = theme?.formStyle ?? 'light'
  const accentColor = theme?.accentColor ?? '#243a8f'

  const fieldGrid = (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {fields.map((field, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          className={fields.length % 2 !== 0 && i === fields.length - 1 ? 'sm:col-span-2' : ''}
        >
          <label className="block text-sm font-semibold text-gray-800 mb-1.5">{field}</label>
          <input
            type="text"
            placeholder={`Enter ${field.toLowerCase()}`}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200 transition-all bg-gray-50"
          />
        </motion.div>
      ))}
    </motion.div>
  )

  const securityNote = (light: boolean) => (
    <p className={`text-center text-xs mt-4 ${light ? 'text-gray-400' : 'text-white/70'}`}>
      <i className="fa-solid fa-lock"></i> Your information is 100% secure and never shared.
    </p>
  )

  // ── LIGHT STYLE ──────────────────────────────────────────────────────
  if (formStyle === 'light') {
    return (
      <section className="bg-[#EBF0FC] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block"
              style={{ color: accentColor, backgroundColor: accentColor + '1a' }}
            >
              Free — No Obligation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-3">
              Get Started Today
            </h2>
            <p className="text-gray-500">
              Fill out the form below and a {industryName} specialist will contact you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {fieldGrid}
            <button
              className="w-full text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-base mt-2"
              style={{ backgroundColor: accentColor }}
            >
              {cta}
            </button>
            {securityNote(true)}
          </motion.div>
        </div>
      </section>
    )
  }

  // ── DARK STYLE ───────────────────────────────────────────────────────
  if (formStyle === 'dark') {
    return (
      <section className="py-16 px-4" style={{ backgroundColor: accentColor }}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl font-black uppercase text-white mb-2">
              Get Started Today
            </h2>
            <p className="text-white/80">
              Fill out the form below and a {industryName} specialist will contact you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {fieldGrid}
            <button className="w-full bg-[#1a1a2e] text-white font-bold py-4 rounded-lg hover:bg-black transition-colors text-base mt-2">
              {cta}
            </button>
          </motion.div>
          {securityNote(false)}
        </div>
      </section>
    )
  }

  // ── SPLIT STYLE ──────────────────────────────────────────────────────
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Left panel */}
          <div
            className="md:w-2/5 p-10 flex flex-col justify-center"
            style={{ backgroundColor: accentColor }}
          >
            <h2 className="text-3xl font-light tracking-wide text-white mb-4">
              Get Started Today
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Fill out the form below and a {industryName} specialist will contact you within 24 hours.
            </p>
            <div>
              <div className="flex items-center gap-2 text-white text-sm mb-2">
                <i className="fa-solid fa-check text-white/60"></i>
                <span>Personalized consultation</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm mb-2">
                <i className="fa-solid fa-check text-white/60"></i>
                <span>No obligation required</span>
              </div>
              <div className="flex items-center gap-2 text-white text-sm mb-2">
                <i className="fa-solid fa-check text-white/60"></i>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="md:w-3/5 bg-white p-10">
            {fieldGrid}
            <button
              className="w-full text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-base mt-2"
              style={{ backgroundColor: accentColor }}
            >
              {cta}
            </button>
            {securityNote(true)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
