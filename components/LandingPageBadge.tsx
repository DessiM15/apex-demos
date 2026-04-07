'use client'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '@/lib/animations'

interface Props {
  count: string
  packageName: string
}

export default function LandingPageBadge({ count, packageName }: Props) {
  return (
    <section className="bg-apex-blue-light py-6 px-4">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
      >
        <div className="flex items-center gap-3">
          <span className="bg-apex-blue text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center shadow-card">
            {count === 'Unlimited' ? <i className="fa-solid fa-infinity"></i> : `x${count}`}
          </span>
          <div className="text-left">
            <p className="font-bold text-apex-blue text-base">
              {count === 'Unlimited' ? 'Unlimited' : count} AI-Generated Landing Pages
            </p>
            <p className="text-brand-muted text-sm">
              Included in your {packageName} package — this page is one of them
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
