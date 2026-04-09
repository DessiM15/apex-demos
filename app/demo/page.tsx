'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export default function DemoLandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#243a8f] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#243a8f] via-[#1a2d6d] to-[#243a8f]" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        {/* Apex Logo */}
        <Image
          src="/apex-logo.png"
          alt="Apex Affinity Group"
          width={220}
          height={66}
          priority
          className="mb-12 brightness-0 invert"
        />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
          See What Your Pulse Marketing Service Looks Like
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
          Pulse is a full-service marketing solution from Apex Infinity Group. We build and automate your entire online presence — landing pages, social media, email campaigns, blogs, podcasts, video, and more.
        </p>
        <p className="text-white/60 text-base max-w-xl mb-12 leading-relaxed">
          We are going to take you on a tour of what your Pulse service would look like. Choose your industry and package level, and explore a live, interactive demo — no signup required.
        </p>

        {/* CTA Button */}
        <Link
          href="/demo/select"
          className="inline-block bg-[#cf181d] hover:bg-[#a51216] text-white font-bold text-lg px-12 py-5 rounded-btn transition-all duration-200 shadow-card-hover hover:scale-105"
        >
          Get Started →
        </Link>
      </motion.div>
    </div>
  )
}
