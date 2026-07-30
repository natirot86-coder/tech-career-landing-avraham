'use client';

/**
 * CtaBanner — a bold mid-page CTA strip.
 * Props:
 *   headline: string
 *   sub: string
 *   buttonText: string
 *   variant: 'orange' (default) | 'navy' | 'light'
 */
export default function CtaBanner({
  headline,
  sub,
  buttonText = 'השאירו פרטים',
  variant = 'orange',
}) {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    orange: {
      section: 'bg-brand-orange',
      headline: 'text-white',
      sub: 'text-white/80',
      btn: 'bg-white text-brand-orange hover:bg-orange-50',
    },
    navy: {
      section: 'bg-brand-navy',
      headline: 'text-white',
      sub: 'text-white/70',
      btn: 'bg-brand-orange text-white hover:bg-brand-orange-dark',
    },
    light: {
      section: 'bg-brand-orange-light border-y border-brand-orange/20',
      headline: 'text-brand-navy',
      sub: 'text-brand-gray-mid',
      btn: 'bg-brand-orange text-white hover:bg-brand-orange-dark',
    },
  };

  const s = styles[variant] || styles.orange;

  return (
    <section
      className={`${s.section} py-14 relative overflow-hidden`}
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className={`text-2xl md:text-3xl font-extrabold mb-3 ${s.headline}`}>
          {headline}
        </h2>
        {sub && (
          <p className={`text-lg mb-7 ${s.sub}`}>{sub}</p>
        )}
        <button
          onClick={scrollToForm}
          className={`inline-block font-bold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg active:scale-95 ${s.btn}`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
