import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main id="main-content" className="relative">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
