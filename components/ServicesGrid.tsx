'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { ServiceItem } from '@/data/industries'

interface Props { services: ServiceItem[] }

export default function ServicesGrid({ services }: Props) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-apex-blue mt-4 mb-3">Our Services</h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Comprehensive solutions tailored to your needs — handled by our expert team.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 p-6 border border-brand-border border-t-4 border-t-apex-blue group"
            >
              <span className="text-4xl mb-4 block text-apex-blue"><i className={svc.icon}></i></span>
              <h3 className="font-bold text-brand-text text-lg mb-2 group-hover:text-apex-blue transition-colors">
                {svc.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
