'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { heroTimings } from '@/lib/animations'

const navLinks = [
  { href: '/projects', label: 'Selected Works' },
  { href: '/about',    label: 'Studio' },
  { href: '/contact',  label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-16 flex items-center justify-between transition-colors duration-500 ${
          scrolled ? 'border-b border-[#1E1E1E]' : ''
        }`}
        style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(12px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isHome ? heroTimings.nav : 0.2, duration: 0.6 }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-[11px] tracking-[0.3em] uppercase font-mono text-[#F0EDE6] hover:text-[#C9A96E] transition-colors duration-300"
          data-cursor="link"
          aria-label="Fonyuy Pounds — Home"
        >
          Fonyuy Pounds
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-cursor="link"
              className={`relative text-[11px] tracking-[0.2em] uppercase font-mono transition-colors duration-300 ${
                pathname === href
                  ? 'text-[#C9A96E]'
                  : 'text-[#888880] hover:text-[#F0EDE6]'
              }`}
            >
              {label}
              {pathname === href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#C9A96E]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          data-cursor="hover"
        >
          <motion.span
            className="block h-px w-full bg-[#F0EDE6] origin-center"
            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.span
            className="block h-px w-full bg-[#F0EDE6] origin-center"
            animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </button>
      </motion.header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: '#0A0A0A' }}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="flex flex-col items-center gap-10" aria-label="Mobile navigation">
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    className="text-4xl font-display font-light text-[#F0EDE6] hover:text-[#C9A96E] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
