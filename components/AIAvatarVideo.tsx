'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

export default function AIAvatarVideo() {
  return (
    <section className="bg-brand-bg py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-red bg-apex-red-light px-3 py-1 rounded-pill">
            PulseCommand Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-apex-blue mt-4 mb-3">
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
          {/* Video Mockup */}
          <motion.div variants={fadeInUp}>
            <div className="relative bg-gray-900 rounded-card overflow-hidden aspect-video shadow-card-hover">
              {/* Gradient background simulating video */}
              <div className="absolute inset-0 bg-gradient-to-br from-apex-blue via-apex-blue-dark to-apex-navy"></div>
              {/* Avatar placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mb-4">
                  <i className="fa-solid fa-user text-white text-3xl"></i>
                </div>
                <p className="text-white font-bold text-lg mb-1">AI Avatar Video Preview</p>
                <p className="text-white/60 text-sm">Your personalized HeyGen avatar — coming soon</p>
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center">
                  <i className="fa-solid fa-play text-white text-xl ml-1"></i>
                </div>
              </div>
              {/* HeyGen badge */}
              <div className="absolute top-3 right-3 bg-white/90 text-apex-blue text-xs font-bold px-3 py-1 rounded-pill">
                <i className="fa-solid fa-robot"></i> Powered by HeyGen
              </div>
              {/* Duration badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                0:45
              </div>
            </div>
          </motion.div>

          {/* Feature Description */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-apex-blue mb-4">Your Digital Twin — On Autopilot</h3>
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
  )
}
