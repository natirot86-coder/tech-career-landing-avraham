'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get('utm_source') || 'landing-page-avraham';
      const utmCampaign = params.get('utm_campaign') || undefined;
      const utmContent = params.get('utm_content') || undefined;

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, utmSource, utmCampaign, utmContent }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'שגיאה בשליחה');
      }

      setStatus('success');

      // Fire analytics events if available
      if (typeof window !== 'undefined') {
        if (window.gtag) {
          window.gtag('event', 'lead_submitted', { form_source: 'landing-page-avraham' });
        }
        if (window.fbq) {
          window.fbq('track', 'Lead', { content_name: 'landing-page-avraham' });
        }
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'אירעה שגיאה. אנא נסו שוב.');
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-brand-gray">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">השאירו פרטים ויועצי הלימודים שלנו יחזרו אליכם</h2>
          <p className="text-brand-gray-mid mt-3 text-lg">
            בלי התחייבות — שיחת ייעוץ ראשונית בחינם
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-5">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-2">תודה!</h3>
              <p className="text-brand-gray-mid text-lg">
                ניצור איתך קשר בקרוב.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-brand-navy font-semibold mb-2 text-sm" htmlFor="name">
                  שם מלא <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="ישראל ישראלי"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                />
              </div>

              <div>
                <label className="block text-brand-navy font-semibold mb-2 text-sm" htmlFor="email">
                  אימייל <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="israel@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-brand-navy font-semibold mb-2 text-sm" htmlFor="phone">
                  טלפון <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="050-000-0000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-brand-navy font-semibold mb-2 text-sm" htmlFor="city">
                  עיר
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="תל אביב"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-brand-navy placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-colors"
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-center py-4 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'שולח...' : 'שלחו לי פרטים'}
              </button>

              <p className="text-center text-gray-400 text-xs">
                הפרטים שלכם מאובטחים ולא יועברו לגורם שלישי
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
