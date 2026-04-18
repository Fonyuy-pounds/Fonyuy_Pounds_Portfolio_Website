'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useTransform, animate, motion } from 'framer-motion'

interface CountUpProps {
  value: number
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * CountUp
 * Numbers count up as they enter the viewport.
 * Real results become visual impact statements, not bullet points.
 */
export function CountUp({
  value,
  suffix = '',
  decimals = 0,
  duration = 1.5,
  className = '',
  style,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const count = useMotionValue(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    })

    return controls.stop
  }, [isInView, value, duration, count])

  return (
    <span ref={ref} className={className} style={style} aria-label={`${value}${suffix}`}>
      <motion.span>
        {useTransform(count, (latest) =>
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toString()
        )}
      </motion.span>
      {suffix}
    </span>
  )
}
