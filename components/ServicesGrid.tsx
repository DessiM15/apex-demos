'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { ServiceItem } from '@/data/industries'

interface ServicesTheme {
  servicesLayout?: 'grid-4' | 'grid-3' | 'cards-large' | 'list'
  accentColor?: string
  headingStyle?: 'bold-tight' | 'light-wide' | 'mixed'
  sectionSpacing?: 'compact' | 'normal' | 'spacious'
}

interface Props {
  services: ServiceItem[]
  theme?: ServicesTheme
}

export default function ServicesGrid({ services, theme }: Props) {
  const layout = theme?.servicesLayout ?? 'grid-4'
  const accentColor = theme?.accentColor ?? '#243a8f'
  const headingStyle = theme?.headingStyle ?? 'bold-tight'
  const sectionSpacing = theme?.sectionSpacing ?? 'normal'

  /* ── LAYOUT: grid-4 (Corporate — default) ── */
  if (layout === 'grid-4') {
    const spacingClass = sectionSpacing === 'compact' ? 'py-14' : sectionSpacing === 'spacious' ? 'py-24' : 'py-20'

    return (
      <section className={`bg-brand-bg ${spacingClass} px-4`}>
        <div className="max-w-6xl mx-auto">

          <motion.div
            className="text-center mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block"
              style={{ color: accentColor, backgroundColor: accentColor + '1a' }}
            >
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mt-4 mb-3">Our Services</h2>
            <div
              className="w-16 h-1 mx-auto mt-2 mb-12 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-brand-card rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-6 border border-brand-border border-t-4 group"
                style={{ borderTopColor: accentColor }}
              >
                <span className="text-4xl mb-4 block" style={{ color: accentColor }}>
                  <i className={svc.icon}></i>
                </span>
                <h3 className="font-bold text-brand-text text-lg mb-2 group-hover:text-opacity-80 transition-colors">
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

  /* ── LAYOUT: grid-3 (Creative & Health) ── */
  if (layout === 'grid-3') {
    const spacingClass = sectionSpacing === 'compact' ? 'py-14' : sectionSpacing === 'spacious' ? 'py-24' : 'py-20'

    return (
      <section className={`bg-brand-surface ${spacingClass} px-4`}>
        <div className="max-w-6xl mx-auto">

          <motion.div
            className="text-center mb-12"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {headingStyle === 'light-wide' ? (
              <h2 className="text-3xl font-light tracking-widest uppercase text-brand-heading mb-3">
                Our Services
              </h2>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-3">
                Our Services
              </h2>
            )}
            <div
              className="w-16 h-px mx-auto mb-12"
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-8 group border-b-2"
                style={{ borderBottomColor: accentColor }}
              >
                <span className="text-5xl mb-5 block" style={{ color: accentColor }}>
                  <i className={svc.icon}></i>
                </span>
                <h3 className="font-semibold text-xl mb-3 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    )
  }

  /* ── LAYOUT: cards-large (Trade Services) ── */
  if (layout === 'cards-large') {
    return (
      <section className="bg-[#1a1a2e] py-16 px-4">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: accentColor }}
            >
              What We Do
            </span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Our Services
            </h2>
            <div
              className="w-16 h-1 mt-3 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {services.map((svc, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex overflow-hidden rounded-2xl border-l-4 bg-white/5"
                style={{ borderLeftColor: accentColor }}
              >
                <div
                  className="w-20 shrink-0 flex items-center justify-center py-8"
                  style={{ backgroundColor: accentColor }}
                >
                  <span className="text-3xl text-white">
                    <i className={svc.icon}></i>
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-bold text-white text-xl mb-2">{svc.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    )
  }

  /* ── Fallback: render grid-4 for any unhandled layout (e.g. 'list') ── */
  return (
    <section className="bg-brand-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block"
            style={{ color: accentColor, backgroundColor: accentColor + '1a' }}
          >
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mt-4 mb-3">Our Services</h2>
          <div
            className="w-16 h-1 mx-auto mt-2 mb-12 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-brand-card rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-6 border border-brand-border border-t-4 group"
              style={{ borderTopColor: accentColor }}
            >
              <span className="text-4xl mb-4 block" style={{ color: accentColor }}>
                <i className={svc.icon}></i>
              </span>
              <h3 className="font-bold text-brand-text text-lg mb-2 group-hover:text-opacity-80 transition-colors">
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
