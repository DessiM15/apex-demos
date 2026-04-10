export const fadeInUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const slideDown = {
  hidden:  { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerFast = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

export const expandContent = {
  hidden:  { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
}

// viewport config — reuse everywhere
export const viewport = { once: true, margin: '-80px' }
