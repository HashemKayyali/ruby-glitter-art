import { useEffect, useState } from 'react';
import React from 'react';

type Particle = {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: number;
  color: string;
  opacity: number;
};

// Lightweight CSS-only twinkles. No framer-motion per-particle (too heavy
// when there are dozens of them on screen at the same time).
export const StarField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduced) return;

    const count = isMobile ? 25 : 70;
    const colors = [
      '#f472b6',
      '#fbbf24',
      '#e879f9',
      '#a78bfa',
      '#fecdd3',
      '#ffffff',
    ];

    const generated: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 110 - 5}%`,
      delay: `${(Math.random() * 4).toFixed(2)}s`,
      duration: `${(Math.random() * 3 + 2.5).toFixed(2)}s`,
      size: Math.round(Math.random() * 3 + 1.5),
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.55 + Math.random() * 0.35,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full z-[1]">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
};
