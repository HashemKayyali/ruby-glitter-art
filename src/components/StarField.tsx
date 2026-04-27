import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import React from 'react';

export const StarField = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; delay: number; size: number; color: string; blur: string; duration: number }[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 80 : 250; // Increased from 40 / 100 to 80 / 250
    
    // Soft, feminine glitter colors - but brighter and more vibrant
    const colors = [
      '#f472b6', // pink-400
      '#fbbf24', // amber-400 (gold-ish)
      '#e879f9', // fuchsia-400
      '#a78bfa', // violet-400
      '#fecdd3', // rose-200
      '#ffffff', // bright white
    ];
    
    const generated = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 1; // 1 to 5px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 120 - 10}%`,
        delay: Math.random() * 5,
        size: size,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.6 ? 'blur(1px)' : 'none',
        duration: Math.random() * 3 + 2, // 2 to 5 seconds (faster twinkling)
        shadowIntensity: Math.random() * 4 + 2 // 2 to 6px
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
            y: [0, -30, -60], // Float upwards faster
            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40], // Drift sideways
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
