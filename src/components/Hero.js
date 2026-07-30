'use client';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2340 0%, #2d3a5e 50%, #1a2340 100%)',
      }}
    >
      {/* Background photo with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/graduates-group.jpg')",
          opacity: 0.18,
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-orange inline-block" />
          כבר 22 שנה מכשירים מצטיינים להייטק
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          הקריירה שלך
          <br />
          <span className="text-brand-orange">בהייטק</span> מתחילה כאן
        </h1>

        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
          הכשרות מעשיות ואינטנסיביות שבסופן{' '}
          <strong className="text-white">88% מהבוגרים</strong> משתלבים בתעשיית ההייטק —
          גם בלי ניסיון קודם.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-10 py-4 shadow-xl shadow-brand-orange/20"
          >
            רוצה לשמוע פרטים
          </button>
          <a
            href="https://www.tech-career.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white font-medium text-sm transition-colors underline underline-offset-4"
          >
            למידע נוסף באתר הרשמי
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>גלול למטה</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
