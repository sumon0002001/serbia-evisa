import React, { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle } from 'lucide-react';

const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    passportExpiry: '',
    
    // Contact Information
    email: '',
    phone: '',
    address: '',
    
    // Travel Information
    visaType: 'tourist',
    entryDate: '',
    exitDate: '',
    purposeOfVisit: '',
    accommodation: '',
  });

  const steps = [
    { id: 1, title: 'Personal Information', completed: false },
    { id: 2, title: 'Travel Details', completed: false },
    { id: 3, title: 'Documents', completed: false },
    { id: 4, title: 'Review & Payment', completed: false },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const firstStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep - 1);
    }
  };

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-blue-700 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-gray-900">eVisa Application</h1>
          <p className="text-gray-600 mt-2">Complete your visa application in a few simple steps</p>
        </div>

        {/* Progress Steps */}
       

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select nationality</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Number *
                  </label>
                  <input
                    type="text"
                    value={formData.passportNumber}
                    onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter passport number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passport Expiry Date *
                  </label>
                  <input
                    type="date"
                    value={formData.passportExpiry}
                    onChange={(e) => handleInputChange('passportExpiry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
              
                
                 <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visa Type *
                  </label>
                  <select
                    value={formData.visaType}
                    onChange={(e) => handleInputChange('visaType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="tourist">Tourist Visa </option>
                    <option value="business">Business Visa </option>
                    <option value="transit">Transit Visa </option>
                    <option value="multiple">Multiple Entry Visa </option>
                  </select>
                </div>
                
               
                
              
                
               
              </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Notification of Granting An E-Visa</h2>
              <div className="space-y-6">
                <div>
                  <h2 className="block text-sm font-medium text-gray-700 mb-2">
                    Application Details
                  </h2>
                  <p
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    Application ID : 65879-108795-15478
                  </p>
                </div>
                <div>
                  <h2 className="block text-sm font-medium text-gray-700 mb-2">
                    Document  Details
                  </h2>
                  <p
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    Document Number : A12462233
                  </p>
                </div>
                <div>
                  <h2 className="block text-sm font-medium text-gray-700 mb-2">
                    Name 
                  </h2>
                  <p
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    Arif Hossain
                  </p>
                </div><div>
                  <h2 className="block text-sm font-medium text-gray-700 mb-2">
                    E-Visa Grant Decession Number  
                  </h2>
                  <p
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    POLKNBX-BQHN-OIJN-YTEHGFDVCFTE
                  </p>
                </div><div>
                  <h2 className="block text-sm font-medium text-gray-700 mb-2">
                    E-VISA ID
                  </h2>
                  <p
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                   NBVXCFDEWO
                  </p>
                </div>
                
              
                
               
                
                
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Required Documents:</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Passport copy (photo page)</li>
                    <li>• Recent passport-style photograph</li>
                    <li>• Travel itinerary or flight reservation</li>
                    <li>• Accommodation proof</li>
                    <li>• Travel insurance certificate</li>
                  </ul>
                </div>

                <div className="grid gap-6">
                  {['Passport Copy', 'Photograph', 'Flight Reservation', 'Accommodation Proof', 'Travel Insurance'].map((doc) => (
                    <div key={doc} className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <h3 className="font-medium text-gray-900 mb-2">{doc}</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Drag and drop your file here, or click to browse
                        </p>
                        <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                          Choose File
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Payment</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Nationality:</span>
                      <span className="ml-2 font-medium">{formData.nationality}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Visa Type:</span>
                      <span className="ml-2 font-medium capitalize">{formData.visaType}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Travel Period:</span>
                      <span className="ml-2 font-medium">{formData.entryDate} to {formData.exitDate}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
                  <div className="flex justify-between items-center text-lg">
                    <span>Visa Fee ({formData.visaType}):</span>
                    <span className="font-bold text-blue-700">
                      {formData.visaType === 'tourist' ? '€25' : 
                       formData.visaType === 'business' ? '€60' :
                       formData.visaType === 'transit' ? '€25' : '€105'}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
                  <div className="space-y-4">
                    <div className="border-2 border-blue-700 bg-blue-50 p-4 rounded-lg">
                      <label className="flex items-center">
                        <input type="radio" name="payment" defaultChecked className="mr-3" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </label>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    By proceeding with payment, you confirm that all information provided is accurate 
                    and you agree to the terms and conditions of the eVisa service.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            <button
                onClick={currentStep === 2 ? () => alert('Thank you for Visiting us!') : nextStep}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium"
            >
              {currentStep === 1 ? 'Submit ' : 'Finish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;