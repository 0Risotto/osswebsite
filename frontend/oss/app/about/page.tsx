'use client';
import styles from './styles.module.scss';
import { projects } from './data'; 
import Card from './Card';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function Home() {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className={styles.main}>
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        
        return (
          <Card
            key={i}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}