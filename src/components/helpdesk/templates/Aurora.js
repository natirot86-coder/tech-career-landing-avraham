import Image from 'next/image';
import { course, facts, tools, syllabus, benefits, careers, audience, testimonials } from '../content';
import LeadForm from '../LeadForm';
import Reveal from '../Reveal';
import Counter from '../Counter';
import Countdown from '../Countdown';
import FAQ from '../FAQ';
import Icon from '../Icon';
import WhatsAppButton from '@/components/WhatsAppButton';

/** Template 1 — "Aurora": dark glassmorphism, animated gradient mesh, conic borders. */

function Mesh() {
  return (
    <div className="hd-mesh" aria-hidden="true">
      <div className="hd-blob w-[520px] h-[520px] bg-[#ff3d8b] -top-40 -right-32" />
      <div className="hd-blob w-[600px] h-[600px] bg-[#7c3aed] top-40 -left-48" style={{ animationDelay: '-6s' }} />
      <div className="hd-blob w-[440px] h-[440px] bg-[#ff7a45] bottom-0 right-1/3" style={{ animationDelay: '-12s' }} />
      <div className="hd-blob w-[380px] h-[380px] bg-[#0ea5e9] top-1/3 right-1/4 opacity-30" style={{ animationDelay: '-3s' }} />
    </div>
  );
}

const Eyebrow = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-bold text-white/80 backdrop-blur">
    <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d8b]" />
    {children}
  </span>
);

