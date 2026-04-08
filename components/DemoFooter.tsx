'use client'
import Image from 'next/image'
import Link  from 'next/link'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'

interface Props { industryName: string; ctaLink: string }

export default function DemoFooter({ industryName, ctaLink }: Props) {
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
            className="text-3xl md:text-4xl font-bold text-white mt-5 mb-4 leading-tight"
          >
            Get This Built For Your {industryName} Business
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/75 text-lg mb-10 max-w-xl mx-auto"
          >
            This demo was built in days. Your personalized version can be live in less than a week — fully branded, fully automated.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex justify-center">
            <a
              href={ctaLink}
              className="bg-white text-apex-blue font-bold px-10 py-4 rounded-btn hover:bg-apex-blue-light transition-colors shadow-card-hover text-base w-full sm:w-auto text-center"
            >
              Get Started With Apex →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer bottom */}
      <div className="px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/apex-logo.png"
            alt="Apex Affinity Group"
            width={140}
            height={42}
            className="opacity-80"
          />
          <div className="flex gap-6 text-white/40 text-sm">
            <Link href="/demo/select" className="hover:text-white/70 transition-colors">All Demos</Link>
            <a href={ctaLink} className="hover:text-white/70 transition-colors">Contact</a>
            <span>reachtheapex.net</span>
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Apex Affinity Group · Powered by BotMakers.ai
          </p>
        </div>
      </div>

    </footer>
  )
}
