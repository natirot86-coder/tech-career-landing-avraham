import Reveal from './Reveal';

const flow = ['חשיפה', 'בוט ואבחון', 'טעימות STEM', 'ניתוב למסלול', 'ייעוץ אנושי', 'הרשמה', 'מעקב שימור'];

export default function ProgramModel() {
  return (
    <section className="py-20 bg-warm-card border-t border-warm-ink/5">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <span className="text-brand-orange text-sm font-bold">כך זה עובד</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-warm-ink mt-3 mb-6 leading-tight">
            מודל התוכנית ומסלול המועמד
          </h2>

          <p className="text-warm-ink-soft text-[15px] leading-relaxed mb-5">
            המערכת מבוססת על תהליך מובנה ומפוקח הממיר לידים גולמיים לנרשמים מאומתים לפי מודל ההפעלה:
          </p>

          <div
            dir="rtl"
            className="flex flex-wrap items-center gap-x-2 gap-y-3 justify-center bg-warm-bg rounded-2xl px-5 py-5 mb-5"
          >
            {flow.map((step, i) => (
              <span key={step} className="inline-flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-white shadow-sm text-sm font-bold text-warm-ink">
                  {step}
                </span>
                {i < flow.length - 1 && <span className="text-brand-orange font-bold">←</span>}
              </span>
            ))}
          </div>

          <p className="text-warm-ink-soft text-[15px] leading-relaxed">
            מערכת זו מבטיחה כי המענה מותאם ליכולות האישיות של המועמד, לרקע הלימודי, לאנגלית ולפוטנציאל שלו, תוך מתן
            פתרון לחסמים אישיים וכלכליים.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
