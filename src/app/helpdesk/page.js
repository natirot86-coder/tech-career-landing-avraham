import Link from 'next/link';

export const metadata = {
  title: 'תבניות דף נחיתה — Help Desk | טק-קריירה',
  robots: { index: false },
};

const TEMPLATES = [
  {
    href: '/helpdesk/aurora',
    name: 'Aurora',
    desc: 'כהה, זכוכית מטושטשת, רשת צבעים נעה, גבולות מסתובבים וגרדיאנט חי.',
    preview: 'bg-[#07071a]',
    accent: 'from-[#ff7a45] via-[#ff3d8b] to-[#7c3aed]',
  },
  {
    href: '/helpdesk/bento',
    name: 'Bento',
    desc: 'בהיר ועריכתי, רשת Bento, פיד קריאות חי, תאורה שעוקבת אחרי העכבר.',
    preview: 'bg-[#f6f4f0]',
    accent: 'from-[#E84C1E] to-[#1A2340]',
  },
  {
    href: '/helpdesk/terminal',
    name: 'Terminal',
    desc: 'אווירת טרמינל, ירוק ניאון, טקסט מוקלד, קווי סריקה ורשת זוהרת.',
    preview: 'bg-[#050a12]',
    accent: 'from-emerald-300 to-emerald-600',
  },
];

export default function HelpDeskTemplates() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black">תבניות לדף נחיתה — קורס Help Desk</h1>
        <p className="mt-3 text-white/60 text-lg">3 עיצובים, אותו תוכן ואותו טופס לידים (Monday.com). לחצו לצפייה.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TEMPLATES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition hover:-translate-y-1 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className={`relative h-44 ${t.preview} overflow-hidden`}>
                <div className={`absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-70 bg-gradient-to-br ${t.accent} transition duration-700 group-hover:scale-125`} />
                <div className="absolute bottom-5 right-5 left-5 space-y-2">
                  <div className={`h-3 w-2/3 rounded-full bg-gradient-to-l ${t.accent}`} />
                  <div className="h-2 w-1/2 rounded-full bg-current opacity-20" />
                  <div className={`mt-3 h-8 w-28 rounded-lg bg-gradient-to-l ${t.accent}`} />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black" dir="ltr">{t.name}</h2>
                <p className="mt-2 text-white/60">{t.desc}</p>
                <span className="mt-4 inline-block font-bold text-sm text-white/80 group-hover:text-white">לצפייה ←</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-sm text-white/40">את התוכן עורכים בקובץ אחד: src/components/helpdesk/content.js</p>
      </div>
    </main>
  );
}
