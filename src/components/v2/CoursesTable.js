'use client';

import Image from 'next/image';

const courses = [
  {
    name: 'תקשורת + ענן',
    sub: 'רשתות, תשתיות וענן היברידי',
    city: 'לוד',
    format: 'היברידי',
    days: 'א׳ · ג׳ 17:00–21:00',
    daysExtra: 'ו׳ (אחת לשבועיים) 9:00–13:00',
    start: '25 באוגוסט 2026',
    partner: null,
  },
  {
    name: 'תקשורת סייבר',
    sub: 'אבטחת מידע, CCNA וזיהוי איומים',
    city: 'לוד',
    format: 'היברידי',
    days: 'ב׳ · ד׳ 17:00–21:00',
    daysExtra: 'ו׳ 9:00–13:00',
    start: '14 בספטמבר 2026',
    partner: null,
  },
];

export default function CoursesTable() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="py-24 bg-gray-50 border-t border-gray-100"
      id="courses"
      style={{ backgroundImage: 'radial-gradient(circle, #c7d2e0 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <span className="text-corp-primary text-sm font-semibold">מחזורי 2026</span>
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight mt-2">הקורסים הקרובים</h2>
          <p className="text-gray-500 text-lg mt-2">
            מסלולים היברידיים בפריסה ארצית, בשעות הערב. כל קורס נבנה יחד עם התעשייה ומוביל להשמה אמיתית.
          </p>
        </div>

        {/* Table — desktop */}
        <div className="hidden md:block rounded-xl border border-gray-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-corp-secondary text-white">
                <th className="text-right font-semibold px-4 py-3.5">הקורס</th>
                <th className="text-right font-semibold px-4 py-3.5">עיר</th>
                <th className="text-right font-semibold px-4 py-3.5">מתכונת</th>
                <th className="text-right font-semibold px-4 py-3.5">ימים ושעות</th>
                <th className="text-right font-semibold px-4 py-3.5">פתיחה</th>
                <th className="text-right font-semibold px-4 py-3.5">שותפה מובילה</th>
                <th className="px-4 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 align-middle">
                  <td className="px-4 py-4">
                    <div className="font-semibold text-corp-secondary">{c.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{c.sub}</div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-corp-secondary whitespace-nowrap">{c.city}</td>
                  <td className="px-4 py-4">
                    <span className="inline-block bg-corp-primary/10 text-corp-primary font-semibold text-xs px-2.5 py-1 rounded-md">
                      {c.format}
                    </span>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="font-semibold text-corp-secondary">{c.days}</div>
                    <div className="text-xs text-gray-500">{c.daysExtra}</div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-corp-secondary whitespace-nowrap">{c.start}</td>
                  <td className="px-4 py-4">
                    {c.partner ? (
                      <Image src={c.partner.src} alt={c.partner.alt} width={90} height={30} className="h-7 w-auto object-contain" />
                    ) : (
                      <span className="text-gray-300 text-xs">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={scrollToForm}
                      className="inline-flex items-center justify-center min-h-[36px] rounded-lg bg-corp-primary text-white font-semibold text-xs px-4 hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-colors whitespace-nowrap"
                    >
                      להרשמה
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — mobile */}
        <div className="md:hidden flex flex-col gap-4">
          {courses.map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="font-semibold text-corp-secondary text-lg">{c.name}</h4>
              <p className="text-xs text-gray-500 mb-3">{c.sub}</p>
              <div className="space-y-1.5 text-sm border-t border-gray-100 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">עיר</span>
                  <span className="font-semibold text-corp-secondary">{c.city}</span>
                </div>
                <div className="flex flex-col gap-1 py-0.5">
                  <span className="text-gray-500">ימים ושעות</span>
                  <span className="font-semibold text-corp-secondary leading-snug">{c.days}</span>
                  <span className="font-semibold text-corp-secondary leading-snug">{c.daysExtra}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">פתיחה</span>
                  <span className="font-semibold text-corp-secondary">{c.start}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                {c.partner ? (
                  <Image src={c.partner.src} alt={c.partner.alt} width={90} height={30} className="h-6 w-auto object-contain" />
                ) : (
                  <span className="inline-block bg-corp-primary/10 text-corp-primary font-semibold text-xs px-2.5 py-1 rounded-md">
                    {c.format}
                  </span>
                )}
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center min-h-[40px] rounded-lg bg-corp-primary text-white font-semibold text-sm px-5 hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-colors"
                >
                  להרשמה
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          <strong className="text-corp-secondary">כל המסלולים מוכרים ע&quot;י משרד העבודה וכנקודות זכות במל&quot;ג</strong>, וכוללים ליווי אישי עד להשמה.
        </p>
      </div>
    </section>
  );
}
