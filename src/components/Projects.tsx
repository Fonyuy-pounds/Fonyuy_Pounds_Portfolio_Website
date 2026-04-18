'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import { MaskReveal } from '@/components/motion/MaskReveal'
import { projects } from '@/content/projects'
import { viewportOnce } from '@/lib/animations'

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { x, y } = useMousePosition()
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full"
      aria-label="Selected works"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">

        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <motion.p
              className="text-[11px] tracking-[0.35em] uppercase font-mono mb-4"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            >
              Selected Works — Vol. I
            </motion.p>
            <MaskReveal>
              <h2
                className="text-5xl md:text-7xl font-display font-light"
                style={{ color: 'var(--color-text)' }}
              >
                Index
              </h2>
            </MaskReveal>
          </div>

          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ background: 'var(--color-border)' }} />
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-mono"
              style={{ color: 'var(--color-muted)' }}
            >
              {projects.length} projects
            </span>
          </motion.div>
        </div>

        {/* ── Cursor-following preview image ───────────────── */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-30 hidden lg:block"
              style={{
                left: x,
                top: y,
                translateX: '-50%',
                translateY: '-70%',
                width: '340px',
                height: '220px',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {/* Project preview visual — geometric pattern */}
                <ProjectPreview index={hoveredIndex} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Project rows ─────────────────────────────────── */}
        <div
          className="border-t"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              className="relative border-b"
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                data-cursor="view"
                className="group block py-10 md:py-12"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                aria-label={`View ${project.title} case study`}
              >
                <div className="grid grid-cols-[auto_1fr_auto] gap-8 items-center">

                  {/* Project number — huge background watermark */}
                  <span
                    className="font-mono font-bold select-none transition-colors duration-300 group-hover:opacity-20"
                    style={{
                      fontSize: 'clamp(60px, 10vw, 120px)',
                      color: 'var(--color-text)',
                      opacity: 0.06,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    {project.index}
                  </span>

                  {/* Title + category */}
                  <div className="flex flex-col gap-2 pl-4 md:pl-0">
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase font-mono transition-colors duration-300"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      {project.category} — {project.year}
                    </span>
                    <h3
                      className="text-3xl md:text-5xl lg:text-6xl font-display font-light transition-colors duration-500 group-hover:translate-x-2"
                      style={{
                        color: 'var(--color-text)',
                        transition: 'color 400ms, transform 400ms cubic-bezier(0.16,1,0.3,1)',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm font-body leading-relaxed max-w-lg mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: 'var(--color-muted)' }}
                    >
                      {project.tagline}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.span
                    className="text-2xl hidden md:block"
                    style={{ color: 'var(--color-accent)' }}
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 6 }}
                    animate={hoveredIndex === i ? { opacity: 1, x: 6 } : { opacity: 0, x: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

// Visual preview placeholder for each project
function ProjectPreview({ index }: { index: number }) {
  const project = projects[index]

  if (!project) return null

  return (
    <div className="relative w-full h-full opacity-80 overflow-hidden">
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        className="object-cover"
        sizes="340px"
      />
    </div>
  )
}
