import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:      'var(--color-bg)',
        surface: 'var(--color-surface)',
        text:    'var(--color-text)',
        muted:   'var(--color-muted)',
        accent:  'var(--color-accent)',
        border:  'var(--color-border)',
        // Legacy aliases (keep for backward compat)
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
        // Legacy aliases
        sans:    ['var(--font-body)', 'sans-serif'],
        serif:   ['var(--font-display)', 'serif'],
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        weighted:  'cubic-bezier(0.16, 1, 0.3, 1)',
        soft:      'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
