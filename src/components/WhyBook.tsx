import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

export const WhyBook = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none mix-blend-multiply"></div>

      <SectionHeading 
        title={siteContent.whyBook.title}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteContent.whyBook.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-[24px] flex items-center gap-4 group hover:shadow-md transition-all border border-pink-100"
            >
              <div className="w-10 h-10 rounded-full bg-pink-50 border border-pink-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
              </div>
              <p className="text-base sm:text-lg font-bold text-slate-800">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
