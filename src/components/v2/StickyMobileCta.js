'use client';

import { useEffect, useState } from 'react';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 p-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <button
        onClick={scrollToForm}
        className="w-full inline-flex items-center justify-center min-h-[48px] rounded-lg bg-corp-primary text-white font-semibold hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-colors"
      >
        אני רוצה להירשם ←
      </button>
    </div>
  );
}
