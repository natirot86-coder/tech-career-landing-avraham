'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const questions = [
  {
    q: 'יש לך רקע קודם במחשבים?',
    options: ['כן, יש לי קצת', 'לא, מתחיל/ה מאפס'],
  },
  {
    q: 'יש לך זמן פנוי אחד בערב או בסופ״ש?',
    options: ['כן, יש לי', 'צריך/ה לבדוק']
  },
  {
    q: 'סקרנות ורצון ללמוד דבר חדש?',
    options: ['בהחלט!', 'קצת חוששים, אבל כן'],
  },
];

export default function QuickQuiz() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const answer = () => {
    if (step < questions.length - 1) {
      setStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <section className="py-24 bg-warm-plum">
      <div className="max-w-xl mx-auto px-6 text-center">
        <Reveal>
          <span className="text-action-blue text-sm font-semibold">30 שניות על עצמכם</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-warm-cream mt-3 mb-10 leading-tight">
            תוכנית החשיפה מתאימה לכם?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-warm-cream/[0.07] border border-warm-cream/15 rounded-2xl p-8 md:p-10">
            {!done ? (
              <>
                <div className="flex justify-center gap-1.5 mb-6">
                  {questions.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === step ? 'w-6 bg-action-blue' : i < step ? 'w-1.5 bg-action-blue/50' : 'w-1.5 bg-warm-cream/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-warm-cream font-bold text-xl mb-7">{questions[step].q}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={answer}
                      className="min-h-[44px] px-6 rounded-full border border-warm-cream/25 text-warm-cream font-semibold hover:bg-warm-cream hover:text-warm-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <div className="w-12 h-12 rounded-full bg-action-blue/15 text-action-blue flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-warm-cream font-bold text-xl mb-2">כן, זה בדיוק בשבילכם</p>
                <p className="text-warm-cream-muted text-sm mb-7">
                  התשובות לא חשובות — InTech פתוחה לכל יוצא/ת אתיופיה בגילי 18-44, מכל רמת ידע.
                </p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-action-blue text-white font-bold px-7 shadow-lg shadow-action-blue/25 hover:bg-action-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue focus-visible:ring-offset-2 focus-visible:ring-offset-warm-plum transition-colors"
                >
                  שריינו לי מקום ←
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
