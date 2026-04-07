'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

export default function BrandedPresence() {
  const features = [
    { icon: 'fa-solid fa-globe', title: 'Custom Domain', desc: 'Your own branded URL — yourname.com — fully managed and hosted for you.' },
    { icon: 'fa-brands fa-youtube', title: 'YouTube Channel', desc: 'A branded YouTube channel with all your video and podcast content published automatically.' },
    { icon: 'fa-solid fa-palette', title: 'Full Brand Kit', desc: 'Custom color palette, logo placement, typography, and visual identity across every touchpoint.' },
    { icon: 'fa-solid fa-link', title: 'Unified Link Hub', desc: 'One professional link-in-bio page connecting all your platforms, landing pages, and contact info.' },
  ]

  return (
    <section className="bg-brand-surface py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-red bg-apex-red-light px-3 py-1 rounded-pill">
            PulseCommand Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-apex-blue mt-4 mb-3">
            Your Branded Online Presence
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            A complete, unified brand identity across every platform — custom domain, YouTube channel, and full brand kit included.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-brand-card rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 p-6 border border-brand-border"
            >
              <span className="text-3xl text-apex-blue mb-4 block"><i className={f.icon}></i></span>
              <h3 className="font-bold text-brand-text text-lg mb-2">{f.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
