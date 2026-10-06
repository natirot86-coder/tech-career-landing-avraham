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
      className="py-24 bg-white border-t border-gray-100"
      style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight">
            תעצרו רגע ותשאלו את עצמכם
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-corp-secondary font-semibold text-lg leading-snug mb-2">{item.q}</p>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-gray-500 text-base">הנהנתם בראש — אתם במקום הנכון.</p>
          <p className="text-corp-primary font-semibold text-lg mt-1">אנחנו פה כדי לשנות את זה.</p>
        </div>
      </div>
    </section>
  );
}
