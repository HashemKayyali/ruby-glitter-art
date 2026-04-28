import { motion, useScroll, useTransform } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { ImageCard } from './ImageCard';
import { Sparkles } from 'lucide-react';
import React, { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Specific transforms for floating cards
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const cards = siteContent.heroFloatingImages || [];

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50"
    >
      <motion.div style={{ y, opacity }} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 border border-pink-200/50 bg-white/80 backdrop-blur-md rounded-full mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-pink-600 font-bold glitter-text">
            {siteContent.hero.badge}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] max-w-4xl text-slate-800 mb-8"
        >
          {siteContent.hero.headline.split('\n')[0]}<span className="text-pink-400 align-top text-4xl animate-pulse">✨</span><br/>
          {siteContent.hero.headline.split('\n')[1] && (
            <span className="glitter-text pb-2 inline-block">
              {siteContent.hero.headline.split('\n')[1]}
            </span>
          )}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed font-medium"
        >
          {siteContent.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton href="#contact" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(244,114,182,0.6)] hover:bg-slate-800 transition-all glitter-border flex items-center justify-center gap-2">
            ✨ {siteContent.hero.primaryCta}
          </MagneticButton>
          <MagneticButton href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md border border-pink-300 font-bold rounded-full text-sm text-pink-600 hover:bg-pink-50 transition-colors shadow-sm flex items-center justify-center gap-2">
            {siteContent.hero.secondaryCta}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-70">
        {/* Desktop Cards (up to 8) */}
        {cards[0] && (
          <motion.div style={{ y: y1 }} className="hidden lg:block absolute top-[15%] left-[5%] w-48 h-64 rotate-[-8deg] opacity-80 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[0]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div style={{ y: y3, animationDelay: '1.2s' }} className="hidden lg:block absolute bottom-[20%] left-[15%] w-40 h-56 rotate-[5deg] opacity-70 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[1]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div style={{ y: y2, animationDelay: '2.5s' }} className="hidden lg:block absolute top-[25%] left-[25%] w-32 h-44 rotate-[-12deg] opacity-40 animate-float shadow-lg rounded-2xl overflow-hidden bg-white p-1 mix-blend-multiply">
            <ImageCard src={cards[2]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[3] && (
          <motion.div style={{ y: y1, animationDelay: '0.8s' }} className="hidden lg:block absolute top-[18%] right-[8%] w-52 h-64 rotate-[10deg] opacity-85 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[3]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[4] && (
          <motion.div style={{ y: y3, animationDelay: '1.8s' }} className="hidden lg:block absolute bottom-[25%] right-[22%] w-36 h-48 rotate-[-6deg] opacity-60 animate-float shadow-lg rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[4]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[5] && (
          <motion.div style={{ y: y2, animationDelay: '3s' }} className="hidden lg:block absolute top-[55%] right-[5%] w-40 h-52 rotate-[15deg] opacity-70 animate-float shadow-lg rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[5]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}
        {cards[6] && (
          <motion.div style={{ y: y4, animationDelay: '0.4s' }} className="hidden lg:block absolute top-[60%] left-[8%] w-36 h-48 rotate-[-15deg] opacity-50 animate-float shadow-lg rounded-2xl overflow-hidden bg-white p-1">
            <ImageCard src={cards[6]} priority className="shadow-sm rounded-xl overflow-hidden" />
          </motion.div>
        )}

        {/* Mobile Minimal Cards with more transparency */}
        {cards[0] && (
          <motion.div style={{ y: y1 }} className="lg:hidden absolute top-[10%] -left-[10%] w-28 h-36 rotate-[15deg] opacity-30 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply">
            <ImageCard src={cards[0]} priority className="shadow-sm rounded-lg overflow-hidden" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div style={{ y: y3, animationDelay: '1s' }} className="lg:hidden absolute top-[30%] -right-[15%] w-32 h-44 rotate-[-12deg] opacity-30 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply">
            <ImageCard src={cards[1]} priority className="shadow-sm rounded-lg overflow-hidden" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div style={{ y: y2, animationDelay: '2.5s' }} className="lg:hidden absolute bottom-[25%] -left-[12%] w-24 h-32 rotate-[-10deg] opacity-25 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply">
            <ImageCard src={cards[2]} priority className="shadow-sm rounded-lg overflow-hidden" />
          </motion.div>
        )}
      </div>
      
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1),_transparent_70%)] pointer-events-none z-0"></div>
    </section>
  );
};
