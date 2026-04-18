import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Inter,
  Space_Mono,
} from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Navbar } from '@/components/layout/Navbar'
import { PageTransition } from '@/components/layout/PageTransition'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// ─── Fonts ───────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

// ─── Metadata ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'Fonyuy Pounds — Full-Stack Developer & Data Scientist',
    template: '%s — Fonyuy Pounds',
  },
  description:
    'I build intelligent, scalable systems that turn complex data into real-world decisions. Full-Stack Developer & Data Scientist based in Cameroon.',
  keywords: ['Full-Stack Developer', 'Data Scientist', 'Next.js', 'Machine Learning', 'Fonyuy Pounds'],
  authors: [{ name: 'Fonyuy Pounds' }],
  creator: 'Fonyuy Pounds',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fonyuypounds.com',
    siteName: 'Fonyuy Pounds',
    title: 'Fonyuy Pounds — Full-Stack Developer & Data Scientist',
    description:
      'I build intelligent, scalable systems that turn complex data into real-world decisions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fonyuy Pounds — Full-Stack Developer & Data Scientist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fonyuy Pounds — Full-Stack Developer & Data Scientist',
    description:
      'I build intelligent, scalable systems that turn complex data into real-world decisions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// ─── JSON-LD Structured Data ──────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Fonyuy Pounds',
  jobTitle: 'Full-Stack Developer & Data Scientist',
  url: 'https://fonyuypounds.com',
  email: 'fonyuypatrick929@gmail.com',
  sameAs: [
    'https://github.com/Fonyuy-pounds',
    'https://linkedin.com/in/fonyuypounds',
  ],
  knowsAbout: ['Web Development', 'Data Science', 'Machine Learning', 'Next.js', 'Python'],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Skip to content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Film grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Custom cursor — desktop only */}
        <CustomCursor />

        {/* Smooth scroll foundation */}
        <SmoothScroll>
          {/* Navigation */}
          <Navbar />

          {/* Page transition wrapper */}
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>

        {/* Vercel telemetry */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
