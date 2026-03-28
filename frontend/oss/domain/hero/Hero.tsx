import { HeroBackground } from "./components/HeroBackground";
import { HeroContent } from "./components/HeroContents";
import { HeroNav } from "./components/HeroNav";

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
    </div>
  );
}