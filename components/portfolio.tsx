import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

const email = 'mailto:orsonlg33@gmail.com'
const linkedin = 'https://linkedin.com/in/orson-lou'

export function Hero() {
  return (
    <section className="band-dark hero" aria-labelledby="hero-title" id="top">
      <div className="rail">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Orson Alejandro Lou Garza, home">OALG<span>.</span></a>
          <nav aria-label="Main navigation" className="main-nav">
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#skills">Skills</a>
            <a href={email} className="nav-contact">Get in touch</a>
          </nav>
        </header>
        <div className="hero-content">
          <h1 id="hero-title">
            <span className="name-line">Orson Alejandro</span>
            <span className="name-line">Lou Garza</span>
          </h1>
          <p className="hero-tagline">Process optimisation and applied machine learning.</p>
          <p className="hero-lede">
            Industrial engineer with an MSc in Artificial Intelligence and Data Science. I turn
            operational data into decisions, and report what the numbers actually say.
          </p>
          <dl className="hero-status">
            <div>
              <dt>Available</dt>
              <dd className="live">United Kingdom, January 2027</dd>
            </div>
            <div>
              <dt>MSc</dt>
              <dd>University of Hull, Distinction</dd>
            </div>
            <div>
              <dt>BSc</dt>
              <dd>Tecnológico de Monterrey</dd>
            </div>
          </dl>
          <div className="hero-actions">
            <a href={email} className="is-primary"><Mail aria-hidden="true" className="size-4" /> Email me</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="band band-chalk">
      <div className="rail">
        <div className="section-head">
          <p className="section-name tick">About</p>
          <div>
            <h2 id="about-title">A systems mindset, held to the evidence.</h2>
            <div className="about-copy">
              <p>
                Industrial Engineering student at <strong>Tecnológico de Monterrey</strong>, and I have
                completed the <strong>MSc in Artificial Intelligence &amp; Data Science</strong> at the{' '}
                <strong>University of Hull</strong> with <strong>Distinction</strong>.
              </p>
              <p>
                I use discrete-event simulation, operations research and machine learning to find where a
                process loses value. The part I care about is the check afterwards: leakage-safe validation,
                an honest baseline, and results reported even when they are unflattering.
              </p>
              <p className="relocation">
                <MapPin className="size-4" aria-hidden="true" />
                Relocating to the United Kingdom in January 2027.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const skillGroups = [
  { title: 'Forecasting and ML', items: ['Python', 'XGBoost', 'Prophet', 'PyTorch', 'scikit-learn', 'SHAP'] },
  { title: 'Natural language', items: ['Hugging Face Transformers', 'DistilBERT', 'TF-IDF', 'TensorFlow/Keras'] },
  { title: 'Simulation and OR', items: ['AnyLogic', 'LINGO', 'Discrete-event simulation', 'Linear and integer programming'] },
  { title: 'Process improvement', items: ['Lean Six Sigma', 'SIPOC', 'Value Stream Mapping', 'Nominal Group Technique'] },
  { title: 'Data and reporting', items: ['SQL', 'Excel', 'Tableau'] },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="band band-chalk">
      <div className="rail">
        <div className="section-head">
          <p className="section-name tick">Skills</p>
          <div>
            <h2 id="skills-title">The tools behind the thinking.</h2>
            <dl className="skills-groups">
              {skillGroups.map(group => (
                <div className="skills-group" key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
            <p className="skills-note">
              Every group above is used in the work listed on this page. I work in Spanish, my first
              language, and in English at C1.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="rail footer-inner">
        <a className="wordmark" href="#top" aria-label="Back to top">OALG<span>.</span></a>
        <p>© 2026 Orson Lou</p>
        <div className="footer-links">
          <a href={email}>orsonlg33@gmail.com</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
