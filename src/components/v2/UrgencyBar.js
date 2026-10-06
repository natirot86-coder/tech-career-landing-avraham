'use client';

export default function UrgencyBar() {
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-[60] bg-corp-secondary text-white text-xs sm:text-sm h-10 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-2 sm:gap-3 flex-nowrap w-full">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-corp-primary flex-shrink-0 animate-pulse" />
        <span className="truncate">
          מחזורי <strong className="text-corp-primary font-semibold">אוגוסט ואוקטובר 2026</strong>
          <span className="hidden sm:inline"> נפתחים לרישום — המקומות מוגבלים</span>
        </span>
        <a
          href="#lead-form"
          onClick={scrollToForm}
          className="hidden sm:inline-block bg-corp-primary hover:bg-corp-primary-dark rounded-lg font-semibold text-xs px-3 py-1.5 whitespace-nowrap flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          להרשמה מהירה
        </a>
      </div>
    </div>
  );
}
