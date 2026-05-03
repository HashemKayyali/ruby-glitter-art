import { motion, useScroll, useTransform } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { ImageCard } from './ImageCard';
import { Sparkles, ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const cards = siteContent.heroFloatingImages || [];
  const headline = siteContent.hero.headline.split('\n');

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* soft layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/40 via-white to-amber-50/30 -z-0" />
      <div className="absolute inset-0 dot-pattern opacity-50 -z-0" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 border border-pink-200/60 bg-white/80 backdrop-blur-md rounded-full mb-5 sm:mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-500" />
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-pink-600 font-bold glitter-text">
            {siteContent.hero.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-script text-pink-500/80 text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3"
        >
          a little sparkle, a lot of love
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[80px] font-heading font-extrabold tracking-tight max-w-4xl text-slate-800 mb-5 sm:mb-8"
        >
          {headline[0]}
          <span className="text-pink-400 align-top text-3xl sm:text-4xl ml-1 animate-pulse">
            ✨
          </span>
          <br />
          {headline[1] && (
            <span className="glitter-text pb-2 inline-block hand-underline">
              {headline[1]}
            </span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed font-medium px-2"
        >
          {siteContent.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto"
        >
          <MagneticButton
            href="#contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-slate-900 text-white font-bold rounded-full text-sm hover:shadow-[0_0_25px_rgba(244,114,182,0.55)] hover:bg-slate-800 transition-all glitter-border flex items-center justify-center gap-2"
          >
            ✨ {siteContent.hero.primaryCta}
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white/85 backdrop-blur-md border border-pink-300 font-bold rounded-full text-sm text-pink-600 hover:bg-pink-50 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            {siteContent.hero.secondaryCta}
          </MagneticButton>
        </motion.div>

        {/* scroll cue */}
        <motion.a
          href="#services"
          aria-label="Scroll to services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden sm:flex flex-col items-center gap-2 mt-14 text-slate-400"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Floating image cards (desktop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 opacity-80">
        {cards[0] && (
          <motion.div
            style={{ y: y1 }}
            className="hidden lg:block absolute top-[15%] left-[5%] w-44 h-60 rotate-[-8deg] opacity-90 animate-float-slow shadow-2xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[0]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div
            style={{ y: y3, animationDelay: '1.2s' }}
            className="hidden lg:block absolute bottom-[18%] left-[14%] w-40 h-56 rotate-[6deg] opacity-80 animate-float shadow-2xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[1]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div
            style={{ y: y2, animationDelay: '2.5s' }}
            className="hidden xl:block absolute top-[28%] left-[24%] w-32 h-44 rotate-[-12deg] opacity-50 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1 mix-blend-multiply"
          >
            <ImageCard src={cards[2]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[3] && (
          <motion.div
            style={{ y: y1, animationDelay: '0.8s' }}
            className="hidden lg:block absolute top-[14%] right-[6%] w-48 h-60 rotate-[10deg] opacity-90 animate-float-slow shadow-2xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[3]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[4] && (
          <motion.div
            style={{ y: y3, animationDelay: '1.8s' }}
            className="hidden lg:block absolute bottom-[22%] right-[18%] w-36 h-48 rotate-[-6deg] opacity-65 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[4]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[5] && (
          <motion.div
            style={{ y: y2, animationDelay: '3s' }}
            className="hidden lg:block absolute top-[55%] right-[4%] w-40 h-52 rotate-[14deg] opacity-75 animate-float-slow shadow-xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[5]} priority className="rounded-xl" />
          </motion.div>
        )}
        {cards[6] && (
          <motion.div
            style={{ y: y4, animationDelay: '0.4s' }}
            className="hidden xl:block absolute top-[60%] left-[7%] w-36 h-48 rotate-[-15deg] opacity-55 animate-float shadow-xl rounded-2xl overflow-hidden bg-white p-1"
          >
            <ImageCard src={cards[6]} priority className="rounded-xl" />
          </motion.div>
        )}

        {/* Mobile minimal cards */}
        {cards[0] && (
          <motion.div
            style={{ y: y1 }}
            className="lg:hidden absolute top-[8%] -left-[14%] w-28 h-36 rotate-[15deg] opacity-30 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply"
          >
            <ImageCard src={cards[0]} priority className="rounded-lg" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div
            style={{ y: y3, animationDelay: '1s' }}
            className="lg:hidden absolute top-[28%] -right-[14%] w-32 h-44 rotate-[-12deg] opacity-30 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply"
          >
            <ImageCard src={cards[1]} priority className="rounded-lg" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div
            style={{ y: y2, animationDelay: '2.5s' }}
            className="lg:hidden absolute bottom-[20%] -left-[12%] w-24 h-32 rotate-[-10deg] opacity-25 animate-float rounded-xl overflow-hidden bg-white p-1 mix-blend-multiply"
          >
            <ImageCard src={cards[2]} priority className="rounded-lg" />
          </motion.div>
        )}
      </div>

      {/* radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_70%)] pointer-events-none z-0" />
    </section>
  );
};
