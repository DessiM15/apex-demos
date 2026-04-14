'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { AttorneyProfile } from '@/data/mockContent'

interface Props {
  attorneys: AttorneyProfile[]
}

export default function AttorneyTeam({ attorneys }: Props) {
  return (
    <section id="attorneyteam" className="bg-brand-bg py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-bold uppercase tracking-widest text-accent mb-3"
          >
            Your Legal Team
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-brand-heading"
          >
            Meet Our Attorneys
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {attorneys.map((attorney, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group text-center"
            >
              <div className="overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-brand-card border border-brand-border">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-brand-heading text-sm leading-tight">
                {attorney.name}
              </h3>
              <p className="text-accent text-xs font-semibold mt-1">
                {attorney.title}
              </p>
              <p className="text-brand-muted text-xs mt-1">
                {attorney.credentials}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
