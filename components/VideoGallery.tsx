'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { ShortFormVideo } from '@/data/mockContent'

interface Props {
  hooks: string[]
  industryName: string
  packageName?: string
  shortFormVideos?: ShortFormVideo[]
}

export default function VideoGallery({ hooks, industryName, packageName, shortFormVideos }: Props) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [modalVideo, setModalVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const platformBadges = ['Reels', 'Shorts', 'TikTok', 'Reels']
  const durations = ['0:30', '0:45', '0:15', '0:60']

  const videos = [
    { hook: hooks[0], duration: durations[0], badge: platformBadges[0] },
    { hook: hooks[1] ?? hooks[0], duration: durations[1], badge: platformBadges[1] },
    { hook: `"Here's a behind-the-scenes look at how we serve ${industryName} clients every day." [15 sec reel]`, duration: durations[2], badge: platformBadges[2] },
    { hook: `"3 questions every ${industryName} prospect asks — and how to answer them." [45 sec reel]`, duration: durations[3], badge: platformBadges[3] },
  ]

  function stripBrackets(text: string) {
    return text.replace(/\[.*?\]/g, '').replace(/"/g, '').trim()
  }

  // Close modal on Escape key
  useEffect(() => {
    if (!modalVideo) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalVideo(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalVideo])

  // Auto-play video when modal opens
  useEffect(() => {
    if (modalVideo && videoRef.current) {
      videoRef.current.play()
    }
  }, [modalVideo])

  function handleCardClick(i: number) {
    const sf = shortFormVideos?.[i]
    if (sf?.src) {
      setModalVideo(sf.src)
    }
  }

  return (
    <>
      {/* ── Video Grid Section ── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-balance">
              Short-Form Video Content
            </h2>
            {packageName ? (
              <p className="text-gray-500 max-w-2xl mx-auto">
                With your <span className="font-semibold text-gray-700">{packageName}</span> package, you get <span className="font-semibold text-gray-700">professional Reels, Shorts, and TikToks produced monthly</span> — ready to post across every platform. Here is a sample:
              </p>
            ) : (
              <p className="text-gray-500 max-w-2xl mx-auto">
                Professional Reels, Shorts, and TikToks produced monthly — ready to post across every platform
              </p>
            )}
          </motion.div>

          {/* 2x2 Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {videos.map((v, i) => {
              const sf = shortFormVideos?.[i]
              const hasVideo = !!sf?.src
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`group ${hasVideo ? 'cursor-pointer' : 'cursor-default'}`}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => handleCardClick(i)}
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-lg"
                    animate={hoveredIdx === i ? { scale: 1.03 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Thumbnail */}
                    <div className="aspect-[9/16] relative">
                      {sf?.thumbnail ? (
                        <>
                          <img
                            src={sf.thumbnail}
                            alt={stripBrackets(v.hook)}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          {/* Subtle dark overlay for text legibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-b from-[#243a8f] to-[#1a1a2e]" />
                      )}

                      {/* Centered play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className={`w-14 h-14 rounded-full backdrop-blur-sm flex items-center justify-center border border-white/30 ${
                            hasVideo ? 'bg-white/25' : 'bg-white/20'
                          }`}
                          animate={hoveredIdx === i ? { scale: 1.15 } : { scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <i className="fa-solid fa-play text-white text-xl ml-1" />
                        </motion.div>
                      </div>

                      {/* Platform badge top left */}
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {v.badge}
                        </span>
                      </div>

                      {/* Duration badge bottom right */}
                      <div className="absolute bottom-3 right-3">
                        <span className="text-xs font-medium text-white bg-black/70 px-2 py-0.5 rounded">
                          {v.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  {/* Video title */}
                  <p className="text-gray-900 font-semibold text-sm text-center mt-3 px-2 line-clamp-2">
                    {stripBrackets(v.hook)}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── HeyGen Section ── */}
      <section className="bg-[#1a1a2e] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {/* Left content */}
            <div>
              <span className="inline-block text-white text-xs font-bold bg-[#cf181d] px-4 py-1.5 rounded-full mb-6">
                Powered by HeyGen
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                AI Avatar Videos
              </h3>
              <p className="text-white/70 text-lg mb-8">
                Your AI-cloned avatar delivers personalized video messages to every prospect — automatically
              </p>
              <ul className="space-y-4">
                {[
                  'Looks and sounds exactly like you',
                  'Generated at scale — one video or one thousand',
                  'Included with your package setup',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <i className="fa-solid fa-check text-[#cf181d] mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Avatar mockup card */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[280px]">
                <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#111127]">
                  <div className="aspect-[9/16] bg-gradient-to-br from-[#243a8f] to-[#cf181d] relative">
                    {/* HeyGen badge */}
                    <div className="absolute top-3 left-0 right-0 flex justify-center">
                      <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                        HeyGen Powered
                      </span>
                    </div>
                    {/* Avatar silhouette + text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center mb-4">
                        <i className="fa-solid fa-user text-white/60 text-4xl" />
                      </div>
                      <p className="text-white font-bold text-lg">AI Avatar</p>
                    </div>
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mt-40">
                        <i className="fa-solid fa-play text-white text-xl ml-1" />
                      </div>
                    </div>
                    {/* Bottom text */}
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-white/60 text-xs">Your personalized avatar — coming with setup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Platform Distribution Row ── */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-4">
            Your videos are distributed to:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Instagram Reels', 'TikTok', 'YouTube Shorts', 'Facebook', 'LinkedIn'].map(p => (
              <span key={p} className="text-sm text-[#243a8f] bg-[#EBF0FC] font-semibold px-4 py-2 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Lightbox Modal ── */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setModalVideo(null)}
            />

            {/* Modal content */}
            <motion.div
              className="relative z-10 w-full max-w-[360px] mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {/* Close button */}
              <button
                onClick={() => setModalVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark text-white text-lg" />
              </button>

              {/* Phone-style frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-white/10">
                <div className="aspect-[9/16] relative">
                  <video
                    ref={videoRef}
                    src={modalVideo}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    autoPlay
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
