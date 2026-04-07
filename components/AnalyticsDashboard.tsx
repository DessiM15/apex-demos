'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, scaleIn, viewport } from '@/lib/animations'
import { AnalyticsStat } from '@/data/mockContent'

interface Props {
  stats:       AnalyticsStat[]
  packageName: string
}

export default function AnalyticsDashboard({ stats, packageName }: Props) {
  return (
    <section className="bg-apex-navy py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-red bg-apex-red-light px-3 py-1 rounded-pill">
            {packageName} Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Your Analytics Dashboard
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Real-time visibility into every campaign, every lead, every result — all in one place.
          </p>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-white/10 backdrop-blur rounded-card p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <p className="text-white/60 text-sm font-medium mb-2">{stat.label}</p>
              <p className="text-white text-3xl font-bold mb-1">{stat.value}</p>
              <p className={`text-xs font-semibold ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.positive ? '↑' : '↓'} {stat.change}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mock Chart Bar */}
        <motion.div
          className="bg-white/5 rounded-card p-6 border border-white/10"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-white font-bold text-lg">Monthly Performance</p>
              <p className="text-white/50 text-sm">Lead volume over the last 6 months</p>
            </div>
            <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-pill">Last 6 months</span>
          </div>
          {/* Fake bar chart */}
          <div className="flex items-end gap-3 h-32">
            {[42, 58, 51, 67, 74, 89].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-apex-blue rounded-t-sm hover:bg-blue-400 transition-colors cursor-pointer relative group"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0, originY: 1 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-3 mt-2">
            {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map(m => (
              <p key={m} className="flex-1 text-center text-white/40 text-xs">{m}</p>
            ))}
          </div>
        </motion.div>

        {/* Platform Icons */}
        <motion.div
          className="mt-10 text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <p className="text-white/50 text-sm mb-4 uppercase tracking-widest font-semibold">Tracking all your channels</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {['Landing Pages', 'Email', 'Social', 'Podcast', 'Video', 'Calls'].map(ch => (
              <span key={ch} className="text-white/60 text-sm font-medium bg-white/10 px-4 py-2 rounded-pill">
                {ch}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
