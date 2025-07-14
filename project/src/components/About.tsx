import React from 'react';
import { ArrowLeft, Mail, Github, Code, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background - Same as landing page */}
      <div 
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 25% 35%, rgba(16, 185, 129, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 75% 65%, rgba(20, 184, 166, 0.35) 0%, transparent 55%),
            radial-gradient(circle at 55% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 25% 85%, rgba(34, 197, 94, 0.25) 0%, transparent 45%),
            linear-gradient(135deg, rgba(236, 254, 255, 0.9) 0%, rgba(240, 253, 250, 0.7) 50%, rgba(254, 249, 195, 0.6) 100%)
          `
        }}
      />
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-gray-800">RossCool</span>
            </Link>
            
            <Link 
              to="/"
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* About Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-gray-100">
              {/* Profile Header */}
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Aravind Nair U
                </h1>
                <div className="flex items-center justify-center space-x-2 text-xl text-emerald-600 mb-6">
                  <Code className="w-5 h-5" />
                  <span>Final Year BTech CS Student | Aspiring Coder</span>
                </div>
              </div>

              {/* About Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p className="text-xl">
                  I'm a passionate computer science student with a love for turning ideas into code. 
                  Whether it's debugging, building projects, or learning new technologies, I thrive on 
                  the challenge of solving problems through programming.
                </p>
                
                <p className="text-lg">
                  I enjoy taking on tasks that push me out of my comfort zone—each line of code is an 
                  opportunity to grow. When I'm not studying, you'll find me tinkering with side projects, 
                  contributing to open-source, or exploring the latest in tech.
                </p>
                
                <p className="text-lg font-medium text-emerald-700">
                  Let's build something great together.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Connect with me:
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:aravindnair2004@gmail.com"
                    className="flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>aravindnair2004@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/aravndnair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub: aravndnair</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}