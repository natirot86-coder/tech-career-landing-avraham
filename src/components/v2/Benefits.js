const items = [
  {
    title: 'הכשרה מוסמכת',
    desc: 'מוכר ע"י משרד העבודה וכנקודות זכות במל"ג',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 14l6.16-3.42A12.083 12.083 0 0121 15.5c0 2.5-4 4.5-9 4.5s-9-2-9-4.5c0-1.6.8-3.03 2.02-4.03L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 9v6" />
      </svg>
    ),
  },
  {
    title: 'ליווי אישי',
    desc: 'מנטור צמוד ותמיכה לכל אורך הדרך עד להשמה',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'מסלול לעבודה',
    desc: 'קשרים ישירים עם חברות ההייטק המובילות',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" />
      </svg>
    ),
  },
  {
    title: 'לימודי ערב',
    desc: 'מתכונת היברידית שמאפשרת ללמוד לצד העבודה',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((b, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 p-5 bg-white border border-gray-200 rounded-xl hover:border-corp-primary transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-corp-primary/10 text-corp-primary flex items-center justify-center flex-shrink-0">
              {b.icon}
            </div>
            <h4 className="font-semibold text-corp-secondary">{b.title}</h4>
            <p className="text-sm text-gray-500 leading-snug">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
