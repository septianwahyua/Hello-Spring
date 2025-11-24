import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-[#3A4D39]">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;