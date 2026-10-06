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
  { target: 88, suffix: '%', label: 'מהבוגרים השתלבו בהייטק' },
  { target: 97, suffix: '%', label: 'מסיימים את הקורס בהצלחה' },
  { target: 1800, suffix: '+', label: 'בוגרים ובוגרות' },
  { target: 26, suffix: '', label: 'שנות עשייה' },
];

function StatCard({ stat, started }) {
  const count = useCountUp(stat.target, 1800, started);

  return (
    <div className="p-6 md:p-8 text-center border border-white/10">
      <div className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-2">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-sm text-white/60">{stat.label}</div>
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
    <section className="py-24 bg-corp-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">טק-קריירה במספרים</h2>
          <p className="text-white/50 mt-2">נתונים שמדברים בעד עצמם</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
