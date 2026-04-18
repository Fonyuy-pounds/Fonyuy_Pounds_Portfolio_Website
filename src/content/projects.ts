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
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
