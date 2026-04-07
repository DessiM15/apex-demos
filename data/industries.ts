import { PackageSlug } from './packages'

export type IndustrySlug = 'insurance' | 'lawfirm' | 'realestate' | 'financial'

export interface ServiceItem  { icon: string; title: string; desc: string }
export interface Testimonial  { quote: string; name: string; location: string; rating: number }

export interface ThemeColors {
  accent: string       // space-separated RGB, e.g. "36 58 143"
  accentDark: string
  accentLight: string  // hex, e.g. "#EBF0FC"
}

export interface IndustryConfig {
  slug: IndustrySlug
  name: string
  faIcon: string
  heroImage: string
  heroVideo?: string
  accentColor: string
  themeColors?: ThemeColors
  heroOverlay?: boolean  // default true — set false to remove tint over hero video
  heroHeadline:    Record<PackageSlug, string>
  heroSubheadline: Record<PackageSlug, string>
  services: ServiceItem[]
  formFields: string[]
  formCTA: string
  bioName:  string
  bioTitle: string
  bioCreds: string
  bioText:  string
  testimonials: Testimonial[]
}

export const industries: Record<IndustrySlug, IndustryConfig> = {
  insurance: {
    slug: 'insurance',
    name: 'Insurance Agent',
    faIcon: 'fa-solid fa-shield-halved',
    heroImage: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80',
    heroVideo: '/insurace-hero.mp4',
    accentColor: '#243a8f',
    heroHeadline: {
      pulsemarket:   'Protect What Matters Most — Get Your Free Quote Today',
      pulseflow:     'More Clients. More Coverage. More Growth.',
      pulsedrive:    'The Insurance Agency That Dominates Online',
      pulsecommand:  'Your Full-Scale Insurance Marketing Empire — Done For You',
    },
    heroSubheadline: {
      pulsemarket:   'Auto, Home, Life & Business Insurance — Tailored to You. Local agent, personalized service, fast quotes.',
      pulseflow:     'Automated content, email campaigns, and blog articles that keep you top-of-mind every single month.',
      pulsedrive:    'Podcast, video, and a relentless content engine that makes you the go-to insurance authority in your market.',
      pulsecommand:  'Unlimited landing pages, AI avatar videos, multichannel podcasting, and white-glove support. Built to scale.',
    },
    services: [
      { icon: 'fa-solid fa-car', title: 'Auto Insurance',      desc: 'Comprehensive coverage, competitive rates' },
      { icon: 'fa-solid fa-house-chimney', title: 'Homeowners Insurance',desc: 'Protect your biggest investment' },
      { icon: 'fa-solid fa-heart-pulse', title: 'Life Insurance',       desc: "Secure your family's future" },
      { icon: 'fa-solid fa-briefcase', title: 'Business Insurance',   desc: 'Keep your business fully covered' },
    ],
    formFields: ['First Name', 'Last Name', 'Phone', 'Email', 'Coverage Type'],
    formCTA: 'Get My Free Quote →',
    bioName:  'Sarah Mitchell',
    bioTitle: 'Licensed Insurance Agent',
    bioCreds: '12 Years Experience · Top Producer · Houston, TX',
    bioText:  "Hi, I'm Sarah — your local insurance agent helping Houston families find the right coverage at the right price. I work with top-rated carriers to get you the best rates. Let's talk.",
    testimonials: [
      { quote: 'Sarah saved our family over $400/year on our home and auto bundle. She walked us through everything and made it so easy!', name: 'Marcus T.', location: 'Houston, TX', rating: 5 },
      { quote: "I had no idea how underinsured I was until I spoke with Sarah. She found gaps in my coverage I didn't even know existed.", name: 'Jennifer R.', location: 'Katy, TX', rating: 5 },
      { quote: 'Fast, professional, and genuinely cares. She answered every question I had and got me covered in one day.', name: 'David K.', location: 'Sugar Land, TX', rating: 5 },
    ],
  },

  lawfirm: {
    slug: 'lawfirm',
    name: 'Law Firm',
    faIcon: 'fa-solid fa-scale-balanced',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    accentColor: '#1a2d70',
    heroHeadline: {
      pulsemarket:   'Experienced Legal Representation When It Matters Most',
      pulseflow:     'More Clients. More Cases. More Authority.',
      pulsedrive:    'The Law Firm That Dominates Your Market Online',
      pulsecommand:  'Your Full-Scale Legal Marketing Empire — Done For You',
    },
    heroSubheadline: {
      pulsemarket:   'Personal Injury · Family Law · Criminal Defense · Business Law — Free consultations available.',
      pulseflow:     'Automated content, email campaigns, and legal blog articles that position you as the authority in your practice area.',
      pulsedrive:    'Legal podcast, video content, and a full content engine that makes you the go-to attorney in your city.',
      pulsecommand:  'Unlimited landing pages, AI avatar videos, multichannel podcast distribution, and white-glove setup. Built to dominate.',
    },
    services: [
      { icon: 'fa-solid fa-scale-balanced', title: 'Personal Injury',    desc: 'Car accidents, slip & fall, workplace injuries' },
      { icon: 'fa-solid fa-people-roof', title: 'Family Law',        desc: 'Divorce, custody, adoption' },
      { icon: 'fa-solid fa-lock', title: 'Criminal Defense',   desc: 'Misdemeanor & felony representation' },
      { icon: 'fa-solid fa-briefcase', title: 'Business Law',        desc: 'Contracts, disputes, formation' },
    ],
    formFields: ['Full Name', 'Phone', 'Email', 'Type of Case', 'Brief Description'],
    formCTA: 'Request Free Consultation →',
    bioName:  'James A. Crawford, Esq.',
    bioTitle: 'Managing Attorney',
    bioCreds: '18 Years Litigation Experience · 500+ Cases Won · Board Certified',
    bioText:  'With 18 years of litigation experience and over 500 cases won, Attorney Crawford fights tirelessly for his clients. No fee unless we win.',
    testimonials: [
      { quote: "Attorney Crawford got me 3x what the insurance company initially offered. He kept me informed every step of the way.", name: 'David P.', location: 'Houston, TX', rating: 5 },
      { quote: "I was terrified going through my divorce. His team made me feel supported and fought hard for my kids. Forever grateful.", name: 'Anonymous', location: 'Houston, TX', rating: 5 },
      { quote: "Best attorney in Houston. Filed my claim fast, communicated clearly, and delivered results. Highly recommend.", name: 'Marcus W.', location: 'Houston, TX', rating: 5 },
    ],
  },

  realestate: {
    slug: 'realestate',
    name: 'Real Estate Agent',
    faIcon: 'fa-solid fa-house',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80',
    heroVideo: '/real-estate-hero.mp4',
    accentColor: '#b8860b',
    themeColors: {
      accent: '184 134 11',
      accentDark: '150 112 10',
      accentLight: '#FBF5E6',
    },
    heroOverlay: false,
    heroHeadline: {
      pulsemarket:   'Find Your Dream Home in Houston — Expert Guidance Every Step',
      pulseflow:     'More Listings. More Buyers. More Closings.',
      pulsedrive:    'The Real Estate Agent That Owns Their Market Online',
      pulsecommand:  'Your Full-Scale Real Estate Marketing Empire — Done For You',
    },
    heroSubheadline: {
      pulsemarket:   'Buying, Selling, or Investing — Expert guidance through the Houston market. 200+ homes sold. 5-star service.',
      pulseflow:     'Automated listing content, email campaigns, and market reports that keep buyers and sellers coming to you first.',
      pulsedrive:    'Property podcasts, listing videos, and a content engine that makes you the top-of-mind agent in every neighborhood.',
      pulsecommand:  'Unlimited landing pages, AI avatar videos, weekly market update series, and white-glove support. Built to scale.',
    },
    services: [
      { icon: 'fa-solid fa-key', title: 'Buyer Representation', desc: 'From search to closing, expert guidance' },
      { icon: 'fa-solid fa-dollar-sign', title: 'Home Selling',          desc: 'Strategic pricing, maximum exposure' },
      { icon: 'fa-solid fa-chart-bar', title: 'Market Analysis',       desc: "Know what your home is worth today" },
      { icon: 'fa-solid fa-building', title: 'Investment Properties', desc: 'Build wealth through real estate' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Buy / Sell / Invest', 'Budget Range', 'Timeline'],
    formCTA: "Let's Connect →",
    bioName:  'Monica Rivera',
    bioTitle: 'REALTOR® | Houston Specialist',
    bioCreds: '9 Years Experience · 200+ Homes Sold · 5-Star Rated',
    bioText:  "I'm Monica — Houston native, 9-year real estate veteran, and your trusted guide through one of life's biggest decisions. Whether you're a first-time buyer or seasoned investor, I bring market expertise and relentless advocacy to every deal.",
    testimonials: [
      { quote: 'Monica sold our home in 8 days — $22,000 ABOVE asking price. Her marketing strategy was incredible.', name: 'The Johnson Family', location: 'Katy, TX', rating: 5 },
      { quote: "As a first-time buyer I was terrified. Monica held my hand through every step. Found my perfect home in 3 weeks!", name: 'Keisha M.', location: 'Houston, TX', rating: 5 },
      { quote: "Best real estate agent in Houston. She knows every neighborhood and fought hard to get us the best deal.", name: 'Robert & Lisa T.', location: 'The Woodlands, TX', rating: 5 },
    ],
  },

  financial: {
    slug: 'financial',
    name: 'Financial Advisor',
    faIcon: 'fa-solid fa-chart-line',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    accentColor: '#243a8f',
    heroHeadline: {
      pulsemarket:   'Build Wealth. Retire With Confidence. Protect Your Family.',
      pulseflow:     'More Clients. More Assets. More Impact.',
      pulsedrive:    'The Financial Advisor That Dominates Their Market Online',
      pulsecommand:  'Your Full-Scale Financial Marketing Empire — Done For You',
    },
    heroSubheadline: {
      pulsemarket:   'Personalized financial planning for individuals, families, and business owners. Fiduciary. Independent. Always in your corner.',
      pulseflow:     'Automated content, email campaigns, and financial articles that position you as the trusted wealth authority in your market.',
      pulsedrive:    'Financial podcast, market update videos, and a content engine that makes you the go-to advisor for your ideal clients.',
      pulsecommand:  'Unlimited landing pages, AI avatar videos, weekly market commentary series, and white-glove setup. Built to scale.',
    },
    services: [
      { icon: 'fa-solid fa-piggy-bank', title: 'Retirement Planning',    desc: '401k, IRA, pension optimization' },
      { icon: 'fa-solid fa-shield-halved', title: 'Wealth Protection',      desc: 'Life insurance, annuities, asset protection' },
      { icon: 'fa-solid fa-chart-line', title: 'Investment Management', desc: 'Portfolio strategy and management' },
      { icon: 'fa-solid fa-building', title: 'Business Owner Planning',desc: 'Exit strategies, key person insurance' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Age Range', 'Primary Goal', 'Assets to Manage'],
    formCTA: 'Schedule Free Review →',
    bioName:  'Robert Kim, CFP®',
    bioTitle: 'Independent Fiduciary Financial Advisor',
    bioCreds: '15 Years Experience · CFP® Certified · Fiduciary · Houston, TX',
    bioText:  "I'm Robert — an independent fiduciary advisor with 15 years helping Houston families build lasting wealth. I don't work for a bank or insurance company. I work for you. My only job is to make your money work harder.",
    testimonials: [
      { quote: "Robert completely restructured our retirement strategy. We were on track to outlive our money. Now we're on track to leave a legacy.", name: 'Thomas & Angela W.', location: 'Houston, TX', rating: 5 },
      { quote: "As a small business owner I had no real plan. Robert set up my SEP IRA, succession plan, and key person insurance. Finally feel protected.", name: 'Carlos V.', location: 'Sugar Land, TX', rating: 5 },
      { quote: "Best financial decision I ever made was calling Robert. Clear, honest, and genuinely invested in my future.", name: 'Patricia H.', location: 'Katy, TX', rating: 5 },
    ],
  },
}
