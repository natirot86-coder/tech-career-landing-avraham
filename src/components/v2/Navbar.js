'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-10 right-0 left-0 z-50 bg-white transition-shadow duration-200 border-b ${
        scrolled ? 'border-gray-200 shadow-sm' : 'border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="https://www.tech-career.org" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logo-techcareer-2026.jpg"
            alt="Tech-Career לוגו"
            width={986}
            height={419}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        <button
          onClick={scrollToForm}
          className="inline-flex items-center justify-center min-h-[44px] rounded-lg bg-corp-primary text-white font-semibold text-sm px-5 hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 transition-colors"
        >
          רוצה לשמוע פרטים?
        </button>
      </div>
    </nav>
  );
}
