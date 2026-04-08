import { notFound }         from 'next/navigation'
import { packages, PackageSlug } from '@/data/packages'
import { industries, IndustrySlug, ThemeConfig } from '@/data/industries'
import { mockContent }       from '@/data/mockContent'
import DemoBanner            from '@/components/DemoBanner'
import DemoNavbar            from '@/components/DemoNavbar'
import HeroSection           from '@/components/HeroSection'
import ServicesGrid          from '@/components/ServicesGrid'
import LeadCaptureForm       from '@/components/LeadCaptureForm'
import AgentBio              from '@/components/AgentBio'
import TestimonialsSection   from '@/components/TestimonialsSection'
import BlogPreview           from '@/components/BlogPreview'
import EmailPreview          from '@/components/EmailPreview'
import SocialPostCarousel    from '@/components/SocialPostCarousel'
import PodcastPlayer         from '@/components/PodcastPlayer'
import VideoGallery          from '@/components/VideoGallery'
import AnalyticsDashboard    from '@/components/AnalyticsDashboard'
import LandingPageBadge      from '@/components/LandingPageBadge'
import ClickToCall           from '@/components/ClickToCall'
import ConversionTracking    from '@/components/ConversionTracking'
import AIAvatarVideo         from '@/components/AIAvatarVideo'
import BrandedPresence       from '@/components/BrandedPresence'
import WhiteGloveSupport     from '@/components/WhiteGloveSupport'
import DemoFooter            from '@/components/DemoFooter'

// ── Pregenerate all routes ──────────────────────────────────────────
export function generateStaticParams() {
  const industryKeys: IndustrySlug[] = [
    'insurance', 'lawfirm', 'realestate', 'financial',
    'hvac', 'roofing', 'salonspa', 'photography',
    'dental', 'plumbing', 'trainer',
  ]
  const packageKeys:  PackageSlug[]  = ['pulsemarket', 'pulseflow', 'pulsedrive', 'pulsecommand']
  return industryKeys.flatMap(industry =>
    packageKeys.map(pkg => ({ industry, package: pkg }))
  )
}

interface PageProps {
  params: Promise<{ industry: string; package: string }>
}

// Default theme config (Group 1 Corporate) used when industry has no themeConfig
const defaultThemeConfig: ThemeConfig = {
  heroLayout: 'left',
  heroOverlayOpacity: 0.82,
  servicesLayout: 'grid-4',
  bioLayout: 'photo-left',
  testimonialsLayout: 'cards-3',
  sectionOrder: ['hero','services','leadform','bio','testimonials','blog','email','social','podcast','video','analytics','conversion','avatar','brandpresence','whiteglove','clicktocall','footer'],
  accentColor: '#243a8f',
  headingStyle: 'bold-tight',
  sectionSpacing: 'normal',
  navStyle: 'white',
  darkSections: false,
  formStyle: 'light',
}

// CTA link — swap with Trent's real calendar link
const CTA_LINK = 'https://reachtheapex.net'

