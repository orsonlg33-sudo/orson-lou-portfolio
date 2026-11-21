import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { OptionBar } from '../OptionBar'
import { email, linkedin, profile, projects, skillGroups } from '@/lib/content'
import '../options.css'

const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-plex-mono', display: 'swap' })

export const metadata: Metadata = { title: 'Option A · Blueprint', robots: { index: false } }

export default function OptionA() {
  return (
    <div className={`opt opt-a ${plex.variable} ${plexMono.variable}`}>
      <OptionBar current="a" />
      <div className="sheet">
        <div className="titleblock">
          <span className="anno">O. A. LOU GARZA — PORTFOLIO — SHEET 1 OF 1</span>
          <nav>
            <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href={email}>Contact</a>
          </nav>
        </div>

        <header className="hero">
          <p className="anno">Process optimisation · Data science</p>
          <h1><span>{profile.firstNames}</span><span>{profile.lastNames}</span></h1>
          <div className="dimension"><span className="anno">UK</span><span className="bar" /><span className="anno">JAN 2027</span></div>
          <p className="tagline">{profile.tagline}</p>
          <p className="lede">{profile.lede}</p>
          <dl className="specs">
            <div><dt>AVAILABLE</dt><dd>{profile.available}</dd></div>
            <div><dt>MSc</dt><dd>{profile.msc}</dd></div>
            <div><dt>BSc</dt><dd>{profile.bsc}</dd></div>
          </dl>
          <div className="actions">
            <a className="solid" href={email}>Email me</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </header>

        <section className="block" id="about">
          <p className="anno">01 — ABOUT</p>
          <h2>{profile.aboutHeading}</h2>
          <div className="prose">
            {profile.about.map(p => <p key={p.slice(0, 20)}>{p}</p>)}
            <p><strong>{profile.relocation}</strong></p>
          </div>
        </section>

        <section className="block" id="work">
          <p className="anno">02 — SELECTED WORK</p>
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
        </section>

        <section className="block" id="skills">
          <p className="anno">03 — SKILLS</p>
          <h2>{profile.skillsHeading}</h2>
          <table className="partlist">
            <thead><tr><th>GROUP</th><th>ITEMS</th></tr></thead>
            <tbody>
              {skillGroups.map(g => (
                <tr key={g.title}><td>{g.title}</td><td>{g.items.join(', ')}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="prose" style={{ marginTop: 20 }}>{profile.skillsNote}</p>
        </section>

        <footer>
          <span>© 2026 Orson Lou</span>
          <span className="fl">
            <a href={email}>orsonlg33@gmail.com</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </footer>
      </div>
    </div>
  )
}
