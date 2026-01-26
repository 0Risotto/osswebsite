import React from 'react';
import { AboutSection } from './AboutSection';
import Silk from '@/components/Silk';
import DotGrid from '@/components/DotGrid';

function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      
      {/* Content layer - appears on top */}
      <AboutSection className="relative z-10" />
    </div>
  );
}

export default AboutPage;