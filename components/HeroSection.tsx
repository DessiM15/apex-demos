'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

/** Converts __word__ markers to underlined spans */
function parseUnderline(text: string): React.ReactNode[] {
  return text.split(/(__.*?__)/).map((part, i) => {
    if (part.startsWith('__') && part.endsWith('__')) {
      return <span key={i} className="underline decoration-2 underline-offset-8">{part.slice(2, -2)}</span>
    }
    return part
  })
}

interface HeroTheme {
  heroLayout?: 'left' | 'center' | 'clean-center' | 'split' | 'portrait' | 'zen' | 'editorial'
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
  heroImages?:    string[]
  heroCTAs?:      { label: string; href: string }[]
  heroCredentials?: string[]
  ctaLink:        string
  formCTA:        string
  theme?:         HeroTheme
}

export default function HeroSection({ headline, subheadline, heroImage, heroVideo, heroOverlay, heroIntroText, heroFont, heroPortrait, heroTagline, heroImages, heroCTAs, heroCredentials, ctaLink, formCTA, theme }: Props) {
  const [showIntro, setShowIntro] = useState(!!heroIntroText)
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  // If the video is already cached/ready when the component mounts, show it immediately
  useEffect(() => {
    const vid = videoRef.current
    if (vid && vid.readyState >= 3) {
      setVideoReady(true)
    }
  }, [heroVideo])

  /* ── Background (shared across all layouts) ── */
  const background = heroVideo ? (
    <div className="absolute inset-0 bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setVideoReady(true)}
        onCanPlay={() => setVideoReady(true)}
        className="w-full h-full object-cover scale-105 transition-opacity duration-500"
        style={{ opacity: videoReady ? 1 : 0 }}
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
                    {heroCTAs && heroCTAs.length > 0 ? (
                      <>
                        <a
                          href={heroCTAs[0].href}
                          className="text-white font-bold px-8 py-4 rounded-btn hover:opacity-90 transition-opacity text-base"
                          style={{ backgroundColor: accentColor }}
                        >
                          {heroCTAs[0].label}
                        </a>
                        {heroCTAs[1] && (
                          <a
                            href={heroCTAs[1].href}
                            className="border-2 border-white text-white font-bold px-8 py-4 rounded-btn hover:bg-white hover:text-gray-900 transition-colors text-base"
                          >
                            {heroCTAs[1].label}
                          </a>
                        )}
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </motion.div>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
                    {heroCredentials && heroCredentials.length > 0 ? (
                      heroCredentials.map((cred, i) => (
                        <span key={i} className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          {cred}
                        </span>
                      ))
                    ) : (
                      <>
                        <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          Licensed &amp; Insured
                        </span>
                        <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          12+ Years Experience
                        </span>
                        <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          5 Star Rated
                        </span>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    )
  }

  /* ── ZEN layout (Wellness / Spa) ── */
  if (layout === 'zen') {
    return (
      <section className="relative min-h-[650px] flex items-center overflow-hidden">
        {background}
        {/* Warm brown gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(61,52,40,${overlayOpacity + 0.15}), rgba(61,52,40,${overlayOpacity}), rgba(61,52,40,${overlayOpacity + 0.1}))`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 w-full flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {showIntro && heroIntroText ? introBlock : (
              <motion.div
                key="content"
                className="flex flex-col items-center text-center w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Decorative spa icon */}
                <motion.div variants={fadeInUp} className="mb-6">
                  <i className="fa-solid fa-spa text-3xl text-white/60"></i>
                </motion.div>
                {/* Thin vertical line */}
                <motion.div variants={fadeInUp} className="w-px h-12 bg-white/40 mb-8" />
                {/* Headline (Cormorant via .zen class) */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-wide"
                >
                  {headline}
                </motion.h1>
                {/* Cursive subheadline */}
                <motion.p
                  variants={fadeInUp}
                  className="zen-script text-2xl md:text-3xl text-white/80 mt-6 mb-8"
                >
                  {subheadline}
                </motion.p>
                {/* Thin horizontal line */}
                <motion.div variants={fadeInUp} className="w-24 h-px bg-white/40 mb-10" />
                {/* CTA button */}
                <motion.div variants={fadeInUp}>
                  <a
                    href={ctaLink}
                    className="inline-block rounded-full px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white border border-white/40 hover:bg-white/10 transition-colors"
                    style={{ backgroundColor: accentColor + '66' }}
                  >
                    {formCTA}
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    )
  }

  /* ── EDITORIAL layout (Photography / Fashion) ── */
  if (layout === 'editorial') {
    return (
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        {background}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,${overlayOpacity}), rgba(0,0,0,0.3))`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            {showIntro && heroIntroText ? introBlock : (
              <motion.div
                key="content"
                className="flex flex-col items-center text-center w-full"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Thin decorative line */}
                <motion.div variants={fadeInUp} className="w-12 h-px mb-8" style={{ backgroundColor: accentColor }} />
                {/* Small label */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 mb-6"
                >
                  Editorial Photography
                </motion.p>
                {/* Headline in accent color */}
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wide"
                  style={{ color: accentColor }}
                >
                  {headline}
                </motion.h1>
                {/* Subheadline */}
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-white/70 mt-6 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                  {subheadline}
                </motion.p>
                {/* Pill CTA button */}
                <motion.div variants={fadeInUp}>
                  <a
                    href={ctaLink}
                    className="inline-block rounded-full px-12 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  >
                    {formCTA}
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    )
  }

  /* ── CLEAN-CENTER layout (Dental / Minimal) ── */
  if (layout === 'clean-center') {
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
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-bold tracking-tight text-balance"
                >
                  {parseUnderline(headline)}
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg md:text-xl text-white/80 mt-6 mb-14 max-w-2xl mx-auto"
                >
                  {subheadline}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <a
                    href={ctaLink}
                    className="inline-flex items-center gap-4 text-white font-semibold uppercase tracking-[0.2em] text-sm hover:opacity-80 transition-opacity"
                  >
                    {formCTA}
                    <span className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white">
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </span>
                  </a>
                </motion.div>
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
                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
                  {heroCTAs && heroCTAs.length > 0 ? (
                    <>
                      <a
                        href={heroCTAs[0].href}
                        className="text-white font-bold px-10 py-4 rounded-btn hover:opacity-90 transition-opacity text-base inline-block"
                        style={{ backgroundColor: accentColor }}
                      >
                        {heroCTAs[0].label}
                      </a>
                      {heroCTAs[1] && (
                        <a
                          href={heroCTAs[1].href}
                          className="border-2 border-white text-white font-bold px-10 py-4 rounded-btn hover:bg-white/10 transition-colors text-base inline-block"
                        >
                          {heroCTAs[1].label}
                        </a>
                      )}
                    </>
                  ) : (
                    <a
                      href={ctaLink}
                      className="text-white font-bold px-12 py-4 rounded-btn hover:opacity-90 transition-opacity text-base inline-block"
                      style={{ backgroundColor: accentColor }}
                    >
                      {formCTA}
                    </a>
                  )}
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
            {/* Right column — collage or single portrait */}
            {heroImages && heroImages.length >= 3 ? (
              <motion.div variants={fadeInUp} className="md:w-2/5">
                <div className="grid grid-cols-2 gap-3">
                  <img
                    src={heroImages[0]}
                    alt="Completed project"
                    className={`col-span-2 w-full h-48 object-cover rounded-xl ${dark ? 'shadow-2xl' : 'shadow-lg border border-gray-200'}`}
                  />
                  <img
                    src={heroImages[1]}
                    alt="Work in progress"
                    className={`w-full h-36 object-cover rounded-xl ${dark ? 'shadow-2xl' : 'shadow-lg border border-gray-200'}`}
                  />
                  <img
                    src={heroImages[2]}
                    alt="Our team"
                    className={`w-full h-36 object-cover rounded-xl ${dark ? 'shadow-2xl' : 'shadow-lg border border-gray-200'}`}
                  />
                </div>
              </motion.div>
            ) : heroPortrait ? (
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
            ) : null}
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
