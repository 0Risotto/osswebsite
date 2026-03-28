"use client";

import StaggeredMenu from "@/components/ui/StaggeredMenu";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Blogs", ariaLabel: "Browse blog posts", link: "/blog" },
  { label: "Contact", ariaLabel: "Go to the contact page", link: "/contact" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/linux.ju/" },
  { label: "GitHub", link: "https://github.com/oss-ju" },
  { label: "LinkedIn", link: "https://www.linkedin.com/company/linux-society-at-ju/" },
];

export function HeroNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
      <StaggeredMenu
        position="left"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#8ff0a4"
        logoUrl="/images/icon.jpg"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </motion.div>
  );
}