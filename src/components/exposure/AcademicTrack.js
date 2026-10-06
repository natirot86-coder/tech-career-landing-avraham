import Image from 'next/image';
import Reveal from './Reveal';

const features = [
  {
    tag: 'שותפות הדגל הכלכלית',
    tagColor: 'bg-brand-orange',
    title: 'קרן מייקל וסוזן דל',
    logo: '/images/partners/dell-foundation.png',
    desc: 'שותפות חדשה ויוקרתית שמעניקה מימון מלא לשכר לימוד (כולל מכינה/קדם-מכינה), דמי קיום חודשיים, מחשב נייד וליווי אישי צמוד במוסד הלימודים.',
    featured: true,
  },
  {
    tag: 'קרן מלגות',
    tagColor: 'bg-action-blue',
    title: 'ISEF אייסף — קרן המלגות הבינלאומית לחינוך',
    logo: '/images/partners/isef.png',
    desc: 'שותפות נוספת עם אחת מקרנות המלגות הוותיקות בישראל, שמסייעת לפרוץ את המחסום הכלכלי של לימודים אקדמיים.',
  },
  {
    tag: 'קרן מלגות',
    tagColor: 'bg-action-blue',
    title: 'קרן אדמונד דה רוטשילד (רוטשילד־קיסריה)',
    logo: '/images/partners/rothschild.svg',
    desc: 'שותפות נוספת עם קרן ותיקה שמקדמת השכלה גבוהה ושוויון הזדמנויות באקדמיה בישראל.',
  },
  {
    tag: 'מסלולים ירוקים',
    tagColor: 'bg-warm-ink',
    title: 'טכניון · בן-גוריון · בר-אילן · האוניברסיטה העברית',
    desc: 'חיבור ליועצ.ת יוצאי אתיופיה במוסדות הלימוד: "מסלולים ירוקים" מול מכינות של מוסדות מובילים, ותפקיד ייעודי (מנהל/ת תחום אקדמיה) שמתמקד רק בפריצת החסמים הללו. מסלול רישום מהיר ומקוצר מול מכינות של 4 מוסדות אקדמיים מובילים המציעים קדם-מכינות ומכינות מובנות, עם הרחבה ל-8 מוסדות בשלב התואר — כולל סמי שמעון, אוניברסיטת חיפה ואריאל.',
  },
  {
    tag: 'שותפות תעשייה',
    tagColor: 'bg-action-blue',
    title: 'וובינרים דו-חודשיים עם Accenture',
    desc: 'וובינרים דו חודשיים על התפקידים השונים, מסלולים ומסלולי אקדמיה בהובלת חברת אקסנצ׳ר, שבהם ילמדו המשתתפים על עבודת המחלקות השונות בחברה ועל תחומי האחריות של כל בעל תפקיד, לצד סיור במשרדי החברה.',
  },
];

export default function AcademicTrack() {
  return (
    <section className="py-24 bg-warm-card border-t border-warm-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-brand-orange text-sm font-bold">מסלול אקדמיה</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl text-warm-ink mt-3 leading-tight">
            לא רק חשיפה — גם הסרת המכשולים בפועל
          </h2>
          <p className="text-warm-ink-soft text-[15px] leading-relaxed mt-4">
            הדגש על לימודים אקדמיים הוא אתגר מרכזי בתוכנית, ומהווה חלק ניכר מהיעד הכולל (כ-35% מהנרשמים, לפי החלוקה
            הפנימית שנקבעה).
          </p>
          <p className="text-warm-ink-soft text-[15px] leading-relaxed mt-3">
            מרבית הצעירים והצעירות בקהילה הם דור ראשון להשכלה גבוהה, ומתמודדים עם חסמים כלכליים ואישיים משמעותיים
            בדרך לאקדמיה — לכן התוכנית בונה נתיב ייעודי לכך:
          </p>
          <p className="text-warm-ink-soft text-[15px] leading-relaxed mt-3">
            שותפות עם מספר קרנות מלגות (ביניהן ISEF ורוטשילד), ובראשן קרן דל — שותפות חדשה ויוקרתית במיוחד, המעניקה
            מימון מלא לשכר לימוד (כולל תקופת מכינה/קדם-מכינה), דמי קיום חודשיים, מחשב נייד וליווי אישי צמוד במוסד
            הלימודים.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className={f.featured ? 'sm:col-span-2' : ''}>
              <div
                className={`h-full rounded-3xl p-7 flex flex-col ${
                  f.featured ? 'bg-brand-orange text-white' : 'bg-warm-bg text-warm-ink'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center text-white text-xs font-bold px-3 py-1 rounded-full ${
                      f.featured ? 'bg-black/15' : f.tagColor
                    }`}
                  >
                    {f.tag}
                  </span>
                  {f.logo &&
                    (f.featured ? (
                      <div className="rounded-lg px-2.5 py-1.5 bg-white/90">
                        <Image src={f.logo} alt={f.title} width={120} height={48} className="h-6 w-auto object-contain" />
                      </div>
                    ) : (
                      <Image src={f.logo} alt={f.title} width={120} height={48} className="h-6 w-auto object-contain" />
                    ))}
                </div>
                <h3 className="font-display font-black text-lg leading-snug mb-2">{f.title}</h3>
                <p className={`text-[15px] leading-relaxed ${f.featured ? 'text-white/90' : 'text-warm-ink-soft'}`}>
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
