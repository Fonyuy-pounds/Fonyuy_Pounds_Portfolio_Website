'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { WordReveal } from '@/components/motion/WordReveal'
import { heroTimings } from '@/lib/animations'

// Lazy load R3F Canvas — never block page render
const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      // Static SVG wireframe fallback while canvas loads
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full opacity-30"
        aria-hidden="true"
      >
        <polygon
          points="100,20 180,60 180,140 100,180 20,140 20,60"
          fill="none"
          stroke="#C9A96E"
          strokeWidth="0.5"
        />
        <polygon
          points="100,20 140,100 100,180 60,100"
          fill="none"
          stroke="#C9A96E"
          strokeWidth="0.5"
        />
        <line x1="20" y1="60" x2="180" y2="60" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="20" y1="140" x2="180" y2="140" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="100" y1="20" x2="100" y2="180" stroke="#C9A96E" strokeWidth="0.5" />
      </svg>
    ),
  }
)

// Scroll indicator arrow
function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: heroTimings.cta + 0.2, duration: 0.5 }}
    >
      <span
        className="text-[10px] tracking-[0.3em] uppercase font-mono"
        style={{ color: 'var(--color-muted)' }}
      >
        Scroll
      </span>
      <motion.div
        className="w-px h-12"
        style={{ background: 'var(--color-border)' }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: heroTimings.cta + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="main-content"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Decorative grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.4,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[80vh]">

          {/* Left column — text */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Name label */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: heroTimings.name, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="h-px w-8" style={{ background: 'var(--color-accent)' }} />
              <span
                className="text-[11px] tracking-[0.35em] uppercase font-mono"
                style={{ color: 'var(--color-accent)' }}
              >
                Fonyuy Pounds
              </span>
            </motion.div>

            {/* Main headline */}
            <div>
              <h1
                className="text-5xl md:text-7xl xl:text-8xl font-display font-light leading-[1.0] tracking-tight"
                style={{ color: 'var(--color-text)' }}
              >
                <WordReveal text="Precision" delay={heroTimings.title} />
                <br />
                <WordReveal text="meets" delay={heroTimings.title + 0.1} />
                <br />
                <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>
                  <WordReveal text="Pattern" delay={heroTimings.title + 0.2} />
                  <br />
                  <WordReveal text="Recognition." delay={heroTimings.title + 0.3} />
                </span>
              </h1>
            </div>

            {/* Sub-statement */}
            <motion.p
              className="text-base md:text-lg font-body leading-relaxed max-w-md"
              style={{ color: 'var(--color-muted)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: heroTimings.statement,
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Architecting digital systems with silent authority.{' '}
              Rejecting noise for structural clarity and tonal depth.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: heroTimings.cta,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                href="/projects"
                data-cursor="link"
                className="group flex items-center gap-4 text-[12px] tracking-[0.2em] uppercase font-mono transition-colors duration-300"
                style={{ color: 'var(--color-text)' }}
              >
                <span className="relative">
                  See My Work
                  <span
                    className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: 'var(--color-accent)' }}
                  />
                </span>
                <motion.span
                  className="text-base"
                  style={{ color: 'var(--color-accent)' }}
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.6 }}
                >
                  →
                </motion.span>
              </Link>

              <ScrollIndicator />
            </motion.div>
          </div>

          {/* Right column — 3D canvas */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            {/* 3D canvas — lazy loaded, SSR-safe */}
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1.0 }}
              transition={{
                delay: heroTimings.canvas,
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <HeroCanvas />
            </motion.div>

            {/* Corner annotation */}
            <motion.div
              className="absolute bottom-4 right-4 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: heroTimings.cta + 0.5, duration: 0.8 }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase font-mono"
                style={{ color: 'var(--color-muted)' }}
              >
                sys.architect
              </p>
              <p
                className="text-[10px] tracking-[0.2em] font-mono"
                style={{ color: 'var(--color-border)' }}
              >
                v2.0.26
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'var(--color-border)' }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: heroTimings.cta + 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  )
}
