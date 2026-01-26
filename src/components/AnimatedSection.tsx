import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className = '', delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Disintegration effect when scrolling up (element going off top of screen)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [4, 0, 0, 8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y,
        scale,
        filter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none',
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const DisintegrateOnScroll = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [80, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.9, 1, 1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0.85, 1], [0, 15]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y,
        scale,
        rotateX,
        transformPerspective: 1000,
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren = ({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: { 
  children: ReactNode; 
  className?: string;
  staggerDelay?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
