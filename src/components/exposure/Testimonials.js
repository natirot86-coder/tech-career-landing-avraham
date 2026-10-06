'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

const cases = [
  {
    name: 'מדלן טדלה',
    role: 'FSE ב-Cognyte',
    quote: 'הצוות ליווה אותי בכל צעד בדרך וסיפק לי כלים להתמודד עם האתגרים.',
    avatar: '/images/portrait-madlen.jpg',
  },
  {
    name: 'יעל טסגאו',
    role: 'בוגרת תוכנית InTech',
    quote: 'בוודאות הייתי ממליצה על להשתתף בתוכנית אינטק, לכל מי שמתעניין בתחום וגם למי שלא.',
    avatar: '/images/intech-yael.jpg',
  },
  {
    name: 'רועי מקונן',
    role: 'מפתח תוכנה ב-Boutique Tech Studios',
    quote: 'נקודת מפנה משמעותית. ממליץ מכל הלב לכל מי שמתלבט.',
    avatar: '/images/portrait-roi.jpg',
  },
  {
    name: 'שרה וונדה',
    role: 'Data Center Engineer ב-Amazon',
    quote: 'טק-קריירה היא הרבה יותר ממוסד לימודי — זו משפחה.',
    avatar: '/images/portrait-sarah.jpg',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActive(i);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft + child.clientWidth / 2 - center);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section className="py-24 bg-warm-card border-t border-warm-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mb-10">
          <span className="text-brand-orange text-sm font-bold">לא רק מילים שלנו</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl text-warm-ink mt-3 leading-tight">
            הם ישבו בדיוק במקום שלכם
          </h2>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6 max-w-6xl mx-auto scrollbar-hide"
        >
          {cases.map((c) => (
            <div
              key={c.name}
              className="snap-center shrink-0 w-64 bg-warm-bg rounded-2xl p-5 flex flex-col"
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden mb-4">
                <Image src={c.avatar} alt={c.name} fill className="object-cover object-top" sizes="56px" />
              </div>
              <p className="text-warm-ink-soft text-sm leading-relaxed flex-1 mb-4">&ldquo;{c.quote}&rdquo;</p>
              <div className="font-display font-black text-warm-ink text-base leading-tight">{c.name}</div>
              <div className="text-brand-orange text-xs font-bold mt-0.5">{c.role}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="flex gap-2 justify-center mt-6">
        {cases.map((c, i) => (
          <button
            key={c.name}
            onClick={() => scrollToCard(i)}
            aria-label={`עדות ${i + 1}`}
            className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
              i === active ? 'w-6 bg-brand-orange' : 'w-2 bg-warm-ink/15'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
