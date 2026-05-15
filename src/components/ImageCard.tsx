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
    <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/35 bg-white/55 p-1.5 shadow-[0_14px_34px_rgba(236,72,153,0.12)] ring-1 ring-white/45 backdrop-blur-md group">
      <div className="absolute inset-0 rounded-[24px] glitter-border opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
      <motion.div
        className={cn(
          'h-full w-full relative bg-slate-100 rounded-[18px] overflow-hidden',
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
            className="h-full w-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-105"
          />
        )}
      </motion.div>
    </div>
  );
};
