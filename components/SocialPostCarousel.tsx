'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, viewport } from '@/lib/animations'
import { IndustrySlug } from '@/data/industries'
import MockLogo from './MockLogo'

type Platform = 'instagram' | 'facebook' | 'linkedin' | 'google' | 'tiktok' | 'pinterest' | 'twitter' | 'youtube'
type PostType = 'image' | 'text' | 'flyer'

interface Props {
  posts: string[]
  industryName: string
  industrySlug: IndustrySlug
  packageName?: string
  socialPostCount?: string
}

const platformList: { key: Platform; label: string; icon: string; color: string; bg: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram', color: '#E1306C', bg: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' },
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook', color: '#1877F2', bg: '#1877F2' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin', color: '#0A66C2', bg: '#0A66C2' },
  { key: 'google', label: 'Google', icon: 'fa-brands fa-google', color: '#4285F4', bg: '#4285F4' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa-brands fa-tiktok', color: '#000000', bg: '#000000' },
  { key: 'pinterest', label: 'Pinterest', icon: 'fa-brands fa-pinterest', color: '#E60023', bg: '#E60023' },
  { key: 'twitter', label: 'X', icon: 'fa-brands fa-x-twitter', color: '#000000', bg: '#000000' },
  { key: 'youtube', label: 'YouTube', icon: 'fa-brands fa-youtube', color: '#FF0000', bg: '#FF0000' },
]

const postTypes: { key: PostType; label: string }[] = [
  { key: 'image', label: 'Image Post' },
  { key: 'text', label: 'Text Post' },
  { key: 'flyer', label: 'Flyer' },
]

/* ── Phone Frame wrapper ─────────────────────────────────────────── */
function PhoneFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 375 }}>
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-[80px] w-[3px] h-[30px] bg-gray-700 rounded-l" />
      <div className="absolute -left-[3px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-l" />
      <div className="absolute -left-[3px] top-[178px] w-[3px] h-[50px] bg-gray-700 rounded-l" />
      <div className="absolute -right-[3px] top-[120px] w-[3px] h-[70px] bg-gray-700 rounded-r" />
      {/* Phone body */}
      <div className="rounded-[2.8rem] p-[10px] shadow-2xl bg-gray-900">
        <div className={`rounded-[2.2rem] overflow-hidden relative ${dark ? 'bg-black' : 'bg-white'}`}>
          {/* Dynamic Island */}
          <div className={`relative z-20 flex justify-center pt-2 pb-1 ${dark ? 'bg-black' : 'bg-white'}`}>
            <div className="w-[90px] h-[24px] bg-black rounded-full" />
          </div>
          {/* Screen content */}
          <div className="relative z-10">
            {children}
          </div>
          {/* Home indicator */}
          <div className={`flex justify-center py-2 ${dark ? 'bg-black' : 'bg-white'}`}>
            <div className={`w-[120px] h-[4px] rounded-full ${dark ? 'bg-gray-600' : 'bg-gray-300'}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Laptop (MacBook) Frame wrapper ──────────────────────────────── */
function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto" style={{ maxWidth: 640 }}>
      {/* Screen portion */}
      <div className="bg-[#1d1d1f] rounded-t-xl pt-3 px-3 pb-2">
        {/* Camera notch */}
        <div className="flex justify-center mb-2">
          <div className="w-16 h-4 bg-[#0d0d0d] rounded-b-lg flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#2a2a2c] border border-[#3a3a3c]" />
          </div>
        </div>
        {/* Screen bezel */}
        <div className="bg-[#0d0d0d] rounded-lg p-[3px]">
          <div className="rounded-md overflow-hidden bg-white">
            {children}
          </div>
        </div>
      </div>
      {/* Hinge / lip */}
      <div className="bg-gradient-to-b from-[#c4c4c6] to-[#a8a8aa] h-[6px] rounded-b-sm mx-[2px]" />
      {/* Keyboard deck */}
      <div className="bg-gradient-to-b from-[#c9c9cb] to-[#b8b8ba] rounded-b-xl pt-3 pb-2 px-5 mx-[-4px] shadow-lg">
        {/* Keyboard rows */}
        <div className="space-y-[3px] mb-3">
          {[14, 14, 13, 12, 8].map((keys, row) => (
            <div key={row} className="flex gap-[2px] justify-center">
              {Array.from({ length: keys }).map((_, k) => (
                <div
                  key={k}
                  className="bg-[#2d2d2f] rounded-[2px]"
                  style={{
                    height: 10,
                    flex: row === 4 && k === Math.floor(keys / 2) ? '3 1 0%' : '1 1 0%',
                    maxWidth: row === 4 && k === Math.floor(keys / 2) ? 100 : 44,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        {/* Trackpad */}
        <div className="flex justify-center">
          <div className="w-[40%] h-[50px] rounded-md bg-[#b0b0b2] border border-[#a0a0a2]" />
        </div>
      </div>
    </div>
  )
}

/* ── Post visual area based on postType ──────────────────────────── */
function PostVisual({ postType, text, aspect = 'aspect-square' }: { postType: PostType; text: string; aspect?: string }) {
  if (postType === 'image') {
    return (
      <div className={`${aspect} bg-gradient-to-br from-[#243a8f] to-[#1a1a4e] flex items-center justify-center p-6`}>
        <p className="text-white font-bold text-center text-sm leading-relaxed">{text.split(' ').slice(0, 12).join(' ')}...</p>
      </div>
    )
  }
  if (postType === 'text') {
    return (
      <div className={`${aspect} bg-white flex items-center justify-center p-6`}>
        <p className="text-gray-900 font-bold text-center text-lg leading-relaxed">{text.split(' ').slice(0, 10).join(' ')}...</p>
      </div>
    )
  }
  // flyer
  return (
    <div className={`${aspect} bg-[#243a8f] flex items-center justify-center p-6`}>
      <div className="text-center">
        <p className="text-white font-black text-xl leading-tight mb-2">{text.split(' ').slice(0, 6).join(' ')}</p>
        <div className="w-12 h-0.5 bg-[#cf181d] mx-auto mb-2" />
        <p className="text-white/80 text-xs">YOUR BRAND</p>
      </div>
    </div>
  )
}

