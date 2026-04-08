'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { Testimonial } from '@/data/industries'

interface TestimonialsTheme {
  testimonialsLayout?: 'cards-3' | 'cards-2-large' | 'list-style'
  accentColor?: string
  headingStyle?: 'bold-tight' | 'light-wide' | 'mixed'
}

interface Props {
  testimonials: Testimonial[]
  theme?: TestimonialsTheme
}

export default function TestimonialsSection({ testimonials, theme }: Props) {
  const layout = theme?.testimonialsLayout ?? 'cards-3'
  const accentColor = theme?.accentColor ?? '#243a8f'

  /* ── LAYOUT: cards-3 (Corporate & Health — default) ── */
  if (layout === 'cards-3') {
    return (
      <section className="py-20 px-4" style={{ backgroundColor: accentColor }}>
        <div className="max-w-6xl mx-auto">

          <motion.div
            className="text-center mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full bg-white/20">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
              What Our Clients Say
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Real results from real people. Here&apos;s what our clients experience working with us.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-yellow-400 text-base"><i className="fa-solid fa-star"></i></span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">
                  {'\u201C'}{t.quote}{'\u201D'}
                </p>
                {/* Divider + Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{ backgroundColor: accentColor + '1a', color: accentColor }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    )
  }

  /* ── LAYOUT: cards-2-large (Trade Services) ── */
  if (layout === 'cards-2-large') {
    return (
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto md:mx-[max(2rem,calc((100%-64rem)/2+2rem))]">

          <motion.div
            className="mb-10"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full"
              style={{ backgroundColor: accentColor }}
            >
              Client Stories
            </span>
            <h2 className="text-3xl font-black uppercase text-gray-900 mt-3">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 mt-2 mb-10 rounded-full" style={{ backgroundColor: accentColor }} />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-md relative border-l-4"
                style={{ borderLeftColor: accentColor }}
              >
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 left-6 text-7xl font-black leading-none select-none pointer-events-none"
                  style={{ color: accentColor + '33' }}
                >
                  {'\u201C'}
                </span>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-base" style={{ color: accentColor }}><i className="fa-solid fa-star"></i></span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-800 text-base leading-relaxed italic mb-6 relative z-10">
                  {'\u201C'}{t.quote}{'\u201D'}
                </p>
                {/* Author */}
                <div>
                  <p className="font-black text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    )
  }

  /* ── LAYOUT: list-style (Creative) ── */
  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-800 mb-2">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px mx-auto mb-16" style={{ backgroundColor: accentColor }} />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto divide-y divide-gray-200"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="flex items-start gap-6 py-10"
            >
              {/* Decorative quote mark */}
              <span
                className="text-6xl font-black leading-none shrink-0 w-12"
                style={{ color: accentColor }}
              >
                {'\u201C'}
              </span>
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <span key={s} className="text-base" style={{ color: accentColor }}><i className="fa-solid fa-star"></i></span>
                  ))}
                </div>
                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                  {t.quote}
                </p>
                {/* Author */}
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="italic text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
