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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const cards = siteContent.heroImages.slice(0, 4);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 border border-pink-200/50 bg-pink-50/50 backdrop-blur-sm rounded-full mb-6 shadow-sm"
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
          className="max-w-xl mx-auto text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed font-medium"
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
          <MagneticButton href="#gallery" className="w-full sm:w-auto px-8 py-4 bg-white/50 backdrop-blur-md border border-pink-300 font-bold rounded-full text-sm text-pink-600 hover:bg-pink-50 transition-colors shadow-sm flex items-center justify-center gap-2">
            {siteContent.hero.secondaryCta}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Desktop Cards */}
        {cards[0] && (
          <motion.div style={{ y: y1 }} className="hidden lg:block absolute top-[20%] left-[8%] w-56 h-72 rotate-[-6deg] opacity-80 animate-float">
            <ImageCard src={cards[0]} priority className="shadow-2xl brightness-90" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div style={{ y: y3 }} className="hidden lg:block absolute bottom-[15%] right-[10%] w-60 h-64 rotate-[8deg] opacity-80 animate-float" style={{ animationDelay: '1.5s' }}>
            <ImageCard src={cards[1]} priority className="shadow-2xl brightness-90" />
          </motion.div>
        )}

        {/* Mobile Minimal Cards with more transparency */}
        {cards[0] && (
          <motion.div style={{ y: y1 }} className="lg:hidden absolute top-[10%] -left-[10%] w-28 h-36 rotate-[15deg] opacity-40 animate-float mix-blend-multiply">
            <ImageCard src={cards[0]} priority className="shadow-sm" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div style={{ y: y3 }} className="lg:hidden absolute top-[30%] -right-[15%] w-32 h-44 rotate-[-12deg] opacity-40 animate-float mix-blend-multiply" style={{ animationDelay: '1s' }}>
            <ImageCard src={cards[1]} priority className="shadow-sm" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div style={{ y: y2 }} className="lg:hidden absolute bottom-[25%] -left-[12%] w-24 h-32 rotate-[-10deg] opacity-35 animate-float mix-blend-multiply" style={{ animationDelay: '2.5s' }}>
            <ImageCard src={cards[2]} priority className="shadow-sm" />
          </motion.div>
        )}
        {cards[3] && (
          <motion.div style={{ y: y1 }} className="lg:hidden absolute bottom-[10%] -right-[10%] w-28 h-36 rotate-[20deg] opacity-35 animate-float mix-blend-multiply" style={{ animationDelay: '1.5s' }}>
            <ImageCard src={cards[3]} priority className="shadow-sm" />
          </motion.div>
        )}
      </div>
      
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),_transparent_70%)] pointer-events-none z-0"></div>
    </section>
  );
};
