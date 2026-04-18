/**
 * lib/animations.ts
 * Motion DNA of the entire site.
 * Every entrance animation derives from one of these four variants.
 * Consistency is what makes motion feel intentional.
 */

import type { Variants } from 'framer-motion'

// ─────────────────────────────────────────────
// CORE VARIANTS
// ─────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

// ─────────────────────────────────────────────
// VIEWPORT DEFAULTS — use with whileInView
// ─────────────────────────────────────────────

export const viewportOnce = { once: true, margin: '-80px' }

// ─────────────────────────────────────────────
// PAGE TRANSITION
// ─────────────────────────────────────────────

export const pageVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ─────────────────────────────────────────────
// HERO SEQUENCE TIMINGS (T+ seconds)
// ─────────────────────────────────────────────

export const heroTimings = {
  grain:     0.4,
  name:      0.8,
  title:     1.2,
  statement: 1.6,
  canvas:    2.0,
  cta:       2.4,
  nav:       2.8,
}
