import BlurText from "@/components/BlurText";
import FluidGlass from "@/components/FluidGlass";
import LiquidEther from "@/components/LiquidEther";
import TextType from "@/components/TextType";
import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    setIsLoaded(true);
  };

  const navigationItems = [
    { label: "About", href: "#about" },
    { label: "Founders", href: "#founders" },
    { label: "Projects", href: "#projects" },
    { label: "Join Us", href: "#join" },
  ];

  return (
    <div style={{ 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Liquid Ether Background */}
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

      {/* Navigation */}
      <motion.nav
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#fff',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Logo/Title */}
        <motion.div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '0.1em',
          }}
          whileHover={{ scale: 1.05 }}
        >
          OSS
        </motion.div>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {navigationItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                position: 'relative',
                padding: '8px 0',
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                color: '#8ff0a4'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#8ff0a4',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          
          {/* GitHub Button */}
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#fff',
              fontSize: '0.9rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 15,
        width: '90%',
        maxWidth: '1200px',
        textAlign: 'center',
        color: '#fff',
          display: 'flex',            
  justifyContent: 'center',   
  alignItems: 'center',       
  height: '100vh'
      }}>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontSize: 'clamp(1rem, 4vw, 5rem)',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #ffffff, #8ff0a4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
<BlurText
  text="Open Source Society"

  delay={700}
  animateBy="words"

  direction="top"
  onAnimationComplete={handleAnimationComplete}


/>          
</div>
          
          {/* Subtitle */}


{isLoaded && (
  <TextType 
text={[
  "Open Software",
  "Open Hardware",
  "Open Knowledge",
  "Open Data",
  "Open AI",
  "Open Web",
  "Open Standards",
  "Open Access",
  "Open Science",
  "Open Education",
  "Open Governance",
  "Open Media",
  "Open Design",
  "Open Collaboration",
  "Open Communities",
  "Open Security",
  "Open Tools",
  "Open Projects",
  "Open Licenses"
]}    typingSpeed={100}
    pauseDuration={2500}
    showCursor={true}
    cursorCharacter="_"
    style={{ fontSize: 'clamp(0.5rem, 5vw, 2rem)' }}  
  />
)}
        </div>
      </div>

      {/* Stats Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '100px',
          left: '50px',
          right: '50px',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fff',
          opacity: 0.8,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {[
          { value: '3', label: 'Active Members' },
          { value: '0', label: 'Projects' },
          { value: '24/7', label: 'Community Support' },
          { value: 'Open', label: 'Source Everything' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.1 }}
          >
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '4px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}