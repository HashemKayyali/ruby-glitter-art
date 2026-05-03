import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { Heart, Flower2, Crown, Camera, Palette, Gem } from 'lucide-react';

const ICONS = [Heart, Flower2, Crown, Camera, Palette, Gem];

export const BrideRoomSection = () => {
  return (
    <section
      id="bride-room"
      className="py-16 sm:py-24 relative z-10 overflow-hidden bg-gradient-to-b from-amber-50/40 via-amber-50/15 to-transparent"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <SectionHeading
        eyebrow="✦ bride room ✦"
        title={siteContent.brideRoomServices.title}
        description={siteContent.brideRoomServices.description}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteContent.brideRoomServices.items.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/85 backdrop-blur-md p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] group hover:bg-amber-50/60 transition-colors relative overflow-hidden border border-amber-100 shadow-xl shadow-amber-100/30 hover:-translate-y-1 duration-300"
              >
                <div className="absolute -right-12 -top-12 w-44 h-44 bg-amber-200/10 rounded-full blur-3xl group-hover:bg-amber-200/20 transition-colors pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-all relative z-10 border border-amber-200/70 shadow-sm">
                  <Icon className="w-5 h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.45)]" />
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
