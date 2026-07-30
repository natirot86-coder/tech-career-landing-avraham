'use client';

const LocationIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const courses = [
  {
    name: 'Cyber-Network Analyst',
    subtitle: 'תקשורת + אבטחה',
    desc: 'קורס פרקטי בתחום אבטחת המידע, זיהוי פרצות ואבטחתן עם מערכות AI',
    location: 'לוד',
    duration: '6 חודשים',
    startDate: '9 באוגוסט 2026',
    format: 'היברידי',
    formatColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'QA Automation',
    subtitle: 'היברידי צפון',
    desc: 'הכשרת QA בשילוב אוטומציה ו-AI — ללא רקע קודם',
    location: 'חיפה',
    duration: '6 חודשים',
    startDate: '25 בינואר 2026',
    format: 'היברידי',
    formatColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'קורס סייבר',
    subtitle: 'פנימייה',
    desc: 'קורס בתנאי פנימייה לאנשים ללא רקע או ניסיון',
    location: 'לוד',
    duration: '8 חודשים',
    startDate: '1 במרץ 2026',
    format: 'פנימייה',
    formatColor: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Cloud-Network Engineer',
    subtitle: 'סיסקו + ענן',
    desc: 'הכשרה ביסודות אבטחת הענן עם שפה תכנותית וכלי AI',
    location: 'לוד',
    duration: null,
    startDate: '12 ביולי 2026',
    format: 'היברידי',
    formatColor: 'bg-blue-100 text-blue-700',
  },
];

export default function Courses() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">הקורסים שנפתחים בקרוב</h2>
          <p className="text-brand-gray-mid text-lg">
            כל הקורסים כוללים הכשרה מלאה, ליווי אישי, ועזרה בהשמה
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {courses.map((course, i) => (
            <div key={i} className="card flex flex-col">
              <div className="mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${course.formatColor}`}>
                  {course.format}
                </span>
              </div>

              <h3 className="font-extrabold text-brand-navy text-xl leading-tight mb-1">
                {course.name}
              </h3>
              <p className="text-brand-orange font-semibold text-sm mb-3">
                {course.subtitle}
              </p>
              <p className="text-brand-gray-mid text-sm leading-relaxed flex-1 mb-5">
                {course.desc}
              </p>

              <div className="space-y-2 text-sm text-brand-gray-mid border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2">
                  <LocationIcon />
                  <span>{course.location}</span>
                </div>
                {course.duration && (
                  <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span>{course.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <span>פתיחה {course.startDate}</span>
                </div>
              </div>

              <button
                onClick={scrollToForm}
                className="mt-5 w-full text-center btn-outline text-sm py-2.5"
              >
                רוצה לשמוע עוד
              </button>
            </div>
          ))}
        </div>

        {/* Not found CTA */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
          <p className="text-brand-navy font-semibold text-lg mb-4">
            לא מצאתם קורס מתאים? נעזור לכם למצוא את המסלול הנכון.
          </p>
          <button onClick={scrollToForm} className="btn-primary">
            השאירו פרטים
          </button>
        </div>
      </div>
    </section>
  );
}
