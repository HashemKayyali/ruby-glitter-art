/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StarField } from './components/StarField';
import { Stats } from './components/Stats';
import { SignatureServices } from './components/SignatureServices';
import { GlitterSection } from './components/GlitterSection';
import { BrideRoomSection } from './components/BrideRoomSection';
import { AnimatedImageMarquee } from './components/AnimatedImageMarquee';
import { EventStyles } from './components/EventStyles';
import { PricingSection } from './components/PricingSection';
import { WhyBook } from './components/WhyBook';
import { FinalCTA } from './components/FinalCTA';
import { SectionDivider } from './components/SectionDivider';
import { siteContent } from './data/siteContent';
import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fffafd] text-slate-900 overflow-hidden">
      {/* Texture overlay */}
      <div className="fixed inset-0 texture-overlay z-50" />

      {/* Painted background — radial gradient washes (cheap, no filter) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-painted-canvas" />

      {/* Subtle soft watercolor blobs — smaller blur radii (cheaper to paint) */}
      <div className="absolute top-0 left-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-br from-pink-200/35 to-fuchsia-100/25 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute -top-40 right-[-10%] w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] bg-gradient-to-bl from-violet-200/35 to-purple-100/25 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute -bottom-40 left-[10%] w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] bg-gradient-to-tr from-pink-300/30 to-rose-200/20 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply" />
      <div className="absolute top-[60%] right-[-8%] w-[400px] h-[400px] bg-gradient-to-br from-amber-100/35 to-pink-50/30 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-multiply" />

      {/* Crisp decorative sparkle SVGs (sit above the wash) */}
      <svg
        aria-hidden
        className="hidden sm:block absolute top-[18%] left-[6%] w-7 h-7 text-pink-300 pointer-events-none z-[2] animate-float-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l1.6 7.2L21 9l-7.4 1.8L12 18l-1.6-7.2L3 9l7.4-1.8L12 0z" />
      </svg>
      <svg
        aria-hidden
        className="hidden sm:block absolute top-[40%] right-[8%] w-5 h-5 text-amber-300 pointer-events-none z-[2] animate-float"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDelay: '1.5s' }}
      >
        <path d="M12 0l1.6 7.2L21 9l-7.4 1.8L12 18l-1.6-7.2L3 9l7.4-1.8L12 0z" />
      </svg>
      <svg
        aria-hidden
        className="hidden sm:block absolute top-[72%] left-[12%] w-4 h-4 text-violet-300 pointer-events-none z-[2] animate-float-slow"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ animationDelay: '2.5s' }}
      >
        <path d="M12 0l1.6 7.2L21 9l-7.4 1.8L12 18l-1.6-7.2L3 9l7.4-1.8L12 0z" />
      </svg>

      <StarField />
      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />

        <SignatureServices />
        <SectionDivider tone="rose" />

        <GlitterSection />

        <AnimatedImageMarquee
          id="glitter-gallery"
          title="Glitter Gallery"
          description="A collection of sparkling face and body glitter looks created for events, parties, festivals, and celebrations."
          images={siteContent.glitterGalleryImages}
          theme="glitter"
          direction="left"
        />

        <SectionDivider tone="champagne" flip />

        <BrideRoomSection />

        <AnimatedImageMarquee
          id="bride-gallery"
          title="Bride Room Gallery"
          description="Elegant bride room decoration setups with balloons, Bride lettering, soft details, and wedding morning styling."
          images={siteContent.brideRoomGalleryImages}
          theme="bride"
          direction="right"
        />

        <SectionDivider tone="lavender" />

        <EventStyles />
        <PricingSection />
        <Stats />
        <WhyBook />
        <FinalCTA />
      </main>

      <footer className="bg-slate-900 text-white py-10 sm:py-12 text-center relative z-10 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <span className="font-script text-pink-300 text-xl sm:text-2xl block mb-2">
            made with love by
          </span>
          <p className="font-heading font-extrabold text-lg sm:text-xl tracking-widest mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300">
              {siteContent.brandDetails.name.toUpperCase()}
            </span>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} {siteContent.brandDetails.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
