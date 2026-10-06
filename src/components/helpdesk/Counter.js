'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts up from 0 to `to` once visible. */
export default function Counter({ to, duration = 1600 }) {
  const target = Number(to);
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{Number.isNaN(target) ? to : val}</span>;
}
