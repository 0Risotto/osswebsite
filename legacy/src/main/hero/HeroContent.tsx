import { useState } from "react";
import BlurText from "@/components/BlurText";
import TextType from "@/components/TextType";
import { TYPING_TEXT } from "./hero.constants";

export function HeroContent() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "clamp(1rem, 4vw, 5rem)",
            fontWeight: 900,
          }}
        >
          <BlurText
            text="Open Source Society"
            delay={700}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => setLoaded(true)}
          />
        </div>

        {loaded && (
          <TextType
            text={TYPING_TEXT}
            typingSpeed={100}
            pauseDuration={2500}
            cursorCharacter="_"
            showCursor
            style={{ fontSize: "clamp(0.5rem, 5vw, 2rem)" }}
          />
        
        
        
        )}


      </div>
    </div>
  );
}
