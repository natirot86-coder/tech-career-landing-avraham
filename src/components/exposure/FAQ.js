'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'מה זה בדיוק InTech?',
    a: 'ערוץ החשיפה וההכוונה ללימודים של טק-קריירה ומשרד העבודה, מכוח החלטת ממשלה 3243. מלווה אתכם צעד אחר צעד — מחשיפה ראשונית ועד רישום בפועל ללימודים.',
  },
  {
    q: 'מי זכאי/ת להשתתף?',
    a: 'יוצאי אתיופיה בגילי 18-44, שאינם עובדים כרגע או שמועסקים בשכר הנמוך מהממוצע במשק.',
  },
  {
    q: 'כמה מפגשים יש, ומתי הם מתקיימים?',
    a: 'לפני הכל — מפגש פתיחה והיכרות ב-25.10. אחריו 5 מפגשים, פעמיים בחודש, כ-60-90 דקות בכל פעם החל מ-19:30: סייבר (1.11), רשתות ותקשורת (15.11), בדיקות תוכנה (29.11), פיתוח תוכנה (13.12) ודאטה אנליסט (27.12).',
  },
  {
    q: 'זה עולה כסף, וזה מחייב אותי להמשיך ללימודים?',
    a: 'ההשתתפות בתוכנית בחינם וללא שום התחייבות. ולמי שכן בוחר/ת להמשיך ללימודים אקדמיים — יש גם מסלול מלגות מלא, כולל שכר לימוד, דמי קיום ומחשב נייד.',
  },
  {
    q: 'אני חייב/ת ידע קודם במחשבים כדי להגיע?',
    a: 'ממש לא. InTech בדיוק בנויה למי שמתחיל מאפס מוחלט — כל מפגש נפתח בהסבר פשוט, בלי הנחת ידע קודם.',
  },
  {
    q: 'מה קורה אחרי כל מפגש?',
    a: 'מתקיים מפגש בוגרים פנימי באותו תחום (לא דורש פעולה מצידכם), כדי שתראו גם את הצד המקצועי וגם אדם שכבר עבר את הדרך ומדבר מהניסיון.',
  },
];

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '972XXXXXXXXX';
const WHATSAPP_MESSAGE = 'שלום, יש לי שאלה לגבי תוכנית InTech של טק-קריירה';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-warm-bg border-t border-warm-ink/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-action-blue text-sm font-semibold">שאלות נפוצות</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-warm-ink mt-3 leading-tight">
            עוד לא בטוחים? הנה כמה תשובות
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-warm-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-right px-5 py-4 min-h-[44px] font-bold text-warm-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue focus-visible:ring-inset"
                >
                  <span>{item.q}</span>
                  <span
                    className={`flex-shrink-0 text-action-blue text-xl leading-none transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-warm-ink-soft text-[15px] leading-relaxed border-t border-warm-ink/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-warm-muted text-sm mb-3">עדיין יש לכם שאלה?</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full bg-[#25D366] text-white font-bold px-6 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            תכתבו לנו בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}
