'use client';
import Image from 'next/image';
import styles from './styles.module.scss';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

export default function Card({ i, title, description, src, url, color, progress, range, targetScale }: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Animation 1: Image Scale on Scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  
  // Animation 2: Card Scale (Parallax)
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={styles.card}
      >
        <h2>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image
                fill
                src={src}
                alt="image" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}