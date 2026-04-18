'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Keep ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    const rafHandler = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafHandler)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(rafHandler)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
