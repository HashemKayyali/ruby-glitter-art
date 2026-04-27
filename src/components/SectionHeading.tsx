import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import React from 'react';

export const SectionHeading = ({ 
  title, 
  description, 
  className 
}: { 
  title: React.ReactNode; 
  description?: React.ReactNode; 
  className?: string;
}) => {
  return (
    <div className={cn("text-center max-w-2xl mx-auto mb-16 px-4", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl md:leading-tight font-bold mb-6 text-slate-900"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
