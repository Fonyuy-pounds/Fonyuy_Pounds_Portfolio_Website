'use client'

import { useState, useEffect, RefObject } from 'react'

/**
 * Returns a normalized scroll progress value [0, 1]
 * for the element referenced by the given ref.
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      // Start: when element enters viewport bottom
      // End: when element leaves viewport top
      const start = windowHeight
      const end = -elementHeight
      const current = rect.top

      const raw = (start - current) / (start - end)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}
