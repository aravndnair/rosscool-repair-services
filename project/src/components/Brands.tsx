import React from 'react';

const brands = [
  {
    name: 'Samsung',
    description: 'Premium electronics and appliances'
  },
  {
    name: 'LG',
    description: 'Life\'s Good with reliable service'
  },
  {
    name: 'Godrej',
    description: 'Trusted Indian brand appliances'
  },
  {
    name: 'Haier',
    description: 'Smart home solutions'
  }
];

export default function Brands() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brands We Service
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide expert repair services for all major appliance brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <div key={index} className="group text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-emerald-600">{brand.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{brand.name}</h3>
              <p className="text-sm text-gray-600">{brand.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your brand? We service many more!</p>
          <button className="text-emerald-600 hover:text-emerald-700 font-medium">
            Contact us for other brands →
          </button>
        </div>
      </div>
    </section>
  );
}