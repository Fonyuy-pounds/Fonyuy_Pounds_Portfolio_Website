import type { Metadata } from 'next'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'The approach, journey, and philosophy of Fonyuy Pounds — Full-Stack Developer & Data Scientist.',
}

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-16">
      <About />
      <Contact />
    </main>
  )
}
