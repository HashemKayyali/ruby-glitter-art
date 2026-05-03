import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import React from 'react';

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/50 to-pink-100/70 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/75 rounded-[32px] sm:rounded-[40px] p-7 sm:p-12 md:p-16 border border-pink-200 shadow-2xl shadow-pink-200/40 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[200px] bg-gradient-to-b from-pink-300/25 to-transparent blur-3xl rounded-[100%] pointer-events-none" />

          <span className="font-script text-pink-500/80 text-xl sm:text-2xl md:text-3xl block mb-2">
            let's create something beautiful
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-800 mb-4 sm:mb-6 tracking-tight drop-shadow-sm relative z-10">
            {siteContent.finalCta.headline}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-2">
            {siteContent.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
            <MagneticButton
              href={siteContent.brandDetails.whatsappUrl}
              className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#20bd5a] border-none shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </MagneticButton>

            <MagneticButton
              href={siteContent.brandDetails.instagramUrl}
              className="w-full sm:w-auto bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f56040] text-white border-none shadow-lg"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </MagneticButton>

            <MagneticButton
              href={`mailto:${siteContent.brandDetails.emailAddress}`}
              className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-md"
            >
              <Mail className="w-5 h-5 mr-2 text-slate-600" />
              Email
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
