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
import DemoFooter            from '@/components/DemoFooter'

// ── Pregenerate all 16 routes ──────────────────────────────────────────
export function generateStaticParams() {
  const industryKeys: IndustrySlug[] = ['insurance', 'lawfirm', 'realestate', 'financial']
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

  return (
    <>
      {/* Sticky demo banner */}
      <DemoBanner
        packageName={pkg.name}
        tier={pkg.tier}
        industry={industry.name}
        ctaLink={CTA_LINK}
      />

      {/* Navbar */}
      <DemoNavbar />

      <main>
        {/* Hero — always shown */}
        <HeroSection
          headline={industry.heroHeadline[pkg.slug]}
          subheadline={industry.heroSubheadline[pkg.slug]}
          heroImage={industry.heroImage}
          heroVideo={industry.heroVideo}
          ctaLink={CTA_LINK}
          formCTA={industry.formCTA}
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
          <EmailPreview campaigns={content.emailCampaigns} industryName={industry.name} />
        )}

        {/* Social Posts — PulseFlow+ */}
        {sections.includes('social') && (
          <SocialPostCarousel posts={content.socialPosts} industryName={industry.name} />
        )}

        {/* Podcast — PulseDrive+ */}
        {sections.includes('podcast') && (
          <PodcastPlayer episodes={content.podcastEpisodes} industryName={industry.name} />
        )}

        {/* Video Gallery — PulseDrive+ */}
        {sections.includes('video') && (
          <VideoGallery hooks={content.videoHooks} industryName={industry.name} />
        )}

        {/* Analytics Dashboard — PulseCommand only */}
        {sections.includes('analytics') && (
          <AnalyticsDashboard stats={content.analyticsStats} packageName={pkg.name} />
        )}
      </main>

      <DemoFooter industryName={industry.name} ctaLink={CTA_LINK} />
    </>
  )
}
