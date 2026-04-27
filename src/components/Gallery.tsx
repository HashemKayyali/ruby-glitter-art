import React from 'react';
import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';
import { ImageCard } from './ImageCard';

export const Gallery = () => {
  // Extract just the sources from galleryImages
  const images = siteContent.galleryImages.map(img => img.src);
  
  // Duplicate for a seamless infinite scroll loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      <SectionHeading 
        title="Glitter in Action"
        description="A look into sparkling details, creative faces, and unforgettable event moments."
      />
      
      <div className="relative z-10 w-full flex items-center justify-center py-8 mt-10">
        <div 
          className="w-full max-w-7xl mx-auto px-4"
          style={{ 
            maskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-8">
            {duplicatedImages.map((src, index) => (
              <div 
                key={index} 
                className="w-[280px] h-[400px] md:w-[320px] md:h-[460px] flex-shrink-0 transition-all duration-500 hover:scale-105 rounded-3xl border border-pink-300 p-2 bg-white shadow-[0_0_25px_rgba(244,114,182,0.5)] group relative"
              >
                <div className="absolute inset-0 rounded-3xl glitter-border opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="w-full h-full relative rounded-[18px] overflow-hidden bg-slate-100">
                  <img 
                    src={src} 
                    alt={`Glitter Gallery ${index}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
