import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import React from 'react';

type Particle = {
  id: number;
  left: string;
  top: string;
  delay: number;
  size: number;
  color: string;
  blur: string;
  duration: number;
  drift: number;
  shadowIntensity: number;
};

export const StarField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 45 : 180;

    const colors = [
      '#f472b6',
      '#fbbf24',
      '#e879f9',
      '#a78bfa',
      '#fecdd3',
      '#ffffff',
    ];

    const generated: Particle[] = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 1;
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 120 - 10}%`,
        delay: Math.random() * 5,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.6 ? 'blur(1px)' : 'none',
        duration: Math.random() * 3 + 2,
        drift: Math.random() * 40 - 20,
        shadowIntensity: Math.random() * 4 + 2,
      };
    });
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.shadowIntensity}px ${p.shadowIntensity / 2}px ${p.color}`,
            filter: p.blur,
          }}
          animate={{
            opacity: [0, 0.8, 1, 0.5, 0],
            scale: [0.2, 1.5, 1, 0.8, 0.2],
            y: [0, -30, -60],
            x: [0, p.drift, p.drift * 2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
