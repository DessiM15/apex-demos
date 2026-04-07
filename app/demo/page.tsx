'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { packages, PackageSlug } from '@/data/packages'
import { industries, IndustrySlug } from '@/data/industries'

const industryList: IndustrySlug[] = ['insurance', 'lawfirm', 'realestate', 'financial']
const packageList:  PackageSlug[]  = ['pulsemarket', 'pulseflow', 'pulsedrive', 'pulsecommand']

export default function DemoSelectorPage() {
  const router = useRouter()
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySlug | null>(null)
  const [selectedPackage,  setSelectedPackage]  = useState<PackageSlug  | null>(null)

  function handleGo() {
    if (selectedIndustry && selectedPackage) {
      router.push(`/demo/${selectedIndustry}/${selectedPackage}`)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-brand-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <Image src="/apex-logo.png" alt="Apex Affinity Group" width={180} height={54} priority />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Headline */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp} initial="hidden" animate="visible"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-apex-blue mb-4 leading-tight">
            See Exactly What Your Business Would Look Like With Apex
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Choose your industry and package below to explore a live, interactive preview built specifically for professionals like you.
          </p>
        </motion.div>

        {/* Step 1 — Industry */}
        <motion.section
          className="mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-apex-blue text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            <h2 className="text-2xl font-bold text-brand-text">Choose Your Industry</h2>
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {industryList.map(slug => {
              const ind = industries[slug]
              const active = selectedIndustry === slug
              return (
                <motion.button
                  key={slug}
                  variants={fadeInUp}
                  onClick={() => setSelectedIndustry(slug)}
                  className={`
                    flex flex-col items-center gap-3 p-6 rounded-card border-2 transition-all duration-200 cursor-pointer
                    ${active
                      ? 'border-apex-blue bg-apex-blue-light shadow-card-hover scale-105'
                      : 'border-brand-border bg-white hover:border-apex-blue hover:shadow-card'}
                  `}
                >
                  <span className="text-3xl text-apex-blue"><i className={ind.faIcon}></i></span>
                  <span className={`font-semibold text-sm text-center leading-snug ${active ? 'text-apex-blue' : 'text-brand-text'}`}>
                    {ind.name}
                  </span>
                  {active && (
                    <span className="text-xs bg-apex-blue text-white px-2 py-0.5 rounded-pill font-semibold">
                      Selected <i className="fa-solid fa-check"></i>
                    </span>
                  )}
                </motion.button>
              )
            })}
          </motion.div>
        </motion.section>

        {/* Step 2 — Package */}
        <motion.section
          className="mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-apex-blue text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            <h2 className="text-2xl font-bold text-brand-text">Choose Your Package</h2>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {packageList.map(slug => {
              const pkg    = packages[slug]
              const active = selectedPackage === slug
              const isElite = slug === 'pulsecommand'
              return (
                <motion.button
                  key={slug}
                  variants={fadeInUp}
                  onClick={() => setSelectedPackage(slug)}
                  className={`
                    flex items-start gap-4 p-5 rounded-card border-2 text-left transition-all duration-200 cursor-pointer
                    ${active
                      ? isElite
                        ? 'border-apex-red bg-apex-red-light shadow-card-hover'
                        : 'border-apex-blue bg-apex-blue-light shadow-card-hover'
                      : 'border-brand-border bg-white hover:border-apex-blue hover:shadow-card'}
                  `}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`font-bold text-base ${active ? isElite ? 'text-apex-red' : 'text-apex-blue' : 'text-brand-text'}`}>
                        {pkg.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-pill font-semibold
                        ${isElite ? 'bg-apex-red text-white' : 'bg-apex-blue text-white'}`}>
                        {pkg.tier}
                      </span>
                    </div>
                    <p className="text-brand-muted text-sm">{pkg.tagline}</p>
                    <p className="text-brand-muted text-xs mt-1">{pkg.idealFor}</p>
                  </div>
                  {active && <span className="text-xl mt-0.5 text-apex-blue"><i className="fa-solid fa-check"></i></span>}
                </motion.button>
              )
            })}
          </motion.div>
        </motion.section>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <button
            onClick={handleGo}
            disabled={!selectedIndustry || !selectedPackage}
            className={`
              px-10 py-4 rounded-btn font-bold text-lg transition-all duration-200
              ${selectedIndustry && selectedPackage
                ? 'bg-apex-blue text-white hover:bg-apex-blue-dark shadow-card-hover hover:scale-105 cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
          >
            {selectedIndustry && selectedPackage
              ? `See My ${packages[selectedPackage].name} Demo →`
              : 'Select Industry & Package Above'}
          </button>
          {(!selectedIndustry || !selectedPackage) && (
            <p className="text-brand-muted text-sm mt-3">
              {!selectedIndustry ? 'Select your industry first' : 'Now choose your package'}
            </p>
          )}
        </motion.div>
      </main>
    </div>
  )
}
