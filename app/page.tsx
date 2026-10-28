import { Hero, About, Skills, Footer } from '@/components/portfolio'
import { Projects } from '@/components/projects'

export default function Page() {
  return (
    <>
      <a href="#about" className="skip-link">Skip to content</a>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
