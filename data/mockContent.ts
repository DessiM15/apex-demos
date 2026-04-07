import { IndustrySlug } from './industries'

export interface BlogPost       { title: string; preview: string; readTime: string }
export interface EmailCampaign  { subject: string; bodyPreview: string }
export interface PodcastEpisode { title: string; duration: string; description: string }
export interface AnalyticsStat  { label: string; value: string; change: string; positive: boolean }

export interface MockContent {
  blogPosts:       BlogPost[]
  emailCampaigns:  EmailCampaign[]
  socialPosts:     string[]
  podcastEpisodes: PodcastEpisode[]
  videoHooks:      string[]
  analyticsStats:  AnalyticsStat[]
}

export const mockContent: Record<IndustrySlug, MockContent> = {
  insurance: {
    blogPosts: [
      { title: '5 Insurance Mistakes Houston Homeowners Make (And How to Fix Them)', preview: "When did you last review your homeowners policy? Most people set it and forget it — but that could be costing you thousands. Here are the 5 most common mistakes we see...", readTime: '4 min read' },
      { title: "What Does 'Full Coverage' Auto Insurance Actually Mean?", preview: "Most drivers think they have full coverage until they file a claim and find out otherwise. Here's exactly what you're getting — and what you're not...", readTime: '3 min read' },
    ],
    emailCampaigns: [
      { subject: 'Your policy renews in 30 days — here\'s what to check', bodyPreview: "Hi [First Name], your annual renewal is coming up fast. Before you auto-renew, take 5 minutes to review these 3 things that could save you money or leave you exposed..." },
      { subject: 'Did you know bundling saves the average family $647/year?', bodyPreview: "Most people don't realize how much they're leaving on the table by keeping their home and auto policies separate. Here's the math — and how to get started..." },
    ],
    socialPosts: [
      "HOMEOWNERS: Is your home insured for what it would cost to REBUILD — not just what you paid for it? These are two very different numbers. DM me to find out if you're covered correctly. #Insurance #Houston #HomeownersInsurance",
      "Quick tip: Review your auto deductible every year. If you haven't filed a claim in 3+ years, raising your deductible could lower your premium significantly. #AutoInsurance #MoneySavingTips",
      "Life insurance isn't just for people with dependents. It's for anyone who wants to leave something behind, cover final expenses, or protect a business partner. Let's talk. #LifeInsurance",
    ],
    podcastEpisodes: [
      { title: 'The Truth About Bundling: Are You Actually Saving Money?',               duration: '22 min', description: 'Breaking down exactly when bundling works and when it costs you more.' },
      { title: 'What Happens When You File a Claim: A Step-by-Step Guide',               duration: '18 min', description: 'Everything you need to know before you ever need to file a claim.' },
      { title: 'Life Insurance Myths Debunked — What Your Employer Policy Doesn\'t Cover', duration: '25 min', description: 'Why your employer coverage is probably not enough and what to do about it.' },
      { title: 'How to Protect Your Side Business: Insurance for Entrepreneurs',          duration: '20 min', description: 'The policies every side hustler and small business owner needs.' },
    ],
    videoHooks: [
      '"Do you know the #1 reason insurance claims get denied? It has nothing to do with your policy — it\'s this one thing most people overlook..." [15 sec reel]',
      '"I just saved a client $1,200 on their annual premium — here\'s exactly how we did it in 3 steps" [30 sec reel]',
    ],
    analyticsStats: [
      { label: 'Landing Page Visits',   value: '1,247', change: '+18% this month',  positive: true },
      { label: 'Lead Forms Submitted',  value: '89',    change: '+12 from last month', positive: true },
      { label: 'Conversion Rate',       value: '7.1%',  change: '+0.8%',            positive: true },
      { label: 'Email Open Rate',       value: '34.2%', change: 'Industry avg 21%', positive: true },
      { label: 'Social Reach',          value: '4,830', change: '+640 this week',   positive: true },
      { label: 'Podcast Downloads',     value: '412',   change: '+89 new listeners', positive: true },
    ],
  },

  lawfirm: {
    blogPosts: [
      { title: 'What to Do in the First 24 Hours After a Car Accident in Texas', preview: "Most people make costly mistakes in the first 24 hours after an accident. Here's the step-by-step guide every Texas driver needs to read before they ever need it...", readTime: '5 min read' },
      { title: 'Texas Fault vs. No-Fault: What It Means for Your Insurance Claim', preview: "Most Texans don't know how fault is determined after an accident. Here's exactly how it works — and why it matters for your settlement...", readTime: '4 min read' },
    ],
    emailCampaigns: [
      { subject: 'Have you been in an accident? Time matters more than you think', bodyPreview: "Under Texas law, you have 2 years to file a personal injury claim — but the evidence disappears much faster. Here's what to preserve immediately..." },
      { subject: '3 things insurance adjusters hope you don\'t know', bodyPreview: "Insurance companies are businesses. Their goal is to pay out as little as possible. Here are the tactics they use — and how we protect our clients against them..." },
    ],
    socialPosts: [
      "TEXAS DRIVERS: If you're in an accident, do NOT admit fault at the scene — even if you think it was your fault. Fault is determined legally, not on the side of the road. Call us first. #PersonalInjury #Texas #LegalTips",
      "Did you know: The average personal injury settlement WITHOUT an attorney is 3.5x LOWER than with one? Our fee only comes from your settlement. You pay nothing upfront. #NoFeeUnlessWeWin",
      "Most people wait too long to call an attorney after an accident. Every day that passes, evidence disappears. Call us immediately — free consultation, no obligation. #HoustonLawyer",
    ],
    podcastEpisodes: [
      { title: 'Know Your Rights: What Texas Law Says About Rideshare Accidents',          duration: '24 min', description: 'Uber, Lyft, and autonomous vehicles — who pays when things go wrong.' },
      { title: 'The Truth About Slip & Fall Cases — What Makes a Strong Claim',           duration: '20 min', description: 'Not every fall is a case. Here\'s what actually makes one worth pursuing.' },
      { title: 'Divorce Mistakes That Cost People Thousands — A Family Law Attorney Explains', duration: '28 min', description: 'The most expensive errors people make during divorce proceedings.' },
      { title: 'How Insurance Companies Lowball Claims — And How We Fight Back',           duration: '22 min', description: 'Inside look at adjuster tactics and the counter-strategies that work.' },
    ],
    videoHooks: [
      '"I\'m going to show you exactly what happens when you negotiate with an insurance adjuster alone vs. with an attorney. The difference will shock you." [30 sec]',
      '"Texas statute of limitations explained in 60 seconds — miss this deadline and you lose your right to sue forever." [60 sec educational]',
    ],
    analyticsStats: [
      { label: 'Consultation Requests', value: '67',    change: '+14 this month',   positive: true },
      { label: 'Landing Page Visits',   value: '2,103', change: '+31% growth',      positive: true },
      { label: 'Conversion Rate',       value: '3.2%',  change: 'Above avg for law', positive: true },
      { label: 'Email Open Rate',       value: '41.3%', change: 'Industry avg 24%', positive: true },
      { label: 'Top Post Reach',        value: '5,841', change: 'Adjuster secrets post', positive: true },
      { label: 'Podcast Downloads',     value: '891',   change: '+203 new listeners', positive: true },
    ],
  },

  realestate: {
    blogPosts: [
      { title: 'Houston Neighborhoods Guide 2025: Where to Buy Based on Your Lifestyle', preview: "Comparing Katy, The Woodlands, Heights, Midtown and more — here's the honest breakdown of what each neighborhood actually offers buyers in every price range...", readTime: '6 min read' },
      { title: 'How to Win a Bidding War in a Hot Market: 7 Strategies That Actually Work', preview: "In today's market, the highest offer doesn't always win. Here are the 7 strategies our buyers use to beat competing offers — even at lower prices...", readTime: '5 min read' },
    ],
    emailCampaigns: [
      { subject: 'Just Listed: 3 homes that hit the market this week in your price range', bodyPreview: "I've been keeping an eye out for you. Here are this week's best new listings that match what you told me you're looking for..." },
      { subject: 'Is now a good time to sell? Here\'s what Houston data says', bodyPreview: "Inventory in your zip code is down 23% from last year. What that means for your home's value right now — and whether the timing works in your favor..." },
    ],
    socialPosts: [
      "JUST SOLD — 4 bed / 3 bath in Katy TX. Listed Friday. Under contract Monday. $18K over asking. This market rewards preparation. If you're thinking about selling, let's talk strategy NOW. #Houston #RealEstate #JustSold",
      "First-time buyer tip: Get pre-approved BEFORE you start touring homes. Not pre-qualified — PRE-APPROVED. It makes your offer 40% more competitive. DM me to connect you with a great lender. #FirstTimeHomeBuyer",
      "Houston Market Update: Median home price up 6.2% YoY. Inventory down 23%. Average days on market: 18. If you've been waiting to sell — the window is NOW. #HoustonRealEstate #MarketUpdate",
    ],
    podcastEpisodes: [
      { title: 'Houston Market Update: What Buyers and Sellers Need to Know Right Now', duration: '22 min', description: 'Monthly deep dive into Houston real estate data and what it means for you.' },
      { title: 'The Real Cost of Buying a Home Beyond the Purchase Price',              duration: '26 min', description: 'Closing costs, inspections, HOA fees — the full picture before you commit.' },
      { title: 'Investment Properties 101: How to Analyze a Deal Before You Buy',       duration: '30 min', description: 'Cap rates, cash-on-cash returns, and the math every investor needs to know.' },
      { title: 'Staging Secrets That Sell Homes Faster and For More Money',             duration: '18 min', description: 'The specific staging moves that consistently add value at listing time.' },
    ],
    videoHooks: [
      '"I\'m going to show you what a $450,000 home in Houston actually looks like in 3 different neighborhoods — the difference will surprise you." [Property tour reel]',
      '"Most sellers leave $15,000–$40,000 on the table by not doing THIS before they list. I\'ll show you exactly what it is in 60 seconds." [Educational reel]',
    ],
    analyticsStats: [
      { label: 'Home Valuation Requests', value: '43',    change: '+11 this month',    positive: true },
      { label: 'Property Page Views',     value: '8,204', change: '+1,200 this week',  positive: true },
      { label: 'Lead Forms Submitted',    value: '112',   change: '+18 from last month', positive: true },
      { label: 'Email Open Rate',         value: '38.7%', change: 'Industry avg 19%',  positive: true },
      { label: 'Top Video Views',         value: '12,400', change: 'Neighborhood tour', positive: true },
      { label: 'Podcast Downloads',       value: '1,203', change: '+312 new listeners', positive: true },
    ],
  },

  financial: {
    blogPosts: [
      { title: 'The 3 Biggest Retirement Planning Mistakes People in Their 40s Make', preview: "Most people don't realize they're behind until it's almost too late. Here's how to course-correct — and what's actually still possible even if you're starting late...", readTime: '5 min read' },
      { title: 'Roth vs. Traditional IRA: Which One Is Right for You in 2025?', preview: "The answer depends on 3 factors most people never consider. Here's the honest breakdown — including the one scenario where the traditional IRA wins every time...", readTime: '4 min read' },
    ],
    emailCampaigns: [
      { subject: 'Are you on track to retire at the age you want?', bodyPreview: "I built a quick framework that shows exactly where you stand. Based on your age and current savings, here's what the numbers typically say — and what to do about it..." },
      { subject: 'Market volatility is scary — here\'s what we\'re doing for clients', bodyPreview: "When markets drop, emotions run high. Here's the data-driven approach we use to protect client portfolios without panic-selling — and why it works long-term..." },
    ],
    socialPosts: [
      "REALITY CHECK: If you're 45 and have less than $250,000 saved for retirement — you're not alone. 64% of Americans are in the same boat. But there's still time to close the gap. Here's the math on what it takes. #RetirementPlanning #FinancialFreedom",
      "The AI wave is replacing jobs. The gig economy is unpredictable. Social security is uncertain. The most powerful thing you can do RIGHT NOW is build income that doesn't depend on a boss or an algorithm. Let's build your plan. #FinancialAdvisor",
      "Compound interest is the 8th wonder of the world — Einstein said it. $500/month starting at 25 = $1.7M at 65. The same $500/month starting at 45 = $340K. Time is the asset. Start now. #WealthBuilding #Investing",
    ],
    podcastEpisodes: [
      { title: 'How to Turn $500/Month Into $1 Million: The Math Behind Compound Interest', duration: '24 min', description: 'The simple math that changes how you think about saving starting today.' },
      { title: 'What Most People Get Wrong About Life Insurance — And What You Actually Need', duration: '22 min', description: 'Cutting through the noise on term vs. whole life and when each makes sense.' },
      { title: 'Business Owners: The Exit Strategy Nobody Talks About Until It\'s Too Late', duration: '29 min', description: 'Succession planning, buy-sell agreements, and key person insurance explained.' },
      { title: 'Sequence of Returns Risk: The Retirement Killer Nobody Warned You About',    duration: '26 min', description: 'Why the order of your returns matters as much as the returns themselves.' },
    ],
    videoHooks: [
      '"I\'m going to show you what $1,000/month invested at 25 vs 35 vs 45 actually looks like at retirement. The gap will change how you think about time." [Educational reel]',
      '"Most people think they need a million dollars to retire comfortably. Here\'s the actual number — and the 3-step strategy to get there." [30 sec reel]',
    ],
    analyticsStats: [
      { label: 'Free Review Requests',  value: '31',    change: '+9 this month',     positive: true },
      { label: 'Landing Page Visits',   value: '1,876', change: '+22% growth',       positive: true },
      { label: 'Conversion Rate',       value: '1.65%', change: 'Strong for finance', positive: true },
      { label: 'Email Open Rate',       value: '44.1%', change: 'Industry avg 18%',  positive: true },
      { label: 'Top Article Reads',     value: '3,200', change: 'Retirement at 40',  positive: true },
      { label: 'Podcast Downloads',     value: '987',   change: '+198 new listeners', positive: true },
    ],
  },
}
