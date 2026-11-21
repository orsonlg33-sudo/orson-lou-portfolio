import { OptionBar } from './OptionBar'
import { email, linkedin, profile, projects, skillGroups } from '@/lib/content'
import './bp.css'

type Variant = '1' | '2' | '3'

/** Which sections sit on ink and which on paper. This rhythm is the
 *  difference between the three: how often the blue gives way. */
const bands: Record<Variant, { hero: string; about: string; work: string; skills: string; foot: string }> = {
  '1': { hero: 'band-paper', about: 'band-paper', work: 'band-ink', skills: 'band-paper', foot: 'band-ink' },
  '2': { hero: 'band-ink', about: 'band-paper', work: 'band-ink', skills: 'band-paper', foot: 'band-ink' },
  '3': { hero: 'band-ink', about: 'band-paper', work: 'band-ink', skills: 'band-paper', foot: 'band-ink' },
}

export function Blueprint({ variant, current }: { variant: Variant; current: string }) {
  const b = bands[variant]
  return (
    <div className={`bp bp-${variant}`}>
      <span className="progress" aria-hidden="true" />
      <OptionBar current={current} />

      <section className={b.hero}>
        <div className="sheet">
          <div className="titleblock">
            <span className="anno">O. A. Lou Garza — portfolio — sheet 1 of 1</span>
            <nav>
              <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href={email}>Contact</a>
            </nav>
          </div>
          <header className="hero">
            <p className="anno">Process optimisation · Data science</p>
            <h1><span>{profile.firstNames}</span><span className="alt">{profile.lastNames}</span></h1>
            <div className="dimension"><span className="anno">UK</span><span className="bar"><i /></span><span className="anno">Jan 2027</span></div>
            <p className="tagline">{profile.tagline}</p>
            <p className="lede">{profile.lede}</p>
            <dl className="specs">
              <div><dt>Available</dt><dd>{profile.available}</dd></div>
              <div><dt>MSc</dt><dd>{profile.msc}</dd></div>
              <div><dt>BSc</dt><dd>{profile.bsc}</dd></div>
            </dl>
            <div className="actions">
              <a className="solid" href={email}>Email me</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </header>
        </div>
      </section>

      <section className={`block ${b.about}`} id="about">
        <div className="sheet head">
          <p className="anno">About</p>
          <div>
            <h2>{profile.aboutHeading}</h2>
            <div className="prose">
              {profile.about.map(p => <p key={p.slice(0, 20)}>{p}</p>)}
              <p><strong>{profile.relocation}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className={`block ${b.work}`} id="work">
        <div className="sheet">
          <div className="head">
            <p className="anno">Selected work</p>
            <div>
              <h2>Five projects, measured.</h2>
              <div className="rows">
                {projects.map(p => (
                  <article className="row" key={p.title}>
                    <span className="anno">{p.year}</span>
                    <div>
                      <h3>{p.title}</h3>
                      <p className="ctx">{p.context}</p>
                    </div>
                    <div>
                      <p className="desc">{p.description}</p>
                      <p className="tools">{p.tools}</p>
                      {p.links && (
                        <div className="links">
                          {p.links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`block ${b.skills}`} id="skills">
        <div className="sheet head">
          <p className="anno">Skills</p>
          <div>
            <h2>{profile.skillsHeading}</h2>
            <table className="partlist">
              <thead><tr><th>Group</th><th>Items</th></tr></thead>
              <tbody>
                {skillGroups.map(g => <tr key={g.title}><td>{g.title}</td><td>{g.items.join(', ')}</td></tr>)}
              </tbody>
            </table>
            <p className="note">{profile.skillsNote}</p>
          </div>
        </div>
      </section>

      <footer className={`sitefoot ${b.foot}`}>
        <div className="sheet inner">
          <span>© 2026 Orson Lou</span>
          <span className="fl">
            <a href={email}>orsonlg33@gmail.com</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
