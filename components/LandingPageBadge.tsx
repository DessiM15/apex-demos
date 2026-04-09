'use client'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '@/lib/animations'

interface Props {
  industryHook: string
}

export default function LandingPageBadge({ industryHook }: Props) {
  return (
    <section className="bg-apex-blue-light py-6 px-4">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
      >
        <div className="flex items-center gap-3">
          <span className="bg-apex-blue text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-card shrink-0">
            <i className="fa-solid fa-chart-simple"></i>
          </span>
          <div className="text-left">
            <p className="font-bold text-apex-blue text-base">
              Did You Know?
            </p>
            <p className="text-brand-muted text-sm">
              {industryHook}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
