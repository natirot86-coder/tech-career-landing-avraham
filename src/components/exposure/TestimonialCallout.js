import Reveal from './Reveal';

export default function TestimonialCallout() {
  return (
    <section className="bg-warm-ink pt-16 pb-24 px-6">
      <Reveal>
        <div className="relative max-w-lg mx-auto bg-white rounded-3xl p-7 md:p-8 shadow-2xl">
          <p className="text-warm-ink text-lg leading-relaxed font-medium mb-5">
            לא בטוחים איזה תחום הכי מתאים לכם? בוט מותאם אישית יעזור לכם למצוא כיוון בכמה שאלות פשוטות.
          </p>
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.5 3a1 1 0 00-1 1v1H7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3h-1.5V4a1 1 0 00-1-1h-5zM9 12a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0zM4 11h1m14 0h1"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-warm-ink text-sm">בוט מותאם אישית</div>
              <a href="#" className="text-brand-orange text-xs font-bold hover:underline">
                לשיחה עם הבוט ←
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
