const pains = [
  {
    text: 'עובדים בעבודה שלא מממשת את מה שאתם באמת יכולים',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'מרגישים שההייטק זה משהו שלא בשבילכם',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    text: 'רוצים שינוי אבל לא יודעים מאיפה מתחילים',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    text: 'חוששים להשקיע בלימודים שלא יובילו לשום מקום',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="section-title">מכירים את זה?</h2>
          <p className="text-brand-gray-mid text-lg">
            הרבה אנשים מרגישים כך. אתם לא לבד.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pains.map((pain, i) => (
            <div key={i} className="card flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center mt-0.5">
                {pain.icon}
              </div>
              <p className="text-brand-navy font-medium text-lg leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
