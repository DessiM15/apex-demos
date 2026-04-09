'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { PodcastEpisode } from '@/data/mockContent'

interface Props {
  episodes: PodcastEpisode[]
  industryName: string
  packageName?: string
}

export default function PodcastPlayer({ episodes, industryName, packageName }: Props) {
  const [playing, setPlaying] = useState<number | null>(null)
  const [progress] = useState(34)

  return (
    <section className="bg-apex-navy py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-pill">
            Podcast Marketing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3 text-balance">
            Your AI-Powered Podcast
          </h2>
          {packageName ? (
            <p className="text-white/70 max-w-xl mx-auto">
              With your <span className="font-semibold text-white">{packageName}</span> package, you get <span className="font-semibold text-white">4 professionally produced podcast episodes per month</span> in your AI-cloned voice — distributed to Spotify, Apple, YouTube, and more.
            </p>
          ) : (
            <p className="text-white/70 max-w-xl mx-auto">
              4 professionally produced episodes monthly in your AI-cloned voice — distributed to Spotify, Apple, YouTube, and more.
            </p>
          )}
        </motion.div>

        {/* Player Card */}
        <motion.div
          className="bg-white/10 backdrop-blur rounded-card border border-white/20 p-6 mb-6"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-apex-blue to-apex-red flex items-center justify-center text-white text-2xl flex-shrink-0">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-base truncate">
                {episodes[playing ?? 0].title}
              </p>
              <p className="text-white/60 text-sm mt-0.5">
                {industryName} Insights Podcast • {episodes[playing ?? 0].duration}
              </p>
            </div>
            <button
              onClick={() => setPlaying(p => p === null ? 0 : null)}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-apex-blue hover:bg-apex-blue-light transition-colors flex-shrink-0 text-xl"
            >
              {playing !== null ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
            </button>
          </div>
          {/* Progress bar */}
          <div className="space-y-1">
            <div className="w-full bg-white/20 rounded-full h-1.5 cursor-pointer">
              <div className="bg-white h-1.5 rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between text-xs text-white/50">
              <span>12:34</span>
              <span>{episodes[playing ?? 0].duration}</span>
            </div>
          </div>
          {/* Platform icons */}
          <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/10">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wide">Available on:</span>
            {['Spotify', 'Apple', 'YouTube', 'Amazon'].map(p => (
              <span key={p} className="text-xs text-white/60 bg-white/10 px-2.5 py-1 rounded-pill">{p}</span>
            ))}
          </div>
        </motion.div>

        {/* Episode List */}
        <motion.div
          className="space-y-3"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {episodes.map((ep, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              onClick={() => setPlaying(i)}
              className={`flex items-center gap-4 p-4 rounded-card border cursor-pointer transition-all duration-200
                ${playing === i
                  ? 'bg-white/15 border-white/30'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm flex-shrink-0
                ${playing === i ? 'bg-white text-apex-blue' : 'bg-white/20 text-white'}`}>
                {playing === i ? <i className="fa-solid fa-pause"></i> : `${i + 1}`}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{ep.title}</p>
                <p className="text-white/50 text-xs mt-0.5">{ep.description}</p>
              </div>
              <span className="text-white/50 text-xs flex-shrink-0">{ep.duration}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
