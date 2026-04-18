import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes on systems, language, and precision from Fonyuy Pounds.',
}

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-32">
          <p
            className="text-[11px] tracking-[0.35em] uppercase font-mono mb-6"
            style={{ color: 'var(--color-accent)' }}
          >
            Journal
          </p>
          <h1
            className="text-6xl md:text-8xl font-display font-light"
            style={{ color: 'var(--color-text)' }}
          >
            Dispatches<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-muted)' }}>
              from the build.
            </span>
          </h1>
        </div>

        {/* Empty state */}
        <div
          className="py-32 border-t border-b flex flex-col items-center justify-center text-center"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <p
            className="text-[11px] tracking-[0.3em] uppercase font-mono mb-4"
            style={{ color: 'var(--color-muted)' }}
          >
            Coming Soon
          </p>
          <p
            className="text-2xl font-display font-light"
            style={{ color: 'var(--color-text)' }}
          >
            The first dispatch is being written.
          </p>
        </div>
      </div>
    </main>
  )
}
