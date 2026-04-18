import type { Metadata } from 'next'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Fonyuy Pounds — Full-Stack Developer & Data Scientist.',
}

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-16">
      <Contact />
    </main>
  )
}
