"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TextType from "@/components/text/TextType";
import BlurText from "@/components/text/BlurText";
import CountUp from "@/components/text/CountUp";
import { TYPING_TEXT, STATS } from "../constants";

export function HeroContent() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Main Hero Content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center text-center text-white select-none px-4">
        <div className="w-full max-w-5xl">
          {/* Main Title */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
            <div className="flex justify-center">
              <BlurText
                text="Open Source Society"
                delay={700}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => setLoaded(true)}
              />
            </div>
          </div>

          {/* Subtitle */}
          {loaded && (
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <TextType
                text={TYPING_TEXT}
                typingSpeed={100}
                pauseDuration={2500}
                cursorCharacter="_"
                showCursor
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal"
              />
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      {loaded && (
        <motion.div
          className="absolute bottom-2 sm:bottom-6 md:bottom-8 left-2 right-2 sm:left-8 sm:right-8 lg:left-12 lg:right-12 
                     grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 md:gap-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 3.0 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-center p-2 sm:p-4 md:p-5"
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">
                {stat.label === "Projects" ||
                  stat.label === "Active Members" ? (
                  <CountUp
                    from={0}
                    to={Number(stat.value)}
                    separator=","
                    duration={5}
                  />
                ) : (
                  <span>{stat.value}</span>
                )}
              </div>
              <div className="text-xs sm:text-sm opacity-75">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}