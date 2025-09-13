import React from 'react';
import { ArrowRight, Shield, Clock, FileCheck } from 'lucide-react';

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentSection }) => {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Welcome to Serbia
              <span className="block text-2xl md:text-3xl font-normal text-blue-200 mt-2">
                Electronic Visa System
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Apply for your Serbian visa online. Fast, secure, and convenient electronic visa processing 
              for visitors to the Republic of Serbia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setCurrentSection('apply')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors group"
              >
                Apply for eVisa
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => setCurrentSection('status')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Check Application Status
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-blue-300 mb-2" />
                <span className="text-sm text-blue-200">Secure</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-blue-300 mb-2" />
                <span className="text-sm text-blue-200">Fast Processing</span>
              </div>
              <div className="flex flex-col items-center">
                <FileCheck className="w-8 h-8 text-blue-300 mb-2" />
                <span className="text-sm text-blue-200">Easy Online</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-center">Quick Stats</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-blue-200">Processing Time:</span>
                  <span className="font-semibold">1-3 Business Days</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-blue-200">Validity Period:</span>
                  <span className="font-semibold">Up to 90 Days</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-white border-opacity-20">
                  <span className="text-blue-200">Application Fee:</span>
                  <span className="font-semibold">€25 - €105</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-blue-200">Multiple Entry:</span>
                  <span className="font-semibold">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;