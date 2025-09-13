import React from 'react';
import { Clock, Shield, Globe, Headphones } from 'lucide-react';

const ProcessingInfo: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Most applications processed within 1-3 business days',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Bank-level encryption protects your personal information',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Globe,
      title: '24/7 Access',
      description: 'Apply anytime, anywhere with our online platform',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      description: 'Dedicated support team available to assist you',
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our eVisa Service?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most efficient and secure way to apply for your Serbian visa online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className={`${feature.bg} rounded-xl p-6 text-center hover:shadow-lg transition-shadow`}>
              <div className={`w-16 h-16 ${feature.color} bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Visit Serbia?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your visa application now and discover the beauty of Serbia. 
            Our streamlined process makes it easy and fast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Application
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingInfo;