import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/content/projects'
import { CaseStudy } from '@/components/sections/CaseStudy'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main id="main-content" className="pt-16">
      <CaseStudy project={project} />
    </main>
  )
}
