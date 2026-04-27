import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { Sparkles, ArrowRight } from 'lucide-react';
import React from 'react';

export const GlitterVibes = () => {
  return (
    <section id="vibes" className="py-32 relative">
      <SectionHeading 
        title={siteContent.vibes.title}
        description={siteContent.vibes.description}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.vibes.items.map((vibe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white p-1 border border-pink-100 shadow-lg shadow-pink-100/40 hover:shadow-xl hover:shadow-pink-200/50 transition-all"
            >
              <div className="bg-white rounded-[28px] p-8 h-full flex flex-col relative z-10 transition-colors group-hover:bg-pink-50/30">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 tracking-wide">
                    {vibe.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-100 transition-colors border border-pink-100">
                    <Sparkles className="w-4 h-4 text-pink-400 group-hover:text-pink-500 transition-colors" />
                  </div>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic font-medium">
                  "{vibe.description}"
                </p>

                <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-pink-500 uppercase tracking-widest hover:text-pink-600 transition-colors w-max py-2 px-4 rounded-full bg-pink-50 border border-pink-200">
                  Ask for this look
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
