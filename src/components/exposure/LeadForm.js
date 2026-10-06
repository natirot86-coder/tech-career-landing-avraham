'use client';

import { useState } from 'react';
import SpotsBar from './SpotsBar';
import Confetti from './Confetti';

function downloadCalendarInvite() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Tech-Career//InTech//HE',
    'BEGIN:VEVENT',
    'UID:tech-career-intech-opening-20261025@tech-career.org',
    'DTSTART;TZID=Asia/Jerusalem:20261025T193000',
    'DTEND;TZID=Asia/Jerusalem:20261025T210000',
    'SUMMARY:מפגש פתיחה - InTech',
    'DESCRIPTION:מפגש פתיחה והיכרות עם תוכנית InTech מבית טק-קריירה ומשרד העבודה. ללא עלות, ללא התחייבות.',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'מפגש-פתיחה-InTech.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case 'name':
      return v.length >= 2 ? '' : 'נא להזין שם מלא';
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'נא להזין כתובת אימייל תקינה';
    case 'phone':
      return /^0\d{8,9}$/.test(v.replace(/\D/g, '')) ? '' : 'נא להזין מספר טלפון תקין (למשל 0501234567)';
    default:
      return '';
  }
}

const REQUIRED_FIELDS = ['name', 'email', 'phone'];

const inputClass = (hasError) =>
  `w-full bg-white border rounded-xl px-4 py-3 text-warm-ink placeholder-warm-muted focus:outline-none focus-visible:ring-2 transition-colors ${
    hasError ? 'border-red-400 focus-visible:ring-red-400' : 'border-transparent focus-visible:ring-brand-orange'
  }`;

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!REQUIRED_FIELDS.includes(name)) return;
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const nextErrors = {};
    REQUIRED_FIELDS.forEach((name) => {
      nextErrors[name] = validateField(name, form[name]);
    });
    setFieldErrors(nextErrors);

    const firstInvalid = REQUIRED_FIELDS.find((name) => nextErrors[name]);
    if (firstInvalid) {
      document.getElementById(`exp-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('loading');

    try {
      const params = new URLSearchParams(window.location.search);
      const utmSource = params.get('utm_source') || 'landing-page-exposure';
      const utmCampaign = params.get('utm_campaign') || 'תוכנית חשיפה';
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
          window.gtag('event', 'lead_submitted', { form_source: 'landing-page-exposure' });
        }
        if (window.fbq) {
          window.fbq('track', 'Lead', { content_name: 'landing-page-exposure' });
        }
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'אירעה שגיאה. אנא נסו שוב.');
    }
  };

  const renderFieldError = (name) =>
    fieldErrors[name] ? (
      <p id={`${name}-error`} role="alert" className="text-red-300 text-xs mt-1.5">
        {fieldErrors[name]}
      </p>
    ) : null;

  return (
    <section id="lead-form" className="py-24 bg-warm-ink">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-brand-orange text-sm font-bold">בואו נסגור פינה</span>
          <h2 className="font-display font-black tracking-tight text-3xl md:text-5xl text-white leading-tight mt-3">
            שריינו מקום במפגש הפתיחה
          </h2>
          <p className="text-white/60 mt-3 text-lg">בלי עלות, בלי התחייבות — 5 מפגשים שיכולים לפתוח לכם דלת לעולם ההייטק</p>
        </div>

        <div className="bg-white rounded-2xl p-5 mb-6">
          <SpotsBar />
        </div>

        {status === 'success' ? (
          <div className="text-center py-8">
            <Confetti />
            <div className="w-16 h-16 rounded-full bg-brand-orange/15 text-brand-orange flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-black tracking-tight text-2xl text-white mb-2">שריינו לכם מקום!</h3>
            <p className="text-white/60 text-lg mb-6">ניצור איתכם קשר לתיאום הפרטים הסופיים לפני מפגש הפתיחה.</p>
            <button
              onClick={downloadCalendarInvite}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full border-2 border-white/30 text-white font-bold px-6 hover:bg-white hover:text-warm-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-ink transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              הוסיפו ליומן
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-white/70 font-bold mb-2 text-sm" htmlFor="exp-name">
                שם מלא <span className="text-brand-orange">*</span>
              </label>
              <input
                id="exp-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="ישראל ישראלי"
                className={inputClass(!!fieldErrors.name)}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? 'name-error' : undefined}
              />
              {renderFieldError('name')}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 font-bold mb-2 text-sm" htmlFor="exp-email">
                  אימייל <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="exp-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="israel@example.com"
                  className={inputClass(!!fieldErrors.email)}
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                  dir="ltr"
                />
                {renderFieldError('email')}
              </div>

              <div>
                <label className="block text-white/70 font-bold mb-2 text-sm" htmlFor="exp-phone">
                  טלפון <span className="text-brand-orange">*</span>
                </label>
                <input
                  id="exp-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="050-000-0000"
                  className={inputClass(!!fieldErrors.phone)}
                  aria-invalid={!!fieldErrors.phone}
                  aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
                  dir="ltr"
                />
                {renderFieldError('phone')}
              </div>
            </div>

            <div>
              <label className="block text-white/70 font-bold mb-2 text-sm" htmlFor="exp-city">
                עיר
              </label>
              <input
                id="exp-city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
                placeholder="תל אביב"
                className={inputClass(false)}
              />
            </div>

            {status === 'error' && (
              <div role="alert" className="bg-red-500/10 border border-red-400/30 text-red-300 rounded-xl px-4 py-3 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full min-h-[44px] rounded-full bg-brand-orange text-white font-bold py-3.5 text-lg shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-warm-ink disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? 'שולח...' : 'שריינו לי מקום ←'}
            </button>

            <p className="text-center text-white/40 text-xs">הפרטים שלכם מאובטחים ולא יועברו לגורם שלישי</p>
          </form>
        )}
      </div>
    </section>
  );
}
