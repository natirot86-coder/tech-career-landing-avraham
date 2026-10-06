'use client';

import { useState } from 'react';
import { faq } from './content';

/** Accordion FAQ. Styling passed per template. */
export default function FAQ({ item = '', q = '', a = '', icon = '' }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faq.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={item}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className={`w-full flex items-center justify-between gap-4 text-right min-h-[56px] focus-visible:outline-none focus-visible:ring-2 rounded-lg ${q}`}
            >
              <span>{f.q}</span>
              <span className={`shrink-0 text-2xl leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} ${icon}`} aria-hidden="true">
                +
              </span>
            </button>
            <div
              id={`faq-${i}`}
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className={`pb-5 ${a}`}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
