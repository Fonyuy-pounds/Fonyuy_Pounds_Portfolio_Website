'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MaskReveal } from '@/components/motion/MaskReveal'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

// ─── Zod schema ──────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  projectType: z.enum(
    ['development', 'data-science', 'architecture', 'consulting', 'other'] as const,
    { message: 'Please select a project type' }
  ),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

type SubmitState = 'idle' | 'loading' | 'success' | 'error'

// ─── Field component ─────────────────────────────────────────
function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative border-b pb-4 group" style={{ borderColor: 'var(--color-border)' }}>
      <label
        className="block text-[10px] tracking-[0.3em] uppercase font-mono mb-3"
        style={{ color: 'var(--color-muted)' }}
      >
        {label}
      </label>
      {children}
      {/* Focus underline */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full transition-all duration-500"
        style={{ background: 'var(--color-accent)' }}
      />
      {error && (
        <p className="mt-2 text-[11px] font-mono" style={{ color: '#E07070' }}>
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSubmitState('success')
      reset()
    } catch {
      setSubmitState('error')
    }
  }

  const inputClass = `
    w-full bg-transparent text-base font-body py-1
    focus:outline-none placeholder-transparent caret-accent
  `
  const inputStyle = { color: 'var(--color-text)', caretColor: 'var(--color-accent)' }

  return (
    <section
      id="contact"
      className="relative w-full border-t overflow-hidden"
      style={{ borderColor: 'var(--color-border)' }}
      aria-label="Contact"
    >
      {/* ── Animated Dark Gradient Background ── */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%', '0% 0%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(40, 40, 40, 0.8) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(201, 169, 110, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(201, 169, 110, 0.15) 0%, transparent 40%)
          `,
          backgroundSize: '200% 200%',
        }}
      />
      {/* Heavy blur removed, lighter overlay applied */}
      <div className="absolute inset-0 z-0 bg-bg/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left — headline + info */}
          <div className="space-y-16">
            <div>
              <motion.p
                className="text-[11px] tracking-[0.35em] uppercase font-mono mb-6"
                style={{ color: 'var(--color-accent)' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
              >
                Get in Touch
              </motion.p>
              <MaskReveal>
                <h2
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.05]"
                  style={{ color: 'var(--color-text)' }}
                >
                  If you have a<br />
                  project worth<br />
                  building —{' '}
                  <span style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}>
                    let's talk.
                  </span>
                </h2>
              </MaskReveal>
            </div>

            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed"
                style={{ color: 'var(--color-muted)', maxWidth: '420px' }}
              >
                I selectively partner with ambitious people who value structural
                integrity and precision in their systems.
              </motion.p>

              <motion.div variants={fadeUp} className="space-y-2">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-mono"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Response Expectation
                </p>
                <p
                  className="text-sm tracking-[0.15em] uppercase font-mono"
                  style={{ color: 'var(--color-accent)' }}
                >
                  I respond within 48 hours.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-3">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase font-mono"
                  style={{ color: 'var(--color-muted)' }}
                >
                  Direct Line
                </p>
                <a
                  href="mailto:fonyuypatrick929@gmail.com"
                  data-cursor="link"
                  className="text-sm font-mono transition-colors duration-300 hover:text-accent"
                  style={{ color: 'var(--color-text)' }}
                >
                  fonyuypatrick929@gmail.com
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-8">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    data-cursor="link"
                    className="text-[11px] tracking-[0.2em] uppercase font-mono transition-colors duration-300"
                    style={{ color: 'var(--color-muted)' }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-text)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-muted)')
                    }
                  >
                    {social}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitState === 'success' ? (
                /* ── Success state — composed, no popup ── */
                <motion.div
                  key="success"
                  className="h-full flex flex-col justify-center py-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="text-2xl md:text-3xl font-display font-light mb-6"
                    style={{ color: 'var(--color-text)' }}
                  >
                    Received. Expect a response<br />within 48 hours.
                  </p>
                  <motion.div
                    className="h-px w-0"
                    style={{ background: 'var(--color-accent)' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="mt-12 text-[11px] tracking-[0.2em] uppercase font-mono self-start transition-colors duration-300"
                    style={{ color: 'var(--color-muted)' }}
                    data-cursor="link"
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-text)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-muted)')
                    }
                  >
                    Send another message →
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-10"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  noValidate
                >
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register('name')}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Your name"
                      data-cursor="hover"
                      id="contact-name"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      className={inputClass}
                      style={inputStyle}
                      placeholder="your@email.com"
                      data-cursor="hover"
                      id="contact-email"
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Project Scope" error={errors.projectType?.message}>
                    <select
                      {...register('projectType')}
                      className={`${inputClass} appearance-none cursor-pointer`}
                      style={{ ...inputStyle, background: 'transparent' }}
                      data-cursor="hover"
                      id="contact-type"
                      defaultValue=""
                    >
                      <option value="" disabled style={{ background: '#111' }}>Select scope</option>
                      <option value="development" style={{ background: '#111' }}>Full-Stack Development</option>
                      <option value="data-science" style={{ background: '#111' }}>Data Science / ML</option>
                      <option value="architecture" style={{ background: '#111' }}>System Architecture</option>
                      <option value="consulting" style={{ background: '#111' }}>Consulting</option>
                      <option value="other" style={{ background: '#111' }}>Other</option>
                    </select>
                  </Field>

                  <Field label="Project Details" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      className={`${inputClass} resize-none min-h-[120px]`}
                      style={inputStyle}
                      placeholder="Describe your project..."
                      data-cursor="hover"
                      id="contact-message"
                    />
                  </Field>

                  {submitState === 'error' && (
                    <p className="text-sm font-mono" style={{ color: '#E07070' }}>
                      Something went wrong. Please try emailing directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === 'loading'}
                    data-cursor="link"
                    className="group w-full flex items-center justify-between px-8 py-5 transition-all duration-500"
                    style={{
                      background: 'var(--color-accent)',
                      color: 'var(--color-bg)',
                      opacity: submitState === 'loading' ? 0.7 : 1,
                    }}
                  >
                    <span className="text-[12px] tracking-[0.25em] uppercase font-mono">
                      {submitState === 'loading' ? 'Sending...' : 'Initiate Dialogue'}
                    </span>
                    <motion.span
                      className="text-lg"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.5 }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer bar */}
        <div
          className="mt-32 pt-10 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase font-mono"
            style={{ color: 'var(--color-muted)' }}
          >
            © 2026 Fonyuy Pounds — The Silent Authority
          </p>
          <div className="flex items-center gap-8">
            {['GitHub', 'LinkedIn', 'Archive', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Contact' ? '/contact' : '#'}
                data-cursor="link"
                className="text-[10px] tracking-[0.2em] uppercase font-mono transition-colors duration-300"
                style={{ color: 'var(--color-muted)' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-muted)')
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
