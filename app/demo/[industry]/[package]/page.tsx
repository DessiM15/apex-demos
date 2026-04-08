import { notFound }         from 'next/navigation'
import { packages, PackageSlug } from '@/data/packages'
import { industries, IndustrySlug } from '@/data/industries'
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

// CTA link — swap with Trent's real calendar link
const CTA_LINK = 'https://reachtheapex.net'

export default async function DemoPage({ params }: PageProps) {
  const { industry: industrySlug, package: packageSlug } = await params
  const pkg      = packages[packageSlug  as PackageSlug]
  const industry = industries[industrySlug as IndustrySlug]
  const content  = mockContent[industrySlug as IndustrySlug]

  if (!pkg || !industry || !content) notFound()

  const sections = pkg.sectionsEnabled

  // Industry-level theme colors (overrides CSS variables from globals.css)
  const tc = industry.themeColors
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
      <DemoNavbar industry={industry.slug} />

      <main>
        {/* Hero — always shown */}
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
        />

        {/* Landing Page Count Badge — always shown */}
        <LandingPageBadge
          count={pkg.landingPageCount}
          packageName={pkg.name}
        />

        {/* Services */}
        {sections.includes('services') && (
          <ServicesGrid services={industry.services} />
        )}

        {/* Lead Form */}
        {sections.includes('leadform') && (
          <LeadCaptureForm
            fields={industry.formFields}
            cta={industry.formCTA}
            industryName={industry.name}
          />
        )}

        {/* Agent Bio */}
        {sections.includes('bio') && (
          <AgentBio
            name={industry.bioName}
            title={industry.bioTitle}
            creds={industry.bioCreds}
            bio={industry.bioText}
            bioImage={industry.bioImage}
            industry={industry.slug}
          />
        )}

        {/* Testimonials */}
        {sections.includes('testimonials') && (
          <TestimonialsSection testimonials={industry.testimonials} />
        )}

        {/* Blog Preview — PulseFlow+ */}
        {sections.includes('blog') && (
          <BlogPreview posts={content.blogPosts} industryName={industry.name} />
        )}

        {/* Email Preview — PulseFlow+ */}
        {sections.includes('email') && (
          <EmailPreview campaigns={content.emailCampaigns} industryName={industry.name} industrySlug={industry.slug} />
        )}

        {/* Social Posts — all tiers */}
        {sections.includes('social') && (
          <SocialPostCarousel
            posts={content.socialPosts}
            industryName={industry.name}
            postsPerMonth={pkg.socialPostCount}
            showAllPlatforms={pkg.slug === 'pulsecommand'}
          />
        )}

        {/* Podcast — PulseDrive+ */}
        {sections.includes('podcast') && (
          <PodcastPlayer episodes={content.podcastEpisodes} industryName={industry.name} />
        )}

        {/* Video Gallery — PulseDrive+ */}
        {sections.includes('video') && (
          <VideoGallery hooks={content.videoHooks} industryName={industry.name} />
        )}

        {/* Conversion Tracking — PulseFlow */}
        {sections.includes('conversion') && (
          <ConversionTracking packageName={pkg.name} />
        )}

        {/* AI Avatar Video — PulseCommand */}
        {sections.includes('avatar') && (
          <AIAvatarVideo />
        )}

        {/* Analytics Dashboard — PulseMarket (basic) & PulseCommand (full) */}
        {sections.includes('analytics') && (
          <AnalyticsDashboard
            stats={content.analyticsStats}
            packageName={pkg.name}
            basic={pkg.slug === 'pulsemarket'}
          />
        )}

        {/* Branded Presence — PulseCommand */}
        {sections.includes('brandpresence') && (
          <BrandedPresence />
        )}

        {/* White-Glove Support — PulseCommand */}
        {sections.includes('whiteglove') && (
          <WhiteGloveSupport />
        )}

        {/* Click-to-Call floating button — all tiers */}
        {sections.includes('clicktocall') && (
          <ClickToCall />
        )}
      </main>

      <DemoFooter industryName={industry.name} ctaLink={CTA_LINK} />
    </div>
  )
}
