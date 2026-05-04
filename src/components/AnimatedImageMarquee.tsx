import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  wrap,
  AnimatePresence,
  type PanInfo,
} from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import type { GalleryImage } from '../lib/galleryImages';

interface MarqueeProps {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
  theme: 'glitter' | 'bride';
  direction?: 'left' | 'right';
  speed?: number;
}

// Pointer movement above this threshold counts as a drag, not a tap.
const TAP_THRESHOLD_PX = 8;

export const AnimatedImageMarquee: React.FC<MarqueeProps> = ({
  id,
  title,
  description,
  images,
  theme,
  direction = 'left',
  speed = 35,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Refs are read inside the rAF loop and event handlers — they must reflect
  // *current* state synchronously, even between renders.
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);
  const inViewRef = useRef(true);
  const dragMovedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const resumeTimerRef = useRef<number | null>(null);

  const themeClass =
    theme === 'glitter'
      ? 'shadow-pink-100/40 hover:shadow-[0_0_25px_rgba(244,114,182,0.4)] border-pink-100 glitter-border'
      : 'shadow-amber-100/40 hover:shadow-[0_0_25px_rgba(253,230,138,0.5)] border-amber-50 champagne-border';

  const fallbackGradient =
    theme === 'glitter'
      ? 'linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)'
      : 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)';

  const edgeGradient =
    theme === 'glitter' ? 'from-[#fffafd]' : 'from-amber-50/80';

  const marqueeItems = images.length > 0 ? [...images, ...images] : [];

  useEffect(() => {
    if (!trackRef.current) return;
    const updateWidth = () => {
      if (!trackRef.current) return;
      setTrackWidth(trackRef.current.scrollWidth / 2);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(trackRef.current);
    window.addEventListener('resize', updateWidth);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [images.length]);

  // Pause auto-play (and reset hover/drag state) when the section is not in
  // view. Otherwise rAF keeps drifting baseX while the user looks elsewhere
  // and the gallery is empty when they scroll back.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          inViewRef.current = e.isIntersecting;
          if (!e.isIntersecting) {
            hoverRef.current = false;
          }
        }
      },
      { threshold: 0.05 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Auto-play loop. Pauses when the user is dragging, hovering (desktop),
  // when the section is off-screen, or while the lightbox is open.
  useAnimationFrame((_t, delta) => {
    if (
      shouldReduceMotion ||
      trackWidth === 0 ||
      draggingRef.current ||
      hoverRef.current ||
      !inViewRef.current ||
      lightboxIndex !== null
    ) {
      return;
    }
    // Cap delta so a backgrounded tab resuming after seconds doesn't yank
    // the track by hundreds of pixels in one frame.
    const safeDelta = Math.min(delta, 50);
    const sign = direction === 'left' ? -1 : 1;
    const movePerSec = (safeDelta / 1000) * speed;
    const current = baseX.get();
    const next = (Number.isFinite(current) ? current : 0) + sign * movePerSec;
    baseX.set(wrap(-trackWidth, 0, next));
  });

  const handleScrollNudge = (dir: -1 | 1) => {
    const card = trackRef.current?.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? 320) + 24;
    const next = baseX.get() + dir * step;
    baseX.set(trackWidth ? wrap(-trackWidth, 0, next) : next);
  };

  const openLightbox = (idx: number) => {
    if (dragMovedRef.current) return;
    setLightboxIndex(idx % images.length);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const nextLightbox = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prevLightbox = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );

  useEffect(() => {
    if (lightboxIndex === null) return;

    // Lock background scroll while the lightbox is open
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') nextLightbox();
      else if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex]);

  // Cleanup any pending resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  if (images.length === 0) {
    return (
      <section id={id} className="py-24 relative overflow-hidden z-20">
        <SectionHeading title={title} description={description} />
        <p className="text-center text-slate-500 text-sm">
          Drop images named{' '}
          <code>
            {theme === 'glitter' ? 'glitter-#.jpg' : 'bride-room-#.jpg'}
          </code>{' '}
          into <code>src/assets/images/</code> to populate this gallery.
        </p>
      </section>
    );
  }

  return (
    <section id={id} className="py-20 sm:py-24 relative overflow-hidden z-20">
      <SectionHeading title={title} description={description} />

      <div
        ref={containerRef}
        className="mt-10 sm:mt-12 w-full overflow-hidden relative select-none"
        onPointerEnter={(e) => {
          // Only pause for actual mouse hover on desktop. Touch pointers
          // fire enter/leave during scroll on some browsers and would
          // otherwise leave the carousel paused after a fast scroll.
          if (e.pointerType === 'mouse') hoverRef.current = true;
        }}
        onPointerLeave={() => {
          hoverRef.current = false;
        }}
        onPointerCancel={() => {
          hoverRef.current = false;
        }}
      >
        <motion.div
          ref={trackRef}
          className={`flex gap-5 sm:gap-7 px-4 w-max touch-pan-y ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ x: baseX, touchAction: 'pan-y' }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={(_e, info: PanInfo) => {
            if (resumeTimerRef.current) {
              window.clearTimeout(resumeTimerRef.current);
              resumeTimerRef.current = null;
            }
            draggingRef.current = true;
            dragMovedRef.current = false;
            dragStartRef.current = { x: info.point.x, y: info.point.y };
            setIsDragging(true);
          }}
          onDrag={(_e, info: PanInfo) => {
            const dx = Math.abs(info.point.x - dragStartRef.current.x);
            const dy = Math.abs(info.point.y - dragStartRef.current.y);
            if (dx > TAP_THRESHOLD_PX && dx > dy) {
              dragMovedRef.current = true;
            }
            // Wrap continuously during drag so the track never escapes the
            // visible loop range — no more "swipe and the cards vanish".
            if (trackWidth) {
              const current = baseX.get();
              const wrapped = wrap(-trackWidth, 0, current);
              if (current !== wrapped) baseX.set(wrapped);
            }
          }}
          onDragEnd={() => {
            // Final wrap snap, then a short grace period before auto-play
            // resumes — also keeps the click handler suppressed long enough
            // that swipe-release doesn't fire the lightbox.
            if (trackWidth) baseX.set(wrap(-trackWidth, 0, baseX.get()));
            resumeTimerRef.current = window.setTimeout(() => {
              draggingRef.current = false;
              dragMovedRef.current = false;
              setIsDragging(false);
              resumeTimerRef.current = null;
            }, 200);
          }}
        >
          {marqueeItems.map((img, idx) => (
            <MarqueeCard
              key={`marquee-${idx}`}
              img={img}
              themeClass={themeClass}
              fallbackGradient={fallbackGradient}
              isDragging={isDragging}
              priority={idx < 4}
              onSelect={() => openLightbox(idx)}
              dragMovedRef={dragMovedRef}
            />
          ))}
        </motion.div>

        {/* Edge fade gradients */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r ${edgeGradient} to-transparent z-10`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l ${edgeGradient} to-transparent z-10`}
        />

        {/* Arrow controls — desktop only, mobile uses native swipe */}
        <button
          aria-label="Previous"
          onClick={() => handleScrollNudge(1)}
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-pink-200/70 shadow-lg hover:bg-white hover:scale-105 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>
        <button
          aria-label="Next"
          onClick={() => handleScrollNudge(-1)}
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-pink-200/70 shadow-lg hover:bg-white hover:scale-105 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>

        {/* Mobile swipe hint */}
        <p className="sm:hidden text-center text-[11px] text-slate-400 uppercase tracking-[0.25em] mt-4 font-bold">
          ← swipe ·  tap to enlarge ·  swipe →
        </p>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={images[lightboxIndex]}
            count={images.length}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={nextLightbox}
            onPrev={prevLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const MarqueeCard: React.FC<{
  img: GalleryImage;
  themeClass: string;
  fallbackGradient: string;
  isDragging: boolean;
  priority: boolean;
  onSelect: () => void;
  dragMovedRef: React.RefObject<boolean>;
}> = ({
  img,
  themeClass,
  fallbackGradient,
  isDragging,
  priority,
  onSelect,
  dragMovedRef,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={img.alt}
      onClickCapture={(e) => {
        if (dragMovedRef.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onClick={() => {
        if (dragMovedRef.current) return;
        onSelect();
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      draggable={false}
      className={`group/card relative w-[240px] sm:w-[280px] md:w-[320px] shrink-0 aspect-[4/5] rounded-3xl overflow-hidden bg-white border shadow-xl p-1 transition-all duration-500 hover:-translate-y-1 ${themeClass} ${
        isDragging ? 'pointer-events-auto' : ''
      }`}
    >
      <div
        className="w-full h-full relative rounded-[22px] overflow-hidden"
        style={{ background: fallbackGradient }}
      >
        {/* Soft shimmer placeholder while the image loads */}
        {!loaded && !errored && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-white/40 bg-[length:200%_100%] animate-[shimmer_1.6s_linear_infinite] pointer-events-none" />
        )}

        {!errored && (
          <img
            src={img.src}
            alt={img.alt}
            draggable={false}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...({ fetchpriority: priority ? 'high' : 'auto' } as Record<string, string>)}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`w-full h-full object-cover pointer-events-none will-change-transform transition-[opacity,transform] duration-500 ease-out group-hover/card:scale-110 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover/card:translate-x-full pointer-events-none mix-blend-overlay" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <span className="absolute bottom-3 right-3 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none drop-shadow">
          view
        </span>
      </div>
    </div>
  );
};

const Lightbox: React.FC<{
  image: GalleryImage;
  count: number;
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ image, count, index, onClose, onNext, onPrev }) => {
  const handleSwipe = (_: unknown, info: PanInfo) => {
    const SWIPE_DISTANCE = 60;
    const SWIPE_VELOCITY = 350;
    if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) {
      onNext();
    } else if (
      info.offset.x > SWIPE_DISTANCE ||
      info.velocity.x > SWIPE_VELOCITY
    ) {
      onPrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="w-5 h-5" />
      </button>

      <button
        aria-label="Previous"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Next"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <motion.div
        className="relative max-w-[92vw] max-h-[80vh] sm:max-h-[88vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4}
        onDragEnd={handleSwipe}
        style={{ touchAction: 'pan-y' }}
      >
        <motion.img
          key={image.src}
          src={image.src}
          alt={image.alt}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="max-w-[92vw] max-h-[80vh] sm:max-h-[88vh] object-contain rounded-2xl shadow-2xl pointer-events-none select-none"
          draggable={false}
        />
      </motion.div>

      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-bold tracking-widest uppercase pointer-events-none"
      >
        {index + 1} / {count}
      </div>
    </motion.div>
  );
};
