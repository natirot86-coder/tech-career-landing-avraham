const items = [
  { n: '90%', l: 'השמה בתעשייה' },
  { n: '26+', l: 'שנות ניסיון' },
  { n: '1,800+', l: 'בוגרים בתעשייה' },
  { n: 'פריסה ארצית', l: 'מחיפה, לתל אביב, ועד באר שבע', small: true },
];

export default function StatsBar() {
  return (
    <section className="bg-corp-primary">
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <div key={i} className="text-center relative">
            {i !== 0 && (
              <span className="hidden md:block absolute right-[-12px] top-1/2 -translate-y-1/2 h-8 w-px bg-white/25" />
            )}
            <div className={`font-bold text-white leading-none ${s.small ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>
              {s.n}
            </div>
            <div className="text-sm font-medium text-white/85 mt-1.5">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
