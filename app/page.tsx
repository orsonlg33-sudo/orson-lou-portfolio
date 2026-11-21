import { email, github, linkedin, profile, projects, skillGroups } from '@/lib/content'
import './site.css'

export default function Page() {
  return (
    <div className="bp bp-1">
      <a href="#about" className="skip-link">Skip to content</a>
      <span className="progress" aria-hidden="true" />

      <section className="band-paper">
        <div className="sheet">
          <div className="titleblock">
            <span className="anno">O. A. Lou Garza — portfolio — sheet 1 of 1</span>
            <nav aria-label="Main navigation">
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#skills">Skills</a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={email}>Contact</a>
            </nav>
          </div>
          <header className="hero">
            <p className="anno">Process optimisation · Data science</p>
            <h1><span>{profile.firstNames}</span><span className="alt">{profile.lastNames}</span></h1>
            <div className="dimension" aria-hidden="true">
              <span className="anno">UK</span><span className="bar"><i /></span><span className="anno">Jan 2027</span>
            </div>
            <p className="tagline">{profile.tagline}</p>
            <p className="lede">{profile.lede}</p>
            <dl className="specs">
              <div><dt>Available</dt><dd>{profile.available}</dd></div>
              <div><dt>MSc</dt><dd>{profile.msc}</dd></div>
              <div><dt>BSc</dt><dd>{profile.bsc}</dd></div>
            </dl>
            <div className="actions">
              <a className="solid" href={email}>Email me</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </header>
        </div>
      </section>

      <main>
        <section className="block band-paper" id="about" aria-labelledby="about-title">
          <div className="sheet head">
            <p className="anno">About</p>
            <div>
              <h2 id="about-title">{profile.aboutHeading}</h2>
              <div className="prose">
                {profile.about.map(p => <p key={p.slice(0, 20)}>{p}</p>)}
                <p><strong>{profile.relocation}</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="block band-ink" id="work" aria-labelledby="work-title">
          <div className="sheet">
            <div className="head">
              <p className="anno">Selected work</p>
              <div>
                <h2 id="work-title">Five projects, measured.</h2>
                <div className="rows">
                  {projects.map((p, i) => (
                    <article className="row" key={p.title} aria-labelledby={`project-${i}`}>
                      <time className="anno" dateTime={p.year}>{p.year}</time>
                      <div>
                        <h3 id={`project-${i}`}>{p.title}</h3>
                        <p className="ctx">{p.context}</p>
                      </div>
                      <div>
                        <p className="desc">{p.description}</p>
                        <p className="tools">{p.tools}</p>
                        {p.links && (
                          <div className="links">
                            {p.links.map(l => (
                              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                                {l.label}<span className="sr-only"> (opens in a new tab)</span>
                              </a>
                            ))}
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

        <section className="block band-paper" id="skills" aria-labelledby="skills-title">
          <div className="sheet head">
            <p className="anno">Skills</p>
            <div>
              <h2 id="skills-title">{profile.skillsHeading}</h2>
              <table className="partlist">
                <thead><tr><th scope="col">Group</th><th scope="col">Items</th></tr></thead>
                <tbody>
                  {skillGroups.map(g => (
                    <tr key={g.title}><th scope="row">{g.title}</th><td>{g.items.join(', ')}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="note">{profile.skillsNote}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="sitefoot band-ink">
        <div className="sheet inner">
          <span>© 2026 Orson Lou</span>
          <span className="fl">
            <a href={email}>orsonlg33@gmail.com</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
