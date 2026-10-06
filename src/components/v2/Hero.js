'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-corp-secondary overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center">
        <div className="order-2 lg:order-none">
          <div className="inline-flex items-center gap-2 text-corp-primary text-sm font-semibold mb-5">
            <span>▶</span>
            ראית את הסרטון — עכשיו תורך להיכנס לתמונה
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            המסלול שלך <span className="text-corp-primary">להייטק</span>
            <br />
            מתחיל כאן
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
            הכשרה טכנולוגית מקצועית, ליווי אישי עד להשמה ומסלול ישיר לקריירה. הקורסים הבאים
            נפתחים ברחבי הארץ, בשעות הערב — כדי שתוכל ללמוד לצד העבודה.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-corp-primary text-white font-semibold px-8 hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 focus-visible:ring-offset-corp-secondary transition-colors"
            >
              אני רוצה להירשם ←
            </button>
            <span className="text-white/50 text-sm">2 דקות · ללא התחייבות</span>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-white/60 text-center sm:text-right">
            <span className="flex items-center gap-1.5">
              <span className="text-corp-primary">✓</span> הכרה ע&quot;י משרד העבודה
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-corp-primary">✓</span> מוכר במל&quot;ג
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-corp-primary">✓</span> 90% השמה
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-none relative rounded-xl overflow-hidden border border-white/10 aspect-[16/10] lg:aspect-[4/3]">
          <Image
            src="/images/v2/hero-lecture.jpg"
            alt="הרצאה בטק-קריירה"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(100deg, rgba(26,35,64,0.35) 0%, transparent 50%)' }}
          />
        </div>
      </div>
    </section>
  );
}
