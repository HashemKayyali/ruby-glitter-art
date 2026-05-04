import { motion } from 'motion/react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Image as ImageIcon } from 'lucide-react';

export const ImageCard = ({
  src,
  alt = 'Gallery Image',
  className,
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-pink-100 shadow-xl shadow-pink-200/40 p-1 group">
      <div className="absolute inset-0 rounded-3xl glitter-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <motion.div
        className={cn(
          'w-full h-full relative bg-slate-100 rounded-[22px] overflow-hidden',
          className
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded || error ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {error ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(139,92,246,0.2))',
            }}
          >
            <ImageIcon className="w-8 h-8 text-white/40 mb-2" />
            <span className="text-xs font-semibold text-white/60 tracking-wider">
              SPARKLE MOMENT
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        )}
      </motion.div>
    </div>
  );
};
