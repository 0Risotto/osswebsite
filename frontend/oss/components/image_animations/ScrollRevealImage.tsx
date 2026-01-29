
'use client';
import React, { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealImageProps {
  src: string;
  alt?: string;
  scrollContainerRef?: RefObject<HTMLElement>;
  baseOpacity?: number;
  scaleStart?: number;
  rotationStart?: number;
  containerClassName?: string;
  imageClassName?: string;
  animationEnd?: string;
}

const ScrollRevealImage: React.FC<ScrollRevealImageProps> = ({
  src,
  alt = 'scroll-image',
  scrollContainerRef,
  baseOpacity = 0.1,
  scaleStart = 0.95,
  rotationStart = 2,
  containerClassName = '',
  imageClassName = '',
  animationEnd = 'bottom top'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const imgEl = el.querySelector<HTMLImageElement>('img');

    if (!imgEl) return;

    gsap.fromTo(
      imgEl,
      { opacity: baseOpacity, scale: scaleStart, rotate: rotationStart },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: animationEnd, // fade out when scrolling out
          scrub: true
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [src, scrollContainerRef, baseOpacity, scaleStart, rotationStart, animationEnd]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-cover ${imageClassName}`}
      />
    </div>
  );
};

export default ScrollRevealImage;

