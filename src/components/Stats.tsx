import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import React from 'react';

export const Stats = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteContent.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-pink-100 shadow-xl shadow-pink-100/50 p-6 sm:p-8 rounded-2xl text-center relative overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className={`relative z-10 text-4xl sm:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br ${index === 0 ? 'from-pink-500 to-rose-400' : index === 1 ? 'from-violet-500 to-fuchsia-400' : index === 2 ? 'from-blue-500 to-cyan-400' : 'from-amber-400 to-orange-400'}`}>
                {stat.value}
              </h4>
              <p className="relative z-10 text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
