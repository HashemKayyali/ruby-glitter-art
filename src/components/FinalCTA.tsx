import { motion } from 'motion/react';
import { siteContent } from '../data/siteContent';
import { MagneticButton } from './MagneticButton';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import React from 'react';

export const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/50 to-pink-100/80"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 rounded-[40px] p-8 sm:p-16 border border-pink-200 shadow-2xl shadow-pink-200/50 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[200px] bg-gradient-to-b from-pink-300/20 to-transparent blur-3xl rounded-[100%] pointer-events-none"></div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight drop-shadow-sm relative z-10">
            {siteContent.finalCta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            {siteContent.finalCta.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto">
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

      <div className="mt-32 text-center text-sm text-slate-500 pb-8 relative z-10 font-medium">
        © {new Date().getFullYear()} {siteContent.brandDetails.name}. All rights reserved.
      </div>
    </section>
  );
};
