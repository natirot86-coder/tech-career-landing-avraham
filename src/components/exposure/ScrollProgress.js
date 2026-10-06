'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setPct(height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-[70] h-[3px] bg-transparent">
      <div className="h-full bg-action-blue transition-[width] duration-150 ease-out" style={{ width: `${pct}%` }} />
    </div>
  );
}
