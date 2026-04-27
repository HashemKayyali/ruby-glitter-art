import { useState, useEffect } from 'react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled ? "py-4" : "py-6 mt-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
        <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl shadow-xl shadow-pink-100/50 bg-white/60 backdrop-blur-xl border border-pink-100/80">
          <a href="#home" className="text-lg md:text-xl font-heading font-extrabold tracking-tight flex-shrink-0 relative z-20">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 uppercase tracking-widest drop-shadow-sm">Ruby Glitter Art</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteContent.navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-pink-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block flex-shrink-0">
            <MagneticButton href="#contact" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-xs font-bold text-white shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:opacity-90 transition-opacity">
              BOOK NOW
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-800 p-2 relative z-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 mt-2 md:hidden"
          >
            <div className="glass-panel rounded-3xl p-6 flex flex-col gap-6 shadow-2xl border border-pink-100 mx-auto max-w-md bg-white/95 backdrop-blur-2xl">
              {siteContent.navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-pink-500 to-violet-600 text-white font-bold rounded-full py-4 text-center mt-2 w-full text-lg shadow-[0_0_15px_rgba(236,72,153,0.3)]"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
