'use client'
import { useState } from 'react'
import Link  from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'
import MockLogo from '@/components/MockLogo'
import { IndustrySlug } from '@/data/industries'

interface Props { industryName: string; industrySlug: IndustrySlug }

export default function DemoFooter({ industryName, industrySlug }: Props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <footer className="bg-apex-navy">

      {/* CTA Band */}
      <section className="bg-apex-blue py-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-bold uppercase tracking-widest text-white/60 bg-white/10 px-3 py-1 rounded-pill"
          >
            Ready to Get Started?
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mt-5 mb-4 leading-tight text-balance"
          >
            Get This Built For Your {industryName} Business
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/75 text-lg mb-10 max-w-xl mx-auto"
          >
            This demo was built in days. Your personalized version can be live in less than a week — fully branded, fully automated.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-apex-blue font-bold px-10 py-4 rounded-btn hover:bg-apex-blue-light transition-colors shadow-card-hover text-base w-full sm:w-auto text-center cursor-pointer"
            >
              Get Started with {industryName} →
            </button>
            <Link
              href="/demo/select"
              className="border-2 border-white/40 text-white font-bold px-10 py-4 rounded-btn hover:bg-white/10 transition-colors text-base w-full sm:w-auto text-center"
            >
              View Other Demos
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer bottom */}
      <div className="px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <MockLogo industry={industrySlug} size={56} color="#ffffff" />
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="/demo/select" className="hover:text-white/70 transition-colors">All Demos</Link>
            <button onClick={() => setShowModal(true)} className="hover:text-white/70 transition-colors cursor-pointer">Contact</button>
            <span>reachtheapex.net</span>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Apex Affinity Group · Powered by BotMakers.ai
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />
            <motion.div
              className="relative bg-white rounded-card shadow-card-hover max-w-md w-full p-8 text-center z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-sm"></i>
              </button>
              <div className="w-16 h-16 rounded-full bg-apex-blue-light flex items-center justify-center mx-auto mb-5">
                <i className="fa-solid fa-paper-plane text-apex-blue text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interested in This Package?
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Contact the person who referred you to this demo to get started. They can walk you through pricing, setup, and next steps.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-apex-blue text-white font-bold px-8 py-3 rounded-btn hover:bg-apex-blue-dark transition-colors cursor-pointer"
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  )
}
