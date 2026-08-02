import Image from 'next/image';

const testimonials = [
  {
    quote:
      'לאורך עשרת החודשים של למידה מעשירה ומאתגרת, טק-קריירה הייתה עבורי הרבה יותר ממקום לימודים. הצוות המדהים ליווה אותי בכל צעד בדרך, סיפק לי כלים להתמודד עם האתגרים והעניק לי תמיכה בלתי פוסקת.',
    name: 'מדלן טדלה',
    title: 'בוגרת קורס תקשורת ואבטחת מידע 2024',
    company: 'FSE ב-Cognyte',
    avatar: '/images/portrait-madlen.jpg',
  },
  {
    quote:
      'טק-קריירה נתנו לי את הכלים להאמין בעצמי מחדש, לבנות רשת חברתית-מקצועית ולהגשים חלום — להשתלב בהייטק. אני גאה להיות חלק מהקהילה המדהימה שטק-קריירה יצרה.',
    name: 'שואנש אבבה',
    title: 'בוגרת קורס פיתוח 2020',
    company: 'מהנדסת תוכנה ב-AT&T',
    avatar: '/images/portrait-shawanesh.jpg',
  },
  {
    quote:
      'ההכשרה בטק-קריירה הייתה עבורי נקודת מפנה משמעותית. היא אפשרה לי להשתלב בתעשייה בצורה חלקה ומוצלחת. ממליץ מכל הלב לכל מי שמתלבט.',
    name: 'רועי מקונן',
    title: 'בוגר קורס פיתוח 2022',
    company: 'מפתח תוכנה ב-Boutique Tech Studios',
    avatar: '/images/portrait-roi.jpg',
  },
];

function InitialsBg({ name }) {
  const parts = name.split(' ');
  const initials = parts.map((p) => p[0]).join('').slice(0, 2);
  return (
    <div className="h-full w-full bg-brand-orange flex items-center justify-center">
      <span className="text-white font-bold text-7xl select-none">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">הם היו בדיוק איפה שאתם עכשיו</h2>
          <p className="text-brand-gray-mid text-lg">
            בוגרים שעשו את הצעד — ולא הסתכלו אחורה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-0 overflow-hidden flex flex-col">
              {/* Large avatar — top portion of card */}
              <div className="relative h-60 flex-shrink-0">
                {t.avatar ? (
                  <>
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Fade into white */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                  </>
                ) : (
                  <InitialsBg name={t.name} />
                )}
              </div>

              {/* Quote + info */}
              <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                <div className="text-brand-orange text-5xl font-serif leading-none mb-3 select-none">
                  "
                </div>
                <p className="text-brand-navy/80 leading-relaxed text-[15px] flex-1 mb-5">
                  {t.quote}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-brand-navy text-lg">{t.name}</div>
                  <div className="text-brand-gray-mid text-xs leading-snug mt-0.5">
                    {t.title}
                  </div>
                  <div className="text-brand-orange text-xs font-semibold mt-1">
                    {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
