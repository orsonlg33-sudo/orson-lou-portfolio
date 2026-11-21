const options = [
  { slug: 'a1', name: 'A1 · Drafting Table' },
  { slug: 'a2', name: 'A2 · Signal' },
  { slug: 'a3', name: 'A3 · Night Shift' },
  { slug: 'a', name: 'A · original' },
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
      <a href="/">Current live</a>
    </div>
  )
}
