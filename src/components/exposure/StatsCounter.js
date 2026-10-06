'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

const stats = [
  { text: true, label: 'בוט ייעודי מותאם להכוונת מסלול' },
  { target: 1600, suffix: '', label: 'תהליכי ליווי בשנה' },
  { target: 5, suffix: '', label: 'מפגשים בזום' },
];

function StatCard({ stat, started }) {
  const count = useCountUp(stat.text ? 0 : stat.target, 1800, started);

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 text-center">
      {stat.text ? (
        <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.5 3a1 1 0 00-1 1v1H7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3V8a3 3 0 00-3-3h-1.5V4a1 1 0 00-1-1h-5zM9 12a1 1 0 112 0 1 1 0 01-2 0zm4 0a1 1 0 112 0 1 1 0 01-2 0zM4 11h1m14 0h1"
            />
          </svg>
        </div>
      ) : (
        <div className="text-3xl md:text-5xl font-display font-black text-warm-ink tracking-tight leading-none mb-2">
          {count.toLocaleString()}
          {stat.suffix}
        </div>
      )}
      <div className="text-sm font-semibold text-warm-ink-soft">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-brand-orange" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-display font-black tracking-tight text-2xl md:text-3xl text-white leading-tight">
            מיזם לאומי בקנה מידה משמעותי
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
