'use client';

/**
 * CtaBanner (v2 — corporate skin) — a structured, left-content/right-action strip.
 * Props:
 *   headline: string
 *   sub: string
 *   buttonText: string
 *   variant: 'primary' (default) | 'secondary' | 'light'
 */
export default function CtaBanner({ headline, sub, buttonText = 'השאירו פרטים', variant = 'primary' }) {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    primary: {
      section: 'bg-corp-primary',
      headline: 'text-white',
      sub: 'text-white/80',
      btn: 'bg-white text-corp-primary hover:bg-gray-50 focus-visible:ring-offset-corp-primary',
    },
    secondary: {
      section: 'bg-corp-secondary',
      headline: 'text-white',
      sub: 'text-white/70',
      btn: 'bg-corp-primary text-white hover:bg-corp-primary-dark focus-visible:ring-offset-corp-secondary',
    },
    light: {
      section: 'bg-gray-50 border-y border-gray-200',
      headline: 'text-corp-secondary',
      sub: 'text-gray-600',
      btn: 'bg-corp-primary text-white hover:bg-corp-primary-dark focus-visible:ring-offset-gray-50',
    },
  };

  const s = styles[variant] || styles.primary;

  return (
    <section className={`${s.section} py-12`}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
        <div>
          <h2 className={`text-xl md:text-2xl font-bold tracking-tight ${s.headline}`}>{headline}</h2>
          {sub && <p className={`mt-1 ${s.sub}`}>{sub}</p>}
        </div>
        <button
          onClick={scrollToForm}
          className={`inline-flex items-center justify-center min-h-[44px] flex-shrink-0 rounded-lg font-semibold px-7 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 ${s.btn}`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
