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
  landingPageCount: string
  socialPostCount: string
  emailCampaignCount: number
  blogArticleCount: number
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
    landingPageCount: '3',
    socialPostCount: '30',
    emailCampaignCount: 0,
    blogArticleCount: 0,
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','social','clicktocall','featuredlistings','footer'],
    features: [
      { icon: 'fa-solid fa-file-lines', title: '3 AI Landing Pages',     desc: 'Build credibility from day one' },
      { icon: 'fa-solid fa-share-nodes', title: '30 Social Posts/mo',      desc: 'Automate content distribution' },
      { icon: 'fa-solid fa-clipboard-list', title: 'Lead Capture Forms',      desc: 'Capture prospect details automatically' },
      { icon: 'fa-solid fa-phone-volume', title: 'Click-to-Call Button',    desc: 'Enable instant prospect communication' },
      { icon: 'fa-solid fa-chart-line', title: 'Analytics Dashboard',     desc: 'Track your performance and growth' },
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
    solves: 'Spending $300\u2013800/month on tools that don\'t talk to each other',
    landingPageCount: '5',
    socialPostCount: '60',
    emailCampaignCount: 4,
    blogArticleCount: 2,
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','clicktocall','propertyspotlight','featuredlistings','footer'],
    features: [
      { icon: 'fa-solid fa-file-lines', title: '5 AI Landing Pages',      desc: 'Optimized conversion-ready pages' },
      { icon: 'fa-solid fa-share-nodes', title: '60 Social Posts/mo',       desc: 'Consistent brand presence' },
      { icon: 'fa-solid fa-envelope-open-text', title: '4 Email Campaigns/mo',     desc: 'Strategic email marketing' },
      { icon: 'fa-solid fa-pen-nib', title: '2 AI Blog Articles/mo',    desc: 'Thought leadership content' },
      { icon: 'fa-solid fa-chart-column', title: 'Performance Analytics',      desc: 'Track engagement and growth metrics' },
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
    solves: 'Top agents dominate with podcasts and video \u2014 now you can too',
    landingPageCount: '10',
    socialPostCount: '100+',
    emailCampaignCount: 8,
    blogArticleCount: 4,
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','clicktocall','podcast','video','propertyspotlight','featuredlistings','footer'],
    features: [
      { icon: 'fa-solid fa-file-lines', title: '10 Landing Pages',        desc: 'Full conversion funnel' },
      { icon: 'fa-solid fa-share-nodes', title: '100+ Social Posts/mo',    desc: 'Dominate every platform' },
      { icon: 'fa-solid fa-envelope-open-text', title: '8 Email Campaigns/mo',    desc: 'Nurture your entire pipeline' },
      { icon: 'fa-solid fa-microphone', title: '4 Podcast Episodes/mo',   desc: 'AI-cloned voice' },
      { icon: 'fa-solid fa-video', title: 'Video Production',        desc: 'Reels, Shorts, TikTok-ready' },
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
    landingPageCount: 'Unlimited',
    socialPostCount: '150',
    emailCampaignCount: 12,
    blogArticleCount: 4,
    sectionsEnabled: ['hero','services','leadform','bio','testimonials','blog','email','social','clicktocall','podcast','video','avatar','brandpresence','whiteglove','propertyspotlight','featuredlistings','footer'],
    features: [
      { icon: 'fa-solid fa-infinity', title: 'Unlimited AI Landing Pages', desc: 'No limits on your growth' },
      { icon: 'fa-solid fa-share-nodes', title: '150 Social Posts/mo',        desc: 'Full omnichannel domination' },
      { icon: 'fa-solid fa-robot', title: 'AI Avatar Videos (HeyGen)',  desc: 'Your face, automated' },
      { icon: 'fa-solid fa-microphone', title: 'Multichannel Podcasting',    desc: 'Spotify, Apple, YouTube' },
      { icon: 'fa-solid fa-globe', title: 'Branded Presence',           desc: 'Custom domain + YouTube channel' },
      { icon: 'fa-solid fa-rocket', title: 'White-Glove Onboarding',     desc: 'Full setup + ongoing support' },
    ],
  },
}
