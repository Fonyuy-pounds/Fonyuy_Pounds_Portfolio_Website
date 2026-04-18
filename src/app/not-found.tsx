import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This page does not exist — yet.',
}

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.4,
        }}
      />

      <div className="relative text-center space-y-8 max-w-2xl">
        {/* Status line */}
        <div
          className="flex items-center justify-center gap-16 mb-12"
        >
          <span
            className="text-[10px] tracking-[0.35em] uppercase font-mono"
            style={{ color: 'var(--color-muted)' }}
          >
            Status
          </span>
          <span
            className="text-[10px] tracking-[0.35em] uppercase font-mono"
            style={{ color: 'var(--color-muted)' }}
          >
            404
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-8xl font-display font-light leading-tight"
          style={{ color: 'var(--color-text)' }}
        >
          This page doesn&apos;t exist.{' '}
          <span
            style={{ fontStyle: 'italic', color: 'var(--color-accent)' }}
          >
            Yet.
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-base leading-relaxed mx-auto mt-8"
          style={{ color: 'var(--color-muted)', maxWidth: '480px' }}
        >
          You have strayed from the architectural path. The coordinates
          you are looking for remain unmapped in the current schematic.
        </p>

        {/* CTA */}
        <div className="pt-8">
          <Link
            href="/"
            data-cursor="link"
            className="inline-flex items-center gap-4 px-8 py-4 text-[12px] tracking-[0.25em] uppercase font-mono transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            <span>←</span>
            Return to the Path
          </Link>
        </div>
      </div>
    </main>
  )
}
