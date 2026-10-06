'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Honest rotating trust cues — real graduates and real numbers, not fabricated "X just signed up" claims.
const items = [
  { avatar: '/images/portrait-madlen.jpg', name: 'מדלן טדלה', text: 'התחילה בדיוק כמוך, היום FSE ב-Cognyte' },
  { avatar: '/images/portrait-shawanesh.jpg', name: 'שואנש אבבה', text: 'התחילה בדיוק כמוך, היום מהנדסת תוכנה ב-AT&T' },
  { avatar: '/images/portrait-roi.jpg', name: 'רועי מקונן', text: 'התחיל בדיוק כמוך, היום מפתח תוכנה' },
  { avatar: null, name: '88%', text: 'מהבוגרים שלנו השתלבו בהייטק' },
];

export default function ProofToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const showTimer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed || paused) return undefined;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 400);
    }, 6000);
    return () => clearInterval(cycle);
  }, [visible, dismissed, paused]);

  if (dismissed) return null;

  const item = items[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`fixed bottom-24 right-6 z-40 hidden sm:flex items-center gap-3 bg-warm-card rounded-2xl shadow-[0_14px_30px_-14px_rgba(43,30,23,0.4)] pl-2 pr-4 py-3 max-w-xs transition-all duration-400 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      {item.avatar ? (
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-warm-ink/10">
          <Image src={item.avatar} alt={item.name} fill className="object-cover object-top" sizes="36px" />
        </div>
      ) : (
        <div className="w-9 h-9 rounded-full bg-action-blue/10 text-action-blue font-bold text-xs flex items-center justify-center flex-shrink-0">
          {item.name}
        </div>
      )}
      <p className="text-warm-ink-soft text-xs leading-snug">
        {item.avatar && <span className="font-bold text-warm-ink">{item.name}</span>}{' '}
        {item.text}
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="סגור הודעה"
        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-warm-muted hover:bg-warm-ink/5 hover:text-warm-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action-blue transition-colors"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
