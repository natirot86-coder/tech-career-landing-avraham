import Image from 'next/image';

const features = [
  {
    title: 'הכשרה מעשית',
    desc: 'קורסים של 6-8 חודשים עם כ-2,000 שעות הכשרה, יד ביד עם חברות מובילות',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'מעטפת ליווי מלאה',
    desc: 'מנטורים, הכנה לראיונות, קורסי אנגלית, סדנאות קריירה ועוד',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'עלות סמלית',
    desc: 'רק 2,000 ₪ לכל הקורס — ההשקעה הכי משתלמת בעתיד שלכם',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight mb-4">
              טק-קריירה — הדרך הכי מדויקת להיכנס להייטק
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              כבר 22 שנה שאנחנו מאתרים צעירים מצטיינים ומכשירים אותם לתפקידי מפתח
              בחברות ההייטק המובילות. ההכשרות שלנו מעשיות, אינטנסיביות, ומותאמות
              לצרכים של השוק — כדי שתגיעו מוכנים ליום הראשון בעבודה.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-corp-primary/10 text-corp-primary flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-corp-secondary text-lg mb-1">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200">
            <Image
              src="/images/students-class.jpg"
              alt="בוגרי טק-קריירה"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
