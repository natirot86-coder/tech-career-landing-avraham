import Reveal from './Reveal';
import ProgramBento from './ProgramBento';

const bullets = [
  'קליטת פרטי המועמד, מקום מגורים, השכלה, בגרויות וזמינות.',
  'ביצוע מבדקי התאמה ממוחשבים, חשיבה לוגית, פתרון בעיות ואנגלית.',
  "חשיפה ל'טעימות STEM' מעשיות (סייבר, רשתות ודאטה) המאפשרות למועמד להתנסות לפני בחירה.",
  'הפקת פרופיל מועמד ודירוג התאמה ראשוני, המסתנכרנים ישירות ל-CRM הארגוני.',
];

export default function BotRole() {
  return (
    <section className="py-20 bg-warm-bg border-t border-warm-ink/5">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <span className="text-brand-orange text-sm font-bold">טכנולוגיה בשירות המסלול</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-warm-ink mt-3 mb-5 leading-tight">
            תפקיד הבוט והאפליקציה
          </h2>

          <p className="text-warm-ink-soft text-[15px] leading-relaxed mb-6">
            הבוט והאפליקציה פועלים בעיקר על גבי פלטפורמת WhatsApp ומהווים את תשתית הקליטה, הסינון והאבחון הראשוני של
            העמותה. הפתרון הטכנולוגי מאפשר:
          </p>

          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-warm-ink-soft text-[15px] leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <ProgramBento hideHeading />
    </section>
  );
}
