import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CalendarSection } from './components/CalendarSection';
import { Concierge } from './components/Concierge';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CalendarSection />
        <Concierge />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;