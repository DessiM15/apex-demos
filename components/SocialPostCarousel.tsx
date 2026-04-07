'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '@/lib/animations'

interface Props { posts: string[]; industryName: string }

export default function SocialPostCarousel({ posts, industryName }: Props) {
  const [current, setCurrent] = useState(0)

  function prev() { setCurrent(i => (i - 1 + posts.length) % posts.length) }
  function next() { setCurrent(i => (i + 1) % posts.length) }

  return (
    <section className="bg-apex-blue-light py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-white px-3 py-1 rounded-pill">
            Social Media
          </span>
          <h2 className="text-3xl font-bold text-apex-blue mt-4 mb-3">
            30–150 Social Posts Per Month
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Scroll-stopping posts crafted for your {industryName} audience — published consistently across every platform.
          </p>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="max-w-sm mx-auto"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Phone frame */}
          <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-card-hover">
            <div className="bg-white rounded-[2rem] overflow-hidden">
              {/* Status bar */}
              <div className="bg-white px-5 py-2 flex justify-between items-center">
                <span className="text-xs font-bold text-brand-text">9:41</span>
                <div className="w-24 h-5 bg-gray-900 rounded-full" />
                <div className="flex gap-1">
                  <span className="text-xs text-brand-text">●●●</span>
                </div>
              </div>
              {/* IG header */}
              <div className="border-b border-brand-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-apex-blue to-apex-red flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-text">apex_{industryName.toLowerCase().replace(/\s/g,'_')}</p>
                    <p className="text-xs text-brand-muted">Sponsored</p>
                  </div>
                </div>
                <span className="text-brand-muted text-lg">⋯</span>
              </div>
              {/* Post image */}
              <div className="h-48 bg-gradient-to-br from-apex-blue to-apex-blue-dark flex items-center justify-center px-4">
                <p className="text-white font-bold text-center text-sm leading-snug">
                  {posts[current].split(' ').slice(0, 8).join(' ')}...
                </p>
              </div>
              {/* Actions */}
              <div className="px-4 py-3 flex gap-4">
                <span className="text-xl text-brand-muted"><i className="fa-regular fa-heart"></i></span>
                <span className="text-xl text-brand-muted"><i className="fa-regular fa-comment"></i></span>
                <span className="text-xl text-brand-muted"><i className="fa-regular fa-paper-plane"></i></span>
              </div>
              {/* Caption */}
              <div className="px-4 pb-4">
                <p className="text-xs text-brand-text leading-relaxed line-clamp-4">
                  {posts[current]}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-apex-blue text-white font-bold hover:bg-apex-blue-dark transition-colors flex items-center justify-center text-lg">
              ‹
            </button>
            <div className="flex gap-2">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${current === i ? 'bg-apex-blue' : 'bg-apex-blue/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-apex-blue text-white font-bold hover:bg-apex-blue-dark transition-colors flex items-center justify-center text-lg">
              ›
            </button>
          </div>
          <p className="text-center text-brand-muted text-xs mt-3">
            Post {current + 1} of {posts.length} samples
          </p>
        </motion.div>

      </div>
    </section>
  )
}
