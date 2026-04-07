'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Props {
  headline:    string
  subheadline: string
  heroImage:   string
  ctaLink:     string
  formCTA:     string
}

export default function HeroSection({ headline, subheadline, heroImage, ctaLink, formCTA }: Props) {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-apex-blue/90 via-apex-blue/75 to-apex-blue/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer} initial="hidden" animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            {headline}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-10"
          >
            {subheadline}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a
              href={ctaLink}
              className="bg-white text-apex-blue font-bold px-8 py-4 rounded-btn hover:bg-apex-blue-light transition-colors shadow-card-hover text-base"
            >
              {formCTA}
            </a>
            <a
              href="#bio"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-btn hover:bg-white hover:text-apex-blue transition-colors text-base"
            >
              Meet Our Team
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
