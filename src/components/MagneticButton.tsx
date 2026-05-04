import { motion, useMotionValue, useSpring } from 'motion/react';
import React, { useRef } from 'react';
import { cn } from '../lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
};

const SPRING = { stiffness: 200, damping: 18, mass: 0.2 };

export const MagneticButton = ({
  children,
  className,
  href,
  ...props
}: Props) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  // Motion values avoid the per-mousemove React re-render that the previous
  // useState-based version caused.
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const x = useSpring(mvX, SPRING);
  const y = useSpring(mvY, SPRING);

  const handleMouse = (e: React.MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    // Only attract for fine pointers (mouse). Touch users get a static button.
    if (e.nativeEvent instanceof PointerEvent && e.nativeEvent.pointerType !== 'mouse') {
      return;
    }
    const rect = node.getBoundingClientRect();
    mvX.set((e.clientX - (rect.left + rect.width / 2)) * 0.2);
    mvY.set((e.clientY - (rect.top + rect.height / 2)) * 0.2);
  };

  const reset = () => {
    mvX.set(0);
    mvY.set(0);
  };

  // External links auto-open in a new tab unless the caller forces otherwise.
  const isExternalHttp = href?.startsWith('http://') || href?.startsWith('https://');
  const linkProps = isExternalHttp
    ? {
        target: props.target ?? '_blank',
        rel: props.rel ?? 'noopener noreferrer',
      }
    : {};

  const sharedClass = cn(
    'relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold tracking-wide overflow-hidden min-h-[44px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2',
    className
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ x, y }}
        className={sharedClass}
        {...linkProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={props.type ?? 'button'}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={sharedClass}
      {...props}
    >
      {children}
    </motion.button>
  );
};
