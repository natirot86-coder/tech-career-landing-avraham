'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#DCEBFF] via-[#EFF6FF] to-warm-bg">
      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-8 text-center">
        {/* Institutional intro: kicker → partner logo → announcement → giant wordmark */}
        <Reveal>
          <div className="text-warm-muted text-sm font-bold mb-4">המיזם הלאומי של משרד העבודה</div>
        </Reveal>

        <Reveal delay={40}>
          <Image
            src="/images/logo-vedaj-beyachad.png"
            alt="ועדאת ביחד"
            width={142}
            height={105}
            className="h-14 w-auto object-contain mx-auto mb-5"
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="text-warm-ink-soft text-base sm:text-lg max-w-md mx-auto mb-2 leading-relaxed">
            משרד העבודה ועמותת טק-קריירה גאים להכריז על חזרתה של תוכנית
          </p>
        </Reveal>

        {/* Giant "IN TECH" wordmark, filled with a small repeating InTech photo pattern */}
        <Reveal delay={120}>
          <div
            dir="ltr"
            className="font-display font-black leading-[0.85] tracking-tight text-[15vw] sm:text-[9vw] bg-clip-text text-transparent select-none mb-8"
            style={{ backgroundImage: 'url(/images/intech-graduates.jpg)', backgroundSize: '90px auto' }}
          >
            IN TECH
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto mb-8">
          <Reveal delay={160}>
            <h1 className="font-display font-black tracking-tight text-[2rem] sm:text-5xl text-warm-ink leading-[1.2] mb-4 text-balance">
              התגעגעתם?! אז חזרנו 👋
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="text-warm-muted text-base sm:text-lg mb-1">
              לאחר תקופה שלא התראינו (שנתיים שלמות אבל מי סופר? 😉).
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="text-warm-ink-soft text-base sm:text-lg mb-4">לא יכולנו שלא לחשוב — מה היה קורה אם?</p>
          </Reveal>

          <Reveal delay={230}>
            <p className="font-display font-black text-warm-ink text-lg sm:text-xl mb-6 text-balance">
              בכל זאת תוכנית שהוציאה מעל 500 בוגרים — מחיפה ועד באר שבע.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <p className="text-warm-muted text-sm font-bold mb-5">הפעם קצת באופן שונה — אז הנה כמה פרטים יבשים:</p>
          </Reveal>

          <Reveal delay={270}>
            <p className="text-warm-ink-soft text-[15px] sm:text-base leading-relaxed text-right sm:text-center">
              תוכנית אינטק (In-Tech) היא ערוץ החשיפה וההכוון ללימודים במסגרת המיזם הלאומי המשותף של טק-קריירה ומשרד
              העבודה, המופעל מכוח החלטת ממשלה 3243. התוכנית פונה ליוצאי אתיופיה בגילי 18-44 שאינם עובדים או מועסקים
              בשכר הנמוך מהממוצע במשק, ומטרתה להוביל אותם צעד אחר צעד מחשיפה ראשונית ועד רישום בפועל ללימודים, עם יעד
              שנתי של 800 נרשמים ו-1,600 תהליכי ליווי.
            </p>
          </Reveal>
        </div>

        <Reveal delay={300}>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-brand-orange text-white font-bold px-8 shadow-lg shadow-brand-orange/30 hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 transition-colors"
          >
            שריינו לי מקום במפגש הפתיחה ←
          </button>
        </Reveal>
      </div>
    </section>
  );
}
