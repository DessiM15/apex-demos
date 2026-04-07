// ── BlogPreview.tsx ───────────────────────────────────────────────────
'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { BlogPost } from '@/data/mockContent'

interface BlogProps { posts: BlogPost[]; industryName: string }

export function BlogPreview({ posts, industryName }: BlogProps) {
  return (
    <section className="bg-brand-surface py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-apex-blue-light px-3 py-1 rounded-pill">
            Content Marketing
          </span>
          <h2 className="text-3xl font-bold text-apex-blue mt-4 mb-3">
            AI-Generated Blog Articles
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Fresh, SEO-optimized articles published for your {industryName} practice every month — automatically.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {posts.map((post, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-44 bg-apex-blue-light flex items-center justify-center text-5xl">
                <i className="fa-solid fa-pen-to-square text-apex-blue"></i>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-apex-blue bg-apex-blue-light px-2 py-0.5 rounded-pill">
                  {post.readTime}
                </span>
                <h3 className="font-bold text-brand-text text-lg mt-3 mb-3 leading-snug hover:text-apex-blue transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">{post.preview}</p>
                <span className="text-apex-blue text-sm font-semibold cursor-pointer hover:underline">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-brand-muted text-sm mt-8"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          2 new articles published automatically every month — written in your voice, optimized for Google.
        </motion.p>
      </div>
    </section>
  )
}

export default BlogPreview
