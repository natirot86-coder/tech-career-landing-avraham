import Image from 'next/image';
import { course, facts, tools, syllabus, benefits, careers, audience, testimonials } from '../content';
import LeadForm from '../LeadForm';
import Reveal from '../Reveal';
import Counter from '../Counter';
import Countdown from '../Countdown';
import FAQ from '../FAQ';
import Icon from '../Icon';
import Typewriter from '../Typewriter';
import WhatsAppButton from '@/components/WhatsAppButton';

/** Template 3 — "Terminal": dark tech, neon green, typewriter, scanlines, grid. */

const Cta = ({ children = course.cta, href = '#form', ghost = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 min-h-[52px] px-7 rounded-md font-black text-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a12] ${
      ghost
        ? 'border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10'
        : 'bg-emerald-400 text-[#04120c] hover:bg-emerald-300 shadow-[0_0_40px_-8px_rgba(52,211,153,.8)]'
    }`}
  >
    {!ghost && <span aria-hidden="true" className="font-mono">$</span>}
    {children}
  </a>
);

const Prompt = ({ children }) => (
  <p className="font-mono text-sm text-emerald-400" dir="ltr">
    <span className="text-emerald-600">~/help-desk</span> $ {children}
  </p>
);

const Window = ({ title, children, className = '' }) => (
  <div className={`rounded-xl border border-emerald-400/20 bg-[#0b1220]/90 backdrop-blur overflow-hidden ${className}`}>
    <div className="flex items-center gap-2 px-4 h-10 border-b border-emerald-400/15 bg-black/30" dir="ltr">
      <span className="w-3 h-3 rounded-full bg-rose-400/80" />
      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
      <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
      <span className="ml-3 font-mono text-xs text-emerald-200/50">{title}</span>
    </div>
    {children}
  </div>
);

export default function Terminal() {
  return (
    <div className="hd-terminal min-h-screen overflow-x-clip">
      <div className="hd-progress bg-emerald-400 shadow-[0_0_12px_#34d399]" />

      <header className="sticky top-0 z-50 border-b border-emerald-400/15 bg-[#050a12]/80 backdrop-blur-xl">
        <nav className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <span className="flex items-center gap-3">
            <span className="bg-white rounded p-1"><Image src="/images/logo.png" alt="טק-קריירה" width={84} height={26} className="h-6 w-auto" /></span>
            <span className="font-mono text-emerald-400 text-sm hidden sm:inline" dir="ltr">/help-desk</span>
          </span>
          <div className="hidden md:flex gap-7 font-mono text-sm text-emerald-100/60" dir="ltr">
            <a href="#syllabus" className="hover:text-emerald-300">./syllabus</a>
            <a href="#careers" className="hover:text-emerald-300">./career</a>
            <a href="#faq" className="hover:text-emerald-300">./faq</a>
          </div>
          <a href="#form" dir="ltr" className="font-mono rounded-md bg-emerald-400 text-[#04120c] px-4 h-10 inline-flex items-center font-bold text-sm">register()</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative hd-scanlines overflow-hidden">
          <div className="absolute inset-0 hd-grid-bg" aria-hidden="true" />
          <div className="hd-beam" aria-hidden="true" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-emerald-500/20 blur-[120px]" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
            <div>
              <Reveal><Prompt>./start --course=helpdesk</Prompt></Reveal>
              <Reveal delay={100}>
                <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white">
                  לומדים לפתור
                  <br />
                  <span className="text-emerald-400 hd-glow font-mono text-4xl md:text-6xl" dir="ltr">
                    <Typewriter words={['VPN issues', 'Active Directory', 'Network errors', 'Microsoft 365', 'User tickets']} />
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-xl text-emerald-50/70 max-w-xl leading-relaxed">{course.sub}</p>
              </Reveal>
              <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
                <Cta />
                <Cta href="#syllabus" ghost>{course.ctaSecondary}</Cta>
              </Reveal>
              <Reveal delay={400} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="border-r-2 border-emerald-400/40 pr-3">
                    <div className="text-3xl font-black text-white">
                      {f.count ? <Counter to={f.value} /> : f.value}
                      <span className="text-emerald-400 text-base font-bold mr-1">{f.unit}</span>
                    </div>
                    <div className="text-xs text-emerald-100/50 mt-1">{f.label}</div>
                  </div>
                ))}
              </Reveal>
            </div>
            <Reveal delay={200}>
              <Window title="lead-form.sh">
                <div className="p-1">
                  <LeadForm theme="terminal" idPrefix="hd-t-top" title="> בדיקת זכאות" />
                </div>
              </Window>
            </Reveal>
          </div>
        </section>

        {/* Tools marquee */}
        <section className="hd-marquee-wrap border-y border-emerald-400/15 bg-black/40 py-4 overflow-hidden" aria-label="כלים שלומדים">
          <div className="hd-marquee font-mono">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="mx-5 whitespace-nowrap text-emerald-300/80">
                <span className="text-emerald-600">[</span>{t}<span className="text-emerald-600">]</span>
              </span>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-24">
          <Reveal className="mb-12">
            <Prompt>cat why-helpdesk.md</Prompt>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">למה <span className="text-emerald-400 hd-glow">Help Desk</span>?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-emerald-400/15 rounded-xl overflow-hidden border border-emerald-400/15">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 100} className="group bg-[#050a12] p-7 transition hover:bg-[#0b1a17]">
                <div className="flex items-center justify-between">
                  <Icon name={b.icon} className="w-7 h-7 text-emerald-400 transition group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_#34d399]" />
                  <span className="font-mono text-xs text-emerald-100/30" dir="ltr">0x0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{b.title}</h3>
                <p className="mt-2 text-emerald-50/60 leading-relaxed">{b.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Syllabus as terminal log */}
        <section id="syllabus" className="max-w-4xl mx-auto px-4 md:px-6 pb-24 scroll-mt-20">
          <Reveal className="mb-8">
            <Prompt>ls -la ./syllabus</Prompt>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">מה לומדים</h2>
          </Reveal>
          <Window title="syllabus — 16 weeks">
            <ol className="divide-y divide-emerald-400/10">
              {syllabus.map((s) => (
                <li key={s.n} className="hd-scroll-in p-5 md:p-6 flex gap-5 hover:bg-emerald-400/[.04] transition">
                  <span className="font-mono text-emerald-400 text-lg shrink-0" dir="ltr">[{s.n}]</span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-black text-white">{s.title}</h3>
                      <span className="font-mono text-xs text-emerald-300/60">{s.weeks}</span>
                    </div>
                    <p className="mt-1 text-emerald-50/60">{s.text}</p>
                  </div>
                  <span className="hidden sm:block font-mono text-xs text-emerald-400 self-center" dir="ltr">OK ✓</span>
                </li>
              ))}
            </ol>
          </Window>
        </section>

        {/* Careers + audience */}
        <section id="careers" className="max-w-6xl mx-auto px-4 md:px-6 pb-24 grid lg:grid-cols-2 gap-6 scroll-mt-20">
          <Reveal>
            <Window title="career-path.json">
              <div className="p-6 font-mono text-sm" dir="ltr">
                {careers.map((c, i) => (
                  <div key={c.role} className="flex items-center gap-3 py-2.5" style={{ paddingLeft: `${i * 18}px` }}>
                    <span className="text-emerald-600">{i === 0 ? '●' : '└─'}</span>
                    <span className="text-white">{c.role}</span>
                    <span className="ml-auto text-emerald-400" dir="rtl">{c.salary}</span>
                  </div>
                ))}
                <p className="mt-4 text-emerald-100/30 text-xs">// salary ranges are illustrative</p>
              </div>
            </Window>
          </Reveal>
          <Reveal delay={120}>
            <Window title="requirements.txt">
              <ul className="p-6 space-y-4">
                {audience.map((a) => (
                  <li key={a} className="flex gap-3 text-lg text-emerald-50/90">
                    <span className="font-mono text-emerald-400">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </Window>
          </Reveal>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">
          <Reveal className="mb-10">
            <Prompt>tail -f graduates.log</Prompt>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">בוגרים בשטח</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.img} delay={i * 100}>
                <figure className="h-full rounded-xl border border-emerald-400/20 bg-[#0b1220] p-6 transition hover:border-emerald-400/60 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,.6)]">
                  <div className="flex items-center gap-3">
                    <Image src={t.img} alt={t.name} width={52} height={52} className="w-12 h-12 rounded-md object-cover grayscale hover:grayscale-0 transition" />
                    <figcaption>
                      <div className="font-black text-white">{t.name}</div>
                      <div className="font-mono text-xs text-emerald-400" dir="ltr">{t.role}</div>
                    </figcaption>
                  </div>
                  <blockquote className="mt-5 text-emerald-50/80 leading-relaxed">״{t.quote}״</blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Countdown */}
        <section className="relative hd-scanlines border-y border-emerald-400/15 py-20 overflow-hidden">
          <div className="absolute inset-0 hd-grid-bg" aria-hidden="true" />
          <Reveal className="relative max-w-4xl mx-auto px-4 text-center">
            <Prompt>countdown --cohort=next</Prompt>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">המחזור הבא נפתח בעוד</h2>
            <div className="mt-8 flex justify-center" dir="ltr">
              <Countdown
                target={course.startDate}
                cell="rounded-md border border-emerald-400/30 bg-black/40 w-[72px] md:w-24 py-4"
                num="text-3xl md:text-5xl font-black font-mono text-emerald-400 hd-glow"
                lbl="text-xs text-emerald-100/50 mt-1"
              />
            </div>
            <p className="mt-6 font-mono text-emerald-200/70">
              spots_left = <b className="text-emerald-400">{course.spotsLeft}</b> / {course.spotsTotal}
            </p>
          </Reveal>
        </section>

        {/* FAQ + form */}
        <section id="faq" className="max-w-6xl mx-auto px-4 md:px-6 py-24 grid lg:grid-cols-2 gap-10 scroll-mt-20">
          <Reveal>
            <Prompt>man helpdesk-course</Prompt>
            <h2 className="mt-4 text-4xl font-black text-white mb-8">שאלות נפוצות</h2>
            <FAQ
              item="border-b border-emerald-400/15"
              q="text-lg font-bold text-white py-2 focus-visible:ring-emerald-400"
              a="text-emerald-50/60 leading-relaxed"
              icon="text-emerald-400 font-mono"
            />
          </Reveal>
          <Reveal delay={150} id="form" className="scroll-mt-20">
            <Window title="submit-lead.sh">
              <div className="p-1">
                <LeadForm theme="terminal" idPrefix="hd-t-bottom" title="> שמירת מקום במחזור" />
              </div>
            </Window>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-emerald-400/15 py-10 text-center font-mono text-sm text-emerald-100/40">
        © {new Date().getFullYear()} טק-קריירה · <a href="mailto:sara@tech-career.org" className="hover:text-emerald-300">sara@tech-career.org</a>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
