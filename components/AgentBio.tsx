'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'

interface Props { name: string; title: string; creds: string; bio: string }

export default function AgentBio({ name, title, creds, bio }: Props) {
  return (
    <section id="bio" className="bg-brand-bg py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 bg-brand-surface rounded-card p-8 md:p-12 shadow-card"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Avatar placeholder */}
          <motion.div variants={fadeInUp} className="shrink-0">
            <div className="w-40 h-40 rounded-full bg-apex-blue-light border-4 border-apex-blue flex items-center justify-center text-6xl shadow-card">
              <i className="fa-solid fa-user"></i>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeInUp} className="flex-1">
            <h2 className="text-3xl font-bold text-brand-heading mb-1">{name}</h2>
            <p className="text-apex-red font-semibold text-base mb-1">{title}</p>
            <p className="text-brand-muted text-sm mb-5 pb-5 border-b border-brand-border">{creds}</p>
            <p className="text-brand-text leading-relaxed text-base mb-6">{bio}</p>
            <div className="flex flex-wrap gap-3">
              {['LinkedIn', 'Facebook', 'Instagram'].map(s => (
                <span
                  key={s}
                  className="text-xs bg-apex-blue-light text-apex-blue font-semibold px-4 py-2 rounded-pill cursor-pointer hover:bg-apex-blue hover:text-white transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
