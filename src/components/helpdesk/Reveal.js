'use client';

import { useEffect, useRef, useState } from 'react';

/** Fades/slides children in when scrolled into view. `delay` in ms for staggering. */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag {...rest} ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`hd-reveal ${shown ? 'is-in' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
