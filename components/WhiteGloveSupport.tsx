'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

export default function WhiteGloveSupport() {
  const steps = [
    { icon: 'fa-solid fa-handshake', title: 'Dedicated Onboarding', desc: 'A personal onboarding specialist walks you through every feature, sets up your accounts, and configures your entire platform.' },
    { icon: 'fa-solid fa-headset', title: 'Priority Support', desc: 'Direct line to our team. No tickets, no queues. Your questions answered within hours, not days.' },
    { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Full Content Setup', desc: 'We build your landing pages, write your content, design your emails, and launch your campaigns — you approve, we execute.' },
    { icon: 'fa-solid fa-arrows-rotate', title: 'Ongoing Optimization', desc: 'Monthly performance reviews, A/B testing, and content refreshes to keep your campaigns performing at peak.' },
  ]

  return (
    <section className="bg-apex-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-red bg-apex-red-light px-3 py-1 rounded-pill">
            PulseCommand Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            White-Glove Setup + Support
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            You focus on your clients. We handle everything else — from day one through every campaign, every month.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur rounded-card p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <span className="text-3xl text-white mb-4 block"><i className={s.icon}></i></span>
              <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
