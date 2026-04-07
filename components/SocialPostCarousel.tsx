'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, viewport } from '@/lib/animations'

type Platform = 'instagram' | 'facebook' | 'linkedin' | 'tiktok' | 'x'

interface Props {
  posts: string[]
  industryName: string
  postsPerMonth?: string
  showAllPlatforms?: boolean
}

const platformList: { key: Platform; label: string; icon: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa-brands fa-tiktok' },
  { key: 'x', label: 'X', icon: 'fa-brands fa-x-twitter' },
]

export default function SocialPostCarousel({ posts, industryName, postsPerMonth = '30', showAllPlatforms = false }: Props) {
  const [current, setCurrent] = useState(0)
  const [activePlatform, setActivePlatform] = useState<Platform>('instagram')

  const visiblePlatforms = showAllPlatforms ? platformList : [platformList[0]]

  function prev() { setCurrent(i => (i - 1 + posts.length) % posts.length) }
  function next() { setCurrent(i => (i + 1) % posts.length) }

  const handle = `apex_${industryName.toLowerCase().replace(/\s/g, '_')}`
  const postContent = posts[current]
  const snippet = postContent.split(' ').slice(0, 8).join(' ') + '...'

  return (
    <section className="bg-apex-blue-light py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-apex-blue bg-brand-card px-3 py-1 rounded-pill">
            Social Media
          </span>
          <h2 className="text-3xl font-bold text-brand-heading mt-4 mb-3">
            {postsPerMonth} Social Posts Per Month
          </h2>
          <p className="text-brand-muted max-w-xl mx-auto">
            Scroll-stopping posts crafted for your {industryName} audience — published consistently across every platform.
          </p>
        </motion.div>

        {/* Platform tabs — PulseCommand shows all 5 */}
        {showAllPlatforms && (
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {visiblePlatforms.map(p => (
              <button
                key={p.key}
                onClick={() => setActivePlatform(p.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-semibold transition-all ${
                  activePlatform === p.key
                    ? 'bg-apex-blue text-white shadow-card'
                    : 'bg-brand-card text-brand-muted hover:bg-brand-surface'
                }`}
              >
                <i className={p.icon}></i> {p.label}
              </button>
            ))}
          </div>
        )}

        {/* Phone mockup */}
        <motion.div
          className="max-w-sm mx-auto"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-card-hover">
            <div className={`rounded-[2rem] overflow-hidden ${activePlatform === 'tiktok' ? 'bg-black' : 'bg-white'}`}>
              {/* Status bar */}
              <div className={`px-5 py-2 flex justify-between items-center ${activePlatform === 'tiktok' ? 'bg-black' : 'bg-white'}`}>
                <span className={`text-xs font-bold ${activePlatform === 'tiktok' ? 'text-white' : 'text-gray-900'}`}>9:41</span>
                <div className={`w-24 h-5 rounded-full ${activePlatform === 'tiktok' ? 'bg-gray-700' : 'bg-gray-900'}`} />
                <div className="flex gap-1">
                  <span className={`text-xs ${activePlatform === 'tiktok' ? 'text-white' : 'text-gray-900'}`}>●●●</span>
                </div>
              </div>

              {/* ── Instagram ── */}
              {activePlatform === 'instagram' && (
                <>
                  <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">{handle}</p>
                        <p className="text-xs text-gray-500">Sponsored</p>
                      </div>
                    </div>
                    <span className="text-gray-500 text-lg">⋯</span>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-apex-blue to-apex-blue-dark flex items-center justify-center px-4">
                    <p className="text-white font-bold text-center text-sm leading-snug">{snippet}</p>
                  </div>
                  <div className="px-4 py-3 flex gap-4">
                    <span className="text-xl text-gray-900"><i className="fa-regular fa-heart"></i></span>
                    <span className="text-xl text-gray-900"><i className="fa-regular fa-comment"></i></span>
                    <span className="text-xl text-gray-900"><i className="fa-regular fa-paper-plane"></i></span>
                  </div>
                </>
              )}

              {/* ── Facebook ── */}
              {activePlatform === 'facebook' && (
                <>
                  <div className="bg-white px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">A</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Apex {industryName}</p>
                        <p className="text-xs text-gray-500"><i className="fa-solid fa-globe text-[10px]"></i> Sponsored</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
                    <p className="text-white font-bold text-center text-sm leading-snug">{snippet}</p>
                  </div>
                  <div className="px-4 py-2 flex justify-around border-t border-gray-200">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-regular fa-thumbs-up"></i> Like</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-regular fa-comment"></i> Comment</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-solid fa-share"></i> Share</span>
                  </div>
                </>
              )}

              {/* ── LinkedIn ── */}
              {activePlatform === 'linkedin' && (
                <>
                  <div className="bg-white px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white text-sm font-bold">A</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Apex {industryName} Pro</p>
                        <p className="text-xs text-gray-500">1,247 followers</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center px-4">
                    <p className="text-white font-bold text-center text-sm leading-snug">{snippet}</p>
                  </div>
                  <div className="px-4 py-2 flex justify-around border-t border-gray-200">
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-regular fa-thumbs-up"></i> Like</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-regular fa-comment"></i> Comment</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><i className="fa-solid fa-retweet"></i> Repost</span>
                  </div>
                </>
              )}

              {/* ── TikTok ── */}
              {activePlatform === 'tiktok' && (
                <div className="h-72 bg-gradient-to-b from-gray-900 to-black flex items-end px-4 pb-4 relative">
                  <div className="flex-1 pr-10">
                    <p className="text-white text-xs font-bold mb-1">@{handle}</p>
                    <p className="text-white text-xs leading-relaxed line-clamp-3">{postContent}</p>
                  </div>
                  <div className="absolute right-3 bottom-16 flex flex-col items-center gap-5">
                    <div className="text-center">
                      <i className="fa-solid fa-heart text-white text-lg"></i>
                      <p className="text-white text-[10px] mt-0.5">4.2K</p>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-comment-dots text-white text-lg"></i>
                      <p className="text-white text-[10px] mt-0.5">128</p>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-share text-white text-lg"></i>
                      <p className="text-white text-[10px] mt-0.5">89</p>
                    </div>
                    <div className="text-center">
                      <i className="fa-solid fa-bookmark text-white text-lg"></i>
                      <p className="text-white text-[10px] mt-0.5">54</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ── X / Twitter ── */}
              {activePlatform === 'x' && (
                <>
                  <div className="bg-white px-4 py-3">
                    <div className="flex items-start gap-2">
                      <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold shrink-0">A</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-bold text-gray-900">Apex {industryName}</p>
                          <i className="fa-solid fa-circle-check text-blue-500 text-xs"></i>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">@{handle}</p>
                        <p className="text-sm text-gray-900 leading-relaxed line-clamp-6">{postContent}</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 flex justify-around border-t border-gray-200 ml-12">
                    <span className="text-sm text-gray-500"><i className="fa-regular fa-comment"></i></span>
                    <span className="text-sm text-gray-500"><i className="fa-solid fa-retweet"></i></span>
                    <span className="text-sm text-gray-500"><i className="fa-regular fa-heart"></i></span>
                    <span className="text-sm text-gray-500"><i className="fa-solid fa-chart-simple"></i></span>
                    <span className="text-sm text-gray-500"><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
                  </div>
                </>
              )}

              {/* Caption — IG & FB & LinkedIn */}
              {(activePlatform === 'instagram' || activePlatform === 'facebook' || activePlatform === 'linkedin') && (
                <div className="px-4 pb-4">
                  <p className="text-xs text-gray-900 leading-relaxed line-clamp-4">{postContent}</p>
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-apex-blue text-white font-bold hover:bg-apex-blue-dark transition-colors flex items-center justify-center text-lg">
              ‹
            </button>
            <div className="flex gap-2">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${current === i ? 'bg-apex-blue' : 'bg-apex-blue/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-apex-blue text-white font-bold hover:bg-apex-blue-dark transition-colors flex items-center justify-center text-lg">
              ›
            </button>
          </div>
          <p className="text-center text-brand-muted text-xs mt-3">
            Post {current + 1} of {posts.length} samples
          </p>
        </motion.div>
      </div>
    </section>
  )
}
