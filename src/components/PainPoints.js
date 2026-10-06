const questions = [
  {
    q: 'עבדתם קשה כל חייכם — ועדיין מרגישים שמגיע לכם הרבה יותר?',
    sub: 'הרבה אנשים מוכשרים תקועים בעבודות שלא מאפשרות להם להתקדם. זה לא בגללכם — זה בגלל שאף אחד לא הראה להם את הדרך.',
  },
  {
    q: 'אמרו לכם שהייטק זה "לא בשבילכם" — ופשוט האמנתם?',
    sub: 'הנרטיב הזה שגוי לחלוטין. ההייטק מחפש אנשים עם מוטיבציה ורצון ללמוד — לא תואר ולא קשרים.',
  },
  {
    q: 'כמה שנים עוד תחכו לשינוי שיגיע מעצמו?',
    sub: 'שינוי לא קורה לבד. הוא קורה כשמחליטים לעשות צעד אחד קדימה — גם כשזה מפחיד.',
  },
  {
    q: 'רוצים שהילדים שלכם יתחילו ממקום אחר?',
    sub: 'זה מתחיל מכם. השקעה בעצמכם היום היא השינוי הכי גדול שאתם יכולים לעשות — לעצמכם ולמשפחה שלכם.',
  },
];

export default function PainPoints() {
  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">תעצרו רגע ותשאלו את עצמכם</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {questions.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 border-r-4 border-r-brand-orange"
            >
              <p className="text-brand-navy font-bold text-xl leading-snug mb-3">
                {item.q}
              </p>
              <p className="text-brand-gray-mid text-base leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-navy/60 text-lg">
            הנהנתם בראש — אתם במקום הנכון.
          </p>
          <p className="text-brand-orange font-bold text-xl mt-2">
            אנחנו פה כדי לשנות את זה.
          </p>
        </div>
      </div>
    </section>
  );
}
