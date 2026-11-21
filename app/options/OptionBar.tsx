const options = [
  { slug: 'a', name: 'A · Blueprint' },
  { slug: 'b', name: 'B · Riso Press' },
  { slug: 'c', name: 'C · Monochrome' },
]

export function OptionBar({ current }: { current: string }) {
  return (
    <div className="opt-bar">
      <strong>Design options</strong>
      {options.map(o =>
        o.slug === current
          ? <span key={o.slug} className="here">{o.name}</span>
          : <a key={o.slug} href={`/options/${o.slug}`}>{o.name}</a>
      )}
      <a href="/">Current live design</a>
    </div>
  )
}
