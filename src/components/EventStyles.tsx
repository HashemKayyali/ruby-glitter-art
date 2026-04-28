import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';

export const EventStyles = () => {
  return (
    <section id="styles" className="py-24 relative overflow-hidden bg-slate-50">
      <SectionHeading 
        title={siteContent.eventStyles.title}
        description={siteContent.eventStyles.description}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.eventStyles.items.map((style, index) => {
            const isBride = style.service === "Bride Room Decoration";
            const borderClass = isBride ? "border-amber-200" : "border-pink-200";
            const hoverClass = isBride ? "hover:border-amber-400 shadow-amber-200/20" : "hover:border-pink-400 shadow-pink-200/20";
            const textClass = isBride ? "text-amber-500 bg-amber-50" : "text-pink-500 bg-pink-50";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-[32px] hover:-translate-y-2 transition-all duration-300 shadow-xl border ${borderClass} ${hoverClass} group`}
              >
                <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full ${textClass}`}>
                  {style.service}
                </div>
                <h3 className="text-2xl font-heading font-extrabold text-slate-800 mb-3 tracking-wide">
                  {style.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  {style.description}
                </p>
                
                <a 
                  href={siteContent.brandDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-pink-500 transition-colors"
                >
                  Ask for this style <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
