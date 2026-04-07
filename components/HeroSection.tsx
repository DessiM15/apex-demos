'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Props {
  headline:       string
  subheadline:    string
  heroImage:      string
  heroVideo?:     string
  heroOverlay?:   boolean
  heroIntroText?: string
  heroFont?:      string
  ctaLink:        string
  formCTA:        string
}

export default function HeroSection({ headline, subheadline, heroImage, heroVideo, heroOverlay, heroIntroText, heroFont, ctaLink, formCTA }: Props) {
  const [showIntro, setShowIntro] = useState(!!heroIntroText)

  useEffect(() => {
    if (heroIntroText) {
      const timer = setTimeout(() => setShowIntro(false), 2800)
      return () => clearTimeout(timer)
    }
  }, [heroIntroText])

  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden">
      {/* Background image or video */}
      {heroVideo ? (
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}
      {/* Gradient overlay */}
      {heroOverlay === false ? (
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-apex-blue/90 via-apex-blue/75 to-apex-blue/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <AnimatePresence mode="wait">
          {showIntro && heroIntroText ? (
            <motion.div
              key="intro"
              className="flex items-center justify-center min-h-[280px]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                exit: { duration: 0.6 },
              }}
            >
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center tracking-wide leading-tight"
                style={heroFont ? { fontFamily: heroFont } : undefined}
              >
                {heroIntroText}
              </h1>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              className="max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
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
                {heroOverlay === false ? (
                  <>
                    <a
                      href={ctaLink}
                      className="bg-apex-blue text-white font-bold px-8 py-4 rounded-btn hover:bg-apex-blue-dark transition-colors shadow-card-hover text-base"
                    >
                      {formCTA}
                    </a>
                    <a
                      href="#bio"
                      className="border-2 border-white text-white font-bold px-8 py-4 rounded-btn hover:bg-white/10 transition-colors text-base"
                    >
                      Meet Our Team
                    </a>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
