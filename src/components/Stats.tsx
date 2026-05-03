import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import React from 'react';

const GRADIENTS = [
  'from-pink-500 to-rose-400',
  'from-violet-500 to-fuchsia-400',
  'from-blue-500 to-cyan-400',
  'from-amber-400 to-orange-400',
];

export const Stats = () => {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {siteContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="soft-card p-5 sm:p-7 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/0 via-transparent to-pink-50/0 group-hover:from-pink-50/60 transition-all duration-500" />
              <h4
                className={`relative z-10 text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-1 sm:mb-2 text-transparent bg-clip-text bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
              >
                {stat.value}
              </h4>
              <p className="relative z-10 text-[9px] sm:text-[11px] text-slate-500 uppercase tracking-[0.18em] sm:tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
