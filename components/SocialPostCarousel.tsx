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

const platformList: { key: Platform; label: string; icon: string; color: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram', color: '#E1306C' },
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook', color: '#1877F2' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin', color: '#0A66C2' },
  { key: 'google', label: 'Google', icon: 'fa-brands fa-google', color: '#4285F4' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa-brands fa-tiktok', color: '#000000' },
  { key: 'pinterest', label: 'Pinterest', icon: 'fa-brands fa-pinterest', color: '#E60023' },
  { key: 'twitter', label: 'X', icon: 'fa-brands fa-x-twitter', color: '#000000' },
  { key: 'youtube', label: 'YouTube', icon: 'fa-brands fa-youtube', color: '#FF0000' },
]

const postTypes: { key: PostType; label: string }[] = [
  { key: 'image', label: 'Image Post' },
  { key: 'text', label: 'Text Post' },
  { key: 'flyer', label: 'Flyer' },
]

/* ── Realistic iPhone 15 Pro Frame ───────────────────────────────── */
function PhoneFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="relative mx-auto" style={{ width: 340 }}>
      {/* Side buttons — volume + power */}
      <div className="absolute -left-[2px] top-[85px] w-[3px] h-[26px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)' }} />
      <div className="absolute -left-[2px] top-[124px] w-[3px] h-[44px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)' }} />
      <div className="absolute -left-[2px] top-[178px] w-[3px] h-[44px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)' }} />
      <div className="absolute -right-[2px] top-[124px] w-[3px] h-[60px] rounded-r-sm"
        style={{ background: 'linear-gradient(180deg, #3a3a3e, #2a2a2e)' }} />

      {/* Phone body — titanium finish */}
      <div
        className="relative rounded-[3rem]"
        style={{
          background: 'linear-gradient(145deg, #2c2c30 0%, #1c1c20 40%, #28282c 100%)',
          padding: 11,
          boxShadow: '0 0 0 0.5px rgba(255,255,255,0.08), 0 30px 80px -15px rgba(0,0,0,0.45), 0 15px 35px -10px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
        }}
      >
        {/* Bezel edge highlight */}
        <div
          className="absolute inset-0 rounded-[3rem] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.02) 100%)',
          }}
        />

        {/* Screen glass */}
        <div
          className={`rounded-[2.3rem] overflow-hidden relative ${dark ? 'bg-black' : 'bg-white'}`}
          style={{ height: 700 }}
        >
          {/* Dynamic Island */}
          <div className={`relative z-20 flex justify-center pt-2 pb-1 ${dark ? 'bg-black' : 'bg-white'}`}>
            <div className="flex items-center justify-center rounded-full bg-black"
              style={{ width: 100, height: 28 }}>
              <div className="w-[5px] h-[5px] rounded-full"
                style={{ background: 'radial-gradient(circle, #1a1a3e 40%, #0d0d1a 100%)', boxShadow: '0 0 2px rgba(60,60,120,0.3)' }} />
            </div>
          </div>

          {/* Screen content — fixed height, clipped */}
          <div className="relative z-10 overflow-hidden" style={{ height: 644 }}>
            {children}
          </div>

          {/* Home indicator */}
          <div className={`absolute bottom-0 left-0 right-0 flex justify-center py-2 z-20`}>
            <div className={`rounded-full ${dark ? 'bg-gray-600' : 'bg-gray-900/20'}`}
              style={{ width: 110, height: 4 }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Post visual area ────────────────────────────────────────────── */
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

/* ── Profile avatar ──────────────────────────────────────────────── */
function ProfileAvatar({ industrySlug, size = 32, ring, ringColor }: {
  industrySlug: IndustrySlug
  size?: number
  ring?: boolean
  ringColor?: string
}) {
  if (ring) {
    const outerSize = size + 4
    return (
      <div className="shrink-0 rounded-full p-[2px]" style={{ width: outerSize, height: outerSize, background: ringColor || 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
          <MockLogo industry={industrySlug} size={size - 8} iconOnly />
        </div>
      </div>
    )
  }
  return (
    <div className="shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}>
      <MockLogo industry={industrySlug} size={size - 8} iconOnly />
    </div>
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
    <section className="bg-brand-bg py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-3">
            Social Media Content
          </h2>
          {packageName && socialPostCount ? (
            <p className="text-brand-muted max-w-2xl mx-auto">
              With your <span className="font-semibold text-brand-text">{packageName}</span> package, you get <span className="font-semibold text-brand-text">{socialPostCount} social media posts per month</span> across these platforms
            </p>
          ) : (
            <p className="text-brand-muted max-w-2xl mx-auto">
              See how your posts look on every platform — 30 to 150 posts per month depending on your package
            </p>
          )}
        </motion.div>

        {/* Platform tabs — horizontal */}
        <motion.div
          className="mb-8"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {platformList.map(p => (
              <button
                key={p.key}
                onClick={() => setActivePlatform(p.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activePlatform === p.key
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200'
                }`}
                style={activePlatform === p.key ? {
                  background: p.color === '#000000' ? '#1a1a1a' : p.color,
                } : {}}
              >
                <i className={`${p.icon} text-base`} />
                <span className="hidden sm:inline">{p.label}</span>
              </button>
            ))}
          </div>

          {/* Post type pills */}
          <div className="flex justify-center gap-2 mt-4">
            {postTypes.map(t => (
              <button
                key={t.key}
                onClick={() => setPostType(t.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  postType === t.key
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Phone — centered hero */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePlatform}-${current}-${postType}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* ── INSTAGRAM ── */}
              {activePlatform === 'instagram' && (
                <PhoneFrame>
                  {/* App header */}
                  <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-200">
                    <div className="flex items-center gap-2">
                      <ProfileAvatar industrySlug={industrySlug} size={32} ring />
                      <div>
                        <p className="text-[11px] font-bold text-gray-900 leading-tight">{handle}</p>
                        <p className="text-[9px] text-gray-400">Sponsored</p>
                      </div>
                    </div>
                    <i className="fa-solid fa-ellipsis text-gray-500 text-sm" />
                  </div>
                  {/* Post image */}
                  <PostVisual postType={postType} text={postContent} aspect="aspect-square" />
                  {/* Action bar */}
                  <div className="px-3 py-2.5 flex items-center justify-between bg-white">
                    <div className="flex gap-4">
                      <i className="fa-regular fa-heart text-xl text-gray-900" />
                      <i className="fa-regular fa-comment text-xl text-gray-900 scale-x-[-1]" />
                      <i className="fa-regular fa-paper-plane text-xl text-gray-900" />
                    </div>
                    <i className="fa-regular fa-bookmark text-xl text-gray-900" />
                  </div>
                  {/* Likes */}
                  <div className="px-3 bg-white">
                    <p className="text-[11px] font-bold text-gray-900">124 likes</p>
                  </div>
                  {/* Caption */}
                  <div className="px-3 pt-0.5 pb-2.5 bg-white">
                    <p className="text-[11px] text-gray-900 leading-relaxed line-clamp-2">
                      <span className="font-bold">{handle}</span>{' '}
                      <ColoredText text={postContent} />
                    </p>
                  </div>
                  {/* Comment input */}
                  <div className="px-3 py-2.5 border-t border-gray-100 bg-white flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gray-200" />
                    <p className="text-[11px] text-gray-400">Add a comment...</p>
                  </div>
                </PhoneFrame>
              )}

              {/* ── FACEBOOK ── */}
              {activePlatform === 'facebook' && (
                <PhoneFrame>
                  {/* App nav */}
                  <div className="bg-white border-b border-gray-200 px-3 py-2 flex items-center justify-between">
                    <span className="text-[#1877F2] text-lg font-black tracking-tight">facebook</span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fa-solid fa-plus text-gray-600 text-xs" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fa-solid fa-magnifying-glass text-gray-600 text-xs" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fa-brands fa-facebook-messenger text-gray-600 text-xs" />
                      </div>
                    </div>
                  </div>
                  {/* Tab bar */}
                  <div className="bg-white border-b border-gray-200 px-5 py-2 flex items-center justify-between">
                    <i className="fa-solid fa-house text-[#1877F2] text-sm" />
                    <i className="fa-solid fa-tv text-gray-400 text-sm" />
                    <i className="fa-solid fa-store text-gray-400 text-sm" />
                    <i className="fa-solid fa-users text-gray-400 text-sm" />
                    <i className="fa-solid fa-bell text-gray-400 text-sm" />
                    <i className="fa-solid fa-bars text-gray-400 text-sm" />
                  </div>
                  {/* Post */}
                  <div className="bg-white">
                    <div className="px-3 py-2.5 flex items-center gap-2.5">
                      <ProfileAvatar industrySlug={industrySlug} size={40} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-gray-900">{businessName}</p>
                        <p className="text-[10px] text-gray-500">Just now <i className="fa-solid fa-globe text-[8px] ml-0.5" /></p>
                      </div>
                      <i className="fa-solid fa-ellipsis text-gray-400" />
                    </div>
                    <div className="px-3 pb-2">
                      <p className="text-[12px] text-gray-900 leading-relaxed line-clamp-3">{postContent}</p>
                    </div>
                    <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                    {/* Reactions */}
                    <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100">
                      <div className="flex items-center gap-1">
                        <div className="flex -space-x-1">
                          <span className="w-[18px] h-[18px] rounded-full bg-[#1877F2] flex items-center justify-center text-[8px] text-white z-10"><i className="fa-solid fa-thumbs-up" /></span>
                          <span className="w-[18px] h-[18px] rounded-full bg-red-500 flex items-center justify-center text-[8px] text-white"><i className="fa-solid fa-heart" /></span>
                        </div>
                        <span className="text-[10px] text-gray-500 ml-1">47</span>
                      </div>
                      <span className="text-[10px] text-gray-500">12 comments</span>
                    </div>
                    {/* Action bar */}
                    <div className="px-3 py-2.5 flex justify-around">
                      <button className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                        <i className="fa-regular fa-thumbs-up text-base" /> Like
                      </button>
                      <button className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                        <i className="fa-regular fa-comment text-base" /> Comment
                      </button>
                      <button className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                        <i className="fa-solid fa-share text-base" /> Share
                      </button>
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── LINKEDIN ── */}
              {activePlatform === 'linkedin' && (
                <PhoneFrame>
                  {/* App header */}
                  <div className="bg-white px-3 py-2 flex items-center gap-2.5 border-b border-gray-200">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <i className="fa-solid fa-user text-gray-400 text-xs" />
                    </div>
                    <div className="flex-1 bg-[#EEF3F8] rounded px-3 py-2 flex items-center gap-2">
                      <i className="fa-solid fa-magnifying-glass text-gray-500 text-[10px]" />
                      <span className="text-[11px] text-gray-500">Search</span>
                    </div>
                    <i className="fa-regular fa-message text-gray-500 text-base" />
                  </div>
                  {/* Tab bar */}
                  <div className="bg-white border-b border-gray-200 px-4 py-1.5 flex items-center justify-between">
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-house text-gray-900 text-sm" />
                      <span className="text-[8px] text-gray-900 font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-users text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Network</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-square-plus text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-bell text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Alerts</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-briefcase text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Jobs</span>
                    </div>
                  </div>
                  {/* Post */}
                  <div className="bg-white">
                    <div className="px-3 py-2.5 flex items-center gap-2.5">
                      <ProfileAvatar industrySlug={industrySlug} size={44} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-bold text-gray-900">{businessName}</p>
                        <p className="text-[10px] text-gray-500 line-clamp-1">Professional Services</p>
                        <p className="text-[10px] text-gray-400">2h <i className="fa-solid fa-globe text-[8px] ml-0.5" /></p>
                      </div>
                      <i className="fa-solid fa-ellipsis text-gray-400" />
                    </div>
                    <div className="px-3 pb-2">
                      <p className="text-[12px] text-gray-900 leading-relaxed line-clamp-3">{postContent}</p>
                    </div>
                    <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                    {/* Reactions — FA icons only */}
                    <div className="px-3 py-2 flex items-center gap-1 border-b border-gray-100">
                      <div className="flex -space-x-0.5">
                        <span className="w-[18px] h-[18px] rounded-full bg-[#378FE9] flex items-center justify-center text-[8px] text-white z-[3]"><i className="fa-solid fa-thumbs-up" /></span>
                        <span className="w-[18px] h-[18px] rounded-full bg-[#44B37F] flex items-center justify-center text-[8px] text-white z-[2]"><i className="fa-solid fa-hands-clapping" /></span>
                        <span className="w-[18px] h-[18px] rounded-full bg-[#F5BB5C] flex items-center justify-center text-[8px] text-white z-[1]"><i className="fa-solid fa-lightbulb" /></span>
                      </div>
                      <span className="text-[10px] text-gray-500 ml-1">38</span>
                      <span className="text-[10px] text-gray-500 ml-auto">5 comments</span>
                    </div>
                    {/* Action bar */}
                    <div className="px-3 py-2 flex justify-around">
                      <button className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                        <i className="fa-regular fa-thumbs-up text-sm" /> Like
                      </button>
                      <button className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                        <i className="fa-regular fa-comment text-sm" /> Comment
                      </button>
                      <button className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                        <i className="fa-solid fa-retweet text-sm" /> Repost
                      </button>
                      <button className="flex items-center gap-1.5 text-[11px] text-gray-600 font-medium">
                        <i className="fa-regular fa-paper-plane text-sm" /> Send
                      </button>
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── GOOGLE BUSINESS ── */}
              {activePlatform === 'google' && (
                <PhoneFrame>
                  {/* Google search bar */}
                  <div className="bg-white px-3 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-2.5 bg-[#F1F3F4] rounded-full px-3.5 py-2.5">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      <span className="text-[12px] text-gray-500">{businessName}</span>
                    </div>
                  </div>
                  {/* Business card */}
                  <div className="bg-white">
                    <div className="px-3 py-3 flex items-center gap-3">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                        <MockLogo industry={industrySlug} size={32} iconOnly />
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">{businessName}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-[12px] font-bold text-gray-900">4.8</span>
                          <div className="flex">
                            {[1,2,3,4,5].map(s => (
                              <i key={s} className={`fa-solid fa-star text-[10px] ${s <= 4 ? 'text-[#FBBC04]' : 'text-[#FBBC04]/50'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-400">(127)</span>
                        </div>
                      </div>
                    </div>
                    {/* Quick actions */}
                    <div className="px-3 pb-3 flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-[#4285F4] text-[#4285F4] text-[11px] font-semibold">
                        <i className="fa-solid fa-phone text-[9px]" /> Call
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-[#4285F4] text-[#4285F4] text-[11px] font-semibold">
                        <i className="fa-solid fa-diamond-turn-right text-[9px]" /> Directions
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full border border-[#4285F4] text-[#4285F4] text-[11px] font-semibold">
                        <i className="fa-solid fa-globe text-[9px]" /> Website
                      </button>
                    </div>
                    {/* Update */}
                    <div className="px-3 pt-2 pb-1.5 border-t border-gray-100">
                      <p className="text-[12px] font-bold text-gray-900 mb-2">Latest update</p>
                    </div>
                    <div className="px-3 pb-2">
                      <p className="text-[12px] text-gray-700 leading-relaxed line-clamp-2">{postContent}</p>
                    </div>
                    <div className="px-3 pb-3">
                      <div className="rounded-lg overflow-hidden">
                        <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                      </div>
                    </div>
                    <div className="px-3 pb-2">
                      <p className="text-[10px] text-gray-400">Posted 2 days ago</p>
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── TIKTOK ── */}
              {activePlatform === 'tiktok' && (
                <PhoneFrame dark>
                  <div className="relative bg-black" style={{ height: 644 }}>
                    {/* Video background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/40 to-black/90">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <i className="fa-solid fa-play text-white text-2xl ml-1" />
                        </div>
                      </div>
                    </div>
                    {/* Top nav */}
                    <div className="absolute top-3 left-0 right-0 z-10 flex items-center justify-center gap-5 px-4">
                      <span className="text-white/60 text-[12px] font-semibold">Following</span>
                      <span className="text-white text-[12px] font-bold border-b-2 border-white pb-0.5">For You</span>
                    </div>
                    {/* Right action bar */}
                    <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-10">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center overflow-hidden">
                          <MockLogo industry={industrySlug} size={30} iconOnly color="#ffffff" />
                        </div>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#FE2C55] rounded-full flex items-center justify-center">
                          <i className="fa-solid fa-plus text-white text-[7px]" />
                        </div>
                      </div>
                      <div className="text-center">
                        <i className="fa-solid fa-heart text-white text-2xl" />
                        <p className="text-white text-[10px] mt-0.5 font-medium">4.2K</p>
                      </div>
                      <div className="text-center">
                        <i className="fa-solid fa-comment-dots text-white text-2xl" />
                        <p className="text-white text-[10px] mt-0.5 font-medium">128</p>
                      </div>
                      <div className="text-center">
                        <i className="fa-solid fa-bookmark text-white text-2xl" />
                        <p className="text-white text-[10px] mt-0.5 font-medium">54</p>
                      </div>
                      <div className="text-center">
                        <i className="fa-solid fa-share text-white text-2xl" />
                        <p className="text-white text-[10px] mt-0.5 font-medium">89</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-800 border-[3px] border-gray-600 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-gray-400" />
                      </div>
                    </div>
                    {/* Bottom info */}
                    <div className="absolute bottom-4 left-3 right-16 z-10">
                      <p className="text-white text-[13px] font-bold mb-1">@{handle}</p>
                      <p className="text-white text-[12px] leading-relaxed line-clamp-3">{postContent}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <i className="fa-solid fa-music text-white text-[10px]" />
                        <p className="text-white text-[10px]">Original Sound - {handle}</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700">
                      <div className="h-full bg-white w-1/3 rounded-full" />
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── PINTEREST ── */}
              {activePlatform === 'pinterest' && (
                <PhoneFrame>
                  {/* App header */}
                  <div className="bg-white px-3 py-2.5 flex items-center gap-2.5 border-b border-gray-100">
                    <i className="fa-brands fa-pinterest text-[#E60023] text-xl" />
                    <div className="flex-1 bg-[#EFEFEF] rounded-full px-3.5 py-2 flex items-center gap-2">
                      <i className="fa-solid fa-magnifying-glass text-gray-400 text-[10px]" />
                      <span className="text-[11px] text-gray-500">Search for ideas</span>
                    </div>
                    <i className="fa-regular fa-bell text-gray-500 text-base" />
                    <i className="fa-regular fa-comment text-gray-500 text-base" />
                  </div>
                  {/* Pin */}
                  <div className="bg-[#F5F5F5] p-3">
                    <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
                      <div className="relative">
                        <PostVisual postType={postType} text={postContent} aspect="aspect-[3/4]" />
                        <button className="absolute top-2.5 right-2.5 bg-[#E60023] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-sm">
                          Save
                        </button>
                      </div>
                      <div className="p-3">
                        <h3 className="font-bold text-gray-900 text-[12px] mb-2 line-clamp-2 leading-snug">{postContent.split(' ').slice(0, 8).join(' ')}</h3>
                        <div className="flex items-center gap-2">
                          <ProfileAvatar industrySlug={industrySlug} size={28} />
                          <span className="text-[11px] font-semibold text-gray-700">{handle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div className="bg-white border-t border-gray-100 px-8 py-2.5 flex items-center justify-between">
                    <i className="fa-solid fa-house text-gray-900 text-base" />
                    <i className="fa-solid fa-magnifying-glass text-gray-400 text-base" />
                    <i className="fa-solid fa-plus text-gray-400 text-base" />
                    <i className="fa-regular fa-comment text-gray-400 text-base" />
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                      <i className="fa-solid fa-user text-gray-400 text-[9px]" />
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── TWITTER / X ── */}
              {activePlatform === 'twitter' && (
                <PhoneFrame>
                  {/* App header */}
                  <div className="bg-white px-3 py-2.5 flex items-center justify-between border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      <i className="fa-solid fa-user text-gray-400 text-xs" />
                    </div>
                    <i className="fa-brands fa-x-twitter text-gray-900 text-lg" />
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className="fa-solid fa-gear text-gray-400 text-sm" />
                    </div>
                  </div>
                  {/* Tab bar */}
                  <div className="bg-white border-b border-gray-200 px-4 flex">
                    <div className="flex-1 text-center py-3 border-b-2 border-[#1D9BF0]">
                      <span className="text-[12px] font-bold text-gray-900">For you</span>
                    </div>
                    <div className="flex-1 text-center py-3">
                      <span className="text-[12px] text-gray-500">Following</span>
                    </div>
                  </div>
                  {/* Tweet */}
                  <div className="bg-white">
                    <div className="px-3 py-3">
                      <div className="flex items-start gap-2.5">
                        <ProfileAvatar industrySlug={industrySlug} size={40} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 flex-wrap">
                            <p className="text-[12px] font-bold text-gray-900">{businessName}</p>
                            <i className="fa-solid fa-circle-check text-[#1D9BF0] text-[10px]" />
                            <p className="text-[11px] text-gray-500">@{handle} · 2h</p>
                          </div>
                          <p className="text-[12px] text-gray-900 leading-relaxed mt-1.5">{postContent}</p>
                          {postType !== 'text' && (
                            <div className="mt-2.5 rounded-xl overflow-hidden border border-gray-200">
                              <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Tweet actions */}
                    <div className="px-3 py-2 flex justify-between ml-14 mr-6 border-t border-gray-50">
                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <i className="fa-regular fa-comment text-sm" /> 12
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <i className="fa-solid fa-retweet text-sm" /> 8
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <i className="fa-regular fa-heart text-sm" /> 47
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-500">
                        <i className="fa-solid fa-chart-simple text-sm" /> 1.2K
                      </span>
                      <span className="text-[11px] text-gray-500">
                        <i className="fa-solid fa-arrow-up-from-bracket text-sm" />
                      </span>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gray-100" />
                  {/* Bottom nav */}
                  <div className="bg-white border-t border-gray-100 px-8 py-2.5 flex items-center justify-between mt-auto">
                    <i className="fa-solid fa-house text-gray-900 text-base" />
                    <i className="fa-solid fa-magnifying-glass text-gray-400 text-base" />
                    <i className="fa-solid fa-users text-gray-400 text-base" />
                    <i className="fa-regular fa-bell text-gray-400 text-base" />
                    <i className="fa-regular fa-envelope text-gray-400 text-base" />
                  </div>
                </PhoneFrame>
              )}

              {/* ── YOUTUBE (Mobile) ── */}
              {activePlatform === 'youtube' && (
                <PhoneFrame>
                  {/* App header */}
                  <div className="bg-white px-3 py-2.5 flex items-center gap-3 border-b border-gray-100">
                    <div className="flex items-center gap-1 shrink-0">
                      <i className="fa-brands fa-youtube text-[#FF0000] text-xl" />
                      <span className="text-[13px] font-bold text-gray-900 tracking-tight">YouTube</span>
                    </div>
                    <div className="flex items-center gap-3.5 ml-auto">
                      <i className="fa-solid fa-tv text-gray-600 text-base" />
                      <i className="fa-solid fa-bell text-gray-600 text-base" />
                      <i className="fa-solid fa-magnifying-glass text-gray-600 text-base" />
                      <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                        <span className="text-white text-[9px] font-bold">A</span>
                      </div>
                    </div>
                  </div>
                  {/* Video player */}
                  <div className="relative bg-black">
                    <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-10 bg-black/70 rounded-xl flex items-center justify-center">
                        <i className="fa-solid fa-play text-white text-lg ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                      2:34
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-400/50">
                      <div className="h-full bg-[#FF0000] w-1/4" />
                    </div>
                  </div>
                  {/* Video info */}
                  <div className="bg-white px-3 py-3">
                    <p className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2 mb-1.5">
                      {postContent.split(' ').slice(0, 12).join(' ')}
                    </p>
                    <p className="text-[11px] text-gray-500">12K views · 3 days ago</p>
                  </div>
                  {/* Channel */}
                  <div className="bg-white px-3 pb-3 flex items-center gap-2.5">
                    <ProfileAvatar industrySlug={industrySlug} size={36} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] font-medium text-gray-900">{businessName}</p>
                      <p className="text-[10px] text-gray-500">4.2K subscribers</p>
                    </div>
                    <button className="bg-black text-white text-[11px] font-bold px-4 py-2 rounded-full shrink-0">
                      Subscribe
                    </button>
                  </div>
                  {/* Action pills */}
                  <div className="bg-white px-3 pb-3 flex gap-2 overflow-x-auto">
                    <button className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3.5 py-2 text-[11px] font-medium text-gray-700 whitespace-nowrap shrink-0">
                      <i className="fa-solid fa-thumbs-up text-[11px]" /> 342
                    </button>
                    <button className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3.5 py-2 text-[11px] font-medium text-gray-700 whitespace-nowrap shrink-0">
                      <i className="fa-solid fa-thumbs-down text-[11px]" />
                    </button>
                    <button className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3.5 py-2 text-[11px] font-medium text-gray-700 whitespace-nowrap shrink-0">
                      <i className="fa-solid fa-share text-[11px]" /> Share
                    </button>
                    <button className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3.5 py-2 text-[11px] font-medium text-gray-700 whitespace-nowrap shrink-0">
                      <i className="fa-solid fa-download text-[11px]" /> Save
                    </button>
                  </div>
                  {/* Comments */}
                  <div className="bg-white px-3 pt-1.5 pb-2.5 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[12px] font-bold text-gray-900">Comments <span className="font-normal text-gray-500">24</span></p>
                      <i className="fa-solid fa-arrow-down-short-wide text-gray-400 text-sm" />
                    </div>
                    <div className="flex items-start gap-2.5 bg-gray-50 rounded-lg p-2.5">
                      <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                        <span className="text-white text-[8px] font-bold">J</span>
                      </div>
                      <p className="text-[11px] text-gray-700 line-clamp-2">This is exactly what I needed to see. Great content!</p>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div className="bg-white border-t border-gray-100 px-5 py-2 flex items-center justify-between">
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-house text-gray-900 text-sm" />
                      <span className="text-[8px] text-gray-900 font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-fire text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Shorts</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-circle-plus text-gray-400 text-xl" />
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-clapperboard text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">Subs</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <i className="fa-solid fa-user text-gray-400 text-sm" />
                      <span className="text-[8px] text-gray-400">You</span>
                    </div>
                  </div>
                </PhoneFrame>
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
          <p className="text-center text-brand-muted text-xs mt-3">
            Post {current + 1} of 3
          </p>
        </motion.div>

        {/* Bottom note */}
        <p className="text-center text-brand-muted text-sm mt-10">
          Content is created and scheduled automatically — you never have to post manually
        </p>
      </div>
    </section>
  )
}