export default async function DemoPage({ params }: PageProps) {
  const { industry: industrySlug, package: packageSlug } = await params
  const pkg      = packages[packageSlug  as PackageSlug]
  const industry = industries[industrySlug as IndustrySlug]
  const content  = mockContent[industrySlug as IndustrySlug]

  if (!pkg || !industry || !content) notFound()

  const sections = pkg.sectionsEnabled
  const tc = industry.themeColors
  const theme = industry.themeConfig ?? defaultThemeConfig

  // Industry-level theme colors (overrides CSS variables from globals.css)
  const themeStyle = tc ? {
    '--accent': tc.accent,
    '--accent-dark': tc.accentDark,
    '--accent-light': tc.accentLight,
    ...(tc.brandBg      && { '--brand-bg': tc.brandBg }),
    ...(tc.brandSurface && { '--brand-surface': tc.brandSurface }),
    ...(tc.brandCard    && { '--brand-card': tc.brandCard }),
    ...(tc.brandText    && { '--brand-text': tc.brandText }),
    ...(tc.brandMuted   && { '--brand-muted': tc.brandMuted }),
    ...(tc.brandBorder  && { '--brand-border': tc.brandBorder }),
    ...(tc.brandHeading && { '--brand-heading': tc.brandHeading }),
  } as React.CSSProperties : undefined

  // ── Build section map ───────────────────────────────────────────
  const sectionMap: Record<string, React.ReactNode> = {
    hero: (
      <>
        <HeroSection
          headline={industry.heroHeadline[pkg.slug]}
          subheadline={industry.heroSubheadline[pkg.slug]}
          heroImage={industry.heroImage}
          heroVideo={industry.heroVideo}
          heroOverlay={industry.heroOverlay}
          heroIntroText={industry.heroIntroText}
          heroFont={industry.heroFont}
          ctaLink={CTA_LINK}
          formCTA={industry.formCTA}
          theme={{
            heroLayout: theme.heroLayout,
            heroOverlayOpacity: theme.heroOverlayOpacity,
            accentColor: theme.accentColor,
            headingStyle: theme.headingStyle,
          }}
        />
        <LandingPageBadge
          count={pkg.landingPageCount}
          packageName={pkg.name}
        />
      </>
    ),
    services: (
      <ServicesGrid
        services={industry.services}
        theme={{
          servicesLayout: theme.servicesLayout,
          accentColor: theme.accentColor,
          headingStyle: theme.headingStyle,
          sectionSpacing: theme.sectionSpacing,
        }}
      />
    ),
    leadform: (
      <LeadCaptureForm
        fields={industry.formFields}
        cta={industry.formCTA}
        industryName={industry.name}
        theme={{
          formStyle: theme.formStyle,
          accentColor: theme.accentColor,
        }}
      />
    ),
    bio: (
      <AgentBio
        name={industry.bioName}
        title={industry.bioTitle}
        creds={industry.bioCreds}
        bio={industry.bioText}
        bioImage={industry.bioImage}
        industry={industry.slug}
        theme={{
          bioLayout: theme.bioLayout,
          accentColor: theme.accentColor,
          headingStyle: theme.headingStyle,
        }}
      />
    ),
    testimonials: (
      <TestimonialsSection
        testimonials={industry.testimonials}
        theme={{
          testimonialsLayout: theme.testimonialsLayout,
          accentColor: theme.accentColor,
          headingStyle: theme.headingStyle,
        }}
      />
    ),
    blog: (
      <BlogPreview posts={content.blogPosts} industryName={industry.name} />
    ),
    email: (
      <EmailPreview campaigns={content.emailCampaigns} industryName={industry.name} industrySlug={industry.slug} />
    ),
    social: (
      <SocialPostCarousel
        posts={content.socialPosts}
        industryName={industry.name}
        industrySlug={industry.slug}
      />
    ),
    podcast: (
      <PodcastPlayer episodes={content.podcastEpisodes} industryName={industry.name} />
    ),
    video: (
      <VideoGallery hooks={content.videoHooks} industryName={industry.name} />
    ),
    analytics: (
      <AnalyticsDashboard
        stats={content.analyticsStats}
        packageName={pkg.name}
        basic={pkg.slug === 'pulsemarket'}
      />
    ),
    conversion: (
      <ConversionTracking packageName={pkg.name} />
    ),
    avatar: (
      <AIAvatarVideo />
    ),
    brandpresence: (
      <BrandedPresence />
    ),
    whiteglove: (
      <WhiteGloveSupport />
    ),
    clicktocall: (
      <ClickToCall />
    ),
    footer: (
      <DemoFooter industryName={industry.name} industrySlug={industrySlug as IndustrySlug} ctaLink={CTA_LINK} />
    ),
  }

  // ── Render sections in themeConfig order ─────────────────────────
  const orderedSections = theme.sectionOrder
    .filter(key => sections.includes(key) && sectionMap[key])
    .map(key => (
      <div key={key}>{sectionMap[key]}</div>
    ))

  return (
    <div style={themeStyle}>
      {/* Sticky demo banner */}
      <DemoBanner
        packageName={pkg.name}
        tier={pkg.tier}
        industry={industry.name}
        ctaLink={CTA_LINK}
      />

      {/* Navbar */}
      <DemoNavbar
        industry={industry.slug}
        navStyle={theme.navStyle}
        accentColor={theme.accentColor}
      />

      <main className={theme.darkSections ? 'bg-[#1a1a2e]' : ''}>
        {orderedSections}
      </main>
    </div>
  )
}
