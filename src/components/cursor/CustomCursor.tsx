'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'hover' | 'view' | 'link' | 'click' | 'hidden'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [state, setState] = useState<CursorState>('default')
  const [showLabel, setShowLabel] = useState(false)

  // Spring config — cursor follows with intentional lag, feels alive
  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Hide on touch devices
    if (!window.matchMedia('(hover: hover)').matches) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 3)
      cursorY.set(e.clientY - 3)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor')

      if (cursorType === 'view') {
        setState('view')
        setShowLabel(true)
      } else if (cursorType === 'link') {
        setState('link')
        setShowLabel(false)
      } else if (cursorType === 'hover') {
        setState('hover')
        setShowLabel(false)
      } else if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setState('link')
        setShowLabel(false)
      } else {
        setState('default')
        setShowLabel(false)
      }
    }

    const handleMouseDown = () => setState('click')
    const handleMouseUp = () => {
      // Restore state based on current element
      setState('default')
    }

    const handleMouseLeave = () => {
      setState('default')
      setShowLabel(false)
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="cursor-dot"
      data-state={state}
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
    >
      {showLabel && (
        <span className="cursor-label">View</span>
      )}
    </motion.div>
  )
}
