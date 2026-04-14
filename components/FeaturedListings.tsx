'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'
import { PropertyListing } from '@/data/mockContent'

interface Props {
  listings: PropertyListing[]
  accentColor: string
}

export default function FeaturedListings({ listings, accentColor }: Props) {
  return (
    <section id="featuredlistings" className="bg-brand-bg py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>
            On the Market
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            Featured Listings
          </h2>
          <p className="text-brand-muted mt-3 max-w-xl mx-auto">
            Hand-picked properties across the Houston metro area, updated weekly.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {listings.map((listing, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden group"
            >
              {/* Property image with price badge */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-4 left-4 text-white text-sm font-bold px-4 py-1.5 rounded-full"
                  style={{ backgroundColor: accentColor }}
                >
                  {listing.price}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-text mb-1">{listing.address}</h3>
                <p className="text-brand-muted text-sm mb-4">{listing.neighborhood}</p>

                <div className="flex gap-4 text-brand-text text-sm mb-4">
                  <span>
                    <i className="fa-solid fa-bed mr-1.5" style={{ color: accentColor }}></i>
                    {listing.beds} Beds
                  </span>
                  <span>
                    <i className="fa-solid fa-bath mr-1.5" style={{ color: accentColor }}></i>
                    {listing.baths} Baths
                  </span>
                  <span>
                    <i className="fa-solid fa-ruler-combined mr-1.5" style={{ color: accentColor }}></i>
                    {listing.sqft} Sq Ft
                  </span>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed mb-5">{listing.description}</p>

                <a
                  href="#leadform"
                  className="inline-block text-sm font-bold px-6 py-2.5 rounded-btn hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: accentColor, color: '#fff' }}
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
