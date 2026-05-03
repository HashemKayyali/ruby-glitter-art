import React from 'react';
import { motion } from 'motion/react';

type Tone = 'rose' | 'champagne' | 'lavender';

const TONES: Record<Tone, string> = {
  rose: '#f472b6',
  champagne: '#fcd34d',
  lavender: '#a78bfa',
};

export const SectionDivider: React.FC<{ tone?: Tone; flip?: boolean }> = ({
  tone = 'rose',
  flip = false,
}) => {
  const color = TONES[tone];
  return (
    <div
      className="relative w-full h-12 sm:h-16 flex items-center justify-center pointer-events-none"
      aria-hidden
    >
      <motion.svg
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        viewBox="0 0 320 40"
        className={`w-[260px] sm:w-[340px] h-auto ${flip ? 'rotate-180' : ''}`}
        fill="none"
      >
        <path
          d="M5 20 C 60 4, 110 36, 160 20 S 260 4, 315 20"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="160" cy="20" r="3.2" fill={color} opacity="0.85" />
        <circle cx="100" cy="14" r="1.6" fill={color} opacity="0.6" />
        <circle cx="220" cy="26" r="1.6" fill={color} opacity="0.6" />
        <path
          d="M155 14 L160 4 L165 14 L175 18 L165 22 L160 32 L155 22 L145 18 Z"
          fill={color}
          opacity="0.18"
        />
      </motion.svg>
    </div>
  );
};
