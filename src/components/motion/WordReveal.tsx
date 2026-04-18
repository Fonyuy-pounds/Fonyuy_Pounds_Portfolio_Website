'use client'

import { motion, Variants } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface WordRevealProps {
  text: string
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: '110%' },
  visible: (custom: number) => ({
    opacity: 1,
    y: '0%',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: custom,
    },
  }),
}

/**
 * WordReveal
 * Splits text into words, each rising from a clipped container.
 * Creates the signature cinematic title-card moment.
 */
export function WordReveal({
  text,
  delay = 0,
  className = '',
  as: Tag = 'span',
}: WordRevealProps) {
  const words = text.split(' ')

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-mask"
          style={{ display: 'inline-block', marginRight: '0.3em' }}
          aria-hidden="true"
        >
          <motion.span
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            custom={delay + i * 0.08}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
