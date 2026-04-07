'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'

interface Props { hooks: string[]; industryName: string }

export default function VideoGallery({ hooks, industryName }: Props) {
  const [playing, setPlaying] = useState<number | null>(null)

  const videos = [
    { hook: hooks[0], label: 'Educational Reel', duration: '0:30', emoji: '🎓' },
    { hook: hooks[1] ?? hooks[0], label: 'Tips & Tricks', duration: '0:60', emoji: '💡' },
    { hook: `"Here's a behind-the-scenes look at how we serve ${industryName} clients every day." [15 sec reel]`, label: 'Behind the Scenes', duration: '0:15', emoji: '🎬' },
    { hook: `"3 questions every ${industryName} prospect asks — and how to answer them." [45 sec reel]`, label: 'FAQ Reel', duration: '0:45', emoji: '❓' },
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            Video Production
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-apex-blue mt-4 mb-3">
            Short-Form Video Content
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Professional Reels, Shorts, and TikToks produced monthly — ready to post on every platform.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {videos.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group cursor-pointer"
              onClick={() => setPlaying(playing === i ? null : i)}
            >
              {/* Video thumbnail */}
              <div className="relative bg-gradient-to-br from-apex-blue to-apex-navy rounded-card overflow-hidden aspect-[9/16] mb-3 shadow-card hover:shadow-card-hover transition-all">
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-4xl mb-3">{v.emoji}</span>
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-4">
                    {v.hook.replace(/\[.*?\]/g, '').replace(/"/g, '').trim()}
                  </p>
                </div>
                {/* Play button overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-200
                  ${playing === i ? 'bg-black/50' : 'bg-black/20 group-hover:bg-black/40'}`}>
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <span className="text-apex-blue text-xl ml-0.5">
                      {playing === i ? '⏸' : '▶'}
                    </span>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded font-medium">
                  {v.duration}
                </div>
              </div>
              {/* Label */}
              <p className="text-brand-text font-semibold text-sm text-center">{v.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mt-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <p className="text-brand-muted text-sm font-semibold uppercase tracking-wide">Published to:</p>
          {['📱 Instagram Reels', '🎵 TikTok', '▶️ YouTube Shorts', '👔 LinkedIn', '📘 Facebook'].map(p => (
            <span key={p} className="text-sm text-apex-blue bg-apex-blue-light font-semibold px-4 py-2 rounded-pill">
              {p}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
