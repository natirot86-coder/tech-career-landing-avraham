'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const slides = [
  { src: '/images/v2/proof-techpath.jpg', alt: 'Tech Path', caption: 'תוכנית Tech Path לנוער בפתח תקווה', pos: 'center 60%', scale: 1.15 },
  { src: '/images/v2/proof-orientation-day.jpg', alt: 'יום הכוונה', caption: 'יום הכוונה ופיתוח במשרדי העמותה', pos: 'center 30%', scale: 1.4 },
  { src: '/images/v2/proof-field-day.jpg', alt: 'יום שטח', caption: 'יום שטח במשרדי חברת Qualitest', pos: 'center 55%', scale: 1.05 },
  { src: '/images/v2/proof-datacenter.jpg', alt: 'דאטה סנטר', caption: 'ביקור מקצועי בדאטה-סנטר', pos: 'center 35%', scale: 1.05 },
  { src: '/images/v2/proof-enrichment-conf.jpg', alt: 'כנסי העשרה', caption: 'כנסי העשרה לבוגרים', pos: 'center 40%', scale: 1.05 },
  { src: '/images/v2/proof-open-day.jpg', alt: 'יום פתוח', caption: 'יום פתוח', pos: '78% 28%', scale: 1.2 },
];

export default function ProofCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const go = (n) => setCurrent((n + slides.length) % slides.length);

  const reset = () => {
    clearInterval(timerRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4500);
  };

  const pause = () => clearInterval(timerRef.current);

  useEffect(() => {
    reset();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) {
      go(current + 1);
      reset();
    } else if (dx > 40) {
      go(current - 1);
      reset();
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className="relative aspect-[16/10] bg-black rounded-xl overflow-hidden border border-white/10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={pause}
        onMouseLeave={reset}
        onFocus={pause}
        onBlur={reset}
      >
        {slides.map((s, i) => (
          <figure
            key={i}
            className="absolute inset-0 overflow-hidden transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              style={{ objectPosition: s.pos, transform: `scale(${s.scale})` }}
              sizes="(max-width: 768px) 100vw, 768px"
              priority={i === 0}
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-5 py-4 text-white font-medium bg-gradient-to-t from-black/80 to-transparent">
              {s.caption}
            </figcaption>
          </figure>
        ))}

        <button
          onClick={() => {
            go(current - 1);
            reset();
          }}
          aria-label="הקודם"
          className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-corp-secondary flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary transition-colors"
        >
          ›
        </button>
        <button
          onClick={() => {
            go(current + 1);
            reset();
          }}
          aria-label="הבא"
          className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-corp-secondary flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary transition-colors"
        >
          ‹
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              go(i);
              reset();
            }}
            aria-label={`שקופית ${i + 1}`}
            className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary ${
              i === current ? 'w-6 bg-corp-primary' : 'w-2 bg-white/25'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
