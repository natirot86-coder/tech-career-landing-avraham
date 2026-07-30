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
  { target: 88, suffix: '%', label: 'מהבוגרים השתלבו בהייטק', highlight: true },
  { target: 97, suffix: '%', label: 'מסיימים את הקורס בהצלחה', highlight: false },
  { target: 1300, suffix: '+', label: 'בוגרים ובוגרות', highlight: false },
  { target: 22, suffix: '', label: 'שנות עשייה', highlight: false },
];

function StatCard({ stat, started }) {
  const count = useCountUp(stat.target, 1800, started);

  return (
    <div className={`text-center p-8 rounded-2xl ${stat.highlight ? 'bg-brand-orange text-white' : 'bg-white'}`}>
      <div className={`text-5xl md:text-6xl font-black mb-2 ${stat.highlight ? 'text-white' : 'text-brand-orange'}`}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className={`text-sm font-medium ${stat.highlight ? 'text-white/80' : 'text-brand-gray-mid'}`}>
        {stat.label}
      </div>
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
    <section className="py-20 bg-brand-navy" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            טק-קריירה במספרים
          </h2>
          <p className="text-white/60">נתונים שמדברים בעד עצמם</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
