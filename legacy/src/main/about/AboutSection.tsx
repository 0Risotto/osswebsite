import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import type { JSX } from "react";

type ValueItem = {
  title: string;
  desc: string;
};

const VALUES: ValueItem[] = [
  {
    title: "Open by Default",
    desc: "We believe openness should be the standard, not the exception.",
  },
  {
    title: "Community First",
    desc: "People matter more than platforms, metrics, or profits.",
  },
  {
    title: "Freedom & Privacy",
    desc: "Users deserve control over their data and tools.",
  },
  {
    title: "Learn Together",
    desc: "Education thrives in collaborative, inclusive spaces.",
  },
];

export function AboutSection({ className = "" }: { className?: string }): JSX.Element {
  return (
    <section
      id="about"
      className={`min-h-screen py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative flex items-center justify-center bg-gradient-to-b from-black/40 to-black/80 text-white ${className}`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Open Source Society?
          </h2>

          <div className="text-base sm:text-lg">
            <TextType
              text={[
                "Open Source Society is a community-driven initiative dedicated to building free, transparent, and accessible technology for everyone. We believe that knowledge grows when it is shared, not locked away.",
                "Our mission is to empower people to learn, collaborate, and create openly. From software and hardware to education and research, we champion openness as a foundation for innovation and digital freedom."
              ]}
              typingSpeed={50}
              pauseDuration={3000}
              cursorCharacter="_"
              showCursor
            />
          </div>
        </motion.div>

        {/* RIGHT — Values */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {VALUES.map((item: ValueItem) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 md:p-6 hover:bg-white/15 hover:border-white/25 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    
    </section>
  );
}