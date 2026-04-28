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
import { WhyBook } from './components/WhyBook';
import { FinalCTA } from './components/FinalCTA';
import { siteContent } from './data/siteContent';
import React from 'react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#fffafd] text-slate-900 overflow-hidden">
      {/* Paper/Canvas Texture Overlay */}
      <div className="fixed inset-0 texture-overlay z-50"></div>

      {/* Atmospheric Soft Glows & Watercolor Blobs for Artistic Light Mode */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-200/50 to-fuchsia-100/40 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply"></div>
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-gradient-to-bl from-violet-200/50 to-purple-100/40 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"></div>
      
      {/* Elegantly shaped SVG Blobs acting as watercolor washes */}
      <svg className="absolute top-[20%] -left-[15%] w-[800px] h-[800px] text-pink-100/70 pointer-events-none z-0 blur-3xl mix-blend-multiply animate-pulse-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,96.5,-2.9C96.2,12.3,89.5,27.3,80.1,40.1C70.6,52.9,58.3,63.6,44.4,71.4C30.4,79.2,15.2,84.1,0.2,83.7C-14.7,83.3,-29.5,77.7,-43.2,69.5C-57,61.3,-69.8,50.6,-78.9,37C-88.1,23.4,-93.6,7.1,-92.4,-8.7C-91.2,-24.5,-83.4,-39.8,-71.9,-51.2C-60.5,-62.7,-45.5,-70.2,-31.1,-76.8C-16.7,-83.4,-3,-89.1,11,-88.7C24.9,-88.3,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <svg className="absolute bottom-[20%] -right-[10%] w-[700px] h-[700px] text-amber-100/60 pointer-events-none z-0 blur-3xl mix-blend-multiply animate-pulse-slow" style={{animationDelay: '1s'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M54.8,-69.9C71.3,-58.5,85.2,-41.8,90.4,-22.6C95.5,-3.4,91.8,18.3,80.7,35.4C69.5,52.5,50.9,65,31.4,71.7C11.9,78.3,-8.4,79,-25.1,72C-41.9,64.9,-54.9,50.1,-65.4,33.8C-75.9,17.4,-83.9,-0.6,-80.6,-16.9C-77.2,-33.2,-62.6,-47.9,-46.8,-59C-31,-70,-15.5,-77.4,2.2,-80.2C19.9,-83,39.8,-81.3,54.8,-69.9Z" transform="translate(100 100)" />
      </svg>

      <div className="absolute -bottom-40 left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-pink-300/40 to-rose-200/30 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply"></div>

      <StarField />
      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <SignatureServices />
        <GlitterSection />
        <BrideRoomSection />
        
        <AnimatedImageMarquee 
          id="glitter-gallery"
          title="Glitter Gallery"
          description="A collection of sparkling face and body glitter looks created for events, parties, festivals, and celebrations."
          images={siteContent.glitterGalleryImages}
          theme="glitter"
          direction="left"
        />
        
        <AnimatedImageMarquee 
          id="bride-gallery"
          title="Bride Room Gallery"
          description="Elegant bride room decoration setups with balloons, Bride lettering, soft details, and wedding morning styling."
          images={siteContent.brideRoomGalleryImages}
          theme="bride"
          direction="right"
        />
        
        <EventStyles />
        <Stats />
        <WhyBook />
        <FinalCTA />
      </main>
      
      <footer className="bg-slate-900 text-white py-12 text-center relative z-10 border-t border-slate-800">
        <p className="text-slate-400">© {new Date().getFullYear()} {siteContent.brandDetails.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
