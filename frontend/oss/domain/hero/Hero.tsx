import { HeroBackground } from "./components/HeroBackground";
import HeroContentClient from "./components/HeroContentClient";
import { HeroNav } from "./components/HeroNav";
import { TYPING_TEXT } from "./constants";
import { getStats } from "./services/herocontent.services";

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
      <HeroContentClient/>;
    </div>
  );
}