'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';

// InTech opening/orientation meeting — keep in sync with the date mentioned in UrgencyBar.js
const TARGET_DATE = new Date('2026-10-25T19:30:00+03:00');

function getRemaining() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!time || time.done) return null;

  const units = [
    { v: time.days, l: 'ימים' },
    { v: time.hours, l: 'שעות' },
    { v: time.minutes, l: 'דקות' },
    { v: time.seconds, l: 'שניות' },
  ];

  return (
    <section className="bg-warm-bg">
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10">
        <Reveal>
          <div className="bg-warm-plum rounded-2xl px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-[0_18px_36px_-18px_rgba(43,30,23,0.45)]">
            <div className="text-center sm:text-right">
              <div className="text-warm-cream font-bold">עד מפגש הפתיחה של InTech</div>
              <div className="text-warm-cream-muted text-sm mt-0.5">25.10.2026 · 19:30</div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3" dir="ltr">
              {units.map((u, i) => (
                <div key={u.l} className="flex items-center gap-2 sm:gap-3">
                  <div className="bg-warm-cream/10 rounded-xl px-3 py-2 text-center min-w-[3.2rem]">
                    <div className="text-warm-cream font-bold text-xl tabular-nums leading-none">
                      {String(u.v).padStart(2, '0')}
                    </div>
                    <div className="text-warm-cream-muted text-[10px] mt-1">{u.l}</div>
                  </div>
                  {i < units.length - 1 && <span className="text-warm-cream-muted/50 font-bold">:</span>}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-action-blue text-white font-bold text-sm px-6 hover:bg-action-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue focus-visible:ring-offset-2 focus-visible:ring-offset-warm-plum transition-colors flex-shrink-0"
            >
              שריינו מקום
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
