'use client'
import { motion } from 'framer-motion'

interface Props {
  accentColor?: string
}

export default function ClickToCall({ accentColor }: Props) {
  return (
    <motion.a
      href="tel:8001235689"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: accentColor || '#243a8f' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Call us now"
    >
      <i className="fa-solid fa-phone"></i>
    </motion.a>
  )
}
