import { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scrolled ? 'py-3' : 'py-5 mt-2'
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 flex justify-center">
        <nav
          className={cn(
            'rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between w-full max-w-5xl border transition-all',
            scrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-xl shadow-pink-100/50 border-pink-100/80'
              : 'bg-white/65 backdrop-blur-md shadow-lg shadow-pink-100/30 border-pink-100/60'
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-1.5 text-base sm:text-lg md:text-xl font-heading font-extrabold tracking-tight flex-shrink-0 relative z-20 group"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 group-hover:rotate-12 transition-transform" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-violet-500 uppercase tracking-[0.18em] sm:tracking-widest drop-shadow-sm">
              {siteContent.brandDetails.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7 lg:gap-8">
            {siteContent.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-pink-500 transition-colors relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-pink-400 after:to-violet-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <MagneticButton
              href="#contact"
              className="px-5 lg:px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] hover:opacity-95 transition-opacity"
            >
              BOOK NOW
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-800 p-2 -mr-1 relative z-20 rounded-full hover:bg-pink-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="absolute top-full left-0 right-0 px-3 mt-2 md:hidden"
          >
            <div className="rounded-3xl p-5 flex flex-col gap-1 shadow-2xl border border-pink-100 mx-auto max-w-md bg-white/95 backdrop-blur-2xl">
              {siteContent.navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx }}
                  className="text-base font-semibold text-slate-700 hover:text-pink-500 transition-colors py-2 px-3 rounded-xl hover:bg-pink-50 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-pink-300 text-xs">→</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-full py-3.5 text-center mt-3 w-full text-base shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
