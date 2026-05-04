import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { ArrowRight } from 'lucide-react';

export const EventStyles = () => {
  return (
    <section id="styles" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent pointer-events-none" />

      <SectionHeading
        eyebrow="✦ pick your mood ✦"
        title={siteContent.eventStyles.title}
        description={siteContent.eventStyles.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteContent.eventStyles.items.map((style, index) => {
            const isBride = style.service === 'Bride Room Decoration';
            const borderClass = isBride ? 'border-amber-200' : 'border-pink-200';
            const hoverClass = isBride
              ? 'hover:border-amber-400 shadow-amber-200/20 hover:shadow-amber-200/40'
              : 'hover:border-pink-400 shadow-pink-200/20 hover:shadow-pink-200/40';
            const textClass = isBride
              ? 'text-amber-600 bg-amber-50 border-amber-200/70'
              : 'text-pink-600 bg-pink-50 border-pink-200/70';
            const accentDot = isBride ? 'bg-amber-400' : 'bg-pink-400';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`soft-card p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] hover:-translate-y-1 transition-all duration-300 shadow-xl border ${borderClass} ${hoverClass} group relative overflow-hidden`}
              >
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 opacity-50 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)',
                  }}
                />

                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`inline-block w-2 h-2 rounded-full ${accentDot} animate-pulse`}
                  />
                  <span
                    className={`inline-block px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full border ${textClass}`}
                  >
                    {style.service}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-800 mb-2 tracking-tight">
                  {style.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-5 sm:mb-6">
                  {style.description}
                </p>

                <a
                  href={siteContent.brandDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-pink-500 transition-colors"
                >
                  Ask for this style
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
