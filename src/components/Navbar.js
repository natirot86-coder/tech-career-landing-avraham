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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={scrollToForm}
          className="btn-primary text-sm px-6 py-2.5"
        >
          רוצה לשמוע פרטים?
        </button>

        <a href="https://www.tech-career.org" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logo.png"
            alt="Tech-Career לוגו"
            width={90}
            height={76}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>
      </div>
    </nav>
  );
}
