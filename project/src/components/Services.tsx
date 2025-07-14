import React from 'react';
import { Refrigerator, Wind, Tv, Zap } from 'lucide-react';

const services = [
  {
    icon: Refrigerator,
    title: 'Refrigerator Service',
    description: 'Cooling issues, compressor repair, door seals',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'AC installation, repair, maintenance, gas refill',
    color: 'bg-sky-100 text-sky-600'
  },
  {
    icon: Zap,
    title: 'Washing Machine',
    description: 'Drum issues, water drainage, spin problems',
    color: 'bg-violet-100 text-violet-600'
  },
  {
    icon: Tv,
    title: 'Television Repair',
    description: 'LCD, LED, OLED, smart TV troubleshooting',
    color: 'bg-amber-100 text-amber-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We repair all types of household appliances with expertise and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}