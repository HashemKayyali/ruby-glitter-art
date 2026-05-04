import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { Sparkles, Star, Wand2, PartyPopper, Heart, Crown } from 'lucide-react';

const ICONS = [Sparkles, Star, PartyPopper, Wand2, Crown, Heart];

export const GlitterSection = () => {
  return (
    <section id="glitter" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(252,231,243,0.4) 0%, transparent 70%)',
        }}
      />

      <SectionHeading
        eyebrow="✦ glitter art ✦"
        title={siteContent.glitterServices.title}
        description={siteContent.glitterServices.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteContent.glitterServices.items.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] group hover:bg-pink-50/60 transition-colors relative overflow-hidden border border-pink-100 shadow-xl shadow-pink-100/30 hover:-translate-y-1 duration-300"
              >
                <div className="absolute -right-12 -top-12 w-44 h-44 bg-pink-300/10 rounded-full blur-3xl group-hover:bg-pink-300/20 transition-colors pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all relative z-10 border border-pink-200/70 shadow-sm">
                  <Icon className="w-5 h-5 text-pink-500 drop-shadow-[0_0_8px_rgba(244,114,182,0.45)]" />
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-2 tracking-tight relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed relative z-10 font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
