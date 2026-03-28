import LiquidEther from "@/components/backgrounds/LiquidEther";

export function HeroBackground() {
  return (
    <LiquidEther
      mouseForce={20}
      cursorSize={100}
      isViscous
      viscous={30}
      colors={["#5227FF", "#B19EEF", "#8ff0a4", "#e7e8eaff"]}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      isBounce={true}
      resolution={0.4}
    />
  );
}