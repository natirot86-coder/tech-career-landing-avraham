'use client';

import { useState } from 'react';

const inputClass =
  'w-full border border-gray-300 rounded-lg px-4 py-3 text-corp-secondary placeholder-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus:border-corp-primary transition-colors';

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
      const utmSource = params.get('utm_source') || 'landing-page-avraham-v2';
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

      if (typeof window !== 'undefined') {
        if (window.gtag) {
          window.gtag('event', 'lead_submitted', { form_source: 'landing-page-avraham-v2' });
        }
        if (window.fbq) {
          window.fbq('track', 'Lead', { content_name: 'landing-page-avraham-v2' });
        }
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'אירעה שגיאה. אנא נסו שוב.');
    }
  };

  return (
    <section id="lead-form" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-corp-secondary tracking-tight">
            השאירו פרטים ויועצי הלימודים שלנו יחזרו אליכם
          </h2>
          <p className="text-gray-500 mt-3 text-lg">בלי התחייבות — שיחת ייעוץ ראשונית בחינם</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-corp-success/10 text-corp-success flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-corp-secondary tracking-tight mb-2">תודה!</h3>
              <p className="text-gray-500 text-lg">ניצור איתך קשר בקרוב.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label className="block text-corp-secondary font-semibold mb-2 text-sm" htmlFor="v2-name">
                  שם מלא <span className="text-corp-primary">*</span>
                </label>
                <input
                  id="v2-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="ישראל ישראלי"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-corp-secondary font-semibold mb-2 text-sm" htmlFor="v2-email">
                    אימייל <span className="text-corp-primary">*</span>
                  </label>
                  <input
                    id="v2-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="israel@example.com"
                    className={inputClass}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-corp-secondary font-semibold mb-2 text-sm" htmlFor="v2-phone">
                    טלפון <span className="text-corp-primary">*</span>
                  </label>
                  <input
                    id="v2-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="050-000-0000"
                    className={inputClass}
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-corp-secondary font-semibold mb-2 text-sm" htmlFor="v2-city">
                  עיר
                </label>
                <input
                  id="v2-city"
                  name="city"
                  type="text"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="תל אביב"
                  className={inputClass}
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-corp-danger rounded-lg px-4 py-3 text-sm">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full min-h-[44px] rounded-lg bg-corp-primary text-white font-semibold py-3.5 text-lg hover:bg-corp-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-corp-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
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
