'use client';

import Reveal from './Reveal';
import StatTiles from './StatTiles';

const sessions = [
  { n: '01', title: 'סייבר', date: '1.11', desc: 'מה זה עולם הסייבר בשפה פשוטה, איך מגנים על חברה מאיומים — ואיך מתחילים בתפקיד ג׳וניור.' },
  { n: '02', title: 'רשתות ותקשורת', date: '15.11', desc: 'איך מידע "זורם" באינטרנט וב-WiFi, בלי מונחים טכניים מורכבים — תחום נגיש במיוחד להתחלה.' },
  { n: '03', title: 'בדיקות תוכנה (QA)', date: '29.11', desc: 'מי שתופס/ת באגים לפני שהמוצר יוצא — ואיך אפשר להתחיל בתפקיד ג׳וניור.' },
  { n: '04', title: 'פיתוח תוכנה', date: '13.12', desc: 'מה זה בעצם לכתוב קוד, בלי הנחת ידע קודם — ולמה "אני לא טוב/ה במתמטיקה" לא סיבה לוותר.' },
  { n: '05', title: 'דאטה אנליסט', date: '27.12', desc: 'איך נתונים הופכים להחלטה עסקית, בלי מונחים סטטיסטיים מורכבים.' },
];

const stats = [
  { v: '5', l: 'מפגשים, פעמיים בחודש' },
  { v: '90-60', l: 'דקות למפגש, מ-19:30' },
  { v: '0 ₪', l: 'עלות השתתפות' },
  { v: '25.10', l: 'מפגש פתיחה והיכרות' },
];

function SessionsList() {
  return (
    <div>
      {sessions.map((s, idx) => (
        <Reveal key={s.n} delay={idx * 70}>
          <div className={`flex items-baseline gap-4 py-5 ${idx > 0 ? 'border-t border-warm-ink/10' : ''}`}>
            <span className="text-action-blue text-xs font-bold flex-shrink-0">({s.n})</span>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display font-black tracking-tight text-xl md:text-2xl text-warm-ink">
                  {s.title}
                </h4>
                <span className="text-brand-orange text-sm font-bold flex-shrink-0">{s.date}</span>
              </div>
              <p className="text-warm-muted text-sm leading-relaxed mt-1">{s.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function ProgramBento({ hideHeading = false }) {
  if (hideHeading) {
    return (
      <div className="max-w-3xl mx-auto px-6 pt-4">
        <SessionsList />
        <Reveal delay={200}>
          <StatTiles items={stats} tone="plum" className="mt-10" />
        </Reveal>
      </div>
    );
  }

  return (
    <section className="py-24 bg-warm-bg border-t border-warm-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start mb-16">
          <Reveal>
            <span className="text-action-blue text-sm font-semibold">סילבוס התוכנית</span>
            <h2 className="font-display font-black tracking-tight text-4xl md:text-5xl text-warm-ink mt-3 leading-[1.05]">
              5 תחומים
              <br />
              שיכולים
              <br />
              לשנות כיוון
            </h2>
            <p className="text-warm-muted text-sm leading-relaxed mt-5 max-w-xs">
              לפני המפגש הראשון — מפגש פתיחה והיכרות עם הצוות (25.10). אחרי כל מפגש — מפגש בוגרים פנימי באותו תחום, כדי שתשמעו גם מהצד המקצועי וגם ממי שכבר עבר/ה את הדרך.
            </p>
          </Reveal>

          <SessionsList />
        </div>

        <Reveal delay={200}>
          <StatTiles items={stats} tone="plum" />
        </Reveal>
      </div>
    </section>
  );
}
