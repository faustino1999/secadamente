import React from 'react';
import HeroSection from './components/HeroSection';
import Benefits from './components/Benefits';
import WhatYouGet from './components/WhatYouGet';
import ServicesGallery from './components/ServicesGallery';
import BonusSection from './components/BonusSection';
import ResultsShowcase from './components/ResultsShowcase';
import SocialProof from './components/SocialProof';
import AboutCreator from './components/AboutCreator';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Benefits />
      <WhatYouGet />
      <ServicesGallery />
      <BonusSection />
      <ResultsShowcase />
      <SocialProof />
      <AboutCreator />
      <PricingSection />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;