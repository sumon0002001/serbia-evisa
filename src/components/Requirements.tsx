import React from 'react';
import { Import as Passport, Camera, FileText, Calendar, DollarSign, MapPin } from 'lucide-react';

const Requirements: React.FC = () => {
  const requirements = [
    {
      icon: Passport,
      title: 'Valid Passport',
      description: 'Passport must be valid for at least 6 months from the intended date of entry.',
      color: 'text-blue-700',
    },
    {
      icon: Camera,
      title: 'Recent Photograph',
      description: 'Digital passport-style photo taken within the last 6 months.',
      color: 'text-green-700',
    },
    {
      icon: FileText,
      title: 'Supporting Documents',
      description: 'Hotel reservation, invitation letter, or proof of accommodation.',
      color: 'text-purple-700',
    },
    {
      icon: Calendar,
      title: 'Travel Itinerary',
      description: 'Flight reservations showing entry and exit dates.',
      color: 'text-orange-700',
    },
    {
      icon: DollarSign,
      title: 'Financial Proof',
      description: 'Bank statements or proof of sufficient funds for your stay.',
      color: 'text-red-700',
    },
    {
      icon: MapPin,
      title: 'Travel Insurance',
      description: 'Valid travel insurance covering medical expenses (minimum €30,000).',
      color: 'text-indigo-700',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visa Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make sure you have all the required documents before starting your application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((requirement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 ${requirement.color}`}>
                <requirement.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{requirement.title}</h3>
              <p className="text-gray-600 leading-relaxed">{requirement.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Visa Types & Fees</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Visa Type</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Purpose</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Duration</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-blue-700">Tourist</td>
                  <td className="py-4 px-4 text-gray-600">Tourism, visiting friends/family</td>
                  <td className="py-4 px-4 text-gray-600">Up to 30 days</td>
                  <td className="py-4 px-4 font-semibold text-green-700">€25</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-blue-700">Business</td>
                  <td className="py-4 px-4 text-gray-600">Business meetings, conferences</td>
                  <td className="py-4 px-4 text-gray-600">Up to 90 days</td>
                  <td className="py-4 px-4 font-semibold text-green-700">€60</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-blue-700">Transit</td>
                  <td className="py-4 px-4 text-gray-600">Airport transit</td>
                  <td className="py-4 px-4 text-gray-600">Up to 5 days</td>
                  <td className="py-4 px-4 font-semibold text-green-700">€25</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-blue-700">Multiple Entry</td>
                  <td className="py-4 px-4 text-gray-600">Multiple visits within validity</td>
                  <td className="py-4 px-4 text-gray-600">Up to 90 days</td>
                  <td className="py-4 px-4 font-semibold text-green-700">€105</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;