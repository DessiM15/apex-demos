'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface HeroTheme {
  heroLayout?: 'left' | 'center' | 'split' | 'portrait'
  heroOverlayOpacity?: number
  accentColor?: string
  headingStyle?: 'bold-tight' | 'light-wide' | 'mixed'
  heroDark?: boolean
}

interface Props {
  headline:       string
  subheadline:    string
  heroImage:      string
  heroVideo?:     string
  heroOverlay?:   boolean
  heroIntroText?: string
  heroFont?:      string
  heroPortrait?:  string
  heroTagline?:   string
  ctaLink:        string
  formCTA:        string
  theme?:         HeroTheme
}

export default function HeroSection({ headline, subheadline, heroImage, heroVideo, heroOverlay, heroIntroText, heroFont, heroPortrait, heroTagline, ctaLink, formCTA, theme }: Props) {
  const [showIntro, setShowIntro] = useState(!!heroIntroText)

  const layout = theme?.heroLayout ?? 'left'
  const overlayOpacity = theme?.heroOverlayOpacity ?? 0.82
  const accentColor = theme?.accentColor ?? '#243a8f'
  const headingStyle = theme?.headingStyle ?? 'bold-tight'

  useEffect(() => {
    if (heroIntroText) {
      const timer = setTimeout(() => setShowIntro(false), 2800)
      return () => clearTimeout(timer)
    }
  }, [heroIntroText])

  /* ── Background (shared across all layouts) ── */
  const background = heroVideo ? (
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
  )

  /* ── Intro animation (shared) ── */
  const introBlock = (
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
  )

  /* ── When no theme is provided, fall back to legacy behavior ── */
  if (!theme) {
    return (
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        {background}
        {heroOverlay === false ? (
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-apex-blue/90 via-apex-blue/75 to-apex-blue/40" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <AnimatePresence mode="wait">
            {showIntro && heroIntroText ? introBlock : (
              <motion.div
                key="content"
                className="max-w-2xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance"
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

  /* ════════════════════════════════════════════════
     THEMED LAYOUTS (theme prop provided)
     ════════════════════════════════════════════════ */

  /* ── LEFT layout (Corporate) ── */
  if (layout === 'left') {
    return (
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        {background}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,0.6), transparent)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <AnimatePresence mode="wait">
            {showIntro && heroIntroText ? introBlock : (
              <motion.div
                key="content"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="max-w-2xl">
                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-balance"
                  >
                    {headline}
                  </motion.h1>
                  <motion.p
                    variants={fadeInUp}
                    className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
                  >
                    {subheadline}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <a
                      href={ctaLink}
                      className="text-white font-bold px-8 py-4 rounded-btn hover:opacity-90 transition-opacity text-base"
                      style={{ backgroundColor: accentColor }}
                    >
                      {formCTA}
                    </a>
                    <a
                      href="#bio"
                      className="border-2 border-white text-white font-bold px-8 py-4 rounded-btn hover:bg-white hover:text-gray-900 transition-colors text-base"
                    >
                      Meet Our Team
                    </a>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Licensed &amp; Insured
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      12+ Years Experience
                    </span>
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      5 Star Rated
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    )
  }

  /* ── CENTER layout (Creative & Health) ── */
  if (layout === 'center') {
    const headlineClasses =
      headingStyle === 'light-wide'
        ? 'text-5xl md:text-6xl text-white leading-tight font-light tracking-widest uppercase'
        : 'text-5xl md:text-6xl text-white leading-tight font-bold tracking-tight'

    return (
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {background}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {showIntro && heroIntroText ? introBlock : (
              <motion.div
                key="content"
                className="flex flex-col items-center text-center w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeInUp} className="w-16 h-px bg-white mx-auto mb-6" />
                <motion.h1
                  variants={fadeInUp}
                  className={headlineClasses}
                >
                  {headline}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/80 mt-4 mb-10 max-w-2xl mx-auto"
                >
                  {subheadline}
                </motion.p>
                <motion.div variants={fadeInUp} className="w-16 h-px bg-white mx-auto mb-10" />
                <motion.div variants={fadeInUp}>
                  <a
                    href={ctaLink}
                    className="text-white font-bold px-12 py-4 rounded-btn hover:opacity-90 transition-opacity text-base inline-block"
                    style={{ backgroundColor: accentColor }}
                  >
                    {formCTA}
                  </a>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 mt-10">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="text-white/70 text-sm">Clients</div>
                  </div>
                  <div className="w-px h-8 bg-white/30" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">10</div>
                    <div className="text-white/70 text-sm">Years</div>
                  </div>
                  <div className="w-px h-8 bg-white/30" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">5 Star</div>
                    <div className="text-white/70 text-sm">Rated</div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    )
  }

  /* ── PORTRAIT layout (Personal / Advisor) ── */
  if (layout === 'portrait') {
    const dark = theme?.heroDark !== false

    return (
      <section className={`relative min-h-[560px] flex items-center overflow-hidden ${dark ? 'bg-[#1a1a2e]' : 'bg-white'}`}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12 w-full"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left column — text */}
            <div className="md:w-3/5">
              {heroTagline && (
                <motion.p
                  variants={fadeInUp}
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: accentColor }}
                >
                  {heroTagline}
                </motion.p>
              )}
              <motion.h1
                variants={fadeInUp}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance ${dark ? 'text-white' : 'text-gray-900'}`}
              >
                {headline}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className={`text-lg md:text-xl leading-relaxed mb-10 max-w-xl ${dark ? 'text-white/75' : 'text-gray-600'}`}
              >
                {subheadline}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a
                  href={ctaLink}
                  className="text-white font-bold px-10 py-4 rounded-btn hover:opacity-90 transition-opacity text-base shadow-lg"
                  style={{ backgroundColor: accentColor }}
                >
                  {formCTA}
                </a>
                <a
                  href="#bio"
                  className={`border-2 font-bold px-8 py-4 rounded-btn transition-colors text-base ${dark ? 'border-white/30 text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                >
                  Learn More
                </a>
              </motion.div>
            </div>
            {/* Right column — portrait photo */}
            {heroPortrait && (
              <motion.div variants={fadeInUp} className="md:w-2/5 flex justify-center">
                <div className="relative">
                  {dark && (
                    <div
                      className="absolute -inset-1 rounded-2xl opacity-30 blur-xl"
                      style={{ backgroundColor: accentColor }}
                    />
                  )}
                  <img
                    src={heroPortrait}
                    alt="Professional portrait"
                    className={`relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl ${dark ? 'shadow-2xl' : 'shadow-xl border border-gray-200'}`}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    )
  }

  /* ── SPLIT layout (Trade Services) ── */
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden">
      {background}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <AnimatePresence mode="wait">
          {showIntro && heroIntroText ? introBlock : (
            <motion.div
              key="content"
              className="flex flex-col md:flex-row items-center gap-8 w-full"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Left column */}
              <div className="md:w-3/5">
                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black uppercase text-white leading-tight tracking-tight mb-4"
                >
                  {headline}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/80 mb-8"
                >
                  {subheadline}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <a
                    href={ctaLink}
                    className="w-full md:w-auto inline-block font-bold px-10 py-4 rounded-btn text-white text-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  >
                    {formCTA}
                  </a>
                </motion.div>
              </div>
              {/* Right column */}
              <motion.div variants={fadeInUp} className="md:w-2/5">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl font-black" style={{ color: accentColor }}>20+</div>
                      <div className="text-white text-sm uppercase tracking-wide mt-1">Years in Business</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black" style={{ color: accentColor }}>500+</div>
                      <div className="text-white text-sm uppercase tracking-wide mt-1">Jobs Completed</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black" style={{ color: accentColor }}>24/7</div>
                      <div className="text-white text-sm uppercase tracking-wide mt-1">Emergency Service</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
