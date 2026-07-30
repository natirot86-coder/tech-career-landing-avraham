import Image from 'next/image';

const testimonials = [
  {
    quote:
      'לאורך עשרת החודשים של למידה מעשירה ומאתגרת, טק-קריירה הייתה עבורי הרבה יותר ממקום לימודים. הצוות המדהים ליווה אותי בכל צעד בדרך, סיפק לי כלים להתמודד עם האתגרים והעניק לי תמיכה בלתי פוסקת.',
    name: 'מדלן טדלה',
    title: 'בוגרת קורס תקשורת ואבטחת מידע 2024',
    company: 'FSE ב-Cognyte',
    avatar: '/images/portrait-2.jpg',
  },
  {
    quote:
      'טק-קריירה נתנו לי את הכלים להאמין בעצמי מחדש, לבנות רשת חברתית-מקצועית ולהגשים חלום — להשתלב בהייטק. אני גאה להיות חלק מהקהילה המדהימה שטק-קריירה יצרה.',
    name: 'שואנש אבבה',
    title: 'בוגרת קורס פיתוח 2020',
    company: 'מהנדסת תוכנה ב-AT&T',
    avatar: null,
  },
  {
    quote:
      'ההכשרה בטק-קריירה הייתה עבורי נקודת מפנה משמעותית. היא אפשרה לי להשתלב בתעשייה בצורה חלקה ומוצלחת. ממליץ מכל הלב לכל מי שמתלבט.',
    name: 'רועי מקונן',
    title: 'בוגר קורס פיתוח 2022',
    company: 'מפתח תוכנה ב-Boutique Tech Studios',
    avatar: '/images/portrait-1.jpg',
  },
];

function Initials({ name }) {
  const parts = name.split(' ');
  const initials = parts.map((p) => p[0]).join('').slice(0, 2);
  return (
    <div className="w-20 h-20 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 ring-4 ring-brand-orange/20">
      {initials}
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
            <div key={i} className="card flex flex-col">
              {/* Quote mark */}
              <div className="text-brand-orange text-5xl font-serif leading-none mb-4 select-none">"</div>

              <p className="text-brand-navy/80 leading-relaxed text-[15px] flex-1 mb-6">
                {t.quote}
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-5">
                {t.avatar ? (
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-brand-orange/20">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <Initials name={t.name} />
                )}
                <div>
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
