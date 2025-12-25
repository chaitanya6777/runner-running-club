import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import FeaturesSection from './components/FeaturesSection';
import ExclusiveFeaturesSection from './components/ExclusiveFeaturesSection';
import ChallengesSection from './components/ChallengesSection';
import CTABannerSection from './components/CTABannerSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <FeaturesSection />
      <ExclusiveFeaturesSection />
      <ChallengesSection />
      <CTABannerSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
