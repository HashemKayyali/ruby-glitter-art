import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

export const SignatureServices = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative z-20">
      <SectionHeading
        eyebrow="✦ what we do ✦"
        title="Our Signature Services"
        description="Two creative services designed to make your special moments sparkle, shine, and feel unforgettable."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-5 sm:gap-7 md:gap-8 justify-center items-stretch mt-8 sm:mt-12 w-full">
          {siteContent.signatureServices.map((service, index) => {
            const isBride = service.id === 'bride-room';
            const borderClass = isBride
              ? 'champagne-border shadow-amber-100/30 hover:shadow-[0_0_45px_rgba(253,230,138,0.45)]'
              : 'glitter-border shadow-pink-100/30 hover:shadow-[0_0_45px_rgba(244,114,182,0.45)]';
            const badgeClass = isBride
              ? 'text-amber-100 bg-amber-900/35 border-amber-200/35'
              : 'text-pink-100 bg-pink-900/35 border-pink-200/35';
            const Icon = isBride ? Heart : Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative flex-1 min-w-[260px] sm:min-w-[320px] rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-square lg:aspect-[4/5] ${borderClass} transition-all duration-500`}
              >
                <div className="absolute inset-0 bg-slate-100 w-full h-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (
                        service.id === 'glitter' &&
                        siteContent.glitterGalleryImages[0]
                      ) {
                        target.src = siteContent.glitterGalleryImages[0].src;
                      } else if (
                        service.id === 'bride-room' &&
                        siteContent.brideRoomGalleryImages[0]
                      ) {
                        target.src = siteContent.brideRoomGalleryImages[0].src;
                      } else {
                        target.style.display = 'none';
                        target.parentElement!.style.background =
                          'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)';
                      }
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                {/* corner ornament */}
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Icon className="w-4 h-4 text-white" />
                </div>

                <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end items-center text-center z-20">
                  <span
                    className={`inline-block px-3 py-1 mb-3 sm:mb-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md border rounded-full ${badgeClass}`}
                  >
                    {service.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-pink-50 mb-5 sm:mb-6 max-w-sm mx-auto leading-relaxed opacity-95 drop-shadow-sm">
                    {service.description}
                  </p>

                  <a
                    href={service.target}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 group/cta"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
