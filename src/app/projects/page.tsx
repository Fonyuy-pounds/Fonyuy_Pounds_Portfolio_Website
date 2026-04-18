import type { Metadata } from 'next'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Selected Works',
  description:
    'Case studies in full-stack development, data science, and system architecture by Fonyuy Pounds.',
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-16">
      <Projects />
      <Contact />
    </main>
  )
}
