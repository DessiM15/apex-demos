'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { CaseResult } from '@/data/mockContent'

interface Props {
  caseResults: CaseResult[]
}

export default function CaseResults({ caseResults }: Props) {
  return (
    <section id="caseresults" className="bg-brand-bg py-20 px-4">
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
            Proven Track Record
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-brand-heading"
          >
            Case Results
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseResults.map((result, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-brand-card border border-brand-border rounded-xl p-8 hover:border-accent/40 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-accent mb-3">
                {result.amount}
              </div>
              <div className="w-12 h-0.5 bg-accent/40 mb-4" />
              <h3 className="text-lg font-bold text-brand-heading mb-2">
                {result.caseType}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#leadform"
            className="inline-block bg-accent text-white font-bold px-10 py-4 rounded-btn hover:opacity-90 transition-opacity text-base"
          >
            Get Your Free Case Evaluation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
