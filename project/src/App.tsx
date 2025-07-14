import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Brands from './components/Brands';
import HowItWorks from './components/HowItWorks';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen relative">
          {/* Animated Background */}
          <div 
            className="fixed inset-0 -z-10 opacity-40"
            style={{
              background: `
                radial-gradient(circle at ${20 + scrollY * 0.15}% ${30 + scrollY * 0.1}%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
                radial-gradient(circle at ${80 - scrollY * 0.12}% ${70 - scrollY * 0.08}%, rgba(20, 184, 166, 0.35) 0%, transparent 55%),
                radial-gradient(circle at ${50 + scrollY * 0.08}% ${20 + scrollY * 0.12}%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                radial-gradient(circle at ${30 - scrollY * 0.06}% ${80 + scrollY * 0.04}%, rgba(34, 197, 94, 0.25) 0%, transparent 45%),
                linear-gradient(135deg, rgba(236, 254, 255, 0.9) 0%, rgba(240, 253, 250, 0.7) 50%, rgba(254, 249, 195, 0.6) 100%)
              `,
              transform: `translateY(${scrollY * 0.5}px) rotate(${scrollY * 0.02}deg)`
            }}
          />
          
          <Header />
          <Hero />
          <Services />
          <Brands />
          <HowItWorks />
          <BookingForm />
          <Footer />
        </div>
      } />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;