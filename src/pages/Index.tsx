import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import ConnectCTA from '@/components/ConnectCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TechStack />
      <ConnectCTA />
      <Footer />
    </div>
  );
};

export default Index;
