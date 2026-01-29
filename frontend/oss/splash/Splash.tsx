'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './style.module.scss';

const slideUp: Variants = {
  initial: { y: 50, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -50, opacity: 0, transition: { duration: 0.5 } }
};

const words = [
  "Welcome from Open Source Society",          // English
  "مرحبا من مجتمع المصدر المفتوح",               // Arabic
  "¡Bienvenido de la Sociedad de Código Abierto!", // Spanish
  "オープンソース協会へようこそ！",                 // Japanese
  "Willkommen von der Offene-Source-Gesellschaft!", // German
  "Bienvenue de la Société du Code Ouvert!",       // French
  "Benvenuto dalla Società del Codice Aperto!",    // Italian
  "Добро пожаловать от Общества открытого кода!", // Russian
  "欢迎加入开源协会！",                               // Chinese
  "Välkommen från Öppen Källkodsförening!"        // Swedish
];

const rtlIndices = [1];

export default function Splash() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Cycle words
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, index === 0 ? 500 : 1500);
    return () => clearTimeout(timeout);
  }, [index]);

  // Progress bar animation
  useEffect(() => {
    const duration = 6000;
    const intervalTime = 50;
    const increment = (100 / duration) * intervalTime;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // SVG path
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300
    } 0 ${dimension.height} L0 0`;

  if (!loading) return null;

  return (
    <motion.div
      className={styles.introduction}
      variants={slideUp}
      initial="initial"
      animate="enter"
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          variants={slideUp}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{
            direction: rtlIndices.includes(index) ? 'rtl' : 'ltr',
            textAlign: rtlIndices.includes(index) ? 'left' : 'center'
          }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>

      {dimension.width > 0 && (
        <svg width={dimension.width} height={dimension.height}>
          <motion.path
            d={initialPath}
            fill="transparent"
            stroke="black"
            strokeWidth={2}
          />
        </svg>
      )}

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 50, left: 0, width: '100%', padding: '0 20px' }}>
        <div style={{ width: '100%', height: 12, background: '#eee', borderRadius: 0 }}>
          <motion.div
            style={{ height: 12, background: '#44444C', borderRadius: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
