/**
 * content/projects.ts
 * Single source of truth for all project data.
 * Used by: Projects list, case study pages, sitemap.
 */

export interface ProjectMetric {
  label: string
  value: number
  suffix: string
  decimals?: number
}

export interface Project {
  slug: string
  title: string
  shortTitle: string
  category: string
  year: string
  tagline: string
  problem: string
  approach: string
  solution: string
  impact: string
  metrics: ProjectMetric[]
  stack: string[]
  color: string
  index: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'smartreport',
    title: 'SmartReport',
    shortTitle: 'SmartReport',
    category: 'Full-Stack System',
    year: '2024',
    tagline: 'Transforming academic administration at scale.',
    problem:
      'Educational institutions struggled with fragmented data and delayed reporting, creating administrative bottlenecks that consumed hours of manual work per week.',
    approach:
      'Built a centralized, real-time ecosystem using Next.js and Supabase, prioritizing data integrity and role-specific portals for admins, teachers, and parents.',
    solution:
      'A scalable SaaS platform that automates mark entries, generates report cards on demand, and provides deep performance analytics across every academic dimension.',
    impact:
      'Reduced administrative overhead by 60% and enabled instantaneous academic data access for over 1,000+ students.',
    metrics: [
      { label: 'Reduction in admin overhead', value: 60, suffix: '%' },
      { label: 'Students on platform', value: 1000, suffix: '+' },
      { label: 'Time saved per report cycle', value: 12, suffix: 'hrs' },
      { label: 'Data accuracy improvement', value: 94, suffix: '%' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    color: '#C9A96E',
    index: '01',
    image: '/projects/smartreport.png',
  },
  {
    slug: 'insightengine',
    title: 'InsightEngine',
    shortTitle: 'InsightEngine',
    category: 'Data Science / AI',
    year: '2024',
    tagline: 'Turning raw business data into strategic foresight.',
    problem:
      'Complex business data was being collected but never utilized for strategic decisions — lack of interpretation tools left stakeholders operating on intuition alone.',
    approach:
      'Developed a custom ETL pipeline and predictive models to transform raw sales and behavioral data into actionable trend reports and anomaly alerts.',
    solution:
      'An interactive analytics dashboard that highlights market anomalies and predicts future shifts with measurable accuracy.',
    impact:
      'Empowered stakeholders to shift from reactive to proactive strategies, increasing operational efficiency by 25%.',
    metrics: [
      { label: 'Prediction accuracy', value: 85, suffix: '%' },
      { label: 'Operational efficiency gain', value: 25, suffix: '%' },
      { label: 'Data sources integrated', value: 8, suffix: '' },
      { label: 'Decision latency reduction', value: 2.3, suffix: 'x', decimals: 1 },
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'React', 'D3.js', 'PostgreSQL'],
    color: '#C9A96E',
    index: '02',
    image: '/projects/insightengine.png',
  },
  {
    slug: 'neural-navigator',
    title: 'Neural Navigator',
    shortTitle: 'NeuralNav',
    category: 'Machine Learning',
    year: '2025',
    tagline: 'Navigation that learns how you move.',
    problem:
      'Existing navigation systems relied on static rules, failing to adapt to real-world behavioral patterns, context, or individual user intent.',
    approach:
      'Applied reinforcement learning to model user intent and environmental context, building a navigation engine that improves with every session.',
    solution:
      'A context-aware routing system that predicts destinations with high confidence, reducing decision load and improving journey efficiency.',
    impact: 'Improved route accuracy by 40% over static systems in A/B testing.',
    metrics: [
      { label: 'Route accuracy improvement', value: 40, suffix: '%' },
      { label: 'Sessions trained on', value: 50, suffix: 'k+' },
      { label: 'Latency', value: 12, suffix: 'ms' },
      { label: 'User satisfaction score', value: 4.8, suffix: '/5', decimals: 1 },
    ],
    stack: ['PyTorch', 'FastAPI', 'React Native', 'Redis', 'Docker', 'AWS'],
    color: '#C9A96E',
    index: '03',
    image: '/projects/neuralnav.png',
  },
  {
    slug: 'sole-craft',
    title: 'SoleCraft',
    shortTitle: 'SoleCraft',
    category: 'Web Development / E-Commerce',
    year: '2025',
    tagline: 'Luxury leather goods, sold with precision.',
    problem:
      'A premium leather shoe brand had no direct-to-consumer digital presence, losing significant revenue to third-party retailers with zero control over brand experience.',
    approach:
      'Designed and built a bespoke e-commerce storefront that mirrors the tactile luxury of hand-crafted leather goods — with a seamless checkout journey, rich product storytelling, and curated filtering system.',
    solution:
      'A full-featured Next.js e-commerce platform with Stripe payments, product configurator, customer accounts, wishlist management, and an artisan-focused brand narrative woven throughout.',
    impact:
      'Achieved 3.2x conversion rate compared to industry average, with an average order value of $280 within the first month of launch.',
    metrics: [
      { label: 'Conversion rate vs. industry avg', value: 3.2, suffix: 'x', decimals: 1 },
      { label: 'Average order value', value: 280, suffix: '$' },
      { label: 'Page load speed', value: 98, suffix: '/100' },
      { label: 'Mobile traffic share', value: 73, suffix: '%' },
    ],
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    color: '#C9A96E',
    index: '04',
    image: '/projects/sole-craft.png',
  },
  {
    slug: 'stockflow',
    title: 'StockFlow',
    shortTitle: 'StockFlow',
    category: 'Web Development / Enterprise',
    year: '2025',
    tagline: 'Inventory intelligence for high-velocity operations.',
    problem:
      'A growing distribution company was managing multi-warehouse stock across spreadsheets — leading to costly over-ordering, stock-outs, and a complete lack of real-time visibility.',
    approach:
      'Architected a role-based inventory platform with real-time stock tracking, automated reorder triggers, supplier management, and a barcode-scanning interface for floor staff.',
    solution:
      'A full-stack enterprise inventory system with live stock dashboards, purchase order workflows, audit trails, multi-location support, and exportable reports — all behind a clean, fast UI.',
    impact:
      'Eliminated stock-outs by 87%, reduced manual data entry by 70%, and gave management real-time visibility across 3 warehouse locations.',
    metrics: [
      { label: 'Reduction in stock-outs', value: 87, suffix: '%' },
      { label: 'Manual entry time saved', value: 70, suffix: '%' },
      { label: 'Warehouse locations managed', value: 3, suffix: '' },
      { label: 'Orders processed per day', value: 500, suffix: '+' },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Chart.js'],
    color: '#C9A96E',
    index: '05',
    image: '/projects/stockflow.png',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
