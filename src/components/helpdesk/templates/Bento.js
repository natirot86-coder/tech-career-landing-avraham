import Image from 'next/image';
import { course, facts, tools, syllabus, benefits, careers, audience, testimonials } from '../content';
import LeadForm from '../LeadForm';
import Reveal from '../Reveal';
import Counter from '../Counter';
import Countdown from '../Countdown';
import FAQ from '../FAQ';
import Icon from '../Icon';
import Spotlight from '../Spotlight';
import TicketFeed from '../TicketFeed';
import WhatsAppButton from '@/components/WhatsAppButton';

/** Template 2 — "Bento": light editorial bento grid, brand orange/navy, spotlight hover cards. */

const Cta = ({ children = course.cta, href = '#form', dark = false, className = '' }) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-xl font-black text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E84C1E] ${
      dark ? 'bg-[#1A2340] text-white hover:bg-black' : 'bg-[#E84C1E] text-white hover:bg-[#C73E17] shadow-lg shadow-[#E84C1E]/30'
    } ${className}`}
  >
    {children}
    <Icon name="arrow" className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
  </a>
);

const Tag = ({ children }) => (
  <span className="inline-block rounded-full bg-[#E84C1E]/10 text-[#C73E17] text-sm font-bold px-3.5 py-1">{children}</span>
);

export default function Bento() {
  return (
    <div className="hd-bento min-h-screen overflow-x-clip">
      <div className="hd-progress bg-[#E84C1E]" />

      <header className="sticky top-0 z-50 bg-[#f6f4f0]/80 backdrop-blur-xl border-b border-slate-200/70">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Image src="/images/logo.png" alt="טק-קריירה" width={110} height={34} className="h-8 w-auto" />
          <div className="hidden md:flex gap-7 text-sm font-bold text-slate-600">
            <a href="#syllabus" className="hover:text-[#E84C1E]">מה לומדים</a>
            <a href="#careers" className="hover:text-[#E84C1E]">קריירה</a>
            <a href="#faq" className="hover:text-[#E84C1E]">שאלות</a>
          </div>
          <a href="#form" className="rounded-lg bg-[#1A2340] text-white px-4 h-10 inline-flex items-center font-bold text-sm hover:bg-black">להרשמה</a>
        </nav>
      </header>

      <main>
        {/* Bento hero */}
        <section className="hd-dots">
          <div className="max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-16 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            <Reveal className="md:col-span-4 lg:col-span-8 bg-white rounded-[28px] p-8 md:p-12 border border-slate-200 flex flex-col justify-between">
              <div>
                <Tag>{course.startDateLabel}</Tag>
                <h1 className="mt-6 text-5xl md:text-[76px] font-black leading-[0.98] tracking-tight text-[#1A2340]">
                  {course.headline.split('—')[0]}—<br />
                  <span className="hd-underline">{course.headline.split('—')[1]}</span>
                </h1>
                <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">{course.sub}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta />
                <Cta href="#syllabus" dark>{course.ctaSecondary}</Cta>
              </div>
            </Reveal>

            <Reveal delay={100} className="md:col-span-2 lg:col-span-4 bg-[#1A2340] rounded-[28px] p-6 text-white flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <span className="font-black flex items-center gap-2">
                  <Icon name="headset" className="w-5 h-5 text-[#E84C1E]" /> תור הקריאות שלך
                </span>
                <span className="text-xs text-white/50 font-mono">LIVE</span>
              </div>
              <TicketFeed />
              <p className="mt-auto pt-5 text-sm text-white/60">ככה ייראה יום עבודה — ואת/ה תדע/י לפתור כל אחד מהם.</p>
            </Reveal>

            {facts.map((f, i) => (
              <Reveal
                key={f.label}
                delay={150 + i * 80}
                className={`md:col-span-3 rounded-[24px] p-6 border ${
                  i === 2 ? 'bg-[#E84C1E] text-white border-transparent' : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-5xl font-black tabular-nums">
                  {f.count ? <Counter to={f.value} /> : f.value}
                  <span className="text-xl font-bold mr-1">{f.unit}</span>
                </div>
                <div className={`mt-1 text-sm font-bold ${i === 2 ? 'text-white/80' : 'text-slate-500'}`}>{f.label}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tools marquee */}
        <section className="hd-marquee-wrap bg-[#1A2340] py-5 overflow-hidden -rotate-1 scale-[1.02]" aria-label="כלים שלומדים">
          <div className="hd-marquee">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="mx-6 whitespace-nowrap text-2xl font-black text-white/90">
                {t} <span className="text-[#E84C1E] mx-4">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* Benefits bento */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-24">
          <Reveal className="mb-12 max-w-2xl">
            <Tag>למה Help Desk</Tag>
            <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">הכניסה הכי חכמה <span className="text-[#E84C1E]">לתעשייה.</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 100}>
                <Spotlight className="h-full bg-white rounded-[24px] p-7 border border-slate-200">
                  <div className="w-12 h-12 rounded-xl bg-[#E84C1E]/10 text-[#E84C1E] grid place-items-center">
                    <Icon name={b.icon} />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{b.title}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{b.text}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Syllabus — horizontal scroll-snap cards */}
        <section id="syllabus" className="bg-white border-y border-slate-200 py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <Tag>הסילבוס</Tag>
                <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">6 שלבים למקצוע</h2>
              </div>
              <p className="text-slate-500">גללו לצד ←</p>
            </Reveal>
          </div>
          <ol className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] pb-4 scrollbar-hide">
            {syllabus.map((s, i) => (
              <li key={s.n} className="hd-scroll-in snap-start shrink-0 w-[82%] sm:w-[360px]">
                <Spotlight className={`h-full rounded-[24px] p-7 border ${i % 2 ? 'bg-[#f6f4f0] border-slate-200' : 'bg-[#1A2340] text-white border-transparent'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-6xl font-black text-[#E84C1E]`} dir="ltr">{s.n}</span>
                    <span className={`text-xs font-bold rounded-full px-3 py-1 ${i % 2 ? 'bg-white' : 'bg-white/10'}`}>{s.weeks}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-black">{s.title}</h3>
                  <p className={`mt-2 leading-relaxed ${i % 2 ? 'text-slate-600' : 'text-white/70'}`}>{s.text}</p>
                </Spotlight>
              </li>
            ))}
          </ol>
        </section>

        {/* Careers + audience */}
        <section id="careers" className="max-w-6xl mx-auto px-4 md:px-6 py-24 grid lg:grid-cols-5 gap-4 scroll-mt-16">
          <Reveal className="lg:col-span-3 bg-white rounded-[28px] p-8 border border-slate-200">
            <Tag>מסלול צמיחה</Tag>
            <h2 className="mt-4 text-3xl md:text-4xl font-black">מ-Help Desk לאן שתרצו</h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 items-end">
              {careers.map((c, i) => (
                <div key={c.role} className="flex flex-col">
                  <div
                    className="hd-scroll-in rounded-2xl bg-gradient-to-t from-[#E84C1E] to-[#ff8a5c] text-white p-3 flex items-end font-black text-sm"
                    style={{ height: `${90 + i * 45}px` }}
                  >
                    {c.salary}
                  </div>
                  <span className="mt-2 text-xs font-bold text-slate-600" dir="ltr">{c.role}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">* טווחי שכר מוערכים לדוגמה</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2 bg-[#E84C1E] text-white rounded-[28px] p-8">
            <h2 className="text-3xl font-black">זה בשבילך אם...</h2>
            <ul className="mt-6 space-y-4">
              {audience.map((a) => (
                <li key={a} className="flex gap-3 text-lg font-bold">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-white text-[#E84C1E] grid place-items-center">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">
          <Reveal className="mb-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">בוגרים <span className="text-[#E84C1E]">מספרים</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.img} delay={i * 100}>
                <Spotlight className="h-full bg-white rounded-[24px] border border-slate-200 overflow-hidden">
                  <div className="relative h-56">
                    <Image src={t.img} alt={t.name} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover object-top transition duration-700 hover:scale-105" />
                  </div>
                  <figure className="p-6">
                    <blockquote className="text-lg leading-relaxed">״{t.quote}״</blockquote>
                    <figcaption className="mt-4 font-black">
                      {t.name} <span className="block text-sm font-bold text-slate-500" dir="ltr">{t.role}</span>
                    </figcaption>
                  </figure>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Form + countdown + FAQ */}
        <section id="form" className="bg-[#1A2340] text-white py-24 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <span className="inline-block rounded-full bg-white/10 text-sm font-bold px-3.5 py-1">נותרו {course.spotsLeft} מקומות</span>
              <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">שומרים לך מקום<span className="text-[#E84C1E]">.</span></h2>
              <p className="mt-4 text-white/70 text-lg">השאירו פרטים — יועץ/ת לימודים יחזרו אליכם לשיחת התאמה קצרה.</p>
              <div className="mt-8">
                <Countdown
                  target={course.startDate}
                  cell="bg-white/10 rounded-xl w-[72px] md:w-20 py-3 text-center"
                  num="text-3xl font-black"
                  lbl="text-xs text-white/60"
                />
              </div>
              <div className="mt-8 h-3 rounded-full bg-white/10 overflow-hidden" role="img" aria-label={`${course.spotsTotal - course.spotsLeft} מתוך ${course.spotsTotal} מקומות נתפסו`}>
                <div className="h-full bg-[#E84C1E] rounded-full" style={{ width: `${((course.spotsTotal - course.spotsLeft) / course.spotsTotal) * 100}%` }} />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <LeadForm theme="bento" idPrefix="hd-b" />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="max-w-3xl mx-auto px-4 md:px-6 py-24 scroll-mt-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-center">שאלות נפוצות</h2>
            <FAQ
              item="bg-white rounded-2xl px-6 border border-slate-200"
              q="text-lg font-black py-2 focus-visible:ring-[#E84C1E]"
              a="text-slate-600 leading-relaxed"
              icon="text-[#E84C1E]"
            />
          </Reveal>
          <div className="mt-12 text-center"><Cta /></div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 pb-28 md:pb-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} טק-קריירה · <a href="mailto:sara@tech-career.org" className="hover:text-[#E84C1E]">sara@tech-career.org</a>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/90 backdrop-blur border-t border-slate-200">
        <Cta className="w-full" />
      </div>
      <WhatsAppButton />
    </div>
  );
}
