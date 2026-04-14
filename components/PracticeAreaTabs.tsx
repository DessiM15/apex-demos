'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { PracticeAreaDetail } from '@/data/mockContent'

interface Props {
  practiceAreas: PracticeAreaDetail[]
}

export default function PracticeAreaTabs({ practiceAreas }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = practiceAreas[activeIndex]

  return (
    <section id="practiceareas" className="bg-brand-surface py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-bold uppercase tracking-widest text-accent mb-3"
          >
            Areas of Expertise
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-brand-heading"
          >
            Practice Areas
          </motion.h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {practiceAreas.map((area, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                i === activeIndex
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-brand-card text-brand-muted border border-brand-border hover:border-accent/40'
              }`}
            >
              <i className={`${area.icon} text-xs`} />
              {area.name}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: description + CTA */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${active.icon} text-accent text-xl`} />
                  <h3 className="text-2xl font-bold text-brand-heading">
                    {active.name}
                  </h3>
                </div>
                <p className="text-brand-muted leading-relaxed mb-8">
                  {active.description}
                </p>
                <a
                  href="#leadform"
                  className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-btn hover:opacity-90 transition-opacity text-sm"
                >
                  Schedule a Free Consultation
                </a>
              </div>

              {/* Right: stat + case types */}
              <div>
                <div className="bg-brand-bg rounded-xl p-6 border border-brand-border mb-6">
                  <div className="text-4xl font-black text-accent mb-1">
                    {active.statValue}
                  </div>
                  <div className="text-brand-muted text-sm font-semibold uppercase tracking-wide">
                    {active.statLabel}
                  </div>
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brand-heading mb-4">
                  Cases We Handle
                </h4>
                <ul className="space-y-2">
                  {active.caseTypes.map((ct, j) => (
                    <li key={j} className="flex items-center gap-2 text-brand-muted text-sm">
                      <i className="fa-solid fa-check text-accent text-xs" />
                      {ct}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