const Cta = ({ children = course.cta, href = '#form', ghost = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-2xl font-black text-lg transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
      ghost ? 'border border-white/20 bg-white/5 text-white hover:bg-white/10' : 'hd-btn-aurora text-white'
    }`}
  >
    {children}
    {!ghost && <Icon name="arrow" className="w-5 h-5" />}
  </a>
);

export default function Aurora() {
  return (
    <div className="hd-aurora min-h-screen overflow-x-clip">
      <div className="hd-progress bg-gradient-to-l from-[#ff7a45] via-[#ff3d8b] to-[#38bdf8]" />

      {/* Nav */}
      <header className="fixed top-3 inset-x-3 md:inset-x-6 z-50">
        <nav className="hd-glass mx-auto max-w-6xl rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-black">
            <span className="bg-white rounded-lg p-1">
              <Image src="/images/logo.png" alt="טק-קריירה" width={88} height={28} className="h-7 w-auto" />
            </span>
            <span className="hidden sm:inline text-white/70 text-sm">Help Desk</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a href="#syllabus" className="hover:text-white">סילבוס</a>
            <a href="#careers" className="hover:text-white">קריירה</a>
            <a href="#faq" className="hover:text-white">שאלות</a>
          </div>
          <a href="#form" className="hd-btn-aurora rounded-xl px-4 h-10 inline-flex items-center font-bold text-sm">להרשמה</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative hd-grain pt-32 pb-20 md:pt-40 md:pb-28">
          <Mesh />
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
            <div>
              <Reveal><Eyebrow>{course.startDateLabel}</Eyebrow></Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[1.02] tracking-tight">
                  {course.tagline.split(' ').slice(0, 2).join(' ')}{' '}
                  <span className="hd-gradient-text">{course.tagline.split(' ').slice(2).join(' ')}</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed">{course.sub}</p>
              </Reveal>
              <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
                <Cta />
                <Cta href="#syllabus" ghost>{course.ctaSecondary}</Cta>
              </Reveal>
              <Reveal delay={400} className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3 space-x-reverse">
                  {testimonials.map((t) => (
                    <Image key={t.img} src={t.img} alt="" width={44} height={44} className="w-11 h-11 rounded-full object-cover ring-2 ring-[#07071a]" />
                  ))}
                </div>
                <p className="text-sm text-white/60">
                  <b className="text-white">מאות בוגרים</b> כבר עובדים בהייטק
                </p>
              </Reveal>
            </div>
            <Reveal delay={250} id="form-hero">
              <div className="hd-conic rounded-[28px]">
                <LeadForm theme="aurora" idPrefix="hd-a-top" title="בדיקת התאמה — בחינם" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Tools marquee */}
        <section className="hd-marquee-wrap border-y border-white/10 bg-white/[.02] py-6 overflow-hidden" aria-label="כלים שלומדים">
          <div className="hd-marquee gap-4">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="mx-2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 font-bold text-white/80">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Facts */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 100} className="hd-glass rounded-3xl p-6 text-center">
              <div className="text-5xl md:text-6xl font-black hd-gradient-text">
                {f.count ? <Counter to={f.value} /> : f.value}
                <span className="text-2xl">{f.unit.length < 3 ? f.unit : ''}</span>
              </div>
              <div className="mt-2 text-white/60 text-sm">{f.unit.length >= 3 ? `${f.unit} · ` : ''}{f.label}</div>
            </Reveal>
          ))}
        </section>

        {/* Benefits */}
        <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <Eyebrow>למה דווקא Help Desk?</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-black">כל מה שצריך כדי <span className="hd-gradient-text">להיכנס ולהישאר</span></h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 120}>
                <div className="group hd-glass h-full rounded-3xl p-7 transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-[#ff7a45] to-[#a855f7] shadow-lg shadow-fuchsia-500/30 transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon name={b.icon} />
                  </div>
                  <h3 className="mt-5 text-xl font-black">{b.title}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Syllabus timeline */}
        <section id="syllabus" className="max-w-4xl mx-auto px-4 md:px-6 py-20 scroll-mt-24">
          <Reveal className="text-center mb-14">
            <Eyebrow>סילבוס</Eyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-black">16 שבועות. 6 שלבים. <span className="hd-gradient-text">מקצוע אחד.</span></h2>
          </Reveal>
          <ol className="relative border-r border-white/15 pr-8 md:pr-12 space-y-6">
            {syllabus.map((s) => (
              <li key={s.n} className="hd-scroll-in relative">
                <span className="absolute -right-[42px] md:-right-[58px] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-[#ff7a45] to-[#a855f7] ring-4 ring-[#07071a]" />
                <div className="hd-glass rounded-3xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4">
                  <span className="text-5xl font-black text-white/15 tabular-nums" dir="ltr">{s.n}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-black">{s.title}</h3>
                    <p className="mt-1 text-white/60">{s.text}</p>
                  </div>
                  <span className="text-xs font-bold rounded-full bg-white/10 px-3 py-1 text-white/70 self-start md:self-center">{s.weeks}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Careers + audience */}
        <section id="careers" className="max-w-6xl mx-auto px-4 md:px-6 py-20 grid lg:grid-cols-2 gap-6 scroll-mt-24">
          <Reveal className="hd-glass rounded-[32px] p-8">
            <h2 className="text-3xl font-black">מסלול הקריירה שלך</h2>
            <p className="text-white/60 mt-2">שכר ממוצע מוערך לפי תפקיד (נתון לדוגמה)</p>
            <ul className="mt-8 space-y-4">
              {careers.map((c, i) => (
                <li key={c.role}>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span dir="ltr">{c.role}</span>
                    <span className="text-white/70">{c.salary}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="hd-scroll-in h-full rounded-full bg-gradient-to-l from-[#ff7a45] via-[#ff3d8b] to-[#a855f7]" style={{ width: `${40 + i * 20}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="hd-glass rounded-[32px] p-8">
            <h2 className="text-3xl font-black">הקורס מתאים לך אם...</h2>
            <ul className="mt-8 space-y-4">
              {audience.map((a) => (
                <li key={a} className="flex items-center gap-4 text-lg">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-emerald-400/15 text-emerald-300 grid place-items-center">
                    <Icon name="check" className="w-5 h-5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black">הם כבר <span className="hd-gradient-text">בפנים</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.img} delay={i * 120}>
                <figure className="hd-glass h-full rounded-3xl p-7 flex flex-col">
                  <blockquote className="text-lg leading-relaxed text-white/85 flex-1">״{t.quote}״</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Image src={t.img} alt={t.name} width={52} height={52} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
                    <div>
                      <div className="font-black">{t.name}</div>
                      <div className="text-sm text-white/50" dir="ltr">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Countdown band */}
        <section className="relative hd-grain overflow-hidden py-20">
          <Mesh />
          <Reveal className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black">המחזור הקרוב נפתח בעוד</h2>
            <div className="mt-8 flex justify-center">
              <Countdown
                target={course.startDate}
                cell="hd-glass rounded-2xl w-[72px] md:w-24 py-4"
                num="text-3xl md:text-5xl font-black"
                lbl="text-xs text-white/60 mt-1"
              />
            </div>
            <p className="mt-6 text-white/70">
              נותרו <b className="text-white">{course.spotsLeft}</b> מקומות מתוך {course.spotsTotal}
            </p>
            <div className="mt-8"><Cta /></div>
          </Reveal>
        </section>

        {/* FAQ + form */}
        <section id="faq" className="max-w-6xl mx-auto px-4 md:px-6 py-20 grid lg:grid-cols-2 gap-10 scroll-mt-24">
          <Reveal>
            <h2 className="text-4xl font-black mb-8">שאלות נפוצות</h2>
            <FAQ item="border-b border-white/10" q="text-lg font-bold text-white py-2 focus-visible:ring-fuchsia-400" a="text-white/60 leading-relaxed" icon="text-[#ff3d8b]" />
          </Reveal>
          <Reveal delay={150} id="form" className="scroll-mt-24">
            <div className="hd-conic rounded-[28px]">
              <LeadForm theme="aurora" idPrefix="hd-a-bottom" />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} טק-קריירה · <a href="mailto:sara@tech-career.org" className="hover:text-white">sara@tech-career.org</a>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
