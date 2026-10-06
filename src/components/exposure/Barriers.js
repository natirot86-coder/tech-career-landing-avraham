'use client';

import Reveal from './Reveal';

const barriers = [
  {
    tag: 'ידע',
    tagColor: 'bg-brand-orange',
    quote: '"אין לי שום רקע במחשבים, זה בטח לא בשבילי"',
    answer: 'בדיוק בשביל זה קיימת InTech. רוב מי שמגיעים אלינו מתחילים מאפס מוחלט — וזה בסדר גמור.',
  },
  {
    tag: 'זמן',
    tagColor: 'bg-action-blue',
    quote: '"אין לי זמן, אני עובד/ת כל היום"',
    answer: '5 מפגשים בלבד, פעמיים בחודש, 60-90 דקות בערב משעה 19:30. לא מוותרים על כלום כדי לבוא.',
  },
  {
    tag: 'ביטחון',
    tagColor: 'bg-warm-ink',
    quote: '"מפחד/ת להתבייש שלא אבין כלום"',
    answer: 'אין מבחנים ואין ציונים — רק הסברים פשוטים, מנטורים ובוגרים שילוו אתכם שלב-שלב, בקצב שלכם.',
  },
  {
    tag: 'עלות',
    tagColor: 'bg-action-blue',
    quote: '"זה בטח עולה כסף שאין לי"',
    answer: 'התוכנית עצמה בחינם לחלוטין. ולמי שממשיך ללימודים אקדמיים — יש גם מסלול מלגות מלא עם קרן דל: שכר לימוד, דמי קיום ומחשב נייד.',
  },
  {
    tag: 'גיל',
    tagColor: 'bg-warm-ink',
    quote: '"אני כבר לא בגיל להתחיל מחדש"',
    answer: 'InTech פונה לגילאי 18-44. בין הבוגרים שלנו יש כאלה שהתחילו כמעט בכל טווח הגילאים הזה.',
  },
  {
    tag: 'קהילה',
    tagColor: 'bg-brand-orange',
    quote: '"אני לא מכיר/ה אף אחד שעשה את זה"',
    answer: 'אחרי כל מפגש נפגשים גם עם בוגרים אמיתיים מאותו תחום — אנשים שישבו בדיוק במקום שבו אתם יושבים היום.',
    featured: true,
  },
];

export default function Barriers() {
  return (
    <section className="py-24 bg-warm-bg border-t border-warm-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14">
          <span className="text-brand-orange text-sm font-bold">לפני שממשיכים לגלול</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl text-warm-ink mt-3 leading-tight max-w-2xl">
            כל תירוץ שעצר אתכם עד עכשיו נופל כאן
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {barriers.map((b, i) => (
            <Reveal key={b.tag} delay={i * 60} className={b.featured ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div
                className={`h-full rounded-3xl p-7 flex flex-col ${
                  b.featured ? 'bg-brand-orange text-white' : 'bg-white text-warm-ink'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center text-white text-xs font-bold px-3 py-1 rounded-full ${
                      b.featured ? 'bg-black/15' : b.tagColor
                    }`}
                  >
                    {b.tag}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      b.featured ? 'bg-white text-brand-orange' : 'bg-warm-ink/5 text-warm-ink'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
                <p className="font-display font-black text-lg leading-snug mb-2">{b.quote}</p>
                <p className={`text-[15px] leading-relaxed ${b.featured ? 'text-white/90' : 'text-warm-ink-soft'}`}>
                  {b.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <p className="text-warm-muted text-base">אז מה בעצם נשאר לכם להפסיד?</p>
          <p className="text-brand-orange font-bold text-lg mt-1">בואו לראות בעצמכם — זה על חשבון הבית.</p>
        </Reveal>
      </div>
    </section>
  );
}
