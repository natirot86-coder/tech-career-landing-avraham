'use client';

import { useEffect, useState } from 'react';

const TICKETS = [
  { id: '#4821', title: 'משתמשת לא מצליחה להתחבר ל-VPN', tag: 'רשת', color: 'bg-sky-100 text-sky-700' },
  { id: '#4822', title: 'התקנת Office למחשב חדש', tag: 'תוכנה', color: 'bg-violet-100 text-violet-700' },
  { id: '#4823', title: 'איפוס סיסמה ב-Active Directory', tag: 'משתמשים', color: 'bg-amber-100 text-amber-700' },
  { id: '#4824', title: 'המדפסת בקומה 3 לא מגיבה', tag: 'חומרה', color: 'bg-rose-100 text-rose-700' },
  { id: '#4825', title: 'הרשאה לתיקייה משותפת', tag: 'הרשאות', color: 'bg-emerald-100 text-emerald-700' },
];

/** Animated "live help desk queue": a new ticket arrives and the oldest gets resolved. */
export default function TicketFeed() {
  const [start, setStart] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStart((s) => (s + 1) % TICKETS.length), 2600);
    return () => clearInterval(id);
  }, []);

  const visible = [0, 1, 2].map((k) => TICKETS[(start + k) % TICKETS.length]);

  return (
    <ul className="space-y-3" aria-hidden="true">
      {visible.map((t, k) => (
        <li
          key={`${t.id}-${start}`}
          style={{ animationDelay: `${k * 90}ms` }}
          className="hd-ticket-in flex items-center gap-3 bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm"
        >
          <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${k === 0 ? 'bg-green-500 hd-pulse-dot' : 'bg-slate-300'}`} />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold text-slate-800 truncate">{t.title}</p>
            <p className="text-[11px] text-slate-400 font-mono" dir="ltr">{t.id}</p>
          </div>
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${t.color}`}>{k === 0 ? 'נפתר ✓' : t.tag}</span>
        </li>
      ))}
    </ul>
  );
}
