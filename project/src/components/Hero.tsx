import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Appliance Repair
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600"> At Your Doorstep</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional repair services for refrigerators, ACs, washing machines, and TVs. 
              Fast, reliable solutions with certified technicians.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <button 
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-medium"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#services"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors font-medium text-center"
              >
                View Services
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="p-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-sm text-gray-600">Licensed & Insured</div>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-sm text-gray-600">Same Day Service</div>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <div className="text-sm text-gray-600">Expert Technicians</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}