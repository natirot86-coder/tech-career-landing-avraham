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
  {
    quote:
      'טק-קריירה היא הרבה יותר ממוסד לימודי — זו משפחה. לא תמצאו מקום שמעניק מעטפת מקיפה כל כך. כל מה שצריך זה רצון להצליח ונכונות להשקיע.',
    name: 'שרה וונדה',
    title: 'בוגרת קורס תקשורת ענן 2024',
    company: 'Data Center Engineer ב-Amazon',
    avatar: '/images/portrait-sarah.jpg',
  },
];

function Avatar({ t }) {
  if (t.avatar) {
    return (
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200">
        <Image src={t.avatar} alt={t.name} fill className="object-cover object-top" sizes="48px" />
      </div>
    );
  }
  const initial = t.name.trim()[0];
  return (
    <div className="w-12 h-12 rounded-full bg-corp-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
      {initial}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight">הם היו בדיוק איפה שאתם עכשיו</h2>
          <p className="text-gray-500 text-lg mt-2">בוגרים שעשו את הצעד — ולא הסתכלו אחורה</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Avatar t={t} />
                <div>
                  <div className="font-semibold text-corp-secondary leading-snug">{t.name}</div>
                  <div className="text-corp-primary text-xs font-semibold">{t.company}</div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-[15px] flex-1 mb-4">{t.quote}</p>

              <div className="border-t border-gray-100 pt-3">
                <div className="text-gray-400 text-xs leading-snug">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
