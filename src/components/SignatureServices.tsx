import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export const SignatureServices = () => {
  return (
    <section id="services" className="py-24 relative z-20">
      <SectionHeading 
        title="Our Signature Services" 
        description="Two creative services designed to make your special moments sparkle, shine, and feel unforgettable." 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch mt-12 w-full">
          {siteContent.signatureServices.map((service, index) => {
            const isBride = service.id === "bride-room";
            const borderClass = isBride ? "champagne-border shadow-amber-100/30 hover:shadow-[0_0_40px_rgba(253,230,138,0.4)]" : "glitter-border shadow-pink-100/30 hover:shadow-[0_0_40px_rgba(244,114,182,0.4)]";
            const badgeClass = isBride ? "text-amber-200 bg-amber-900/30 border-amber-300/30" : "text-pink-200 bg-pink-900/30 border-pink-300/30";
            
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group relative flex-1 min-w-[280px] sm:min-w-[320px] rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-square lg:aspect-[4/5] ${borderClass} transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-slate-100 w-full h-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback using the first image from the respective gallery if available
                    if (service.id === "glitter" && siteContent.glitterGalleryImages[0]) {
                      target.src = siteContent.glitterGalleryImages[0].src;
                    } else if (service.id === "bride-room" && siteContent.brideRoomGalleryImages[0]) {
                      target.src = siteContent.brideRoomGalleryImages[0].src;
                    } else {
                      // Final fallback is a nice gradient so it doesn't break
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)';
                    }
                  }}
                />
              </div>

              {/* Overlays for contrast */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end items-center text-center z-20">
                <span className={`inline-block px-3 py-1 mb-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md border rounded-full ${badgeClass}`}>
                  {service.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-pink-50 mb-6 max-w-sm mx-auto leading-relaxed opacity-90 drop-shadow-sm">
                  {service.description}
                </p>
                
                <a 
                  href={service.target}
                  className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
                >
                  {service.cta}
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