/* ── Hashtag colorizer ───────────────────────────────────────────── */
function ColoredText({ text }: { text: string }) {
  return (
    <span>
      {text.split(/(\s+)/).map((word, i) =>
        word.startsWith('#') ? (
          <span key={i} className="text-[#243a8f]">{word}</span>
        ) : (
          <span key={i}>{word}</span>
        )
      )}
    </span>
  )
}

export default function SocialPostCarousel({ posts, industryName, industrySlug, packageName, socialPostCount }: Props) {
  const [current, setCurrent] = useState(0)
  const [activePlatform, setActivePlatform] = useState<Platform>('instagram')
  const [postType, setPostType] = useState<PostType>('image')

  const totalPosts = 3
  function prev() { setCurrent(i => (i - 1 + totalPosts) % totalPosts) }
  function next() { setCurrent(i => (i + 1) % totalPosts) }

  const handle = `your_${industryName.toLowerCase().replace(/[\s/]+/g, '_')}`
  const businessName = `Your ${industryName}`
  const postContent = posts[current % posts.length]
  const activePlatformData = platformList.find(p => p.key === activePlatform)!

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Social Media Content
          </h2>
          {packageName && socialPostCount ? (
            <p className="text-gray-500 max-w-2xl mx-auto">
              With your <span className="font-semibold text-gray-700">{packageName}</span> package, you get <span className="font-semibold text-gray-700">{socialPostCount} social media posts per month</span> across these platforms
            </p>
          ) : (
            <p className="text-gray-500 max-w-2xl mx-auto">
              See how your posts look on every platform — 30 to 150 posts per month depending on your package
            </p>
          )}
        </motion.div>

        {/* Main layout: sidebar left + preview right */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          {/* Left sidebar — Platform tabs */}
          <div className="lg:col-span-1 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
              Select Platform
            </p>
            {platformList.map(p => (
              <button
                key={p.key}
                onClick={() => setActivePlatform(p.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all text-left ${
                  activePlatform === p.key
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <i className={`${p.icon} text-lg`} style={activePlatform === p.key ? { color: p.color === '#000000' ? '#ffffff' : p.color } : {}} />
                <span>{p.label}</span>
                {activePlatform === p.key && (
                  <i className="fa-solid fa-chevron-right text-xs ml-auto opacity-50" />
                )}
              </button>
            ))}

            {/* Post type selector — below platform tabs */}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Post Type
              </p>
              <div className="flex gap-2">
                {postTypes.map(t => (
                  <button
                    key={t.key}
                    onClick={() => setPostType(t.key)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      postType === t.key
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Post preview */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activePlatform}-${current}-${postType}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* ── INSTAGRAM ── */}
                {activePlatform === 'instagram' && (
                  <PhoneFrame>
                    {/* Header */}
                    <div className="border-b border-gray-200 px-4 py-2.5 flex items-center justify-between bg-white">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px]">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <MockLogo industry={industrySlug} size={24} iconOnly />
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-900">{handle}</p>
                          <p className="text-[10px] text-gray-400">Sponsored</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-ellipsis text-gray-500" />
                    </div>
                    {/* Post image */}
                    <PostVisual postType={postType} text={postContent} aspect="aspect-square" />
                    {/* Action bar */}
                    <div className="px-4 py-2.5 flex items-center justify-between bg-white">
                      <div className="flex gap-4">
                        <i className="fa-regular fa-heart text-xl text-gray-900" />
                        <i className="fa-regular fa-comment text-xl text-gray-900 scale-x-[-1]" />
                        <i className="fa-regular fa-paper-plane text-xl text-gray-900" />
                      </div>
                      <i className="fa-regular fa-bookmark text-xl text-gray-900" />
                    </div>
                    {/* Likes */}
                    <div className="px-4 bg-white">
                      <p className="text-xs font-bold text-gray-900">124 likes</p>
                    </div>
                    {/* Caption */}
                    <div className="px-4 pt-1 pb-2 bg-white">
                      <p className="text-xs text-gray-900 leading-relaxed">
                        <span className="font-bold">{handle}</span>{' '}
                        <ColoredText text={postContent} />
                      </p>
                    </div>
                    {/* Comment input */}
                    <div className="px-4 py-2.5 border-t border-gray-100 bg-white flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200" />
                      <p className="text-xs text-gray-400">Add a comment...</p>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── FACEBOOK ── */}
                {activePlatform === 'facebook' && (
                  <PhoneFrame>
                    <div className="bg-[#1877F2] px-4 py-1.5 flex items-center justify-between">
                      <span className="text-white text-[10px] font-semibold">9:41</span>
                      <span className="text-white text-xs font-bold tracking-wide">facebook</span>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-signal text-white text-[8px]" />
                        <i className="fa-solid fa-wifi text-white text-[8px]" />
                        <i className="fa-solid fa-battery-full text-white text-[8px]" />
                      </div>
                    </div>
                    <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-house text-[#1877F2] text-sm" />
                        <i className="fa-solid fa-tv text-gray-400 text-sm" />
                        <i className="fa-solid fa-store text-gray-400 text-sm" />
                        <i className="fa-solid fa-users text-gray-400 text-sm" />
                        <i className="fa-solid fa-bell text-gray-400 text-sm" />
                      </div>
                      <i className="fa-solid fa-bars text-gray-400 text-sm" />
                    </div>
                    <div className="bg-white">
                      <div className="px-3 py-2 flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <MockLogo industry={industrySlug} size={28} iconOnly />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-900">{businessName}</p>
                          <p className="text-[10px] text-gray-500">Just now <i className="fa-solid fa-globe text-[8px] ml-0.5" /></p>
                        </div>
                        <i className="fa-solid fa-ellipsis text-gray-400 text-xs" />
                      </div>
                      <div className="px-3 pb-2">
                        <p className="text-xs text-gray-900 leading-relaxed line-clamp-2">{postContent}</p>
                      </div>
                      <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                      <div className="px-3 py-1.5 flex items-center justify-between border-b border-gray-100">
                        <div className="flex items-center gap-1">
                          <div className="flex -space-x-1">
                            <span className="w-4 h-4 rounded-full bg-[#1877F2] flex items-center justify-center text-[7px] text-white"><i className="fa-solid fa-thumbs-up" /></span>
                            <span className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[7px] text-white"><i className="fa-solid fa-heart" /></span>
                          </div>
                          <span className="text-[10px] text-gray-500 ml-1">47</span>
                        </div>
                        <span className="text-[10px] text-gray-500">12 comments</span>
                      </div>
                      <div className="px-3 py-2 flex justify-around">
                        <button className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                          <i className="fa-regular fa-thumbs-up text-sm" /> Like
                        </button>
                        <button className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                          <i className="fa-regular fa-comment text-sm" /> Comment
                        </button>
                        <button className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                          <i className="fa-solid fa-share text-sm" /> Share
                        </button>
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── LINKEDIN ── */}
                {activePlatform === 'linkedin' && (
                  <PhoneFrame>
                    <div className="bg-white px-4 py-1.5 flex items-center justify-between border-b border-gray-100">
                      <span className="text-gray-900 text-[10px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-signal text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-wifi text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-battery-full text-gray-900 text-[8px]" />
                      </div>
                    </div>
                    <div className="bg-white px-3 py-2 flex items-center gap-3 border-b border-gray-200">
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <i className="fa-solid fa-user text-gray-400 text-xs" />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 text-[10px]" />
                        <span className="text-[10px] text-gray-400">Search</span>
                      </div>
                      <i className="fa-regular fa-message text-gray-500 text-sm" />
                    </div>
                    <div className="bg-white">
                      <div className="px-3 py-2 flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <MockLogo industry={industrySlug} size={30} iconOnly />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-gray-900">{businessName}</p>
                          <p className="text-[10px] text-gray-500 line-clamp-1">Professional Services</p>
                          <p className="text-[10px] text-gray-400">2h <i className="fa-solid fa-globe text-[8px] ml-0.5" /></p>
                        </div>
                        <i className="fa-solid fa-ellipsis text-gray-400 text-xs" />
                      </div>
                      <div className="px-3 pb-2">
                        <p className="text-xs text-gray-900 leading-relaxed line-clamp-3">{postContent}</p>
                      </div>
                      <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                      <div className="px-3 py-1.5 flex items-center gap-1 border-b border-gray-100">
                        <div className="flex -space-x-0.5">
                          <span className="text-xs">&#128077;</span>
                          <span className="text-xs">&#128079;</span>
                          <span className="text-xs">&#128161;</span>
                        </div>
                        <span className="text-[10px] text-gray-500 ml-1">38</span>
                      </div>
                      <div className="px-2 py-2 flex justify-around">
                        <button className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                          <i className="fa-regular fa-thumbs-up text-xs text-[#0A66C2]" /> Like
                        </button>
                        <button className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                          <i className="fa-regular fa-comment text-xs" /> Comment
                        </button>
                        <button className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                          <i className="fa-solid fa-retweet text-xs" /> Repost
                        </button>
                        <button className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                          <i className="fa-regular fa-paper-plane text-xs" /> Send
                        </button>
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── GOOGLE BUSINESS ── */}
                {activePlatform === 'google' && (
                  <PhoneFrame>
                    <div className="bg-white px-4 py-1.5 flex items-center justify-between">
                      <span className="text-gray-900 text-[10px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-signal text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-wifi text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-battery-full text-gray-900 text-[8px]" />
                      </div>
                    </div>
                    <div className="bg-white px-3 py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-2 border border-gray-200">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        <span className="text-xs text-gray-500">{businessName}</span>
                      </div>
                    </div>
                    <div className="bg-white">
                      <div className="px-3 py-2 flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <MockLogo industry={industrySlug} size={30} iconOnly />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-gray-900">{businessName}</p>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-gray-900">4.8</span>
                            <div className="flex">
                              {[1,2,3,4,5].map(s => (
                                <i key={s} className={`fa-solid fa-star text-[9px] ${s <= 4 ? 'text-yellow-400' : 'text-yellow-300'}`} />
                              ))}
                            </div>
                            <span className="text-[10px] text-gray-400">(127)</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 pb-2">
                        <p className="text-xs text-gray-900 leading-relaxed line-clamp-2">{postContent}</p>
                      </div>
                      <div className="px-3 pb-2">
                        <div className="rounded-lg overflow-hidden">
                          <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                        </div>
                      </div>
                      <div className="px-3 pb-1.5">
                        <p className="text-[10px] text-gray-400">Posted 2 days ago</p>
                      </div>
                      <div className="px-3 pb-3">
                        <button className="px-4 py-1.5 rounded-full border border-[#4285F4] text-[#4285F4] text-[11px] font-semibold">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── TIKTOK ── */}
                {activePlatform === 'tiktok' && (
                  <PhoneFrame dark>
                    <div className="relative bg-black" style={{ aspectRatio: '9/16', maxHeight: 580 }}>
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <i className="fa-solid fa-play text-white text-2xl ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center overflow-hidden">
                            <MockLogo industry={industrySlug} size={28} iconOnly color="#ffffff" />
                          </div>
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#fe2c55] rounded-full flex items-center justify-center">
                            <i className="fa-solid fa-plus text-white text-[8px]" />
                          </div>
                        </div>
                        <div className="text-center">
                          <i className="fa-solid fa-heart text-white text-2xl" />
                          <p className="text-white text-[10px] mt-1">4.2K</p>
                        </div>
                        <div className="text-center">
                          <i className="fa-solid fa-comment-dots text-white text-2xl" />
                          <p className="text-white text-[10px] mt-1">128</p>
                        </div>
                        <div className="text-center">
                          <i className="fa-solid fa-bookmark text-white text-2xl" />
                          <p className="text-white text-[10px] mt-1">54</p>
                        </div>
                        <div className="text-center">
                          <i className="fa-solid fa-share text-white text-2xl" />
                          <p className="text-white text-[10px] mt-1">89</p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-3 right-16 z-10">
                        <p className="text-white text-sm font-bold mb-1">@{handle}</p>
                        <p className="text-white text-xs leading-relaxed line-clamp-3">{postContent}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <i className="fa-solid fa-music text-white text-[10px]" />
                          <p className="text-white text-[10px]">Original Sound - {handle}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700">
                        <div className="h-full bg-white w-1/3" />
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── PINTEREST ── */}
                {activePlatform === 'pinterest' && (
                  <PhoneFrame>
                    <div className="bg-white px-4 py-1.5 flex items-center justify-between">
                      <span className="text-gray-900 text-[10px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-signal text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-wifi text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-battery-full text-gray-900 text-[8px]" />
                      </div>
                    </div>
                    <div className="bg-white px-3 py-2 flex items-center gap-3 border-b border-gray-100">
                      <i className="fa-brands fa-pinterest text-[#E60023] text-lg" />
                      <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 text-[10px]" />
                        <span className="text-[10px] text-gray-400">Search for ideas</span>
                      </div>
                      <i className="fa-regular fa-bell text-gray-500 text-sm" />
                      <i className="fa-regular fa-comment text-gray-500 text-sm" />
                    </div>
                    <div className="bg-gray-50 p-3">
                      <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
                        <div className="relative">
                          <PostVisual postType={postType} text={postContent} aspect="aspect-[3/4]" />
                          <button className="absolute top-2 right-2 bg-[#E60023] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
                            Save
                          </button>
                        </div>
                        <div className="p-3">
                          <h3 className="font-bold text-gray-900 text-xs mb-1 line-clamp-2">{postContent.split(' ').slice(0, 8).join(' ')}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                              <MockLogo industry={industrySlug} size={18} iconOnly />
                            </div>
                            <span className="text-[10px] font-semibold text-gray-700">{handle}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── TWITTER / X ── */}
                {activePlatform === 'twitter' && (
                  <PhoneFrame>
                    <div className="bg-white px-4 py-1.5 flex items-center justify-between">
                      <span className="text-gray-900 text-[10px] font-semibold">9:41</span>
                      <div className="flex items-center gap-1.5">
                        <i className="fa-solid fa-signal text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-wifi text-gray-900 text-[8px]" />
                        <i className="fa-solid fa-battery-full text-gray-900 text-[8px]" />
                      </div>
                    </div>
                    <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-100">
                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        <i className="fa-solid fa-user text-gray-400 text-xs" />
                      </div>
                      <i className="fa-brands fa-x-twitter text-gray-900 text-base" />
                      <i className="fa-solid fa-gear text-gray-400 text-sm" />
                    </div>
                    <div className="bg-white">
                      <div className="px-3 py-2">
                        <div className="flex items-start gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                            <MockLogo industry={industrySlug} size={26} iconOnly />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 flex-wrap">
                              <p className="text-xs font-bold text-gray-900">{businessName}</p>
                              <i className="fa-solid fa-circle-check text-[#1d9bf0] text-[10px]" />
                              <p className="text-[10px] text-gray-500">@{handle} · 2h</p>
                            </div>
                            <p className="text-xs text-gray-900 leading-relaxed mt-1 line-clamp-3">{postContent}</p>
                            {postType !== 'text' && (
                              <div className="mt-2 rounded-xl overflow-hidden">
                                <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-2 flex justify-around ml-11 border-t border-gray-50">
                        <span className="flex items-center gap-1 text-[10px] text-gray-500">
                          <i className="fa-regular fa-comment text-xs" /> 12
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-gray-500">
                          <i className="fa-solid fa-retweet text-xs" /> 8
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-gray-500">
                          <i className="fa-regular fa-heart text-xs" /> 47
                        </span>
                        <span className="text-[10px] text-gray-500">
                          <i className="fa-solid fa-arrow-up-from-bracket text-xs" />
                        </span>
                      </div>
                    </div>
                  </PhoneFrame>
                )}

                {/* ── YOUTUBE ── */}
                {activePlatform === 'youtube' && (
                  <LaptopFrame>
                    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-4">
                      <div className="flex items-center gap-1 shrink-0">
                        <i className="fa-brands fa-youtube text-[#FF0000] text-xl" />
                        <span className="text-sm font-bold text-gray-900 tracking-tight">YouTube</span>
                      </div>
                      <div className="flex-1 max-w-md mx-auto flex">
                        <div className="flex-1 bg-gray-50 border border-gray-300 rounded-l-full px-4 py-1.5 flex items-center">
                          <span className="text-xs text-gray-400">Search</span>
                        </div>
                        <div className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-3 flex items-center">
                          <i className="fa-solid fa-magnifying-glass text-gray-600 text-xs" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <i className="fa-solid fa-bell text-gray-600 text-sm" />
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <span className="text-white text-[9px] font-bold">A</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="relative rounded-xl overflow-hidden">
                        <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-10 bg-black/70 rounded-xl flex items-center justify-center">
                            <i className="fa-solid fa-play text-white text-lg ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                          2:34
                        </div>
                      </div>
                      <div className="flex gap-3 mt-3">
                        <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <MockLogo industry={industrySlug} size={28} iconOnly />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 line-clamp-2">
                            {postContent.split(' ').slice(0, 12).join(' ')}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">{businessName} · 12K views · 3 days ago</p>
                        </div>
                        <button className="self-start bg-[#FF0000] text-white text-xs font-bold px-4 py-2 rounded-full shrink-0">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </LaptopFrame>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Post navigation */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-chevron-left text-sm" />
              </button>
              <div className="flex gap-2">
                {[0, 1, 2].map(i => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${current === i ? 'bg-gray-900' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-chevron-right text-sm" />
              </button>
            </div>
            <p className="text-center text-gray-400 text-xs mt-3">
              Post {current + 1} of 3
            </p>
          </div>
        </motion.div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Content is created and scheduled automatically — you never have to post manually
        </p>
      </div>
    </section>
  )
}
