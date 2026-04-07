'use client'
import { motion } from 'framer-motion'

export default function ClickToCall() {
  return (
    <>
      <motion.a
        href="tel:8001235689"
        className="fixed bottom-7 right-7 z-50 w-16 h-16 rounded-full bg-apex-red text-white flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        aria-label="Call us now"
      >
        <i className="fa-solid fa-phone"></i>
      </motion.a>
      <motion.span
        className="fixed bottom-10 right-24 z-50 bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg pointer-events-none opacity-0 hover:opacity-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        Call Now — (800) 123-5689
      </motion.span>
    </>
  )
}
