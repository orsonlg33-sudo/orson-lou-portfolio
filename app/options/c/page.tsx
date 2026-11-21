import { Instrument_Serif, Libre_Franklin } from 'next/font/google'
import type { Metadata } from 'next'
import { OptionBar } from '../OptionBar'
import { email, linkedin, profile, projects, skillGroups } from '@/lib/content'
import '../options.css'

const instrument = Instrument_Serif({ subsets: ['latin'], weight: ['400'], variable: '--font-instrument', display: 'swap' })
const franklin = Libre_Franklin({ subsets: ['latin'], variable: '--font-franklin', display: 'swap' })

export const metadata: Metadata = { title: 'Option C · Monochrome', robots: { index: false } }

export default function OptionC() {
  return (
    <div className={`opt opt-c ${instrument.variable} ${franklin.variable}`}>
      <OptionBar current="c" />
      <div className="sheet">
        <div className="topbar">
          <span className="mark">Orson Lou</span>
          <nav>
            <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href={email}>Contact</a>
          </nav>
        </div>

        <header className="hero">
          <h1><span>{profile.firstNames}</span><span>{profile.lastNames}</span></h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="lede">{profile.lede}</p>
          <dl className="specs">
            <div><dt>Available</dt><dd>{profile.available}</dd></div>
            <div><dt>MSc</dt><dd>{profile.msc}</dd></div>
            <div><dt>BSc</dt><dd>{profile.bsc}</dd></div>
          </dl>
          <div className="actions">
            <a href={email}>Email me</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </header>
      </div>

      <section className="block tinted" id="about">
        <div className="sheet">
          <p className="kicker">About</p>
          <h2>{profile.aboutHeading}</h2>
          <div className="prose">
            {profile.about.map(p => <p key={p.slice(0, 20)}>{p}</p>)}
            <p><strong>{profile.relocation}</strong></p>
          </div>
        </div>
      </section>

      <section className="block" id="work">
        <div className="sheet">
          <p className="kicker">Selected work</p>
          <h2>Five projects, measured.</h2>
          <div className="rows">
            {projects.map(p => (
              <article className="row" key={p.title}>
                <div className="head">
                  <h3>{p.title}</h3>
                  <span className="yr">{p.year}</span>
                </div>
                <p className="ctx">{p.context}</p>
                <p className="desc">{p.description}</p>
                <p className="tools">{p.tools}</p>
                {p.links && (
                  <div className="links">
                    {p.links.map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block tinted" id="skills">
        <div className="sheet">
          <p className="kicker">Skills</p>
          <h2>{profile.skillsHeading}</h2>
          <dl className="skills">
            {skillGroups.map(g => (
              <div key={g.title}><dt>{g.title}</dt><dd>{g.items.join(', ')}</dd></div>
            ))}
          </dl>
          <p className="note">{profile.skillsNote}</p>
        </div>
      </section>

      <div className="sheet">
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
