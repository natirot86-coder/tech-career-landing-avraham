import Image from 'next/image';

const articles = [
  {
    image: '/images/article-calcalist-juniors.jpg',
    source: 'כלכליסט',
    date: '01.05.2026',
    stat: '1,000 ג\'וניורים',
    statLabel: 'Salesforce מגייסת — הביקוש לצעירים מדור ה-AI חוזר',
    url: 'https://www.calcalist.co.il/calcalistech/article/bjphxyxc11g',
    alt: 'הג\'וניורים חוזרים? לצד פיטורי הענק, בהייטק בונים על צעירי דור ה-AI',
  },
  {
    image: '/images/article-calcalist-salary.jpg',
    source: 'כלכליסט',
    date: '04.05.2026',
    stat: '35,619 ₪',
    statLabel: 'שכר ממוצע בהייטק — פי 2.2 מהממוצע במשק',
    url: 'https://www.calcalist.co.il/local_news/article/syonaji0zx',
    alt: 'השכר הממוצע שבר שיא במרץ: כמעט 16 אלף שקל - אך מספר המשרות צנח ב-8%',
  },
  {
    image: '/images/article-mako.jpg',
    source: 'mako',
    date: '16.04.2026',
    stat: '30K–65K ₪',
    statLabel: 'שכר חודשי למשרות AI חדשות בהייטק',
    url: 'https://www.mako.co.il/nexter-news/Article-91a703652959d91027.htm',
    alt: 'עשרות אלפי שקלים בחודש וביקוש שרק עולה: תפקידי ה-AI החדשים בהייטק',
  },
];

export default function WhyTech() {
  return (
    <section
      className="py-24 bg-gray-50 border-t border-gray-100"
      style={{ backgroundImage: 'radial-gradient(circle, #c7d2e0 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight">למה דווקא הייטק?</h2>
          <p className="text-gray-500 text-lg mt-2">אל תאמינו לנו — תאמינו לעיתונות הכלכלית</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col">
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-500">{a.source}</span>
                <span className="text-xs text-gray-400 font-mono">{a.date}</span>
              </div>

              <div className="px-5 py-4 h-[128px] overflow-hidden">
                <p className="text-corp-primary font-bold text-3xl leading-none tracking-tight">{a.stat}</p>
                <p className="text-corp-secondary/70 text-sm mt-2">{a.statLabel}</p>
              </div>

              <div className="relative h-64 flex-shrink-0 border-t border-gray-100">
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="px-5 py-3 border-t border-gray-100 mt-auto">
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-corp-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary rounded flex items-center gap-1 w-fit"
                >
                  לכתבה המלאה
                  <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          * כתבות שפורסמו בתקשורת הכלכלית הישראלית ב-2026
        </p>
      </div>
    </section>
  );
}
