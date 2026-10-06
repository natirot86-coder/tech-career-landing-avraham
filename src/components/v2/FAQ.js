'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'אין לי שום ניסיון קודם בהייטק — האם אני בכלל יכול/ה להצטרף?',
    a: 'כן, ודווקא בשביל זה אנחנו כאן. כל הקורסים שלנו בנויים מאפס לאנשים ללא רקע טכנולוגי — מה שחשוב זו מוטיבציה ורצון ללמוד, לא תואר או ניסיון קודם.',
  },
  {
    q: 'אני עובד/ת כרגע — איך אספיק ללמוד?',
    a: 'רוב הקורסים בפורמט היברידי בשעות הערב, כדי שתוכלו להמשיך לעבוד ולהתפרנס תוך כדי הלימודים. יש גם מסלולים בתנאי פנימייה למי שמעדיף מסלול אינטנסיבי יותר.',
  },
  {
    q: 'כמה עולה הקורס?',
    a: 'ההכשרות שלנו מסובסדות ונעות בעלות סמלית בלבד ביחס לשווי האמיתי שלהן — נציג שלנו יפרט את העלות המדויקת למסלול שמעניין אתכם בשיחת הייעוץ החינמית.',
  },
  {
    q: 'מה קורה אחרי שסיימתי את הקורס?',
    a: 'הליווי לא נגמר בסיום הלימודים — אנחנו עוזרים בהכנה לראיונות, חיבור ישיר לחברות שותפות, ותמיכה עד להשמה בפועל. כ-90% מהבוגרים שלנו משתלבים בתעשייה.',
  },
  {
    q: 'ההכשרה מוכרת רשמית?',
    a: 'כן — הקורסים מוכרים ע"י משרד העבודה, וחלקם מקנים גם נקודות זכות במל"ג.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="py-24 bg-gray-50 border-t border-gray-100"
      style={{ backgroundImage: 'radial-gradient(circle, #c7d2e0 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-corp-primary text-sm font-semibold">שאלות נפוצות</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight mt-2">
            עדיין מתלבטים? הנה כמה תשובות
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-right px-5 py-4 min-h-[44px] font-semibold text-corp-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-inset"
                >
                  <span>{item.q}</span>
                  <span
                    className={`flex-shrink-0 text-corp-primary text-xl leading-none transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
