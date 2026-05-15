import { motion, useScroll, useTransform } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { ImageCard } from './ImageCard';
import { Sparkles, ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';
import heroBackground from '../assets/images/hero.png';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const cards = siteContent.heroFloatingImages || [];
  const headline = siteContent.hero.headline.split('\n');

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative isolate min-h-[100svh] flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 scale-[1.04] bg-cover bg-center blur-[3px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,23,42,0.50)_0%,rgba(88,28,68,0.30)_42%,rgba(255,250,253,0.78)_100%)]"
        aria-hidden="true"
      />

      {/* soft layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/20 via-white/55 to-amber-50/30 -z-0" />
      <div className="absolute inset-0 dot-pattern opacity-35 -z-0" />

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
            className="pointer-events-auto hidden aspect-[3/4] rotate-[-7deg] opacity-75 transition-transform duration-500 hover:scale-105 hover:rotate-0 lg:absolute lg:left-[5%] lg:top-[12%] lg:block lg:w-36 xl:top-[16%] xl:w-44 xl:opacity-90 animate-float-slow"
          >
            <ImageCard src={cards[0]} priority />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div
            style={{ y: y3, animationDelay: '1.2s' }}
            className="pointer-events-auto hidden aspect-[3/4] w-40 rotate-[5deg] opacity-80 transition-transform duration-500 hover:scale-105 hover:rotate-0 xl:absolute xl:bottom-[26%] xl:left-[12%] xl:block animate-float"
          >
            <ImageCard src={cards[1]} priority />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div
            style={{ y: y2, animationDelay: '2.5s' }}
            className="pointer-events-auto hidden aspect-[3/4] w-32 rotate-[-6deg] opacity-55 transition-transform duration-500 hover:scale-105 hover:rotate-0 xl:block xl:absolute xl:left-[24%] xl:top-[30%] animate-float"
          >
            <ImageCard src={cards[2]} priority />
          </motion.div>
        )}
        {cards[3] && (
          <motion.div
            style={{ y: y1, animationDelay: '0.8s' }}
            className="pointer-events-auto hidden aspect-[3/4] rotate-[7deg] opacity-75 transition-transform duration-500 hover:scale-105 hover:rotate-0 lg:absolute lg:right-[5%] lg:top-[12%] lg:block lg:w-36 xl:right-[6%] xl:top-[15%] xl:w-44 xl:opacity-90 animate-float-slow"
          >
            <ImageCard src={cards[3]} priority />
          </motion.div>
        )}
        {cards[4] && (
          <motion.div
            style={{ y: y3, animationDelay: '1.8s' }}
            className="pointer-events-auto hidden aspect-[3/4] w-36 rotate-[-5deg] opacity-65 transition-transform duration-500 hover:scale-105 hover:rotate-0 xl:absolute xl:bottom-[28%] xl:right-[18%] xl:block animate-float"
          >
            <ImageCard src={cards[4]} priority />
          </motion.div>
        )}
        {cards[5] && (
          <motion.div
            style={{ y: y2, animationDelay: '3s' }}
            className="pointer-events-auto hidden aspect-[3/4] w-40 rotate-[6deg] opacity-75 transition-transform duration-500 hover:scale-105 hover:rotate-0 xl:absolute xl:right-[5%] xl:top-[52%] xl:block animate-float-slow"
          >
            <ImageCard src={cards[5]} priority />
          </motion.div>
        )}
        {cards[6] && (
          <motion.div
            style={{ y: y4, animationDelay: '0.4s' }}
            className="pointer-events-auto hidden aspect-[3/4] w-32 rotate-[-7deg] opacity-55 transition-transform duration-500 hover:scale-105 hover:rotate-0 xl:block xl:absolute xl:left-[7%] xl:top-[58%] animate-float"
          >
            <ImageCard src={cards[6]} priority />
          </motion.div>
        )}

        {/* Mobile minimal cards */}
        {cards[0] && (
          <motion.div
            style={{ y: y1 }}
            className="absolute left-4 top-[10%] aspect-[3/4] w-24 rotate-[6deg] opacity-30 sm:w-28 md:w-32 lg:hidden animate-float"
          >
            <ImageCard src={cards[0]} priority className="rounded-[14px]" />
          </motion.div>
        )}
        {cards[1] && (
          <motion.div
            style={{ y: y3, animationDelay: '1s' }}
            className="absolute right-2 top-[25%] aspect-[3/4] w-24 rotate-[-6deg] opacity-30 sm:w-28 md:w-32 lg:hidden animate-float"
          >
            <ImageCard src={cards[1]} priority className="rounded-[14px]" />
          </motion.div>
        )}
        {cards[2] && (
          <motion.div
            style={{ y: y2, animationDelay: '2.5s' }}
            className="absolute bottom-[7%] left-5 aspect-[3/4] w-20 rotate-[-5deg] opacity-20 sm:w-24 md:bottom-[18%] md:left-[6%] md:w-24 lg:hidden animate-float"
          >
            <ImageCard src={cards[2]} priority className="rounded-[14px]" />
          </motion.div>
        )}
        {cards[3] && (
          <motion.div
            style={{ y: y4, animationDelay: '1.6s' }}
            className="absolute bottom-[4%] right-5 aspect-[3/4] w-20 rotate-[5deg] opacity-20 sm:w-24 md:hidden animate-float-slow"
          >
            <ImageCard src={cards[3]} priority className="rounded-[14px]" />
          </motion.div>
        )}
      </div>

      {/* radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] aspect-square bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),_transparent_70%)] pointer-events-none z-0" />
    </section>
  );
};
