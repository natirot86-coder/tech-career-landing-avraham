const reasons = [
  {
    title: 'שכר גבוה',
    desc: 'שכר ממוצע בהייטק גבוה פי 2 מהממוצע במשק',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'ביקוש גבוה',
    desc: 'אלפי משרות פתוחות בכל רגע נתון',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'קידום מהיר',
    desc: 'התקדמות מקצועית מהירה על בסיס יכולות',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'גמישות',
    desc: 'אפשרויות עבודה מרחוק והיברידי',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyTech() {
  return (
    <section
      className="py-20 bg-brand-gray relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, #c7d2e0 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">למה דווקא הייטק?</h2>
          <p className="text-brand-gray-mid text-lg">
            תעשייה שמתגמלת יכולות, לא תעודות
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="card text-center group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                {r.icon}
              </div>
              <h3 className="font-extrabold text-brand-navy text-xl mb-2">{r.title}</h3>
              <p className="text-brand-gray-mid text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
