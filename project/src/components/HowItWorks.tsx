import React from 'react';
import { Calendar, MapPin, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Book Appointment',
    description: 'Schedule your repair online or call us',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: MapPin,
    title: 'We Come to You',
    description: 'Our technician arrives at your location',
    color: 'bg-sky-100 text-sky-600'
  },
  {
    icon: Wrench,
    title: 'Expert Repair',
    description: 'Professional diagnosis and repair',
    color: 'bg-violet-100 text-violet-600'
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: 'Test and warranty on all repairs',
    color: 'bg-amber-100 text-amber-600'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and reliable appliance repair in 4 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative group">
              <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full h-0.5 bg-gradient-to-r from-emerald-200 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}