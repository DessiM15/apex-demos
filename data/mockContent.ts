import { IndustrySlug } from './industries'

export interface BlogPost       { title: string; preview: string; readTime: string; image: string }
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
      { title: '5 Insurance Mistakes Houston Homeowners Make (And How to Fix Them)', preview: "When did you last review your homeowners policy? Most people set it and forget it — but that could be costing you thousands. Here are the 5 most common mistakes we see...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop' },
      { title: "What Does 'Full Coverage' Auto Insurance Actually Mean?", preview: "Most drivers think they have full coverage until they file a claim and find out otherwise. Here's exactly what you're getting — and what you're not...", readTime: '3 min read', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Your policy renews in 30 days — here\'s what to check', bodyPreview: "Hi [First Name], your annual renewal is coming up fast. Before you auto-renew, take 5 minutes to review these 3 things that could save you money or leave you exposed..." },
      { subject: 'Did you know bundling saves the average family $647/year?', bodyPreview: "Most people don't realize how much they're leaving on the table by keeping their home and auto policies separate. Here's the math — and how to get started..." },
      { subject: 'Hurricane season starts June 1 — are you covered?', bodyPreview: "Most standard homeowners policies do NOT cover flood damage. If you're in a flood zone — or even near one — you need a separate policy. Here's how to check your risk level and get protected before it's too late..." },
      { subject: 'New driver in the family? Here\'s how to keep premiums low', bodyPreview: "Adding a teen driver to your policy doesn't have to break the bank. There are 5 discounts most families don't know about — good student, driver training, and more. Let me walk you through each one..." },
      { subject: 'Your annual insurance checkup: 5 things to review right now', bodyPreview: "Life changes fast — new car, home renovation, new baby. Each one affects your coverage needs. Here are the 5 things I review with every client once a year to make sure nothing falls through the cracks..." },
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
      { title: 'What to Do in the First 24 Hours After a Car Accident in Texas', preview: "Most people make costly mistakes in the first 24 hours after an accident. Here's the step-by-step guide every Texas driver needs to read before they ever need it...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop' },
      { title: 'Texas Fault vs. No-Fault: What It Means for Your Insurance Claim', preview: "Most Texans don't know how fault is determined after an accident. Here's exactly how it works — and why it matters for your settlement...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Have you been in an accident? Time matters more than you think', bodyPreview: "Under Texas law, you have 2 years to file a personal injury claim — but the evidence disappears much faster. Here's what to preserve immediately..." },
      { subject: '3 things insurance adjusters hope you don\'t know', bodyPreview: "Insurance companies are businesses. Their goal is to pay out as little as possible. Here are the tactics they use — and how we protect our clients against them..." },
      { subject: 'What to do if you\'re pulled over for a DWI in Texas', bodyPreview: "The decisions you make in the first 15 minutes of a DWI stop can determine the outcome of your entire case. Here's what to say, what not to say, and when to call an attorney..." },
      { subject: 'Workers\' comp denied your claim? You still have options', bodyPreview: "Getting denied doesn't mean your case is over. In Texas, you have the right to appeal — and most people don't realize how often initial denials get overturned with proper legal help..." },
      { subject: 'Protect your business: 3 contracts every owner needs', bodyPreview: "Most small businesses operate on handshakes. That works until it doesn't. Here are the 3 foundational contracts that protect your revenue, your team, and your future..." },
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
      { title: 'Houston Neighborhoods Guide 2025: Where to Buy Based on Your Lifestyle', preview: "Comparing Katy, The Woodlands, Heights, Midtown and more — here's the honest breakdown of what each neighborhood actually offers buyers in every price range...", readTime: '6 min read', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop' },
      { title: 'How to Win a Bidding War in a Hot Market: 7 Strategies That Actually Work', preview: "In today's market, the highest offer doesn't always win. Here are the 7 strategies our buyers use to beat competing offers — even at lower prices...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Just Listed: 3 homes that hit the market this week in your price range', bodyPreview: "I've been keeping an eye out for you. Here are this week's best new listings that match what you told me you're looking for..." },
      { subject: 'Is now a good time to sell? Here\'s what Houston data says', bodyPreview: "Inventory in your zip code is down 23% from last year. What that means for your home's value right now — and whether the timing works in your favor..." },
      { subject: 'Open house this weekend — you\'re invited', bodyPreview: "We have a stunning 4-bed home hitting the market this Saturday. If you or someone you know is looking in the Katy area, come see it before it goes under contract. Details inside..." },
      { subject: '5 things that kill a home sale before it starts', bodyPreview: "Overpricing, bad photos, clutter, deferred maintenance, and one more that surprises most sellers. Here's the honest list — and how to avoid each one before you list..." },
      { subject: 'Your home value report for this quarter is ready', bodyPreview: "Based on recent sales in your neighborhood, here's what your home would likely sell for today. The market has shifted since last quarter — here are the numbers and what they mean for you..." },
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
      { title: 'The 3 Biggest Retirement Planning Mistakes People in Their 40s Make', preview: "Most people don't realize they're behind until it's almost too late. Here's how to course-correct — and what's actually still possible even if you're starting late...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' },
      { title: 'Roth vs. Traditional IRA: Which One Is Right for You in 2025?', preview: "The answer depends on 3 factors most people never consider. Here's the honest breakdown — including the one scenario where the traditional IRA wins every time...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Are you on track to retire at the age you want?', bodyPreview: "I built a quick framework that shows exactly where you stand. Based on your age and current savings, here's what the numbers typically say — and what to do about it..." },
      { subject: 'Market volatility is scary — here\'s what we\'re doing for clients', bodyPreview: "When markets drop, emotions run high. Here's the data-driven approach we use to protect client portfolios without panic-selling — and why it works long-term..." },
      { subject: 'Tax season is here — 3 moves to make before April 15', bodyPreview: "There are still legal strategies to reduce your tax burden this year. Roth conversions, charitable giving, and one more that most people overlook. Here's the playbook..." },
      { subject: 'How much do you really need to retire? The honest math', bodyPreview: "The '4% rule' gets thrown around a lot — but it doesn't work for everyone. Here's a more personalized framework based on your lifestyle, health, and goals..." },
      { subject: 'Your quarterly portfolio review is ready', bodyPreview: "Markets moved significantly this quarter. Here's what happened, how your portfolio performed relative to benchmarks, and the adjustments we're recommending going forward..." },
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

  hvac: {
    blogPosts: [
      { title: '5 Signs Your AC Unit Is About to Fail (And What to Do Before It Does)', preview: "Most AC failures don't happen overnight. There are warning signs weeks before the breakdown — here's what to watch for and how to avoid a $5,000 emergency replacement...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop' },
      { title: 'How Often Should You Really Change Your Air Filter? The Honest Answer', preview: "Every HVAC company says something different. Here's what actually matters based on your home size, pets, and system type — and why most people wait too long...", readTime: '3 min read', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Summer is coming — is your AC ready?', bodyPreview: "Last year, we got 200+ emergency calls in the first week of June alone. A $99 tune-up now could save you a $3,000 repair later. Here's what we check during a pre-season inspection..." },
      { subject: 'Your energy bill is higher than it should be — here\'s why', bodyPreview: "If your electric bill jumped 20-40% this summer, your HVAC system might be the culprit. Here are the 3 most common causes — and the fixes that pay for themselves..." },
      { subject: 'Is your HVAC system older than 15 years? Read this', bodyPreview: "Systems older than 15 years run at 50-60% efficiency at best. That means nearly half your energy spend is wasted. Here's when it makes financial sense to upgrade vs. repair..." },
      { subject: 'Indoor air quality: what you can\'t see CAN hurt you', bodyPreview: "Dust, mold spores, and pet dander build up in your ductwork over time. If anyone in your home has allergies or asthma, your HVAC system might be making it worse. Here's how to fix it..." },
      { subject: 'Fall maintenance checklist — get your heating ready now', bodyPreview: "Before the first cold snap hits Houston, there are 5 things you should check on your heating system. Most take under 10 minutes and can prevent a mid-winter breakdown..." },
    ],
    socialPosts: [
      "HOUSTON HOMEOWNERS: If your AC is blowing warm air, check your thermostat settings FIRST. Then check your filter. If both are fine — call us immediately before the compressor burns out. #HVAC #Houston #ACRepair",
      "Pro tip: Set your thermostat to 78 when you're home and 85 when you're away. This simple habit can cut your cooling bill by 15-25% without sacrificing comfort. #EnergySaving #HVACTips",
      "Just installed a 16 SEER2 system for a family in Katy. Their old unit was 20 years old and running at 50% efficiency. Estimated savings: $1,400/year. Upgrade season is NOW. #HVACInstallation #EnergyEfficiency",
    ],
    podcastEpisodes: [
      { title: 'Should You Repair or Replace Your AC? The Real Math Behind the Decision', duration: '22 min', description: 'When fixing your old unit actually costs more than buying new — the numbers explained.' },
      { title: 'Indoor Air Quality: What Most Homeowners Don\'t Know Is Making Them Sick', duration: '18 min', description: 'Dust, mold, and VOCs — how your HVAC system affects the air your family breathes.' },
      { title: 'Ductwork Disasters: The Hidden Problem Costing You Hundreds Every Year', duration: '24 min', description: 'Leaky ducts waste 20-30% of your conditioned air. Here is how to find and fix them.' },
      { title: 'Heat Pump vs Traditional AC: Which Is Right for Houston Homes?', duration: '20 min', description: 'Breaking down the pros, cons, and real costs of both systems for the Texas climate.' },
    ],
    videoHooks: [
      '"Your AC filter looks like THIS after just 30 days? Here\'s what that means for your system — and your family\'s health." [15 sec reel]',
      '"I just saved a homeowner $2,800 by catching this one issue during a routine tune-up. Here\'s what to check before summer." [30 sec reel]',
    ],
    analyticsStats: [
      { label: 'Service Requests',     value: '94',     change: '+22 this month',    positive: true },
      { label: 'Landing Page Visits',  value: '1,832',  change: '+28% this month',   positive: true },
      { label: 'Conversion Rate',      value: '5.1%',   change: '+0.6%',             positive: true },
      { label: 'Email Open Rate',      value: '36.8%',  change: 'Industry avg 22%',  positive: true },
      { label: 'Social Reach',         value: '3,920',  change: '+510 this week',    positive: true },
      { label: 'Podcast Downloads',    value: '378',    change: '+67 new listeners', positive: true },
    ],
  },

  roofing: {
    blogPosts: [
      { title: 'Hail Damage? Here\'s Exactly What to Do in the First 48 Hours', preview: "Houston gets hit with major hail storms every year. What you do in the first 48 hours determines whether your insurance covers the full repair — or leaves you paying out of pocket...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=400&fit=crop' },
      { title: 'Asphalt vs Metal Roofing in Texas: Which One Actually Lasts Longer?', preview: "Everyone has an opinion but few have the data. Here's a side-by-side comparison of real performance, cost, and longevity for Houston's climate specifically...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Storm season is here — is your roof ready?', bodyPreview: "Last year's hail season cost Houston homeowners over $2 billion in damage. A free 15-minute inspection now could save you thousands later. Here's what we check..." },
      { subject: 'Your insurance might cover a full roof replacement — here\'s how to find out', bodyPreview: "Most homeowners don't realize their insurance policy covers storm damage replacement at zero out-of-pocket cost. Here's the exact process to file a claim..." },
      { subject: 'How long does a roof actually last in Houston?', bodyPreview: "Between heat, humidity, and hail, Houston roofs take a beating. Here's the real-world lifespan for asphalt, metal, and tile — and the warning signs that yours is nearing the end..." },
      { subject: '3 things to check on your roof after every major storm', bodyPreview: "You don't need to climb on your roof to spot damage. Here are 3 things you can check from the ground in 5 minutes that tell you whether you need a professional inspection..." },
      { subject: 'Roof replacement vs. repair — which saves you more?', bodyPreview: "Sometimes a patch job is the smart move. Sometimes it's throwing money away. Here's the decision framework we use with every homeowner to figure out which one makes sense..." },
    ],
    socialPosts: [
      "HOUSTON HOMEOWNERS: After any hailstorm, check your roof within 48 hours. Insurance claims have deadlines. We offer free storm damage inspections — DM us or call today. #RoofRepair #HailDamage #Houston",
      "Just finished a complete roof replacement in The Woodlands. GAF Timberline HDZ shingles, 50-year warranty, insurance covered 100%. If your roof is 15+ years old, let's talk. #Roofing #NewRoof",
      "Most roof leaks start at the flashing — not the shingles. If you see water stains on your ceiling, the problem is usually around vents, chimneys, or skylights. Free inspections available. #RoofLeak #HomeRepair",
    ],
    podcastEpisodes: [
      { title: 'How to Navigate a Roofing Insurance Claim Without Getting Lowballed', duration: '26 min', description: 'Step-by-step guide to getting your full claim approved the first time.' },
      { title: 'The Truth About Roof Warranties — What\'s Actually Covered?', duration: '20 min', description: 'Manufacturer vs. workmanship warranties and the fine print you need to know.' },
      { title: 'Storm Chasers vs. Local Roofers: How to Spot the Difference', duration: '22 min', description: 'Protecting yourself from out-of-state contractors who disappear after the check clears.' },
      { title: 'Roof Maintenance 101: The Simple Annual Checklist That Extends Your Roof\'s Life', duration: '18 min', description: 'The easy maintenance steps that add 5-10 years to any roofing system.' },
    ],
    videoHooks: [
      '"This is what hail damage ACTUALLY looks like up close. Most homeowners can\'t see it from the ground — but your insurance will pay for it." [15 sec reel]',
      '"We just replaced this roof for $0 out of pocket. Here\'s exactly how the insurance process works in 60 seconds." [60 sec educational]',
    ],
    analyticsStats: [
      { label: 'Inspection Requests',  value: '78',     change: '+18 this month',    positive: true },
      { label: 'Landing Page Visits',  value: '2,410',  change: '+34% this month',   positive: true },
      { label: 'Conversion Rate',      value: '3.2%',   change: 'Above avg for home services', positive: true },
      { label: 'Email Open Rate',      value: '33.5%',  change: 'Industry avg 20%',  positive: true },
      { label: 'Social Reach',         value: '5,120',  change: '+780 this week',    positive: true },
      { label: 'Podcast Downloads',    value: '445',    change: '+92 new listeners', positive: true },
    ],
  },

  salonspa: {
    blogPosts: [
      { title: 'Botox vs. Fillers: Which One Is Right for You? A Licensed Aesthetician Explains', preview: "They're not the same thing — and choosing wrong can give you results you don't want. Here's the honest breakdown of what each does, how long they last, and which one matches your goals...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1560066984-138daaa45d0e?w=800&h=400&fit=crop' },
      { title: 'The 5 Biggest Skincare Mistakes You\'re Making (According to a Pro)', preview: "Most of my clients come in making at least 3 of these mistakes. The good news? They're easy to fix — and the results are dramatic. Here's what to stop doing today...", readTime: '3 min read', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Your skin deserves a reset — exclusive offer inside', bodyPreview: "Spring is the perfect time to refresh your skin after months of dry winter air. This month only, get 20% off our signature hydrafacial package. Here's what's included..." },
      { subject: 'How often should you really get Botox? The honest answer', bodyPreview: "Most providers won't tell you this, but getting Botox too frequently can actually work against you. Here's the ideal schedule — and why timing matters more than dosage..." },
      { subject: 'Summer skin prep: 3 treatments to book now', bodyPreview: "Sun, humidity, and sweat can wreak havoc on your skin. These 3 treatments prep your skin for summer and keep you glowing all season long. Best of all, they work for every skin type..." },
      { subject: 'The truth about at-home skincare devices — do they work?', bodyPreview: "LED masks, microcurrent wands, derma rollers — the at-home beauty device market is exploding. Here's which ones actually deliver results and which ones are a waste of money..." },
      { subject: 'New service alert: Morpheus8 is here', bodyPreview: "We're excited to announce we now offer Morpheus8 — the gold standard in skin tightening and collagen remodeling. Here's what it does, who it's for, and introductory pricing details..." },
    ],
    socialPosts: [
      "GLOW UP ALERT: This client came in wanting to look refreshed — not overdone. Subtle Botox + a hydrafacial gave her exactly that. Natural beauty enhanced. Book your consultation today. #MedSpa #Botox #Houston",
      "Skincare myth: You don't need sunscreen on cloudy days. WRONG. 80% of UV rays penetrate clouds. SPF 30+ every single day — rain or shine. Your future self will thank you. #SkincareTips #Aesthetics",
      "Just added laser hair removal to our services! Smooth skin, no more shaving, results that last. Limited intro pricing available this month. DM to book. #LaserHairRemoval #MedSpa #Houston",
    ],
    podcastEpisodes: [
      { title: 'The Truth About Anti-Aging: What Actually Works (And What\'s a Waste of Money)', duration: '24 min', description: 'Cutting through the noise on serums, treatments, and procedures that deliver real results.' },
      { title: 'First Time Getting Injectables? Everything You Need to Know Before Your Appointment', duration: '20 min', description: 'What to expect, how to prepare, and the questions you should be asking your provider.' },
      { title: 'Building a Skincare Routine That Actually Works — From a Licensed Pro', duration: '22 min', description: 'The exact order, products, and frequency that gets results for every skin type.' },
      { title: 'Med Spa vs. Day Spa: What\'s the Difference and Which Do You Need?', duration: '18 min', description: 'Understanding the difference between relaxation services and clinical treatments.' },
    ],
    videoHooks: [
      '"Watch this lip filler transformation from start to finish. Natural, balanced, and done in under 30 minutes." [30 sec reel]',
      '"I\'m going to show you the 3 products that changed my clients\' skin more than any procedure. Under $50 total." [15 sec reel]',
    ],
    analyticsStats: [
      { label: 'Booking Requests',     value: '67',     change: '+15 this month',    positive: true },
      { label: 'Landing Page Visits',  value: '2,890',  change: '+41% this month',   positive: true },
      { label: 'Conversion Rate',      value: '2.3%',   change: '+0.4%',             positive: true },
      { label: 'Email Open Rate',      value: '42.1%',  change: 'Industry avg 19%',  positive: true },
      { label: 'Instagram Reach',      value: '8,340',  change: '+1,200 this week',  positive: true },
      { label: 'Podcast Downloads',    value: '512',    change: '+104 new listeners', positive: true },
    ],
  },

  photography: {
    blogPosts: [
      { title: 'What to Wear for Your Portrait Session: A Photographer\'s Honest Guide', preview: "The right outfit can make or break your photos. After 500+ sessions, here are the specific colors, fabrics, and styles that photograph best — and the ones to avoid...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=800&h=400&fit=crop' },
      { title: 'How to Choose a Wedding Photographer: 7 Questions Most Couples Forget to Ask', preview: "Everyone asks about price and style, but the questions that actually matter are the ones nobody thinks to ask. Here are the 7 that will save you from a bad experience...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Your session is coming up — here\'s how to prepare', bodyPreview: "Getting ready for your photoshoot? Here are 5 quick tips that will make your photos 10x better — from what to wear to how to pose naturally..." },
      { subject: 'Mini sessions are back — limited spots available', bodyPreview: "Our most popular offering is returning for a limited time. 20-minute sessions, 15 edited images, and pricing that makes professional photography accessible for everyone..." },
      { subject: 'Holiday card sessions are booking fast — reserve your spot', bodyPreview: "Every year our holiday sessions sell out by mid-October. This year we're opening bookings early. Choose from 3 stunning locations and get your cards printed before Thanksgiving..." },
      { subject: 'How to get the most out of your brand photoshoot', bodyPreview: "Whether you're updating your headshots or building a full content library, preparation makes all the difference. Here are 7 tips that ensure your shoot delivers maximum value..." },
      { subject: 'Your gallery is ready — here\'s how to access it', bodyPreview: "Great news — your edited photos are ready for viewing. Log into your private gallery to browse, download, and share. You can also order prints directly from the gallery..." },
    ],
    socialPosts: [
      "Behind every great photo is a moment of genuine connection. This family session in Hermann Park reminded me why I love what I do. Booking fall sessions now. #FamilyPhotography #Houston #PortraitPhotographer",
      "Wedding day tip: Give yourself 30 extra minutes for couples portraits during golden hour. That magic light window is short — and the photos will be the ones you frame forever. #WeddingPhotography #GoldenHour",
      "Just delivered this corporate headshot session for a Houston law firm. 12 attorneys, 45 minutes, zero awkward poses. Professional headshots don't have to be painful. #Headshots #CorporatePhotography",
    ],
    podcastEpisodes: [
      { title: 'The Real Cost of Professional Photography — And Why It\'s Worth It', duration: '22 min', description: 'Breaking down exactly what goes into pricing and the value you get back.' },
      { title: 'Posing Tips That Make Everyone Look Great in Photos', duration: '18 min', description: 'Simple techniques that work for every body type and comfort level.' },
      { title: 'How to Plan a Wedding Timeline That Gives You Amazing Photos', duration: '26 min', description: 'The exact timeline template I give every couple for stress-free photo coverage.' },
      { title: 'Building Your Brand Through Visual Content: A Guide for Small Businesses', duration: '24 min', description: 'How professional photography transforms your marketing — and the ROI to prove it.' },
    ],
    videoHooks: [
      '"Watch this engagement session come together from first shot to final edit. The difference between a snapshot and a professional photo is everything." [30 sec reel]',
      '"I photographed 200 weddings and THIS is the one tip I give every couple. It changes everything about your photos." [15 sec reel]',
    ],
    analyticsStats: [
      { label: 'Booking Inquiries',    value: '52',     change: '+13 this month',    positive: true },
      { label: 'Portfolio Page Views',  value: '4,210',  change: '+38% this month',   positive: true },
      { label: 'Conversion Rate',      value: '1.2%',   change: 'Strong for photography', positive: true },
      { label: 'Email Open Rate',      value: '39.4%',  change: 'Industry avg 20%',  positive: true },
      { label: 'Instagram Reach',      value: '11,800', change: '+2,400 this week',  positive: true },
      { label: 'Podcast Downloads',    value: '289',    change: '+58 new listeners', positive: true },
    ],
  },

  dental: {
    blogPosts: [
      { title: 'Should You Get Veneers? A Dentist\'s Honest Guide to Cosmetic Options', preview: "Veneers are everywhere on social media, but they're not right for everyone. Here's the honest breakdown of who they work best for, what they cost, and the alternatives most people don't know about...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop' },
      { title: 'Why Your Gums Bleed When You Floss (And When to Actually Worry)', preview: "Bleeding gums are incredibly common — but they're not normal. Here's what's really happening, when it's harmless, and when it's a sign of something more serious...", readTime: '3 min read', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'It\'s been 6 months — time for your checkup', bodyPreview: "Regular cleanings catch small problems before they become expensive ones. Most cavities and gum disease are 100% preventable with routine care. Book your next visit today..." },
      { subject: 'Considering teeth whitening? Here\'s what actually works', bodyPreview: "Over-the-counter strips, professional whitening, or veneers? Each option serves a different purpose. Here's the honest comparison — including the one most dentists recommend first..." },
      { subject: 'Your child\'s first dental visit: what to expect', bodyPreview: "The ADA recommends a first visit by age 1. But what actually happens during that appointment? Here's a complete walkthrough so you and your child feel prepared and comfortable..." },
      { subject: 'Dental implants vs. bridges — which is right for you?', bodyPreview: "Missing a tooth? Both implants and bridges can restore your smile, but they're very different in cost, longevity, and maintenance. Here's the honest comparison from a dentist's perspective..." },
      { subject: 'We\'ve upgraded our technology — here\'s what\'s new', bodyPreview: "We just installed digital scanning technology that eliminates messy impressions and makes crowns in a single visit. Here's how this new technology benefits you at your next appointment..." },
    ],
    socialPosts: [
      "PSA: Brushing harder does NOT mean cleaner teeth. In fact, aggressive brushing damages your enamel and causes gum recession. Use a soft-bristle brush, gentle circles, and let the bristles do the work. #DentalTips #OralHealth",
      "This patient came in wanting a brighter smile for her wedding. Two professional whitening sessions and she is glowing. Sometimes the smallest change makes the biggest difference. #CosmeticDentistry #SmileMakeover",
      "Accepting new patients this month! Gentle care, modern technology, and a team that actually makes the dentist enjoyable. Call or book online today. #Houston #Dentist #NewPatients",
    ],
    podcastEpisodes: [
      { title: 'The Truth About Fluoride: What the Science Actually Says', duration: '20 min', description: 'Cutting through the controversy with evidence-based facts about fluoride in dental care.' },
      { title: 'Clear Aligners vs. Traditional Braces: A Dentist\'s Honest Comparison', duration: '24 min', description: 'When Invisalign wins, when braces are better, and the factors most patients overlook.' },
      { title: 'Dental Anxiety Is Real — Here\'s How We Help Patients Overcome It', duration: '18 min', description: 'The specific techniques and technologies that make modern dental visits comfortable.' },
      { title: 'Sugar, Acid, and Your Teeth: The Diet Habits That Destroy Your Smile', duration: '22 min', description: 'The foods and drinks doing the most damage — and simple swaps that protect your enamel.' },
    ],
    videoHooks: [
      '"Watch this smile transformation from start to finish — 6 porcelain veneers in just 2 visits. The confidence boost is always my favorite part." [30 sec reel]',
      '"I\'m a dentist and HERE are the 3 things I never do to my own teeth. Number 2 will surprise you." [15 sec reel]',
    ],
    analyticsStats: [
      { label: 'Appointment Requests',  value: '83',     change: '+19 this month',    positive: true },
      { label: 'Landing Page Visits',   value: '3,120',  change: '+26% this month',   positive: true },
      { label: 'Conversion Rate',       value: '2.7%',   change: '+0.3%',             positive: true },
      { label: 'Email Open Rate',       value: '37.2%',  change: 'Industry avg 21%',  positive: true },
      { label: 'Social Reach',          value: '6,450',  change: '+890 this week',    positive: true },
      { label: 'Podcast Downloads',     value: '634',    change: '+121 new listeners', positive: true },
    ],
  },

  plumbing: {
    blogPosts: [
      { title: '5 Warning Signs Your Water Heater Is About to Fail', preview: "Most water heaters give you warning signs 2-4 weeks before they die completely. Knowing what to look for can save you from a flooded garage and a $1,500 emergency call...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=400&fit=crop' },
      { title: 'Why Your Drains Keep Clogging (And How to Actually Fix It for Good)', preview: "If you're reaching for Drano every month, you have a bigger problem. Here's what's really causing your recurring clogs — and the permanent fix most plumbers recommend...", readTime: '3 min read', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Winter is coming — protect your pipes now', bodyPreview: "Houston might not freeze often, but when it does, the damage is devastating. A $150 pipe insulation job can prevent a $10,000 flood. Here's our winterization checklist..." },
      { subject: 'Is your water heater over 10 years old? Read this', bodyPreview: "The average water heater lasts 10-12 years. After that, you're living on borrowed time. Here are the signs it's time to replace — and why waiting costs more..." },
      { subject: 'Slab leak warning signs every Houston homeowner should know', bodyPreview: "Warm spots on your floor? Unexplained water sounds? A sudden spike in your water bill? These are all potential signs of a slab leak — and catching it early can save you thousands..." },
      { subject: 'Should you switch to a tankless water heater?', bodyPreview: "Tankless water heaters last 20+ years and cut energy costs by 30%. But they're not right for every home. Here's the honest comparison so you can make the right decision..." },
      { subject: 'Spring plumbing checklist: 5 things to inspect now', bodyPreview: "Winter freezes can cause hidden damage that shows up months later. Here are 5 quick checks you can do this spring to catch problems before they become emergencies..." },
    ],
    socialPosts: [
      "HOUSTON HOMEOWNERS: If your water bill suddenly spiked, you might have a hidden leak. A toilet running non-stop can waste 200+ gallons per DAY. We offer free leak detection. Call today. #Plumbing #Houston #LeakDetection",
      "Pro tip: Never pour grease down your kitchen drain. It solidifies in your pipes and creates blockages that get worse over time. Let grease cool, scrape it into the trash. Your pipes will thank you. #PlumbingTips",
      "Just finished a whole-house re-pipe for a 1970s home in Katy. Old galvanized pipes were corroding from the inside. New PEX lines installed in 2 days. Clean water, strong pressure. #Plumbing #HomeMaintenance",
    ],
    podcastEpisodes: [
      { title: 'Tankless vs. Tank Water Heaters: The Real Pros and Cons', duration: '22 min', description: 'Breaking down cost, efficiency, and longevity so you can make the right call.' },
      { title: 'The Most Expensive Plumbing Mistakes Homeowners Make', duration: '20 min', description: 'DIY disasters and delayed maintenance that turn small problems into huge bills.' },
      { title: 'Slab Leaks Explained: The Silent Home Destroyer', duration: '24 min', description: 'What causes slab leaks, how to detect them early, and what the repair actually involves.' },
      { title: 'How to Choose a Plumber You Can Actually Trust', duration: '18 min', description: 'Red flags, green flags, and the questions to ask before anyone touches your pipes.' },
    ],
    videoHooks: [
      '"This is what 30 years of buildup looks like inside a drain pipe. No wonder the water wasn\'t draining. Here\'s the fix." [15 sec reel]',
      '"A homeowner called us after 3 other plumbers couldn\'t find the leak. We found it in 10 minutes using this tool." [30 sec reel]',
    ],
    analyticsStats: [
      { label: 'Service Requests',     value: '71',     change: '+16 this month',    positive: true },
      { label: 'Landing Page Visits',  value: '1,640',  change: '+24% this month',   positive: true },
      { label: 'Conversion Rate',      value: '4.3%',   change: '+0.5%',             positive: true },
      { label: 'Email Open Rate',      value: '31.8%',  change: 'Industry avg 22%',  positive: true },
      { label: 'Social Reach',         value: '3,280',  change: '+430 this week',    positive: true },
      { label: 'Podcast Downloads',    value: '312',    change: '+64 new listeners', positive: true },
    ],
  },

  trainer: {
    blogPosts: [
      { title: 'The Truth About Fat Loss: Why Most Diets Fail and What Actually Works', preview: "After training 500+ clients, I can tell you that 90% of diet failures come down to 3 mistakes. Here's what the research says — and the approach that gets lasting results...", readTime: '5 min read', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=400&fit=crop' },
      { title: 'Beginner\'s Guide to Strength Training: How to Start Without Getting Hurt', preview: "Walking into a gym for the first time is intimidating. Here's the exact beginner program I give every new client — simple, safe, and designed to build confidence fast...", readTime: '4 min read', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop' },
    ],
    emailCampaigns: [
      { subject: 'Your free workout plan is inside — start this week', bodyPreview: "I put together a 4-week starter program you can do with zero equipment. 3 days a week, 30 minutes each. It's the exact framework I use with my beginners — and it works..." },
      { subject: 'Struggling to stay consistent? Try this one change', bodyPreview: "Consistency beats intensity every time. But most people approach fitness backward. Here's the one mindset shift that helps my clients show up week after week..." },
      { subject: 'The post-workout nutrition window: what to eat and when', bodyPreview: "What you eat in the 60 minutes after training matters more than most people think. Here's the exact formula I give my clients — protein, carbs, timing, and the one food to avoid..." },
      { subject: 'Plateau breaker: 3 training adjustments that restart progress', bodyPreview: "If your results have stalled, your body has adapted. Here are 3 evidence-based changes to your routine that reignite fat loss and muscle growth without adding more gym time..." },
      { subject: 'Summer body challenge starts Monday — join us', bodyPreview: "Our 8-week Summer Body Challenge includes custom programming, nutrition coaching, and weekly check-ins. Limited to 15 spots. Results guaranteed or your money back..." },
    ],
    socialPosts: [
      "TRUTH: You don't need to work out 6 days a week to see results. 3 quality sessions with progressive overload will outperform 6 random workouts every time. Train smarter. #PersonalTrainer #FitnessTips #Houston",
      "Client spotlight: Marcus came to me unable to do a single pull-up. 12 weeks later — 8 strict pull-ups and down 22 lbs. Consistency and smart programming. That's the formula. #TransformationTuesday #FitnessResults",
      "Nutrition coaching isn't about restriction — it's about strategy. You can eat the foods you love AND hit your goals. Let me show you how. Free consultation link in bio. #NutritionCoaching #FitnessCoach",
    ],
    podcastEpisodes: [
      { title: 'Muscle Building After 40: What Changes and How to Adapt', duration: '26 min', description: 'The training and nutrition adjustments that keep you gaining strength at any age.' },
      { title: 'Cardio vs. Weights: The Debate Settled Once and For All', duration: '22 min', description: 'Which burns more fat? Which builds more health? The science-backed answer.' },
      { title: 'Meal Prep Made Simple: A Trainer\'s Guide to Eating for Results', duration: '20 min', description: 'The exact meal prep system I teach every client — under 2 hours for a full week.' },
      { title: 'Why You\'re Not Seeing Results: The 5 Most Common Training Mistakes', duration: '24 min', description: 'The subtle errors that silently sabotage your progress — and how to fix them today.' },
    ],
    videoHooks: [
      '"I\'m going to show you the 3 exercises that burn the most calories in the least time. Number 1 isn\'t what you think." [15 sec reel]',
      '"This client lost 45 pounds in 6 months. Here\'s the exact approach we used — no crash diets, no 2-hour workouts." [30 sec reel]',
    ],
    analyticsStats: [
      { label: 'Consultation Requests', value: '48',     change: '+11 this month',    positive: true },
      { label: 'Landing Page Visits',   value: '2,340',  change: '+32% this month',   positive: true },
      { label: 'Conversion Rate',       value: '2.1%',   change: '+0.3%',             positive: true },
      { label: 'Email Open Rate',       value: '40.6%',  change: 'Industry avg 23%',  positive: true },
      { label: 'Social Reach',          value: '7,890',  change: '+1,340 this week',  positive: true },
      { label: 'Podcast Downloads',     value: '567',    change: '+112 new listeners', positive: true },
    ],
  },
}
