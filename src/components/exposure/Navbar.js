'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-10 right-0 left-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        <a href="https://www.tech-career.org" target="_blank" rel="noopener noreferrer" className="justify-self-start">
          <Image
            src="/images/logo-techcareer-2026.jpg"
            alt="Tech-Career לוגו"
            width={986}
            height={419}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        <div className="flex justify-self-center">
          <Image
            src="/images/logo-ministry-of-labor.png"
            alt="משרד העבודה"
            width={3472}
            height={1215}
            className="h-14 w-auto object-contain"
          />
        </div>

        <Image
          src="/images/logo-vedaj-beyachad.png"
          alt="ועדאת ביחד"
          width={142}
          height={105}
          className="h-14 w-auto object-contain justify-self-end"
        />
      </div>
    </nav>
  );
}
