import React from 'react';
import { FileText, Upload, CreditCard, CheckCircle } from 'lucide-react';

const ApplicationSteps: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Fill Application',
      description: 'Complete the online application form with your personal and travel information.',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Submit required documents including passport copy and supporting materials.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Pay the visa fee securely using credit card or other accepted payment methods.',
      color: 'bg-yellow-100 text-yellow-700',
    },
    {
      icon: CheckCircle,
      title: 'Receive eVisa',
      description: 'Get your approved eVisa via email within 1-3 business days.',
      color: 'bg-red-100 text-red-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Apply for eVisa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your Serbian visa in just 4 simple steps. The entire process is online and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-10 h-10" />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-400 rounded-full -translate-y-1/2"></div>
                  </div>
                )}
                
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Processing Time</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">1-3</div>
                <div className="text-gray-600">Business Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">24/7</div>
                <div className="text-gray-600">Application Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-700 mb-2">99.5%</div>
                <div className="text-gray-600">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSteps;