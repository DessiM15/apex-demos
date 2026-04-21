import { PackageSlug } from './packages'

export type IndustrySlug = 'insurance' | 'lawfirm' | 'realestate' | 'financial' | 'hvac' | 'roofing' | 'salonspa' | 'photography' | 'dental' | 'plumbing' | 'trainer' | 'pilates' | 'lawncare'

export interface ServiceItem  { icon: string; title: string; desc: string }
export interface Testimonial  { quote: string; name: string; location: string; rating: number }

export interface ThemeColors {
  accent: string       // space-separated RGB, e.g. "36 58 143"
  accentDark: string
  accentLight: string  // hex, e.g. "#EBF0FC"
  brandBg?: string
  brandSurface?: string
  brandCard?: string
  brandText?: string
  brandMuted?: string
  brandBorder?: string
  brandHeading?: string
}

export interface ThemeConfig {
  heroLayout: 'left' | 'center' | 'clean-center' | 'split' | 'portrait' | 'zen' | 'editorial'
  heroOverlayOpacity: number
  servicesLayout: 'grid-4' | 'grid-3' | 'cards-large' | 'list'
  bioLayout: 'photo-left' | 'photo-right' | 'photo-top-center'
  testimonialsLayout: 'cards-3' | 'cards-2-large' | 'list-style'
  sectionOrder: string[]
  accentColor: string
  heroDark?: boolean
  headingStyle: 'bold-tight' | 'light-wide' | 'mixed'
  sectionSpacing: 'compact' | 'normal' | 'spacious'
  navStyle: 'white' | 'dark' | 'transparent-over-hero'
  darkSections: boolean
  formStyle: 'light' | 'dark' | 'split'
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
  heroIntroText?: string // optional intro text that scale+fades before the headline
  heroFont?: string      // optional font family for hero intro text
  heroTagline?: string   // small accent-colored tagline above headline (portrait layout)
  industryHook: string   // industry-relevant statistic/hook displayed under hero
  luxuryFont?: boolean      // true → uses Playfair Display serif for headings
  zenFont?: boolean         // true → uses Cormorant Garamond + Great Vibes for headings
  editorialFont?: boolean   // true → uses Bodoni Moda serif for headings
  athleticFont?: boolean    // true → uses Anton bold uppercase for headings
  pinkFont?: boolean         // true → uses Josefin Sans display + DM Sans body for headings
  heroHeadline:    Record<PackageSlug, string>
  heroSubheadline: Record<PackageSlug, string>
  services: ServiceItem[]
  formFields: string[]
  formCTA: string
  bioName:  string
  bioTitle: string
  bioCreds: string
  bioText:  string
  bioImage?: string
  heroImages?: string[]  // collage images for portrait hero (replaces single portrait)
  heroCTAs?: { label: string; href: string }[]
  heroCredentials?: string[]
  testimonials: Testimonial[]
  themeConfig?: ThemeConfig
}

// ── Group theme configurations ────────────────────────────────────
const SECTION_ORDER_CORPORATE = ['hero','services','leadform','bio','testimonials','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']
const SECTION_ORDER_TRADE = ['hero','services','bio','leadform','testimonials','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']
const SECTION_ORDER_CREATIVE = ['hero','bio','services','testimonials','leadform','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']
const SECTION_ORDER_HEALTH = ['hero','testimonials','services','leadform','bio','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']
const SECTION_ORDER_REALESTATE = ['hero','propertyspotlight','featuredlistings','testimonials','services','leadform','bio','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']
const SECTION_ORDER_LAWFIRM = ['hero','caseresults','practiceareas','attorneyteam','testimonials','services','leadform','bio','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer']

const corporateTheme: ThemeConfig = {
  heroLayout: 'left',
  heroOverlayOpacity: 0.82,
  servicesLayout: 'grid-4',
  bioLayout: 'photo-left',
  testimonialsLayout: 'cards-3',
  sectionOrder: SECTION_ORDER_CORPORATE,
  accentColor: '#243a8f',
  headingStyle: 'bold-tight',
  sectionSpacing: 'normal',
  navStyle: 'white',
  darkSections: false,
  formStyle: 'light',
}

const tradeTheme: ThemeConfig = {
  heroLayout: 'split',
  heroOverlayOpacity: 0.78,
  servicesLayout: 'cards-large',
  bioLayout: 'photo-right',
  testimonialsLayout: 'cards-2-large',
  sectionOrder: SECTION_ORDER_TRADE,
  accentColor: '#cf181d',
  headingStyle: 'bold-tight',
  sectionSpacing: 'compact',
  navStyle: 'dark',
  darkSections: true,
  formStyle: 'dark',
}

const creativeTheme: ThemeConfig = {
  heroLayout: 'center',
  heroOverlayOpacity: 0.55,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-top-center',
  testimonialsLayout: 'list-style',
  sectionOrder: SECTION_ORDER_CREATIVE,
  accentColor: '#0dbd79',
  headingStyle: 'light-wide',
  sectionSpacing: 'spacious',
  navStyle: 'transparent-over-hero',
  darkSections: false,
  formStyle: 'split',
}

const healthTheme: ThemeConfig = {
  heroLayout: 'center',
  heroOverlayOpacity: 0.68,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-left',
  testimonialsLayout: 'cards-3',
  sectionOrder: SECTION_ORDER_HEALTH,
  accentColor: '#059669',
  headingStyle: 'bold-tight',
  sectionSpacing: 'normal',
  navStyle: 'white',
  darkSections: false,
  formStyle: 'light',
}

const dentalTheme: ThemeConfig = {
  heroLayout: 'clean-center',
  heroOverlayOpacity: 0.55,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-left',
  testimonialsLayout: 'cards-3',
  sectionOrder: SECTION_ORDER_HEALTH,
  accentColor: '#059669',
  headingStyle: 'bold-tight',
  sectionSpacing: 'normal',
  navStyle: 'white',
  darkSections: false,
  formStyle: 'light',
}

const zenTheme: ThemeConfig = {
  heroLayout: 'zen',
  heroOverlayOpacity: 0.40,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-top-center',
  testimonialsLayout: 'list-style',
  sectionOrder: SECTION_ORDER_CREATIVE,
  accentColor: '#8F7A64',
  headingStyle: 'light-wide',
  sectionSpacing: 'spacious',
  navStyle: 'transparent-over-hero',
  darkSections: false,
  formStyle: 'split',
}

const photographyTheme: ThemeConfig = {
  heroLayout: 'editorial',
  heroOverlayOpacity: 0.45,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-top-center',
  testimonialsLayout: 'list-style',
  sectionOrder: SECTION_ORDER_CREATIVE,
  accentColor: '#fb5940',
  headingStyle: 'light-wide',
  sectionSpacing: 'spacious',
  navStyle: 'transparent-over-hero',
  darkSections: true,
  formStyle: 'dark',
}

const pilatesTheme: ThemeConfig = {
  heroLayout: 'center',
  heroOverlayOpacity: 0.45,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-top-center',
  testimonialsLayout: 'list-style',
  sectionOrder: SECTION_ORDER_CREATIVE,
  accentColor: '#E8005A',
  headingStyle: 'light-wide',
  sectionSpacing: 'spacious',
  navStyle: 'transparent-over-hero',
  darkSections: false,
  formStyle: 'split',
}

const lawnCareTheme: ThemeConfig = {
  heroLayout: 'clean-center',
  heroOverlayOpacity: 0.55,
  servicesLayout: 'grid-3',
  bioLayout: 'photo-top-center',
  testimonialsLayout: 'list-style',
  sectionOrder: SECTION_ORDER_TRADE,
  accentColor: '#2D6A4F',
  headingStyle: 'bold-tight',
  sectionSpacing: 'spacious',
  navStyle: 'transparent-over-hero',
  darkSections: false,
  formStyle: 'split',
}

const plumbingTheme: ThemeConfig = {
  heroLayout: 'left',
  heroOverlayOpacity: 0.78,
  servicesLayout: 'grid-4',
  bioLayout: 'photo-left',
  testimonialsLayout: 'cards-3',
  sectionOrder: SECTION_ORDER_TRADE,
  accentColor: '#2C5F8A',
  headingStyle: 'bold-tight',
  sectionSpacing: 'normal',
  navStyle: 'white',
  darkSections: false,
  formStyle: 'light',
}

