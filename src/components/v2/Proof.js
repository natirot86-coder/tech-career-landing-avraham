import Image from 'next/image';
import ProofCarousel from './ProofCarousel';

const companies = [
  { name: 'Google', img: '/images/v2/companies/google.svg', width: 88, height: 28 },
  { name: 'Wix', img: '/images/v2/companies/wix.svg', width: 60, height: 28 },
  { name: 'Cognyte', color: '#00B2A9' },
  { name: 'AT&T', img: '/images/v2/companies/att.svg', width: 60, height: 28 },
  { name: 'Qualitest', img: '/images/v2/partner-qualitest.jpg', width: 100, height: 28 },
];

export default function Proof() {
  return (
    <section className="py-24 bg-corp-secondary border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-corp-primary text-sm font-semibold">הצצה מבפנים</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2">ככה נראים הימים שלנו</h2>
          <p className="text-white/60 text-lg mt-2">
            מהכיתה ועד חברות ההייטק — כמה רגעים אמיתיים מהדרך, מהאנשים ומהאווירה אצלנו.
          </p>
        </div>

        <ProofCarousel />

        <div className="mt-14 text-center">
          <div className="text-white/50 text-sm font-semibold mb-4">הבוגרים שלנו כבר עובדים ב־</div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {companies.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-lg px-4 h-11 flex items-center justify-center"
              >
                {c.img ? (
                  <Image
                    src={c.img}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="w-auto object-contain"
                    style={{ height: c.height }}
                  />
                ) : (
                  <span className="text-base font-bold whitespace-nowrap" style={{ color: c.color }}>
                    {c.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
