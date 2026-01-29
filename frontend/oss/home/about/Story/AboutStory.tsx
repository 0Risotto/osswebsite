'use client';

import { useEffect, useRef } from "react";
import styles from './aboutSection.module.scss'; // CSS for layout
import ScrollReveal from "@/components/text/ScrollReveal2";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutStory() {
  const stories = [
    {
      left: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      middleText: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/about/image2.jpg",
      right: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      left: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      middleText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      image: "/images/about/image3.jpg",
      right: "Mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus."
    },
    {
      left: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
      middleText: "Consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
      image: "/images/about/image4.jpg",
      right: "Incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    }
  ];

  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    containerRefs.current.forEach((container) => {
      const img = container.querySelector<HTMLImageElement>('img');
      if (!img) return;

      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.95, rotate: 2 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom-=20%",
            end: "bottom top+=20%",
            scrub: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.cardsContainer}>
      {stories.map((story, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.left}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}>
              {story.left}
            </ScrollReveal>
          </div>
          <div
            className={styles.middle}
            ref={(el) => {
              if (el) containerRefs.current[idx] = el;
            }}
            style={{ minHeight: "300px", minWidth: "300px" }}
          >
            <img
              src={story.image}
              alt={`Card ${idx + 1}`}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div className={styles.right}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}>
              {story.right}
            </ScrollReveal>
          </div>
        </div>
      ))}
    </div>
  );
}
