'use client'; // Needed for hover state
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* Social Media Links Container */}
      <div style={styles.socials}>
        <SocialIcon href="https://instagram.com/yourusername">
          <FaInstagram size={24} />
        </SocialIcon>

        <SocialIcon href="https://linkedin.com/in/yourusername">
          <FaLinkedin size={24} />
        </SocialIcon>

        <SocialIcon href="https://github.com/yourusername">
          <FaGithub size={24} />
        </SocialIcon>
      </div>

      <p style={styles.text}>
        &copy; {new Date().getFullYear()} The OSS Community. All rights reserved.
      </p>
    </footer>
  );
}

function SocialIcon({ href, children }: { href: string, children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        ...styles.link,
        color: isHovered ? '#bfff00' : '#fff', 
        transform: isHovered ? 'scale(1.2)' : 'scale(1)', 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}

const styles = {
  footer: {
    padding: '40px 20px',
    textAlign: 'center' as const,
    backgroundColor: '#333',
    color: '#fff',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '20px',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  link: {
    transition: 'all 0.3s ease', 
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  text: {
    fontSize: '14px',
    opacity: 0.8,
    margin: 0,
  }
};