'use client';

/** Card that tracks the cursor and feeds --mx/--my to the .hd-spot radial glow. */
export default function Spotlight({ children, className = '' }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={onMove} className={`hd-spot ${className}`}>
      {children}
    </div>
  );
}
