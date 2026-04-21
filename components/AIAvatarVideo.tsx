'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

export default function AIAvatarVideo() {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!modalOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [modalOpen])

  return (
    <>
      <section className="bg-brand-bg py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-apex-red bg-apex-red-light px-3 py-1 rounded-pill">
              PulseCommand Exclusive
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mt-4 mb-3">
              AI Avatar Videos via HeyGen
            </h2>
            <p className="text-brand-muted max-w-xl mx-auto">
              Your face. Your voice. Fully automated video content produced by AI — ready to post across every platform.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {/* Video Card */}
            <motion.div variants={fadeInUp}>
              <div
                className="relative bg-gray-900 rounded-card overflow-hidden aspect-video shadow-card-hover cursor-pointer group"
                onClick={() => setModalOpen(true)}
              >
                <img
                  src="/thumbnails/heygen-avatar-thumb.jpg"
                  alt="AI Avatar Video Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className="fa-solid fa-play text-white text-xl ml-1"></i>
                  </div>
                </div>
                {/* HeyGen badge */}
                <div className="absolute top-3 right-3 bg-white/90 text-apex-blue text-xs font-bold px-3 py-1 rounded-pill">
                  <i className="fa-solid fa-robot"></i> Powered by HeyGen
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                  0:47
                </div>
              </div>
            </motion.div>

            {/* Feature Description */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-bold text-brand-heading mb-4">Your Digital Twin — On Autopilot</h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">
                HeyGen creates a photorealistic AI avatar that looks and sounds like you. We produce professional video content monthly — educational tips, promotional clips, and client-facing messages — all without you stepping in front of a camera.
              </p>
              <ul className="space-y-3">
                {[
                  'Photorealistic AI avatar trained on your likeness',
                  'AI-cloned voice that matches your tone and cadence',
                  'Monthly video content for Reels, Shorts, and TikTok',
                  'Professional scripts written and produced for you',
                  'Ready to post on all social platforms instantly',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-text">
                    <i className="fa-solid fa-check-circle text-green-500 mt-0.5"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              className="relative z-10 w-full max-w-[720px] mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <i className="fa-solid fa-xmark text-white text-lg" />
              </button>
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-black border-2 border-white/10">
                <div className="aspect-video">
                  <video
                    ref={videoRef}
                    src="https://tzbit9weynbew4ub.public.blob.vercel-storage.com/videos/heygen-avatar.mp4"
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
