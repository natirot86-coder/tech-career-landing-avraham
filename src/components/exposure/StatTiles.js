export default function StatTiles({ items, tone = 'cream', className = '' }) {
  const cell = tone === 'plum' ? 'bg-warm-plum text-warm-cream' : 'bg-warm-card text-warm-plum';
  const label = tone === 'plum' ? 'text-warm-cream-muted' : 'text-warm-muted';

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
      {items.map((s) => (
        <div key={s.l} className={`rounded-2xl px-3 py-4 text-center ${cell}`}>
          <div className="font-bold text-lg leading-none">{s.v}</div>
          <div className={`text-[11px] mt-1.5 ${label}`}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}
