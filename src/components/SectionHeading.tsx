import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import React from 'react';

export const SectionHeading = ({
  title,
  description,
  eyebrow,
  className,
  align = 'center',
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
}) => {
  const alignText = align === 'center' ? 'text-center' : 'text-left';
  const alignFlex = align === 'center' ? 'items-center' : 'items-start';

  return (
    <div
      className={cn(
        'max-w-2xl mx-auto mb-12 sm:mb-16 px-4 flex flex-col gap-3',
        alignFlex,
        alignText,
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="ornament-line"
      >
        <span className="font-script text-pink-500/80 text-2xl sm:text-3xl leading-none tracking-wide">
          {eyebrow ?? '✦ ruby arts ✦'}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl sm:text-4xl md:text-5xl md:leading-tight font-heading font-extrabold tracking-tight text-slate-900"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
