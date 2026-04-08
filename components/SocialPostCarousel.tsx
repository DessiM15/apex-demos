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
}

const platformList: { key: Platform; label: string; icon: string }[] = [
  { key: 'instagram', label: 'Instagram', icon: 'fa-brands fa-instagram' },
  { key: 'facebook', label: 'Facebook', icon: 'fa-brands fa-facebook' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
  { key: 'google', label: 'Google Business', icon: 'fa-brands fa-google' },
  { key: 'tiktok', label: 'TikTok', icon: 'fa-brands fa-tiktok' },
  { key: 'pinterest', label: 'Pinterest', icon: 'fa-brands fa-pinterest' },
  { key: 'twitter', label: 'Twitter', icon: 'fa-brands fa-x-twitter' },
  { key: 'youtube', label: 'YouTube', icon: 'fa-brands fa-youtube' },
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
      <div className={`rounded-[2.8rem] p-[10px] shadow-2xl ${dark ? 'bg-gray-900' : 'bg-gray-900'}`}>
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
        <p className="text-white/80 text-xs">APEX MARKETING</p>
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

export default function SocialPostCarousel({ posts, industryName, industrySlug }: Props) {
  const [current, setCurrent] = useState(0)
  const [activePlatform, setActivePlatform] = useState<Platform>('instagram')
  const [postType, setPostType] = useState<PostType>('image')

  const totalPosts = 3
  function prev() { setCurrent(i => (i - 1 + totalPosts) % totalPosts) }
  function next() { setCurrent(i => (i + 1) % totalPosts) }

  const handle = `apex_${industryName.toLowerCase().replace(/[\s/]+/g, '_')}`
  const businessName = `Apex ${industryName}`
  const postContent = posts[current % posts.length]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Social Media Content
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            See how your posts look on every platform — 30 to 150 posts per month depending on your package
          </p>
        </motion.div>

        {/* Platform tab bar */}
        <div className="overflow-x-auto pb-2 mb-6 -mx-4 px-4">
          <div className="flex gap-2 min-w-max justify-center">
            {platformList.map(p => (
              <button
                key={p.key}
                onClick={() => setActivePlatform(p.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activePlatform === p.key
                    ? 'bg-[#243a8f] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className={p.icon} /> {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Post type selector */}
        <div className="flex justify-center gap-2 mb-8">
          {postTypes.map(t => (
            <button
              key={t.key}
              onClick={() => setPostType(t.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                postType === t.key
                  ? 'bg-[#cf181d] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Post display area */}
        <motion.div
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewport}
        >
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
                <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <MockLogo industry={industrySlug} size={32} iconOnly />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{businessName}</p>
                      <p className="text-xs text-gray-500">Just now <i className="fa-solid fa-globe text-[10px] ml-1" /></p>
                    </div>
                    <i className="fa-solid fa-ellipsis text-gray-400" />
                  </div>
                  {/* Post text */}
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-900 leading-relaxed">{postContent}</p>
                  </div>
                  {/* Image area */}
                  <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                  {/* Reactions */}
                  <div className="px-4 py-2">
                    <p className="text-xs text-gray-500">47 reactions</p>
                  </div>
                  {/* Divider */}
                  <div className="border-t border-gray-200" />
                  {/* Actions */}
                  <div className="px-4 py-2.5 flex justify-around">
                    <button className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <i className="fa-regular fa-thumbs-up" /> Like
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <i className="fa-regular fa-comment" /> Comment
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <i className="fa-solid fa-share" /> Share
                    </button>
                  </div>
                </div>
              )}

              {/* ── LINKEDIN ── */}
              {activePlatform === 'linkedin' && (
                <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <MockLogo industry={industrySlug} size={36} iconOnly />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{businessName}</p>
                      <p className="text-xs text-gray-500">Professional Services</p>
                      <p className="text-xs text-gray-400">2h <i className="fa-solid fa-globe text-[10px] ml-1" /></p>
                    </div>
                  </div>
                  {/* Post text */}
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-900 leading-relaxed">{postContent}</p>
                  </div>
                  {/* Image area */}
                  <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                  {/* Reactions */}
                  <div className="px-4 py-2 flex items-center gap-1">
                    <span className="text-sm">&#128077;&#128079;&#128161;</span>
                    <p className="text-xs text-gray-500 ml-1">38</p>
                  </div>
                  {/* Actions */}
                  <div className="border-t border-gray-200 px-4 py-2.5 flex justify-around">
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                      <i className="fa-regular fa-thumbs-up text-[#0A66C2]" /> Like
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                      <i className="fa-regular fa-comment" /> Comment
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                      <i className="fa-solid fa-retweet" /> Repost
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                      <i className="fa-regular fa-paper-plane" /> Send
                    </button>
                  </div>
                </div>
              )}

              {/* ── GOOGLE BUSINESS ── */}
              {activePlatform === 'google' && (
                <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Header */}
                  <div className="px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <MockLogo industry={industrySlug} size={36} iconOnly />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{businessName}</p>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-gray-900">4.8</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(s => (
                            <i key={s} className={`fa-solid fa-star text-xs ${s <= 4 ? 'text-yellow-400' : 'text-yellow-300'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 ml-1">(127 reviews)</span>
                      </div>
                    </div>
                  </div>
                  {/* Post text */}
                  <div className="px-4 pb-3">
                    <p className="text-sm text-gray-900 leading-relaxed">{postContent}</p>
                  </div>
                  {/* Image area */}
                  <div className="px-4 pb-3">
                    <div className="rounded-xl overflow-hidden">
                      <PostVisual postType={postType} text={postContent} aspect="aspect-[4/3]" />
                    </div>
                  </div>
                  {/* Date */}
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-400">Posted 2 days ago</p>
                  </div>
                  {/* CTA */}
                  <div className="px-4 pb-4">
                    <button className="px-6 py-2 rounded-full border-2 border-[#4285F4] text-[#4285F4] text-sm font-semibold hover:bg-[#4285F4]/5 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              )}

              {/* ── TIKTOK ── */}
              {activePlatform === 'tiktok' && (
                <PhoneFrame dark>
                  <div className="relative bg-black" style={{ aspectRatio: '9/16', maxHeight: 580 }}>
                    {/* Video background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
                      {/* Large play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <i className="fa-solid fa-play text-white text-2xl ml-1" />
                        </div>
                      </div>
                    </div>
                    {/* Right side icons */}
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
                    {/* Bottom left content */}
                    <div className="absolute bottom-4 left-3 right-16 z-10">
                      <p className="text-white text-sm font-bold mb-1">@{handle}</p>
                      <p className="text-white text-xs leading-relaxed line-clamp-3">{postContent}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <i className="fa-solid fa-music text-white text-[10px]" />
                        <p className="text-white text-[10px]">Original Sound - {handle}</p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700">
                      <div className="h-full bg-white w-1/3" />
                    </div>
                  </div>
                </PhoneFrame>
              )}

              {/* ── PINTEREST ── */}
              {activePlatform === 'pinterest' && (
                <div className="max-w-xs mx-auto">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                    {/* Pin image - tall */}
                    <div className="relative">
                      <PostVisual postType={postType} text={postContent} aspect="aspect-[2/3]" />
                      {/* Save button */}
                      <button className="absolute top-3 right-3 bg-[#E60023] text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
                        Save
                      </button>
                    </div>
                    {/* Bottom section */}
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{postContent.split(' ').slice(0, 8).join(' ')}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">{postContent}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <MockLogo industry={industrySlug} size={24} iconOnly />
                        </div>
                        <span className="text-xs font-semibold text-gray-700">{handle}</span>
                        <button className="ml-auto text-xs font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">Follow</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── TWITTER / X ── */}
              {activePlatform === 'twitter' && (
                <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <div className="px-4 py-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                        <MockLogo industry={industrySlug} size={30} iconOnly />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 flex-wrap">
                          <p className="text-sm font-bold text-gray-900">{businessName}</p>
                          <i className="fa-solid fa-circle-check text-[#1d9bf0] text-xs" />
                          <p className="text-sm text-gray-500">@{handle}</p>
                          <span className="text-sm text-gray-400">· 2h</span>
                        </div>
                        {/* Tweet text */}
                        <p className="text-sm text-gray-900 leading-relaxed mt-1">{postContent}</p>
                        {/* Image if applicable */}
                        {postType !== 'text' && (
                          <div className="mt-3 rounded-2xl overflow-hidden">
                            <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Action row */}
                  <div className="px-4 py-2.5 flex justify-around ml-12 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <i className="fa-regular fa-comment" /> 12
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <i className="fa-solid fa-retweet" /> 8
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-gray-500">
                      <i className="fa-regular fa-heart" /> 47
                    </span>
                    <span className="text-sm text-gray-500">
                      <i className="fa-solid fa-arrow-up-from-bracket" />
                    </span>
                  </div>
                </div>
              )}

              {/* ── YOUTUBE ── */}
              {activePlatform === 'youtube' && (
                <div className="max-w-lg mx-auto">
                  {/* Video thumbnail */}
                  <div className="relative rounded-xl overflow-hidden">
                    <PostVisual postType={postType} text={postContent} aspect="aspect-video" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/70 rounded-2xl flex items-center justify-center">
                        <i className="fa-solid fa-play text-white text-xl ml-1" />
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      2:34
                    </div>
                  </div>
                  {/* Video info */}
                  <div className="flex gap-3 mt-3">
                    <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                      <MockLogo industry={industrySlug} size={28} iconOnly />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 line-clamp-2">
                        {postContent.split(' ').slice(0, 12).join(' ')}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{businessName}</p>
                      <p className="text-xs text-gray-500">12K views · 3 days ago</p>
                    </div>
                    <button className="self-start bg-[#FF0000] text-white text-xs font-bold px-4 py-2 rounded-full shrink-0">
                      Subscribe
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Post navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#243a8f] text-white font-bold hover:bg-[#1a2d6e] transition-colors flex items-center justify-center"
            >
              <i className="fa-solid fa-chevron-left text-sm" />
            </button>
            <div className="flex gap-2">
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${current === i ? 'bg-[#243a8f]' : 'bg-[#243a8f]/25'}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#243a8f] text-white font-bold hover:bg-[#1a2d6e] transition-colors flex items-center justify-center"
            >
              <i className="fa-solid fa-chevron-right text-sm" />
            </button>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">
            Post {current + 1} of 3
          </p>
        </motion.div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Content is created and scheduled automatically — you never have to post manually
        </p>
      </div>
    </section>
  )
}
