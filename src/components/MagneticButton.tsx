import { motion } from 'motion/react';
import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';

export const MagneticButton = ({ 
  children, 
  className, 
  href,
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string; 
  href?: string;
  [key: string]: any;
}) => {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-8 py-3.5 font-semibold tracking-wide overflow-hidden min-h-[44px] transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
