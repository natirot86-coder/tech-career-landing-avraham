'use client';

import { useEffect, useRef, useState } from 'react';

// Room capacity is organizer-set config, not fabricated — adjust per actual event venue.
const TOTAL_SPOTS = 25;

export default function SpotsBar() {
  const [taken, setTaken] = useState(null); // null = not loaded yet
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    fetch('/api/spots-count')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (typeof data.count === 'number') {
          setTaken(Math.min(data.count, TOTAL_SPOTS));
          setVisible(true);
        }
      })
      .catch(() => {
        // No verified count available — don't show a fabricated number, just hide the bar.
      });
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  if (!visible) return null;

  const pct = Math.round((taken / TOTAL_SPOTS) * 100);

  return (
    <div ref={ref} className="mb-8">
      <div className="flex items-center justify-between mb-2 text-sm">
        <span className="font-bold text-warm-ink">
          {taken} מתוך {TOTAL_SPOTS} מקומות נרשמו
        </span>
        <span className="text-warm-muted">{Math.max(TOTAL_SPOTS - taken, 0)} מקומות אחרונים</span>
      </div>
      <div className="h-2.5 rounded-full bg-warm-ink/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-action-blue transition-[width] duration-[1200ms] ease-out"
          style={{ width: started ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}
