'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewport } from '@/lib/animations'
import MockLogo from '@/components/MockLogo'
import { IndustrySlug } from '@/data/industries'

interface BioTheme {
  bioLayout?: 'photo-left' | 'photo-right' | 'photo-top-center'
  accentColor?: string
  headingStyle?: 'bold-tight' | 'light-wide' | 'mixed'
}

interface Props {
  name: string
  title: string
  creds: string
  bio: string
  bioImage?: string
  industry: IndustrySlug
  theme?: BioTheme
}

export default function AgentBio({ name, title, creds, bio, bioImage, industry, theme }: Props) {
  const bioLayout = theme?.bioLayout ?? 'photo-left'
  const accentColor = theme?.accentColor ?? '#243a8f'

  /* ── photo-left (Corporate & Health — default) ── */
  if (bioLayout === 'photo-left') {
    return (
      <section id="bio" className="bg-brand-bg py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {/* Avatar */}
            <motion.div variants={fadeInUp} className="shrink-0">
              {bioImage ? (
                <img
                  src={bioImage}
                  alt={name}
                  className="w-40 h-40 rounded-full object-cover shadow-md"
                  style={{ borderColor: accentColor, borderWidth: '4px', borderStyle: 'solid' }}
                />
              ) : (
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center text-6xl shadow-md"
                  style={{ backgroundColor: accentColor + '1a', borderColor: accentColor, borderWidth: '4px', borderStyle: 'solid' }}
                >
                  <i className="fa-solid fa-user" style={{ color: accentColor }}></i>
                </div>
              )}
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeInUp} className="flex-1">
              <div className="mb-4">
                <MockLogo industry={industry} size={40} color={accentColor} />
              </div>
              <h2 className="text-3xl font-bold text-brand-heading mb-1">{name}</h2>
              <p className="font-semibold text-base mb-1" style={{ color: accentColor }}>{title}</p>
              <p className="text-brand-muted text-sm mb-5 pb-5 border-b border-brand-border">{creds}</p>
              <p className="text-brand-text leading-relaxed text-base mb-6">{bio}</p>
              <div className="flex flex-wrap gap-3">
                {['LinkedIn', 'Facebook', 'Instagram'].map(s => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors"
                    style={{ backgroundColor: accentColor + '1a', color: accentColor }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  /* ── photo-right (Trade Services) ── */
  if (bioLayout === 'photo-right') {
    return (
      <section id="bio" className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-10"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {/* Avatar (visually right) */}
            <motion.div variants={fadeInUp} className="shrink-0">
              {bioImage ? (
                <img
                  src={bioImage}
                  alt={name}
                  className="w-40 h-40 rounded-full object-cover shadow-md"
                  style={{ borderColor: accentColor, borderWidth: '4px', borderStyle: 'solid' }}
                />
              ) : (
                <div
                  className="w-40 h-40 rounded-full flex items-center justify-center text-6xl shadow-md"
                  style={{ backgroundColor: accentColor + '1a', borderColor: accentColor, borderWidth: '4px', borderStyle: 'solid' }}
                >
                  <i className="fa-solid fa-user" style={{ color: accentColor }}></i>
                </div>
              )}
            </motion.div>

            {/* Text (visually left) */}
            <motion.div variants={fadeInUp} className="flex-1">
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-1">{name}</h2>
              <p className="font-bold mb-3" style={{ color: accentColor }}>{title}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Licensed', 'Insured', 'Background Checked', '20+ Years'].map(badge => (
                  <span
                    key={badge}
                    className="text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-gray-800 leading-relaxed mb-4">{bio}</p>
              <button
                className="font-bold px-6 py-3 rounded-lg text-white mt-4 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: accentColor }}
              >
                Call Us Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  /* ── photo-top-center (Creative) ── */
  return (
    <section id="bio" className="bg-brand-bg py-24 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
      >
        {/* Avatar centered */}
        <motion.div variants={fadeInUp}>
          {bioImage ? (
            <img
              src={bioImage}
              alt={name}
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-md"
              style={{ borderColor: accentColor + '4d', borderWidth: '4px', borderStyle: 'solid' }}
            />
          ) : (
            <div
              className="w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl"
              style={{ backgroundColor: accentColor + '1a', borderColor: accentColor + '4d', borderWidth: '4px', borderStyle: 'solid' }}
            >
              <i className="fa-solid fa-user" style={{ color: accentColor }}></i>
            </div>
          )}
        </motion.div>

        {/* Logo */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <MockLogo industry={industry} size={40} />
        </motion.div>

        {/* Text */}
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-light tracking-widest uppercase text-gray-800 mt-4 mb-1">{name}</h2>
          <p className="italic text-lg mb-1" style={{ color: accentColor }}>{title}</p>
          <p className="text-gray-500 text-sm mb-6 pb-6 border-b border-gray-200">{creds}</p>
          <p className="text-gray-700 leading-relaxed text-lg text-center max-w-lg mx-auto mb-8">{bio}</p>
          <div className="flex gap-4 justify-center">
            {['LinkedIn', 'Facebook', 'Instagram'].map(s => (
              <span
                key={s}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors text-sm font-bold"
                style={{ backgroundColor: accentColor + '1a', color: accentColor }}
              >
                {s.charAt(0)}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
