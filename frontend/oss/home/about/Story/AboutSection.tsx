'use client';

import styles from './aboutSection.module.scss'; // We'll define CSS here
import ScrollReveal from "@/components/text/ScrollReveal2";

export default function AboutSection() {
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
          <div className={styles.middle}>

            <div className={styles.middle} style={{ minHeight: "300px", minWidth: "300px" }}>

              <img
                src={story.image}
                alt={`Card ${idx + 1}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
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

