'use client';

/**
 * CtaBanner (exposure — warm collage skin).
 * Props:
 *   headline: string
 *   sub: string
 *   buttonText: string
 *   variant: 'cream' (default) | 'plum'
 */
export default function CtaBanner({ headline, sub, buttonText = 'השאירו פרטים', variant = 'cream' }) {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    cream: {
      section: 'bg-warm-card',
      headline: 'text-warm-ink',
      sub: 'text-warm-muted',
    },
    plum: {
      section: 'bg-warm-plum',
      headline: 'text-warm-cream',
      sub: 'text-warm-cream-muted',
    },
  };

  const s = styles[variant] || styles.cream;

  return (
    <section className={`${s.section} py-12 border-t border-warm-ink/5`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        <div>
          <h2 className={`font-display font-black tracking-tight text-xl md:text-2xl leading-snug ${s.headline}`}>{headline}</h2>
          {sub && <p className={`mt-1 ${s.sub}`}>{sub}</p>}
        </div>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center min-h-[44px] flex-shrink-0 rounded-full bg-action-blue text-white font-bold px-7 shadow-lg shadow-action-blue/25 hover:bg-action-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue focus-visible:ring-offset-2 transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
