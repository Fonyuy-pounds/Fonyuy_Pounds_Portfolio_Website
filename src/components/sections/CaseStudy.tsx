'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MaskReveal } from '@/components/motion/MaskReveal'
import { CountUp } from '@/components/motion/CountUp'
import { Contact } from '@/components/Contact'
import { projects, Project } from '@/content/projects'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden"
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay so text is legible */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.9) 100%)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 pt-40 w-full">
          <motion.p
            className="text-[11px] tracking-[0.35em] uppercase font-mono mb-6"
            style={{ color: 'var(--color-accent)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {project.index} — {project.category}
          </motion.p>

          <MaskReveal delay={0.3} triggerOnView={false}>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-light"
              style={{ color: 'var(--color-text)' }}
            >
              {project.title}
            </h1>
          </MaskReveal>

          <motion.p
            className="mt-8 text-lg md:text-xl font-body leading-relaxed"
            style={{ color: 'var(--color-muted)', maxWidth: '560px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {project.tagline}
          </motion.p>

          {/* Meta */}
          <motion.div
            className="mt-12 flex flex-wrap gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-mono mb-1" style={{ color: 'var(--color-muted)' }}>
                Year
              </p>
              <p className="text-sm font-mono" style={{ color: 'var(--color-text)' }}>{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase font-mono mb-1" style={{ color: 'var(--color-muted)' }}>
                Type
              </p>
              <p className="text-sm font-mono" style={{ color: 'var(--color-text)' }}>{project.category}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Impact Metrics ───────────────────────────────────── */}
      <section
        className="border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={i}
                className="py-10 border-r last:border-r-0 pr-8 mr-8 last:mr-0 last:pr-0"
                style={{ borderColor: 'var(--color-border)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <CountUp
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                  className="block text-4xl md:text-6xl font-display font-light mb-2"
                  style={{ color: 'var(--color-accent)' } as React.CSSProperties}
                />
                <p
                  className="text-[11px] tracking-[0.15em] uppercase font-mono leading-relaxed"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Narrative ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Problem + Approach */}
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-[10px] tracking-[0.35em] uppercase font-mono"
                style={{ color: 'var(--color-accent)' }}
              >
                The Problem
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-text)' }}
              >
                {project.problem}
              </motion.p>
            </div>

            <div className="space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-[10px] tracking-[0.35em] uppercase font-mono"
                style={{ color: 'var(--color-accent)' }}
              >
                The Approach
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-text)' }}
              >
                {project.approach}
              </motion.p>
            </div>
          </motion.div>

          {/* Solution + Impact */}
          <motion.div
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="space-y-4">
              <motion.h2
                variants={fadeUp}
                className="text-[10px] tracking-[0.35em] uppercase font-mono"
                style={{ color: 'var(--color-accent)' }}
              >
                The Solution
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-text)' }}
              >
                {project.solution}
              </motion.p>
            </div>

            {/* Impact card */}
            <motion.div
              variants={fadeUp}
              className="p-8"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase font-mono mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                Real-World Impact
              </p>
              <p
                className="text-xl font-display font-light italic leading-relaxed"
                style={{ color: 'var(--color-text)' }}
              >
                "{project.impact}"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────── */}
      <section
        className="border-t border-b max-w-7xl mx-auto px-6 md:px-12 py-16"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex flex-wrap gap-3 items-center">
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-mono mr-4"
            style={{ color: 'var(--color-muted)' }}
          >
            Stack
          </span>
          {project.stack.map((tech) => (
            <motion.span
              key={tech}
              className="px-4 py-2 text-[11px] tracking-[0.15em] uppercase font-mono"
              style={{
                border: '1px solid var(--color-border)',
                color: 'var(--color-muted)',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              whileHover={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
              }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ── Next Project ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <p
          className="text-[11px] tracking-[0.35em] uppercase font-mono mb-8"
          style={{ color: 'var(--color-muted)' }}
        >
          Next Project
        </p>
        <Link
          href={`/projects/${nextProject.slug}`}
          data-cursor="view"
          className="group flex items-end justify-between border-b pb-8"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div>
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-mono mb-2"
              style={{ color: 'var(--color-muted)' }}
            >
              {nextProject.category}
            </p>
            <h2
              className="text-5xl md:text-7xl font-display font-light transition-colors duration-500 group-hover:translate-x-3"
              style={{
                color: 'var(--color-text)',
                transition: 'color 400ms, transform 500ms cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {nextProject.title}
            </h2>
          </div>
          <span
            className="text-4xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ color: 'var(--color-accent)' }}
          >
            →
          </span>
        </Link>
      </section>

      <Contact />
    </>
  )
}
