import React from 'react'
import HeroContent from './HeroContentsComponent';
import { getStats } from '../services/herocontent.services';
import { TYPING_TEXT } from '../constants';

async function HeroContentClient() {
   const stats = await getStats();
  
  return <HeroContent stats={stats} typingText={TYPING_TEXT} />;
}

export default HeroContentClient