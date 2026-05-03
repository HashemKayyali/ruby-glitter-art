import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

export const WhyBook = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none mix-blend-multiply" />
      <div className="absolute -top-20 left-0 w-80 h-80 bg-violet-200/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <SectionHeading
        eyebrow="✦ why ruby arts ✦"
        title={siteContent.whyBook.title}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {siteContent.whyBook.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="soft-card p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 group hover:shadow-lg hover:shadow-pink-100/50 transition-all"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-50 border border-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
