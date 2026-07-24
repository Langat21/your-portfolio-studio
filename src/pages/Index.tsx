import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatIBuild from '@/components/WhatIBuild';
import FeaturedProject from '@/components/FeaturedProject';
import ApiEngineering from '@/components/ApiEngineering';
import CaseStudies from '@/components/CaseStudies';
import TechStack from '@/components/TechStack';
import ConnectCTA from '@/components/ConnectCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatIBuild />
      <FeaturedProject />
      <ApiEngineering />
      <CaseStudies />
      <TechStack />
      <ConnectCTA />
      <Footer />
    </div>
  );
};

export default Index;
