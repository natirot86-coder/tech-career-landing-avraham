'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#0066FF', '#171A21', '#8A8A93', '#FFFFFF', '#5FA8FF'];

export default function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 110 }, () => ({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
      y: window.innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 7 + 4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.3,
      gravity: 0.35 + Math.random() * 0.15,
    }));

    let frame;
    let running = true;
    const start = performance.now();

    const tick = (now) => {
      if (!running) return;
      const elapsed = now - start;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((p) => {
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      });

      if (elapsed < 2600) {
        frame = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none"
    />
  );
}
