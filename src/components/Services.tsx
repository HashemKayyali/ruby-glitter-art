import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { siteContent } from '../data/siteContent';
import { Star } from 'lucide-react';
import React from 'react';

export const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <SectionHeading 
        title={siteContent.services.title}
        description={siteContent.services.description}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] group hover:bg-pink-50/50 transition-colors relative overflow-hidden border border-pink-100 shadow-xl shadow-pink-100/30"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl group-hover:bg-pink-300/20 transition-colors pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10 border border-pink-200">
                <Star className="w-5 h-5 text-pink-500 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)] fill-pink-100" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 tracking-wide relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10 font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
