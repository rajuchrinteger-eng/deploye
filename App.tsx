
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import MenuPreview from './components/MenuPreview';
import Experience from './components/Experience';
import Franchise from './components/Franchise';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import FranchisePage from './components/FranchisePage';
import ContactPage from './components/ContactPage';
import WhyCNR from './components/WhyCNR';
import AboutCNR from './components/AboutCNR';
import Collaborations from './components/Collaborations';
import Supplies from './components/Supplies';
import ChannelForm from './components/ChannelForm';
import EnergyBackground from './components/ui/EnergyBackground';
import ScrollPopupForm from './components/ScrollPopupForm';

import AreaDevelopmentPage from './components/AreaDevelopmentPage';

// Fix: Added 'contact' to AppView to support Footer navigation and Contact page rendering
type AppView = 'home' | 'why-cnr' | 'about' | 'franchise' | 'collaborations' | 'services' | 'menu' | 'supplies' | 'channel' | 'contact' | 'area-development';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');

  const handleNavigate = (view: AppView, sectionId?: string) => {
    setCurrentView(view);
    
    // Smooth scroll handling
    setTimeout(() => {
      if (sectionId) {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <Journey />
            <Experience />
            <MenuPreview onNavigate={() => setCurrentView('menu')} />
            <Franchise />
            <Testimonials />
            <Gallery />
          </>
        );
      case 'why-cnr':
        return <WhyCNR />;
      case 'about':
        return <AboutCNR />;
      case 'franchise':
        return <FranchisePage onNavigate={handleNavigate} />;
      case 'collaborations':
        return <Collaborations />;
      case 'services':
        return <Experience />; // Experience represents the "Service" quality/philosophy
      case 'menu':
        return <MenuPage />;
      case 'supplies':
        return <Supplies />;
      case 'channel':
        return <ChannelForm />;
      case 'area-development':
        return <AreaDevelopmentPage />;
      // Fix: Added case to render ContactPage
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 selection:bg-coffee-accent selection:text-coffee-950 overflow-x-hidden relative">
      <EnergyBackground />
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        {renderContent()}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <ScrollPopupForm />
    </div>
  );
}

export default App;
