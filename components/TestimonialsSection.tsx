'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { Testimonial } from '@/data/industries'

interface Props { testimonials: Testimonial[] }

export default function TestimonialsSection({ testimonials }: Props) {
  return (
    <section className="bg-apex-blue py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-pill">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-card p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <span key={s} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-brand-text leading-relaxed text-sm mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-apex-blue-light flex items-center justify-center text-apex-blue font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-text text-sm">{t.name}</p>
                  <p className="text-brand-muted text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
