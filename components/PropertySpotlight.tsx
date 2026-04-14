'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'
import { SpotlightProperty } from '@/data/mockContent'

interface Props {
  spotlightProperty: SpotlightProperty
  accentColor: string
}

export default function PropertySpotlight({ spotlightProperty, accentColor }: Props) {
  const p = spotlightProperty

  return (
    <section id="propertyspotlight" className="bg-brand-surface py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>
            Exclusive Listing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            Property Spotlight
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Property photo */}
          <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl">
            <img
              src={p.image}
              alt={p.address}
              className="w-full h-80 md:h-full object-cover"
            />
          </motion.div>

          {/* Floor plan + details */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl bg-brand-card border border-brand-border">
              <img
                src={p.floorPlanImage}
                alt="Floor plan"
                className="w-full h-64 object-cover"
              />
              <div className="px-4 py-2 text-center">
                <p className="text-brand-muted text-xs uppercase tracking-wider">Floor Plan</p>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex-1">
              <h3 className="text-2xl font-bold text-brand-text mb-1">{p.address}</h3>
              <p className="text-brand-muted text-sm mb-4">{p.neighborhood}</p>
              <p className="text-3xl font-bold mb-4" style={{ color: accentColor }}>{p.price}</p>
              <p className="text-brand-muted text-sm leading-relaxed mb-6">{p.description}</p>

              <div className="flex gap-6 mb-6 text-brand-text text-sm">
                <span>
                  <i className="fa-solid fa-bed mr-2" style={{ color: accentColor }}></i>
                  {p.beds} Beds
                </span>
                <span>
                  <i className="fa-solid fa-bath mr-2" style={{ color: accentColor }}></i>
                  {p.baths} Baths
                </span>
                <span>
                  <i className="fa-solid fa-ruler-combined mr-2" style={{ color: accentColor }}></i>
                  {p.sqft} Sq Ft
                </span>
              </div>

              <a
                href="#leadform"
                className="inline-block text-white font-bold px-8 py-3 rounded-btn hover:opacity-90 transition-opacity text-sm"
                style={{ backgroundColor: accentColor }}
              >
                Schedule a Private Showing
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
