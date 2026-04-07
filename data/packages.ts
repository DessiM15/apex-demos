export type PackageSlug = 'pulsemarket' | 'pulseflow' | 'pulsedrive' | 'pulsecommand'

export interface PackageFeature {
  icon: string
  title: string
  desc: string
}

export interface PackageConfig {
  slug: PackageSlug
  name: string
  tier: string
  tagline: string
  color: string
  bgColor: string
  features: PackageFeature[]
  idealFor: string
  solves: string
  sectionsEnabled: string[]
}

export const packages: Record<PackageSlug, PackageConfig> = {
  pulsemarket: {
    slug: 'pulsemarket',
    name: 'PulseMarket',
    tier: 'Entry Tier',
    tagline: 'Your Digital Foundation',
    color: '#243a8f',
    bgColor: '#EBF0FC',
    idealFor: 'New agents, part-time reps, and anyone starting their online presence',
    solves: 'Agents with zero web presence and no time to build one',
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','footer'],
    features: [
      { icon: '🖥️', title: '3 AI Landing Pages',     desc: 'Build credibility from day one' },
      { icon: '📱', title: '30 Social Posts/mo',      desc: 'Automate content distribution' },
      { icon: '📋', title: 'Lead Capture Forms',      desc: 'Capture prospect details automatically' },
      { icon: '📞', title: 'Click-to-Call Button',    desc: 'Enable instant prospect communication' },
      { icon: '📊', title: 'Analytics Dashboard',     desc: 'Track your performance and growth' },
    ],
  },
  pulseflow: {
    slug: 'pulseflow',
    name: 'PulseFlow',
    tier: 'Growth Tier',
    tagline: 'Scale Your Content Engine',
    color: '#243a8f',
    bgColor: '#EBF0FC',
    idealFor: 'Growing agents seeking systemized lead generation',
    solves: 'Spending $300–800/month on tools that don\'t talk to each other',
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','footer'],
    features: [
      { icon: '🖥️', title: '5 AI Landing Pages',      desc: 'Optimized conversion-ready pages' },
      { icon: '📱', title: '60 Social Posts/mo',       desc: 'Consistent brand presence' },
      { icon: '📧', title: '4 Email Campaigns/mo',     desc: 'Strategic email marketing' },
      { icon: '✍️', title: '2 AI Blog Articles/mo',    desc: 'Thought leadership content' },
      { icon: '📊', title: 'Conversion Tracking',      desc: 'Know exactly what\'s working' },
    ],
  },
  pulsedrive: {
    slug: 'pulsedrive',
    name: 'PulseDrive',
    tier: 'Professional Tier',
    tagline: 'Out-Brand Every Competitor',
    color: '#243a8f',
    bgColor: '#EBF0FC',
    idealFor: 'Full-time agents who want to dominate their market',
    solves: 'Top agents dominate with podcasts and video — now you can too',
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','podcast','video','footer'],
    features: [
      { icon: '🖥️', title: '10 Landing Pages',        desc: 'Full conversion funnel' },
      { icon: '📱', title: '100+ Social Posts/mo',    desc: 'Dominate every platform' },
      { icon: '📧', title: '8 Email Campaigns/mo',    desc: 'Nurture your entire pipeline' },
      { icon: '🎙️', title: '4 Podcast Episodes/mo',   desc: 'AI-cloned voice' },
      { icon: '🎬', title: 'Video Production',        desc: 'Reels, Shorts, TikTok-ready' },
    ],
  },
  pulsecommand: {
    slug: 'pulsecommand',
    name: 'PulseCommand',
    tier: 'Elite Tier',
    tagline: 'The Content Empire, White-Glove Delivered',
    color: '#cf181d',
    bgColor: '#FDF0F0',
    idealFor: 'Agency builders, team leaders, and top producers scaling a brand',
    solves: 'Fortune 500-level marketing for elite professionals',
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','podcast','video','analytics','footer'],
    features: [
      { icon: '♾️', title: 'Unlimited AI Landing Pages', desc: 'No limits on your growth' },
      { icon: '📱', title: '150 Social Posts/mo',        desc: 'Full omnichannel domination' },
      { icon: '🤖', title: 'AI Avatar Videos (HeyGen)',  desc: 'Your face, automated' },
      { icon: '🎙️', title: 'Multichannel Podcasting',    desc: 'Spotify, Apple, YouTube' },
      { icon: '🌐', title: 'Branded Presence',           desc: 'Custom domain + YouTube channel' },
      { icon: '🚀', title: 'White-Glove Onboarding',     desc: 'Full setup + ongoing support' },
    ],
  },
}
