import { HeroBackground } from "./HeroBackground";
import { HeroNav } from "./HeroNav";
import { HeroContent } from "./HeroContent";
import { HeroStats } from "./HeroStats";
import { AboutSection } from "./about/AboutSection";

export function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <HeroBackground />
      <HeroNav />

      <HeroContent />
      <HeroStats />
    </div>
  );
}
