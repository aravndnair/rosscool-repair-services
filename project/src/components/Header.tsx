import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-xl font-bold text-gray-800">RossCool</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            <a href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">How It Works</a>
            <Link to="/about" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">About</Link>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Contact</a>
            <button 
              onClick={scrollToBooking}
              className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}