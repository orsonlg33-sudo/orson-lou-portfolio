import { ArrowDown, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const email = 'mailto:orsonlg33@gmail.com'
const linkedin = 'https://linkedin.com/in/orson-lou'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" id="top">
      <header className="page-width site-header">
        <a className="wordmark nav-wordmark" href="#top" aria-label="Orson Alejandro Lou Garza home">OALG<span>.</span></a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href={email} className="nav-contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </nav>
      </header>
      <div className="page-width hero-content">
        <p className="eyebrow hero-eyebrow"><span className="status-dot" /> ENGINEERING MEETS DATA</p>
        <h1 id="hero-title"><span className="name-line">Orson Alejandro</span>{' '}<span className="name-line">Lou Garza<span className="name-period">.</span></span></h1>
        <p className="hero-tagline">Process Optimisation <span>&amp; Data Science</span></p>
        <p className="hero-description">Turning operational data into business cases for change.</p>
        <div className="hero-actions">
          <a href={email} className={buttonVariants({ variant: 'secondary', size: 'lg' })}><Mail data-icon="inline-start" aria-hidden="true" /> Email me</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: 'outline', size: 'lg' })}>LinkedIn <ArrowUpRight data-icon="inline-end" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <div className="hero-bottom">
          <a href="#projects" className="explore-link">Explore my work <ArrowDown className="size-4" aria-hidden="true" /></a>
          <p>ANALYTICAL THINKING. PRACTICAL IMPACT.</p>
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="page-width about-section section-grid">
      <div><SectionLabel number="01">ABOUT</SectionLabel><h2 id="about-title">A systems mindset.<br />A data-driven approach.</h2></div>
      <div className="about-copy">
        <p>Industrial Engineering student at <strong>Tecnológico de Monterrey</strong> who has completed the <strong>MSc in Artificial Intelligence &amp; Data Science</strong> programme at the <strong>University of Hull.</strong></p>
        <p>I apply discrete-event simulation, operations research and machine learning to find and close process inefficiencies.</p>
        <p className="relocation"><MapPin className="size-4" aria-hidden="true" />Relocating to the UK in January 2027.</p>
      </div>
    </section>
  )
}

const skills = ['Python', 'SQL', 'Excel', 'PyTorch', 'scikit-learn', 'AnyLogic', 'LINGO', 'Lean Six Sigma', 'Process Mapping', 'Time-Series Forecasting', 'NLP']

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="page-width skills-section section-grid">
      <div><SectionLabel number="03">SKILLS</SectionLabel><h2 id="skills-title">The tools behind<br />the thinking.</h2></div>
      <div className="skills-content">
        <p>A toolkit that connects operational understanding with analytical depth.</p>
        <ul className="skills-list" aria-label="Technical and process improvement skills">{skills.map(skill => <li key={skill}><Badge variant="outline">{skill}</Badge></li>)}</ul>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-inner">
        <a className="wordmark" href="#top" aria-label="Back to top">ol<span>.</span></a>
        <p>© 2026 Orson Lou</p>
        <div className="footer-links">
          <a href={email}>orsonlg33@gmail.com <ArrowUpRight className="size-3.5" aria-hidden="true" /></a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="size-3.5" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </div>
    </footer>
  )
}
