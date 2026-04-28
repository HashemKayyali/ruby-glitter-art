import React from 'react';
import { SectionHeading } from './SectionHeading';
import { motion, useReducedMotion } from 'motion/react';

interface MarqueeProps {
  id: string;
  title: string;
  description: string;
  images: { src: string; alt: string; category?: string }[];
  theme: "glitter" | "bride";
  direction?: "left" | "right";
}

export const AnimatedImageMarquee: React.FC<MarqueeProps> = ({ 
  id, 
  title, 
  description, 
  images, 
  theme,
  direction = "left" 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const themeClass = theme === "glitter" 
    ? "shadow-pink-100/40 hover:shadow-[0_0_25px_rgba(244,114,182,0.4)] border-pink-100 glitter-border"
    : "shadow-amber-100/40 hover:shadow-[0_0_25px_rgba(253,230,138,0.5)] border-amber-50 champagne-border";
  
  const fallbackGradient = theme === "glitter"
    ? "linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)"
    : "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)";

  // Duplicate images to create simple seamless loop
  const marqueeItems = [...images, ...images];

  return (
    <section id={id} className="py-24 relative overflow-hidden z-20">
      <SectionHeading 
        title={title}
        description={description}
      />
      
      <div className="mt-12 w-full overflow-hidden">
        {shouldReduceMotion ? (
          <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 max-w-7xl mx-auto hide-scrollbar pb-8">
            {images.map((img, idx) => (
              <MarqueeCard 
                key={`static-${idx}`} 
                img={img} 
                themeClass={themeClass} 
                fallbackGradient={fallbackGradient} 
              />
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-x-hidden group">
            <div className={`flex gap-6 sm:gap-8 px-4 w-max ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} group-hover:[animation-play-state:paused]`}>
              {marqueeItems.map((img, idx) => (
                <MarqueeCard 
                  key={`marquee-${idx}`} 
                  img={img} 
                  themeClass={themeClass} 
                  fallbackGradient={fallbackGradient} 
                />
              ))}
            </div>
            {/* Smooth Edge Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        )}
      </div>
    </section>
  );
};

const MarqueeCard: React.FC<{ img: any, themeClass: string, fallbackGradient: string }> = ({ img, themeClass, fallbackGradient }) => (
  <div className={`group/card relative w-[280px] sm:w-[320px] shrink-0 aspect-[4/5] rounded-3xl overflow-hidden bg-white border shadow-xl p-1 transition-all duration-500 ${themeClass}`}>
    {/* Outer Glow */}
    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none ${themeClass.split(' ').pop() || ''}`}></div>
    
    <div className="w-full h-full relative rounded-[22px] overflow-hidden bg-slate-50">
      <img 
        src={img.src} 
        alt={img.alt} 
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.style.background = fallbackGradient;
        }}
      />
      {/* Shine Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover/card:translate-x-full pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);
