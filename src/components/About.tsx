'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MaskReveal } from '@/components/motion/MaskReveal'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

const timeline = [
  {
    year: '2025',
    role: 'Principal Data Scientist',
    company: 'Independent Practice',
    description:
      'Architecting predictive models for high-stakes decision systems. Focus on reducing feature noise and eliminating data without structural clarity.',
  },
  {
    year: '2024',
    role: 'Senior ML Engineer',
    company: 'InsightEngine Project',
    description:
      'Led end-to-end ML system design in deep learning architectures. Improved model accuracy by 40% through predictive routing.',
  },
  {
    year: '2023',
    role: 'Systems Engineer',
    company: 'SmartReport',
    description:
      'Designed and built a distributed data management system. Built a foundational understanding of scalable architecture. Reduced overhead by 60%.',
  },
]

const manifesto = [
  { text: 'PRECISION OVER NOISE.', italic: false },
  { text: 'WE DO NOT BUILD TO', italic: false },
  { text: 'DECORATE; WE BUILD TO', italic: false },
  { text: 'FUNCTION.', italic: false },
  { text: '', italic: false }, // spacer
  { text: 'DATA IS RAW MATERIAL.', italic: false },
  { text: 'IT REQUIRES AN', italic: false },
  { text: "ARCHITECT'S RESTRAINT", italic: false },
  { text: 'TO BECOME TRUTH.', italic: false },
  { text: '', italic: false }, // spacer
  { text: 'THE STRONGEST', italic: true, gold: true },
  { text: 'STRUCTURES ARE THOSE', italic: true, gold: true },
  { text: 'WITH NOTHING LEFT', italic: true, gold: true },
  { text: 'TO REMOVE.', italic: true, gold: true },
]

export function About() {
  const portraitRef = useRef<HTMLDivElement>(null)

  // Parallax: image moves slower than scroll (0.15x)
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      id="about"
      className="relative w-full"
      aria-label="About Fonyuy Pounds"
    >
      {/* ── Section 1: Portrait + Identity ─────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Portrait */}
        <motion.div
          ref={portraitRef}
          className="relative aspect-[3/4] overflow-hidden"
          style={{ borderRadius: '2px' }}
          initial={{ opacity: 0, scale: 0.96, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          data-cursor="view"
        >
          <motion.div
            className="w-full h-[115%] -mt-[7.5%]"
            style={{ y: portraitY }}
          >
            <Image
              src="/portrait.png"
              alt="Fonyuy Pounds — Full-Stack Developer & Data Scientist"
              fill
              className="object-cover object-top"
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)' }}
          />

          {/* Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-mono"
              style={{ color: 'rgba(201,169,110,0.7)' }}
            >
              [ Sys.Architect ]
            </span>
            <span
              className="text-[10px] tracking-[0.2em] font-mono"
              style={{ color: 'rgba(201,169,110,0.4)' }}
            >
              v2.0.26
            </span>
          </div>
        </motion.div>

        {/* Identity text */}
        <div className="space-y-12">
          <div>
            <motion.p
              className="text-[11px] tracking-[0.35em] uppercase font-mono mb-6"
              style={{ color: 'var(--color-accent)' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Who I Am
            </motion.p>

            <MaskReveal delay={0.1}>
              <h2
                className="text-5xl md:text-7xl font-display font-light leading-tight"
                style={{ color: 'var(--color-text)' }}
              >
                THE<br />PORTRAIT
              </h2>
            </MaskReveal>
          </div>

          <motion.div
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p variants={fadeUp}>
              I began as an engineer, obsessed with the way people build
              and fix problems — how they load weight, how they flow.
              How they make things work.
            </motion.p>
            <motion.p variants={fadeUp}>
              That obsession translated eventually into data science and as
              datasets grew into models. I see then an architecture in it —
              the closest algorithms and models that are as intentional and exact.
            </motion.p>
          </motion.div>

          {/* Disciplines */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {['Full-Stack Developer', 'Data Scientist', 'ML Engineer'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-[10px] tracking-[0.25em] uppercase font-mono"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-muted)',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Section divider ─────────────────────────────────── */}
      <div className="section-line" />

      {/* ── Section 2: Timeline ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-[11px] tracking-[0.35em] uppercase font-mono mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            Career to Date
          </p>
          <h2
            className="text-5xl md:text-7xl font-display font-light"
            style={{ color: 'var(--color-text)' }}
          >
            THE<br />JOURNEY
          </h2>
        </motion.div>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-8 md:gap-16 py-10 border-b"
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              data-cursor="hover"
            >
              {/* Year */}
              <div className="w-20 md:w-28 flex-shrink-0 pt-1">
                <span
                  className="text-sm font-mono"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {item.year}
                </span>
                {/* Active accent line */}
                {i === 0 && (
                  <div
                    className="mt-3 h-px w-full"
                    style={{ background: 'var(--color-accent)' }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3
                  className="text-xl md:text-2xl font-display font-light"
                  style={{ color: 'var(--color-text)' }}
                >
                  {item.role}
                </h3>
                <p
                  className="text-[11px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {item.company}
                </p>
                <p
                  className="text-sm leading-relaxed pt-2"
                  style={{ color: 'var(--color-muted)', maxWidth: '560px' }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Section divider ─────────────────────────────────── */}
      <div className="section-line" />

      {/* ── Section 3: Manifesto ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="space-y-2">
          {manifesto.map((line, i) => {
            if (!line.text) return <div key={i} className="h-8" aria-hidden="true" />

            return (
              <motion.div
                key={i}
                className="overflow-hidden"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p
                  className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-tight"
                  style={{
                    color: (line as any).gold ? 'var(--color-accent)' : 'var(--color-text)',
                    fontStyle: line.italic ? 'italic' : 'normal',
                  }}
                >
                  {line.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
