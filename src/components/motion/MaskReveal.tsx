'use client'

import { motion } from 'framer-motion'
import { maskReveal } from '@/lib/animations'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface MaskRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  triggerOnView?: boolean
}

/**
 * MaskReveal
 * clipPath wipe from right — used for section headlines.
 * Either triggers on mount (hero) or on viewport entry.
 */
export function MaskReveal({
  children,
  delay = 0,
  className = '',
  triggerOnView = true,
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const transition = {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={
        triggerOnView
          ? isInView
            ? { clipPath: 'inset(0 0% 0 0)' }
            : { clipPath: 'inset(0 100% 0 0)' }
          : { clipPath: 'inset(0 0% 0 0)' }
      }
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
