import LiquidEther from "@/components/LiquidEther";

export function HeroBackground() {
  return (
       <LiquidEther
         mouseForce={20}
         cursorSize={100}
         isViscous
         viscous={30}
         colors={["#5227FF", "#B19EEF", "#8ff0a4", "#e7e8eaff"]}
         autoDemo
         autoSpeed={0.5}
         autoIntensity={2.2}
         isBounce={false}
         resolution={0.5}
       />


  );
}