export const industries: Record<IndustrySlug, IndustryConfig> = {
  insurance: {
    slug: 'insurance',
    name: 'Insurance Agent',
    faIcon: 'fa-solid fa-shield-halved',
    heroImage: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&q=80',
    heroVideo: '/insurace-hero.mp4',
    accentColor: '#243a8f',
    industryHook: '50% of Americans say they don\'t have adequate life insurance coverage',
    heroHeadline: {
      pulsemarket:   'Protect What Matters Most — Get Your Free Quote Today',
      pulseflow:     'Coverage You Can Count On — Protection Made Simple',
      pulsedrive:    'Your Family Deserves the Best Protection',
      pulsecommand:  'World-Class Insurance — Personally Tailored to Your Life',
    },
    heroSubheadline: {
      pulsemarket:   'Auto, Home, Life & Business Insurance — Tailored to You. Local agent, personalized service, fast quotes.',
      pulseflow:     'Auto, Home, Life & Business Insurance — Comprehensive coverage from a trusted local agent who puts your family first.',
      pulsedrive:    'Auto, Home, Life & Business Insurance — The full-service agency your neighborhood trusts for every policy and every claim.',
      pulsecommand:  'Auto, Home, Life & Business Insurance — Premium protection, concierge-level service, and a team dedicated to your peace of mind.',
    },
    services: [
      { icon: 'fa-solid fa-car', title: 'Auto Insurance',      desc: 'Comprehensive coverage, competitive rates' },
      { icon: 'fa-solid fa-house-chimney', title: 'Homeowners Insurance',desc: 'Protect your biggest investment' },
      { icon: 'fa-solid fa-heart-pulse', title: 'Life Insurance',       desc: "Secure your family's future" },
      { icon: 'fa-solid fa-briefcase', title: 'Business Insurance',   desc: 'Keep your business fully covered' },
    ],
    formFields: ['First Name', 'Last Name', 'Phone', 'Email', 'Coverage Type'],
    formCTA: 'Get My Free Quote \u2192',
    bioName:  'Sarah Mitchell',
    bioTitle: 'Licensed Insurance Agent',
    bioCreds: '12 Years Experience \u00b7 Top Producer \u00b7 Houston, TX',
    bioText:  "Hi, I'm Sarah \u2014 your local insurance agent helping Houston families find the right coverage at the right price. I work with top-rated carriers to get you the best rates. Let's talk.",
    bioImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    testimonials: [
      { quote: 'Sarah saved our family over $400/year on our home and auto bundle. She walked us through everything and made it so easy!', name: 'Marcus T.', location: 'Houston, TX', rating: 5 },
      { quote: "I had no idea how underinsured I was until I spoke with Sarah. She found gaps in my coverage I didn't even know existed.", name: 'Jennifer R.', location: 'Katy, TX', rating: 5 },
      { quote: 'Fast, professional, and genuinely cares. She answered every question I had and got me covered in one day.', name: 'David K.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...corporateTheme },
  },

  lawfirm: {
    slug: 'lawfirm',
    name: 'Law Firm',
    faIcon: 'fa-solid fa-scale-balanced',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80',
    heroVideo: '/law-firm-hero-2.mp4',
    accentColor: '#722F37',
    themeColors: {
      accent: '114 47 55',
      accentDark: '92 37 47',
      accentLight: '#F2E7E9',
      brandBg: '#0a0a0a',
      brandSurface: '#111111',
      brandCard: '#1a1a1a',
      brandText: '#F5F5F5',
      brandMuted: '#9CA3AF',
      brandBorder: '#2a2a2a',
      brandHeading: '#F5F5F5',
    },
    luxuryFont: true,
    heroCTAs: [
      { label: 'Free Consultation', href: '#leadform' },
      { label: 'View Our Results', href: '#caseresults' },
    ],
    heroCredentials: ['500+ Cases Won', 'Board Certified', 'No Fee Unless We Win', 'Free Consultations'],
    industryHook: '77% of people seeking legal help start with an online search before calling a single attorney',
    heroHeadline: {
      pulsemarket:   'Legal Counsel for the Modern World',
      pulseflow:     'Strategic Advocacy When the Stakes Are High',
      pulsedrive:    'Trusted Representation — Fighting for Your Future',
      pulsecommand:  'Elite Legal Counsel — Relentless Advocacy, Proven Results',
    },
    heroSubheadline: {
      pulsemarket:   'With decades of experience in personal injury, family law, criminal defense, and business litigation, our attorneys provide the personalized counsel you need to protect what matters most.',
      pulseflow:     'Our firm specializes in personal injury, family law, criminal defense, and business litigation. With a proven track record and a client-first approach, we fight for the results you deserve.',
      pulsedrive:    'From personal injury to complex business disputes, our legal team combines deep expertise with relentless advocacy. Decades of courtroom experience, hundreds of cases won.',
      pulsecommand:  'A full-service firm with expertise in personal injury, family law, criminal defense, and business litigation. Decades of experience, a personalized approach, and results that speak for themselves.',
    },
    services: [
      { icon: 'fa-solid fa-scale-balanced', title: 'Personal Injury',    desc: 'Car accidents, slip & fall, workplace injuries' },
      { icon: 'fa-solid fa-people-roof', title: 'Family Law',        desc: 'Divorce, custody, adoption' },
      { icon: 'fa-solid fa-lock', title: 'Criminal Defense',   desc: 'Misdemeanor & felony representation' },
      { icon: 'fa-solid fa-briefcase', title: 'Business Law',        desc: 'Contracts, disputes, formation' },
    ],
    formFields: ['Full Name', 'Phone', 'Email', 'Type of Case', 'Brief Description'],
    formCTA: 'Request Free Consultation \u2192',
    bioName:  'James A. Crawford, Esq.',
    bioTitle: 'Managing Attorney',
    bioCreds: '18 Years Litigation Experience \u00b7 500+ Cases Won \u00b7 Board Certified',
    bioText:  'With 18 years of litigation experience and over 500 cases won, Attorney Crawford fights tirelessly for his clients. No fee unless we win.',
    bioImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    testimonials: [
      { quote: "Attorney Crawford got me 3x what the insurance company initially offered. He kept me informed every step of the way.", name: 'David P.', location: 'Houston, TX', rating: 5 },
      { quote: "I was terrified going through my divorce. His team made me feel supported and fought hard for my kids. Forever grateful.", name: 'Anonymous', location: 'Houston, TX', rating: 5 },
      { quote: "Best attorney in Houston. Filed my claim fast, communicated clearly, and delivered results. Highly recommend.", name: 'Marcus W.', location: 'Houston, TX', rating: 5 },
    ],
    themeConfig: { ...corporateTheme, accentColor: '#722F37', sectionOrder: SECTION_ORDER_LAWFIRM },
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
      accentLight: '#FBF3E0',
      brandBg: '#0a0a0a',
      brandSurface: '#111111',
      brandCard: '#1a1a1a',
      brandText: '#F5F5F5',
      brandMuted: '#9CA3AF',
      brandBorder: '#2a2a2a',
    },
    heroOverlay: false,
    luxuryFont: true,
    heroCTAs: [
      { label: 'List Your Home', href: '#leadform' },
      { label: 'Buy a Home', href: '#featuredlistings' },
    ],
    industryHook: '88% of home buyers use the internet as their primary research tool during their search',
    heroHeadline: {
      pulsemarket:   'Find Your Dream Home — Expert Guidance Every Step',
      pulseflow:     'From First Showing to Final Closing — We\'re With You',
      pulsedrive:    'Your Next Chapter Starts Here — Let Us Find Your Perfect Home',
      pulsecommand:  'Luxury Service, Exceptional Results — Real Estate Redefined',
    },
    heroSubheadline: {
      pulsemarket:   'Buying, Selling, or Investing \u2014 Expert guidance through the Houston market. 200+ homes sold. 5-star service.',
      pulseflow:     'Buying, Selling, or Investing \u2014 A full-service agent with deep market knowledge and a proven track record of results.',
      pulsedrive:    'Buying, Selling, or Investing \u2014 The top-producing agent your neighborhood trusts to close deals faster and for more money.',
      pulsecommand:  'Buying, Selling, or Investing \u2014 Concierge-level real estate service backed by cutting-edge marketing and local expertise.',
    },
    services: [
      { icon: 'fa-solid fa-key', title: 'Buyer Representation', desc: 'From search to closing, expert guidance' },
      { icon: 'fa-solid fa-dollar-sign', title: 'Home Selling',          desc: 'Strategic pricing, maximum exposure' },
      { icon: 'fa-solid fa-chart-bar', title: 'Market Analysis',       desc: "Know what your home is worth today" },
      { icon: 'fa-solid fa-building', title: 'Investment Properties', desc: 'Build wealth through real estate' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Buy / Sell / Invest', 'Budget Range', 'Timeline'],
    formCTA: "Let's Connect \u2192",
    bioName:  'Monica Rivera',
    bioTitle: 'REALTOR\u00ae | Houston Specialist',
    bioCreds: '9 Years Experience \u00b7 200+ Homes Sold \u00b7 5-Star Rated',
    bioText:  "I'm Monica \u2014 Houston native, 9-year real estate veteran, and your trusted guide through one of life's biggest decisions. Whether you're a first-time buyer or seasoned investor, I bring market expertise and relentless advocacy to every deal.",
    bioImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    testimonials: [
      { quote: 'Monica sold our home in 8 days \u2014 $22,000 ABOVE asking price. Her marketing strategy was incredible.', name: 'The Johnson Family', location: 'Katy, TX', rating: 5 },
      { quote: "As a first-time buyer I was terrified. Monica held my hand through every step. Found my perfect home in 3 weeks!", name: 'Keisha M.', location: 'Houston, TX', rating: 5 },
      { quote: "Best real estate agent in Houston. She knows every neighborhood and fought hard to get us the best deal.", name: 'Robert & Lisa T.', location: 'The Woodlands, TX', rating: 5 },
    ],
    themeConfig: { ...healthTheme, accentColor: '#b8860b', sectionOrder: SECTION_ORDER_REALESTATE },
  },

  financial: {
    slug: 'financial',
    name: 'Financial Advisor',
    faIcon: 'fa-solid fa-chart-line',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    heroVideo: '/financial-advisor-hero.mp4',
    accentColor: '#0F766E',
    themeColors: {
      accent: '15 118 110',
      accentDark: '13 94 87',
      accentLight: '#ECFDF5',
      brandHeading: '#b49132',
    },
    industryHook: '56% of Americans say they don\'t have enough savings to cover a $1,000 emergency expense',
    heroHeadline: {
      pulsemarket:   'Your Financial Future, Expertly Guided',
      pulseflow:     'Smart Planning Today for a Confident Tomorrow',
      pulsedrive:    'Wealth Management Built Around Your Life Goals',
      pulsecommand:  'Elite Financial Strategy — Your Legacy, Our Mission',
    },
    heroSubheadline: {
      pulsemarket:   'Personalized financial planning for individuals, families, and business owners. Fiduciary. Independent. Always in your corner.',
      pulseflow:     'Personalized financial planning for individuals, families, and business owners \u2014 Building wealth with a plan you can trust.',
      pulsedrive:    'Personalized financial planning for individuals, families, and business owners \u2014 The advisor your peers recommend by name.',
      pulsecommand:  'Personalized financial planning for individuals, families, and business owners \u2014 Wealth management with white-glove precision.',
    },
    services: [
      { icon: 'fa-solid fa-piggy-bank', title: 'Retirement Planning',    desc: '401k, IRA, pension optimization' },
      { icon: 'fa-solid fa-shield-halved', title: 'Wealth Protection',      desc: 'Life insurance, annuities, asset protection' },
      { icon: 'fa-solid fa-chart-line', title: 'Investment Management', desc: 'Portfolio strategy and management' },
      { icon: 'fa-solid fa-building', title: 'Business Owner Planning',desc: 'Exit strategies, key person insurance' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Age Range', 'Primary Goal', 'Assets to Manage'],
    formCTA: 'Schedule Free Review \u2192',
    bioName:  'Robert Kim, CFP\u00ae',
    bioTitle: 'Independent Fiduciary Financial Advisor',
    bioCreds: '15 Years Experience \u00b7 CFP\u00ae Certified \u00b7 Fiduciary \u00b7 Houston, TX',
    bioText:  "I'm Robert \u2014 an independent fiduciary advisor with 15 years helping Houston families build lasting wealth. I don't work for a bank or insurance company. I work for you. My only job is to make your money work harder.",
    bioImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    testimonials: [
      { quote: "Robert completely restructured our retirement strategy. We were on track to outlive our money. Now we're on track to leave a legacy.", name: 'Thomas & Angela W.', location: 'Houston, TX', rating: 5 },
      { quote: "As a small business owner I had no real plan. Robert set up my SEP IRA, succession plan, and key person insurance. Finally feel protected.", name: 'Carlos V.', location: 'Sugar Land, TX', rating: 5 },
      { quote: "Best financial decision I ever made was calling Robert. Clear, honest, and genuinely invested in my future.", name: 'Patricia H.', location: 'Katy, TX', rating: 5 },
    ],
    themeConfig: { ...corporateTheme, accentColor: '#0F766E', heroLayout: 'portrait' },
  },

  hvac: {
    slug: 'hvac',
    name: 'HVAC Specialist',
    faIcon: 'fa-solid fa-fan',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    accentColor: '#cf181d',
    themeColors: {
      accent: '207 24 29',
      accentDark: '180 20 25',
      accentLight: '#FDE8E8',
      brandBg: '#1a1a2e',
      brandSurface: '#22223b',
      brandCard: '#2a2a44',
      brandText: '#F5F5F5',
      brandMuted: '#9CA3AF',
      brandBorder: '#3a3a55',
    },
    industryHook: '75% of homeowners pick the first HVAC company that shows up with good reviews online',
    heroHeadline: {
      pulsemarket:  'Stay Cool All Summer, Stay Warm All Winter',
      pulseflow:    'Comfort You Can Rely On — 24/7 Heating & Cooling',
      pulsedrive:   'Your Home\'s Comfort Is Our Priority',
      pulsecommand: 'Premium Climate Control — Total Comfort, Year-Round',
    },
    heroSubheadline: {
      pulsemarket:  'AC Installation, Heating Repair, Duct Cleaning & Emergency Service \u2014 Licensed, insured, and trusted by Houston homeowners.',
      pulseflow:    'AC Installation, Heating Repair, Duct Cleaning & Emergency Service \u2014 The trusted HVAC team that keeps your home comfortable year-round.',
      pulsedrive:   'AC Installation, Heating Repair, Duct Cleaning & Emergency Service \u2014 The go-to comfort experts homeowners recommend to their neighbors.',
      pulsecommand: 'AC Installation, Heating Repair, Duct Cleaning & Emergency Service \u2014 Full-service HVAC with 24/7 response and guaranteed satisfaction.',
    },
    services: [
      { icon: 'fa-solid fa-snowflake', title: 'AC Installation', desc: 'Energy-efficient cooling systems installed right' },
      { icon: 'fa-solid fa-fire', title: 'Heating Repair', desc: 'Fast, reliable furnace and heat pump repair' },
      { icon: 'fa-solid fa-wind', title: 'Duct Cleaning', desc: 'Improve air quality and system efficiency' },
      { icon: 'fa-solid fa-bolt', title: 'Emergency Service', desc: '24/7 emergency HVAC repair when you need it' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Service Needed', 'Preferred Date'],
    formCTA: 'Get a Free Estimate',
    bioImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bioName:  'Mike Torres',
    bioTitle: 'HVAC Specialist',
    bioCreds: '15 Years Experience \u2014 Licensed and Insured \u2014 Houston TX',
    bioText:  "I'm Mike \u2014 a licensed HVAC specialist with 15 years of experience keeping Houston homes comfortable year-round. From emergency repairs to full system installations, I treat every home like my own. Fast response, honest pricing, guaranteed work.",
    testimonials: [
      { quote: 'Mike came out the same day our AC died in July. Had us up and running in 2 hours. Fair price and great work. Will call him every time.', name: 'Anthony R.', location: 'Houston, TX', rating: 5 },
      { quote: 'We got quotes from 4 companies. Mike was the most honest and the best price. New system runs perfectly and our electric bill dropped 30%.', name: 'Sandra L.', location: 'Katy, TX', rating: 5 },
      { quote: 'Professional, punctual, and knows his stuff. Mike explained everything before starting and cleaned up after. Highly recommend.', name: 'James C.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...tradeTheme },
  },

  roofing: {
    slug: 'roofing',
    name: 'Roofing Contractor',
    faIcon: 'fa-solid fa-hammer',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    accentColor: '#cf181d',
    themeColors: {
      accent: '207 24 29',
      accentDark: '180 20 25',
      accentLight: '#FDE8E8',
    },
    heroTagline: 'BBB A+ Rated Roofing in Houston',
    industryHook: '70% of homeowners don\'t inspect their roof until there\'s already visible damage inside',
    heroHeadline: {
      pulsemarket:  'A Roof You Can Trust — Built to Last',
      pulseflow:    'Quality Craftsmanship, Honest Service — Your Roof, Done Right',
      pulsedrive:   'Protect Your Biggest Investment With a Roof Built to Last',
      pulsecommand: 'Premium Roofing — Craftsmanship That Stands the Test of Time',
    },
    heroSubheadline: {
      pulsemarket:  'We are a BBB-accredited roofer in Houston, and family ran, offering top-rated services from leak repairs to full roof replacements with architectural shingles. Licensed, insured, and trusted across Greater Houston.',
      pulseflow:    'Roof Installation, Storm Damage Repair, Gutter Installation & Inspections \u2014 The roofing contractor homeowners trust for honest work.',
      pulsedrive:   'Roof Installation, Storm Damage Repair, Gutter Installation & Inspections \u2014 The most trusted roofer in your market, bar none.',
      pulsecommand: 'Roof Installation, Storm Damage Repair, Gutter Installation & Inspections \u2014 Premium roofing with warranty-backed quality and storm-ready response.',
    },
    services: [
      { icon: 'fa-solid fa-house-chimney', title: 'Roof Installation', desc: 'Quality roofing systems built to last' },
      { icon: 'fa-solid fa-cloud-bolt', title: 'Storm Damage Repair', desc: 'Fast response after hail, wind, and storms' },
      { icon: 'fa-solid fa-droplet', title: 'Gutter Installation', desc: 'Protect your foundation with proper drainage' },
      { icon: 'fa-solid fa-magnifying-glass', title: 'Roof Inspection', desc: 'Detailed assessments and honest recommendations' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Service Needed', 'Property Address'],
    formCTA: 'Get a Free Roof Inspection',
    bioImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    heroImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',   // finished house / curb appeal
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',   // roofer at work on roof
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',   // roofing crew working
    ],
    bioName:  'Derek Hayes',
    bioTitle: 'Master Roofer',
    bioCreds: 'Licensed and Insured \u2014 20 Years Experience \u2014 Houston TX',
    bioText:  "I'm Derek \u2014 a master roofer with 20 years protecting Houston homes. From new installations to storm damage repairs, I deliver honest assessments and quality craftsmanship. Every roof comes with a warranty and my personal guarantee.",
    testimonials: [
      { quote: 'Derek replaced our entire roof after a hailstorm. Handled the insurance claim, showed up on time, and the crew was incredible. Best roofer in Houston.', name: 'Michelle T.', location: 'Houston, TX', rating: 5 },
      { quote: 'Got 3 quotes for a new roof. Derek was the most thorough and transparent. No pressure, fair pricing, and the quality speaks for itself.', name: 'Brandon W.', location: 'The Woodlands, TX', rating: 5 },
      { quote: 'Fast, professional, and honest. Derek found issues the other companies missed. Fixed everything right the first time. Highly recommend.', name: 'Lisa M.', location: 'Katy, TX', rating: 5 },
    ],
    themeConfig: {
      ...corporateTheme,
      accentColor: '#cf181d',
      heroLayout: 'portrait' as const,
      heroDark: false,
      bioLayout: 'photo-right' as const,
      sectionOrder: SECTION_ORDER_TRADE,
    },
  },

  salonspa: {
    slug: 'salonspa',
    name: 'Salon / Med Spa',
    faIcon: 'fa-solid fa-spa',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138daaa45d0e?w=1200&q=80',
    heroVideo: '/spa-hero.mp4',
    accentColor: '#8F7A64',
    zenFont: true,
    themeColors: {
      accent: '143 122 100',
      accentDark: '115 97 80',
      accentLight: '#F5F0EB',
      brandBg: '#FAF8F5',
      brandSurface: '#F3EDE6',
      brandCard: '#FFFFFF',
      brandText: '#3D3428',
      brandMuted: '#8A7E72',
      brandBorder: '#E2DAD0',
      brandHeading: '#3D3428',
    },
    industryHook: 'The med spa industry has grown 12% year-over-year \u2014 clients are searching online for providers right now',
    heroHeadline: {
      pulsemarket:  'Radiance Begins Here',
      pulseflow:    'Rejuvenate, Refresh, Reveal Your Best Self',
      pulsedrive:   'Where Wellness Meets Artistry',
      pulsecommand: 'The Ultimate Aesthetic Experience — Curated For You',
    },
    heroSubheadline: {
      pulsemarket:  'Facials, Botox & Fillers, Laser Treatments & Massage Therapy \u2014 Board certified, results-driven, and trusted by Houston clients.',
      pulseflow:    'Facials, Botox & Fillers, Laser Treatments & Massage Therapy \u2014 The aesthetic studio clients trust for natural, stunning results.',
      pulsedrive:   'Facials, Botox & Fillers, Laser Treatments & Massage Therapy \u2014 The go-to aesthetics expert your clients recommend to everyone they know.',
      pulsecommand: 'Facials, Botox & Fillers, Laser Treatments & Massage Therapy \u2014 Luxury aesthetics with concierge service and transformative results.',
    },
    services: [
      { icon: 'fa-solid fa-spa', title: 'Facials', desc: 'Customized treatments for every skin type' },
      { icon: 'fa-solid fa-syringe', title: 'Botox and Fillers', desc: 'Natural-looking results from certified injectors' },
      { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Laser Treatments', desc: 'Advanced laser technology for lasting results' },
      { icon: 'fa-solid fa-hand-sparkles', title: 'Massage Therapy', desc: 'Relaxation and therapeutic bodywork' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Service Interest', 'Preferred Date'],
    formCTA: 'Book My Consultation',
    bioImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bioName:  'Camille Rose',
    bioTitle: 'Licensed Aesthetician',
    bioCreds: '10 Years Experience \u2014 Board Certified \u2014 Houston TX',
    bioText:  "I'm Camille \u2014 a board-certified aesthetician with 10 years helping Houston clients look and feel their absolute best. From advanced laser treatments to relaxing facials, every service is customized to your unique skin and goals.",
    testimonials: [
      { quote: 'Camille is a magician. My skin has never looked better. She takes the time to explain everything and the results speak for themselves.', name: 'Jasmine K.', location: 'Houston, TX', rating: 5 },
      { quote: 'Best Botox experience I have ever had. Natural results, no bruising, and Camille made me feel completely comfortable the entire time.', name: 'Stephanie R.', location: 'Sugar Land, TX', rating: 5 },
      { quote: 'I drive 45 minutes to see Camille because nobody else compares. She truly cares about her clients and the results are always flawless.', name: 'Nicole D.', location: 'The Woodlands, TX', rating: 5 },
    ],
    themeConfig: { ...zenTheme },
  },

  photography: {
    slug: 'photography',
    name: 'Photography Studio',
    faIcon: 'fa-solid fa-camera',
    heroImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    accentColor: '#fb5940',
    editorialFont: true,
    themeColors: {
      accent: '251 89 64',
      accentDark: '200 60 40',
      accentLight: '#2a1a17',
      brandBg: '#0D0D0D',
      brandSurface: '#1A1A1A',
      brandCard: '#1C1C1C',
      brandText: '#F5F5F5',
      brandMuted: '#999999',
      brandBorder: '#2A2A2A',
      brandHeading: '#fb5940',
    },
    industryHook: '93% of couples say photography is one of the most important investments for their wedding day',
    heroHeadline: {
      pulsemarket:  "Capture Life's Greatest Moments",
      pulseflow:    'Every Moment Deserves to Be Remembered Beautifully',
      pulsedrive:   'Photography That Tells Your Story',
      pulsecommand: 'Cinematic Moments, Timeless Elegance',
    },
    heroSubheadline: {
      pulsemarket:  'Wedding Photography, Portrait Sessions, Commercial Photography & Event Coverage \u2014 500+ sessions and counting.',
      pulseflow:    'Wedding Photography, Portrait Sessions, Commercial Photography & Event Coverage \u2014 The photographer clients book again and again.',
      pulsedrive:   'Wedding Photography, Portrait Sessions, Commercial Photography & Event Coverage \u2014 The most booked photographer in your city.',
      pulsecommand: 'Wedding Photography, Portrait Sessions, Commercial Photography & Event Coverage \u2014 Premium photography with a creative eye and flawless execution.',
    },
    services: [
      { icon: 'fa-solid fa-heart', title: 'Wedding Photography', desc: 'Every moment captured beautifully' },
      { icon: 'fa-solid fa-user', title: 'Portrait Sessions', desc: 'Professional headshots and family portraits' },
      { icon: 'fa-solid fa-building', title: 'Commercial Photography', desc: 'Product and brand imagery that sells' },
      { icon: 'fa-solid fa-calendar-check', title: 'Event Coverage', desc: 'Complete event documentation and storytelling' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Event Type', 'Preferred Date'],
    formCTA: 'Check My Availability',
    bioImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face',
    bioName:  'Jordan Blake',
    bioTitle: 'Professional Photographer',
    bioCreds: '8 Years Experience \u2014 500+ Sessions \u2014 Houston TX',
    bioText:  "I'm Jordan \u2014 a professional photographer with 8 years and over 500 sessions capturing Houston's biggest moments. From weddings to corporate events, I bring a creative eye and reliable execution to every shoot.",
    testimonials: [
      { quote: 'Jordan captured our wedding day perfectly. Every photo tells a story and the turnaround was incredibly fast. Worth every penny.', name: 'Amanda & Chris H.', location: 'Houston, TX', rating: 5 },
      { quote: 'Best headshots I have ever gotten. Jordan made me feel relaxed and confident in front of the camera. Using them everywhere now.', name: 'Tyler J.', location: 'Katy, TX', rating: 5 },
      { quote: 'We hired Jordan for our company event and the photos were stunning. Professional, creative, and so easy to work with. Highly recommend.', name: 'Rachel S.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...photographyTheme },
  },

  dental: {
    slug: 'dental',
    name: 'Dental Practice',
    faIcon: 'fa-solid fa-tooth',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
    accentColor: '#059669',
    themeColors: {
      accent: '5 150 105',
      accentDark: '4 120 84',
      accentLight: '#ECFDF5',
    },
    industryHook: '1 in 4 adults have untreated cavities \u2014 your next patient is searching for a dentist right now',
    heroHeadline: {
      pulsemarket:  'A Healthy __Smile__ Changes Everything',
      pulseflow:    'Gentle Care, __Beautiful__ Results',
      pulsedrive:   'Your Smile Deserves the __Best__ Care',
      pulsecommand: 'World-Class Dentistry — A __Smile__ You\'ll Be Proud Of',
    },
    heroSubheadline: {
      pulsemarket:  'We offer a wide range of services for your every dental need.',
      pulseflow:    'The dental practice families trust for gentle, modern care.',
      pulsedrive:   'The most trusted dentist in your area, accepting new patients now.',
      pulsecommand: 'Premium dental care with same-day appointments and concierge service.',
    },
    services: [
      { icon: 'fa-solid fa-tooth', title: 'General Dentistry', desc: 'Cleanings, exams, and preventive care' },
      { icon: 'fa-solid fa-star', title: 'Cosmetic Dentistry', desc: 'Veneers, whitening, and smile makeovers' },
      { icon: 'fa-solid fa-face-smile', title: 'Orthodontics', desc: 'Braces and clear aligners for all ages' },
      { icon: 'fa-solid fa-kit-medical', title: 'Emergency Dental Care', desc: 'Same-day emergency appointments available' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Service Needed', 'Insurance Provider'],
    formCTA: 'Talk to a Dentist',
    bioImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    bioName:  'Dr. Angela Park',
    bioTitle: 'General Dentist DDS',
    bioCreds: 'Accepting New Patients \u2014 14 Years Experience \u2014 Houston TX',
    bioText:  "I'm Dr. Park \u2014 a general dentist with 14 years of experience providing gentle, modern dental care to Houston families. From routine cleanings to full smile makeovers, my goal is to make every visit comfortable and every result lasting.",
    testimonials: [
      { quote: 'Dr. Park is the first dentist I actually look forward to seeing. Gentle, thorough, and the office is beautiful. My whole family goes here now.', name: 'Karen B.', location: 'Houston, TX', rating: 5 },
      { quote: 'I was terrified of the dentist for years. Dr. Park changed that completely. She explained everything, was incredibly patient, and my teeth look amazing.', name: 'Michael T.', location: 'Katy, TX', rating: 5 },
      { quote: 'Got my veneers done by Dr. Park and I cannot stop smiling. The results are natural, beautiful, and exactly what I wanted. 10 out of 10.', name: 'Ashley W.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...dentalTheme },
  },

  plumbing: {
    slug: 'plumbing',
    name: 'Plumbing Service',
    faIcon: 'fa-solid fa-faucet-drip',
    heroImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80',
    accentColor: '#2C5F8A',
    themeColors: {
      accent: '44 95 138',
      accentDark: '35 76 110',
      accentLight: '#EDF4FA',
      brandBg: '#FFFFFF',
      brandSurface: '#F7F9FC',
      brandCard: '#FFFFFF',
      brandText: '#1F2937',
      brandMuted: '#6B7280',
      brandBorder: '#E2E8F0',
      brandHeading: '#B8860B',
    },
    industryHook: 'The average water leak wastes 10,000 gallons per year \u2014 homeowners need a plumber they can trust on speed dial',
    heroHeadline: {
      pulsemarket:  'Fast, Reliable Plumbing — When You Need It Most',
      pulseflow:    'Leaks, Clogs, Emergencies — We Handle It All',
      pulsedrive:   'Trusted Plumbing Experts Your Neighbors Count On',
      pulsecommand: 'Premium Plumbing — Done Right the First Time, Every Time',
    },
    heroSubheadline: {
      pulsemarket:  'Drain Cleaning, Pipe Repair, Water Heater Services & Emergency Plumbing \u2014 Licensed master plumber serving Houston.',
      pulseflow:    'Drain Cleaning, Pipe Repair, Water Heater Services & Emergency Plumbing \u2014 The plumber homeowners call first, every time.',
      pulsedrive:   'Drain Cleaning, Pipe Repair, Water Heater Services & Emergency Plumbing \u2014 The go-to plumber your entire neighborhood recommends.',
      pulsecommand: 'Drain Cleaning, Pipe Repair, Water Heater Services & Emergency Plumbing \u2014 Master-level plumbing with 24/7 emergency response and lifetime guarantees.',
    },
    services: [
      { icon: 'fa-solid fa-shower', title: 'Drain Cleaning', desc: 'Fast, effective drain and sewer cleaning' },
      { icon: 'fa-solid fa-wrench', title: 'Pipe Repair and Replacement', desc: 'Fix leaks and replace aging pipes' },
      { icon: 'fa-solid fa-temperature-high', title: 'Water Heater Services', desc: 'Installation, repair, and maintenance' },
      { icon: 'fa-solid fa-phone-volume', title: 'Emergency Plumbing', desc: '24/7 emergency service when you need it' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Issue Description', 'Property Address'],
    formCTA: 'Get a Free Quote',
    bioImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bioName:  'Carlos Mendez',
    bioTitle: 'Master Plumber',
    bioCreds: 'Licensed Master Plumber \u2014 18 Years Experience \u2014 Houston TX',
    bioText:  "I'm Carlos \u2014 a licensed master plumber with 18 years of experience serving Houston homeowners and businesses. From emergency leaks to full re-pipes, I deliver honest diagnostics, upfront pricing, and work I stand behind.",
    testimonials: [
      { quote: 'Carlos showed up within an hour when our pipe burst at 2 AM. Fixed it fast, fair price, and cleaned up everything. Absolute lifesaver.', name: 'Raymond K.', location: 'Houston, TX', rating: 5 },
      { quote: 'We had 3 plumbers look at our issue before Carlos. He diagnosed it in 10 minutes and fixed it for half what the others quoted. The best.', name: 'Diana P.', location: 'Katy, TX', rating: 5 },
      { quote: 'Honest, professional, and truly skilled. Carlos replaced our water heater and the whole experience was seamless. Highly recommend.', name: 'Frank & Maria G.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...plumbingTheme },
  },

  trainer: {
    slug: 'trainer',
    name: 'Personal Trainer',
    faIcon: 'fa-solid fa-dumbbell',
    heroImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    accentColor: '#0dbd79',
    athleticFont: true,
    themeColors: {
      accent: '13 189 121',
      accentDark: '10 150 96',
      accentLight: '#E6F9F1',
      brandBg: '#FFFFFF',
      brandSurface: '#F0FDF7',
      brandCard: '#FFFFFF',
      brandText: '#1A1A1A',
      brandMuted: '#4B5563',
      brandBorder: '#D1FAE5',
      brandHeading: '#1A1A1A',
    },
    industryHook: '80% of gym members quit within 5 months \u2014 a personal trainer makes clients 6x more likely to stick with it',
    heroHeadline: {
      pulsemarket:  'Transform Your Body, Transform Your Life',
      pulseflow:    'Personalized Training — Results You Can See and Feel',
      pulsedrive:   'Unlock Your Full Potential — Expert Coaching, Real Results',
      pulsecommand: 'Elite Personal Training — Your Strongest Self Starts Here',
    },
    heroSubheadline: {
      pulsemarket:  'Personal Training, Nutrition Coaching, Group Fitness & Online Coaching \u2014 NASM Certified and results-driven.',
      pulseflow:    'Personal Training, Nutrition Coaching, Group Fitness & Online Coaching \u2014 The trainer who delivers real, lasting transformations.',
      pulsedrive:   'Personal Training, Nutrition Coaching, Group Fitness & Online Coaching \u2014 The go-to fitness expert your city trusts for results.',
      pulsecommand: 'Personal Training, Nutrition Coaching, Group Fitness & Online Coaching \u2014 Elite personal training with nutrition coaching and full lifestyle programming.',
    },
    services: [
      { icon: 'fa-solid fa-dumbbell', title: 'Personal Training', desc: 'One-on-one customized workout programs' },
      { icon: 'fa-solid fa-apple-whole', title: 'Nutrition Coaching', desc: 'Meal plans and nutrition guidance' },
      { icon: 'fa-solid fa-people-group', title: 'Group Fitness Classes', desc: 'High-energy group workout sessions' },
      { icon: 'fa-solid fa-laptop', title: 'Online Coaching', desc: 'Train anywhere with virtual programs' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Fitness Goal', 'Experience Level'],
    formCTA: 'Book a Free Consultation',
    bioImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face',
    bioName:  'Marcus Johnson',
    bioTitle: 'Certified Personal Trainer',
    bioCreds: 'NASM Certified \u2014 12 Years Experience \u2014 Houston TX',
    bioText:  "I'm Marcus \u2014 a NASM-certified personal trainer with 12 years helping Houston clients build strength, lose weight, and transform their lives. Whether you're just starting out or training for competition, I build programs that deliver real results.",
    testimonials: [
      { quote: 'Marcus helped me lose 45 pounds in 6 months. His programs are smart, his energy is incredible, and he actually cares about your progress.', name: 'Kevin D.', location: 'Houston, TX', rating: 5 },
      { quote: 'I have worked with 3 trainers before Marcus. He is the first one who actually listened to my goals and built a plan around my life. Game changer.', name: 'Priya S.', location: 'Katy, TX', rating: 5 },
      { quote: 'Best trainer in Houston. Marcus pushes you just the right amount and the nutrition coaching makes all the difference. Down 30 lbs and counting.', name: 'Angela M.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...creativeTheme },
  },

  pilates: {
    slug: 'pilates',
    name: 'Pilates Studio',
    faIcon: 'fa-solid fa-person-walking',
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&q=80',
    heroVideo: '/pilates-hero.mp4',
    accentColor: '#E8005A',
    heroOverlay: false,
    pinkFont: true,
    themeColors: {
      accent: '232 0 90',
      accentDark: '212 83 126',
      accentLight: '#FBEAF0',
      brandBg: '#FFFFFF',
      brandSurface: '#FBEAF0',
      brandCard: '#FFFFFF',
      brandText: '#1A1A1A',
      brandMuted: '#888888',
      brandBorder: '#F4C0D1',
      brandHeading: '#1A1A1A',
    },
    industryHook: 'Boutique fitness studios see 3x higher client retention than big-box gyms \u2014 pilates leads the category',
    heroHeadline: {
      pulsemarket:  'Move with Intention',
      pulseflow:    'Find Your Practice \u2014 Strengthen Your Core, Transform Your Body',
      pulsedrive:   'Where Strength Meets Community \u2014 Boutique Pilates, Real Results',
      pulsecommand: 'The Ultimate Pilates Experience \u2014 Curated for Every Body',
    },
    heroSubheadline: {
      pulsemarket:  'Mat, Reformer, Barre & Private Sessions \u2014 Boutique pilates in the heart of Houston. Classes for every body, every level.',
      pulseflow:    'Mat, Reformer, Barre & Private Sessions \u2014 The studio Houston trusts for personalized, results-driven pilates.',
      pulsedrive:   'Mat, Reformer, Barre & Private Sessions \u2014 The go-to boutique studio your clients recommend to everyone they know.',
      pulsecommand: 'Mat, Reformer, Barre & Private Sessions \u2014 Luxury boutique pilates with concierge booking and transformative programming.',
    },
    services: [
      { icon: 'fa-solid fa-child', title: 'Mat Pilates', desc: 'Build core strength, flexibility, and body awareness on the mat' },
      { icon: 'fa-solid fa-sliders', title: 'Reformer', desc: 'Spring-loaded resistance meets precision movement' },
      { icon: 'fa-solid fa-music', title: 'Barre Fusion', desc: 'Pilates meets ballet meets burn \u2014 set to energizing music' },
      { icon: 'fa-solid fa-heart', title: 'Prenatal Pilates', desc: 'Safe, empowering movement for expecting mamas' },
      { icon: 'fa-solid fa-bolt', title: 'Power Pilates', desc: 'High-intensity, low-impact \u2014 leave feeling powerful' },
      { icon: 'fa-solid fa-user', title: 'Private Sessions', desc: 'One-on-one attention tailored to your goals' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Class Interest', 'Experience Level'],
    formCTA: 'Book a Class',
    bioImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bioName:  'Sarah Mitchell',
    bioTitle: 'Studio Owner & Lead Instructor',
    bioCreds: 'NCPT Certified \u2014 12 Years Experience \u2014 Houston TX',
    bioText:  "I'm Sarah \u2014 a nationally certified pilates instructor and the founder of PinkCore Pilates Studio. After 12 years of teaching, I still believe every body deserves to feel strong. Whether you're a first-timer or a seasoned practitioner, I'll meet you exactly where you are and help you move with intention.",
    testimonials: [
      { quote: 'I have tried every boutique studio in Houston and this is the one I keep coming back to. Sarah and her team genuinely care about your progress. The reformer classes are incredible.', name: 'Jessica T.', location: 'Houston, TX', rating: 5 },
      { quote: 'I started pilates 6 months ago with zero experience. Sarah made me feel welcome from day one. I am stronger, more flexible, and honestly happier. This studio changed my life.', name: 'Priya M.', location: 'Montrose, TX', rating: 5 },
      { quote: 'The prenatal classes got me through my pregnancy feeling strong and confident. Jessica is an absolute angel. I am already signed up for postnatal classes. Cannot recommend enough.', name: 'Lauren K.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...pilatesTheme },
  },

  lawncare: {
    slug: 'lawncare',
    name: 'Lawn Care Service',
    faIcon: 'fa-solid fa-leaf',
    heroImage: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1200&q=80',
    accentColor: '#2D6A4F',
    themeColors: {
      accent: '45 106 79',
      accentDark: '36 85 63',
      accentLight: '#E9F5EF',
      brandBg: '#FFFFFF',
      brandSurface: '#F7FAF8',
      brandCard: '#FFFFFF',
      brandText: '#1A1A1A',
      brandMuted: '#6B7280',
      brandBorder: '#D1E7D9',
      brandHeading: '#1A1A1A',
    },
    industryHook: '90% of homeowners say a well-maintained lawn increases their home\'s value — yet most don\'t have a regular service',
    heroHeadline: {
      pulsemarket:  'A __Beautiful__ Lawn Starts Here',
      pulseflow:    'Expert Lawn Care — __Guaranteed__ Results, Every Season',
      pulsedrive:   'The Lawn Your __Neighbors__ Will Envy',
      pulsecommand: 'Premium Lawn & Landscape — __Crafted__ With Care',
    },
    heroSubheadline: {
      pulsemarket:  'Lawn Care & Mowing, Landscaping Design, Seasonal Cleanup & Irrigation — Licensed, insured, and trusted by Houston homeowners.',
      pulseflow:    'Lawn Care & Mowing, Landscaping Design, Seasonal Cleanup & Irrigation — The lawn care team homeowners trust for reliable, beautiful results.',
      pulsedrive:   'Lawn Care & Mowing, Landscaping Design, Seasonal Cleanup & Irrigation — The go-to lawn care provider your entire neighborhood recommends.',
      pulsecommand: 'Lawn Care & Mowing, Landscaping Design, Seasonal Cleanup & Irrigation — Full-service lawn and landscape with concierge scheduling and guaranteed satisfaction.',
    },
    services: [
      { icon: 'fa-solid fa-leaf', title: 'Lawn Care & Mowing', desc: 'Weekly mowing, edging, and trimming for a pristine yard' },
      { icon: 'fa-solid fa-tree', title: 'Landscaping Design', desc: 'Custom landscape plans that transform your outdoor space' },
      { icon: 'fa-solid fa-broom', title: 'Seasonal Cleanup', desc: 'Spring and fall cleanup to keep your yard healthy year-round' },
      { icon: 'fa-solid fa-droplet', title: 'Irrigation & Fertilization', desc: 'Smart watering systems and feeding programs for lush growth' },
    ],
    formFields: ['Name', 'Phone', 'Email', 'Service Needed', 'Property Address'],
    formCTA: 'Get a Free Estimate',
    bioImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bioName:  'Daniel Reeves',
    bioTitle: 'Owner & Lead Landscaper',
    bioCreds: '14 Years Experience \u2014 Licensed & Insured \u2014 Houston TX',
    bioText:  "I'm Daniel \u2014 a licensed landscaper with 14 years of experience keeping Houston lawns healthy and beautiful. From weekly mowing to full landscape overhauls, I treat every yard like my own. Reliable service, honest pricing, and results you can see.",
    testimonials: [
      { quote: 'Daniel transformed our backyard from a patchy mess into a neighborhood showpiece. His team shows up every week like clockwork and the attention to detail is unmatched.', name: 'Kevin M.', location: 'Houston, TX', rating: 5 },
      { quote: 'We tried three lawn services before finding Daniel. He is the only one who actually listened to what we wanted and delivered. Our lawn has never looked better.', name: 'Sarah & Tom P.', location: 'Katy, TX', rating: 5 },
      { quote: 'Honest, reliable, and truly skilled. Daniel designed our entire front landscape and installed an irrigation system that cut our water bill in half. Highly recommend.', name: 'Patricia L.', location: 'Sugar Land, TX', rating: 5 },
    ],
    themeConfig: { ...lawnCareTheme },
  },
}
