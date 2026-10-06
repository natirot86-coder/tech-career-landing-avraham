import Image from 'next/image';
import Reveal from './Reveal';
import IntechCarousel from './IntechCarousel';

const companies = [
  { name: 'Google', img: '/images/v2/companies/google.svg', width: 88, height: 28 },
  { name: 'Wix', img: '/images/v2/companies/wix.svg', width: 60, height: 28 },
  { name: 'Cognyte', color: '#00B2A9' },
  { name: 'AT&T', img: '/images/v2/companies/att.svg', width: 60, height: 28 },
  { name: 'Qualitest', img: '/images/v2/partner-qualitest.jpg', width: 100, height: 28 },
];

export default function Proof() {
  return (
    <section className="py-24 bg-warm-plum border-t border-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-action-blue text-sm font-semibold">הצצה מבפנים</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl text-warm-cream mt-3 leading-tight">ככה נראים הימים שלנו</h2>
          <p className="text-warm-cream-muted text-lg mt-3">
            מהכיתה ועד חברות ההייטק — כמה רגעים אמיתיים מהדרך, מהאנשים ומהאווירה אצלנו.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <IntechCarousel />
        </Reveal>

        <Reveal delay={200} className="mt-14 text-center">
          <div className="text-warm-cream-muted text-sm font-semibold mb-4">הבוגרים שלנו כבר עובדים ב־</div>
          <div className="flex flex-wrap justify-center items-center divide-x divide-x-reverse divide-warm-cream/15">
            {companies.map((c) => (
              <div key={c.name} className="h-7 flex items-center justify-center px-7 my-2">
                {c.img ? (
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="object-contain"
                    style={{ height: '100%', width: 'auto' }}
                  />
                ) : (
                  <span className="text-lg font-bold whitespace-nowrap" style={{ color: c.color }}>
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
