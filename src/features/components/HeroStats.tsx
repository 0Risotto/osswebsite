import { motion } from "framer-motion";
import { STATS } from "./hero.constants";
import CountUp from "@/components/CountUp";

export function HeroStats() {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "100px",
        left: "50px",
        right: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "20px",
        color: "#fff",
        opacity: 0.8,
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 0.8, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {STATS.map((s, i) => (
        <motion.div 
          key={i} 
          whileHover={{ scale: 1.1 }}
          style={{ textAlign: "center" }}
        >
          <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            {(s.label === "Projects" || s.label === "Active Members") ? (
              <CountUp
                from={0}
                to={Number(s.value)}
                separator=","
                duration={3}
              />
            ) : (
              <span>{s.value}</span>
            )}
          </div>
          <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}