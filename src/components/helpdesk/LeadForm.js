'use client';

import { useState } from 'react';
import { course } from './content';

/**
 * Lead form shared by all Help Desk templates.
 * Posts to /api/submit, which creates the item on the Monday.com board.
 * `theme` only changes styling — the payload is identical for every template.
 */

const THEMES = {
  aurora: {
    card: 'hd-glass rounded-[28px] p-6 md:p-8',
    label: 'text-white/80',
    input: 'bg-white/10 border border-white/15 text-white placeholder-white/40 focus-visible:ring-fuchsia-400 rounded-2xl',
    button: 'hd-btn-aurora rounded-2xl text-white',
    note: 'text-white/50',
    error: 'text-rose-300',
    title: 'text-white',
    ring: 'focus-visible:ring-offset-transparent',
  },
  bento: {
    card: 'bg-white rounded-[28px] p-6 md:p-8 shadow-[0_30px_80px_-30px_rgba(26,35,64,.35)] border border-slate-200',
    label: 'text-slate-700',
    input: 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus-visible:ring-[#E84C1E] rounded-xl',
    button: 'bg-[#E84C1E] hover:bg-[#C73E17] rounded-xl text-white shadow-lg shadow-[#E84C1E]/30',
    note: 'text-slate-500',
    error: 'text-red-600',
    title: 'text-slate-900',
    ring: 'focus-visible:ring-offset-white',
  },
  terminal: {
    card: 'bg-[#0b1220] border border-emerald-400/30 rounded-xl p-6 md:p-8 shadow-[0_0_60px_-15px_rgba(52,211,153,.45)]',
    label: 'text-emerald-300',
    input: 'bg-black/40 border border-emerald-400/25 text-emerald-50 placeholder-emerald-200/30 focus-visible:ring-emerald-400 rounded-md',
    button: 'bg-emerald-400 hover:bg-emerald-300 text-[#04120c] rounded-md shadow-[0_0_40px_-8px_rgba(52,211,153,.8)]',
    note: 'text-emerald-200/50',
    error: 'text-rose-400',
    title: 'text-emerald-50',
    ring: 'focus-visible:ring-offset-[#0b1220]',
  },
};

function validate(name, value) {
  const v = value.trim();
  if (name === 'name') return v.length >= 2 ? '' : 'נא להזין שם מלא';
  if (name === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'נא להזין אימייל תקין';
  if (name === 'phone') return /^0\d{8,9}$/.test(v.replace(/\D/g, '')) ? '' : 'נא להזין טלפון תקין (למשל 0501234567)';
  return '';
}

const REQUIRED = ['name', 'email', 'phone'];

export default function LeadForm({ theme = 'aurora', title = 'השאירו פרטים ונחזור אליכם', idPrefix = 'hd' }) {
  const t = THEMES[theme];
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };
  const onBlur = (e) => {
    const { name, value } = e.target;
    if (REQUIRED.includes(name)) setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = Object.fromEntries(REQUIRED.map((n) => [n, validate(n, form[n])]));
    setErrors(next);
    const bad = REQUIRED.find((n) => next[n]);
    if (bad) {
      document.getElementById(`${idPrefix}-${bad}`)?.focus();
      return;
    }

    setStatus('loading');
    setMsg('');
    try {
      const params = new URLSearchParams(window.location.search);
      const source = `${course.utmSource}-${theme}`;
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          utmSource: params.get('utm_source') || source,
          utmCampaign: params.get('utm_campaign') || course.utmCampaign,
          utmContent: params.get('utm_content') || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'שגיאה בשליחה');
      }
      setStatus('success');
      window.gtag?.('event', 'lead_submitted', { form_source: source });
      window.fbq?.('track', 'Lead', { content_name: source });
    } catch (err) {
      setStatus('error');
      setMsg(err.message || 'אירעה שגיאה. נסו שוב.');
    }
  };

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`${idPrefix}-${name}`} className={`block text-sm font-bold mb-2 ${t.label}`}>
        {label} {REQUIRED.includes(name) && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={`${idPrefix}-${name}`}
        name={name}
        value={form[name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${idPrefix}-${name}-err` : undefined}
        className={`w-full px-4 py-3 min-h-[48px] outline-none focus-visible:ring-2 transition ${t.input} ${errors[name] ? '!border-rose-400' : ''}`}
        {...props}
      />
      {errors[name] && (
        <p id={`${idPrefix}-${name}-err`} role="alert" className={`text-xs mt-1.5 ${t.error}`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (status === 'success') {
    return (
      <div className={`${t.card} text-center`} role="status">
        <div className="hd-pop mx-auto mb-5 w-16 h-16 rounded-full bg-emerald-400/20 text-emerald-400 grid place-items-center">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-black mb-2 ${t.title}`}>תודה! הפרטים התקבלו</h3>
        <p className={t.note}>נציג/ת טק-קריירה יחזרו אליך בימים הקרובים.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={`${t.card} space-y-4`}>
      <h3 className={`text-2xl font-black ${t.title}`}>{title}</h3>
      {field('name', 'שם מלא', { type: 'text', autoComplete: 'name', placeholder: 'ישראל ישראלי' })}
      <div className="grid sm:grid-cols-2 gap-4">
        {field('phone', 'טלפון', { type: 'tel', inputMode: 'tel', autoComplete: 'tel', placeholder: '050-000-0000', dir: 'ltr' })}
        {field('email', 'אימייל', { type: 'email', autoComplete: 'email', placeholder: 'name@example.com', dir: 'ltr' })}
      </div>
      {field('city', 'עיר מגורים', { type: 'text', autoComplete: 'address-level2', placeholder: 'עיר' })}
      {status === 'error' && (
        <p role="alert" className={`text-sm ${t.error}`}>
          {msg}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full min-h-[52px] font-black text-lg transition active:scale-[.98] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${t.button} ${t.ring}`}
      >
        {status === 'loading' ? 'שולח...' : course.cta}
      </button>
      <p className={`text-xs text-center ${t.note}`}>הפרטים מאובטחים ולא יועברו לגורם שלישי</p>
    </form>
  );
}
