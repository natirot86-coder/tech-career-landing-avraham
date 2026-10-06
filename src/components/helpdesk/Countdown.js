'use client';

import { useEffect, useState } from 'react';

const LABELS = ['ימים', 'שעות', 'דקות', 'שניות'];

function diff(target) {
  const ms = Math.max(new Date(target).getTime() - Date.now(), 0);
  return [Math.floor(ms / 864e5), Math.floor(ms / 36e5) % 24, Math.floor(ms / 6e4) % 60, Math.floor(ms / 1e3) % 60];
}

/** Live countdown to the cohort start. `cell` / `num` / `lbl` are class names per template. */
export default function Countdown({ target, cell = '', num = '', lbl = '' }) {
  const [parts, setParts] = useState(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex gap-2 md:gap-3" role="timer" aria-label="זמן עד פתיחת המחזור">
      {LABELS.map((label, i) => (
        <div key={label} className={cell}>
          <div className={`tabular-nums ${num}`}>{parts ? String(parts[i]).padStart(2, '0') : '--'}</div>
          <div className={lbl}>{label}</div>
        </div>
      ))}
    </div>
  );
}
