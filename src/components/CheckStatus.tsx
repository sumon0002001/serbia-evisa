import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';

interface StatusResult {
  applicationNumber: string;
  status: 'approved' | 'pending' | 'under-review' | 'declined';
  expiryDate: string;
  issuedDate: string;
  applicantName: string;
  eVisaNumber?: string;
  eVisaGrantNumber?: string;
  numberOfEntries?: string;
  nationality: string;
}

const StatusForm: React.FC = () => {
  const [applicationNumber, setApplicationNumber] = useState('');
  const [eVisaGrantNumber, setEVisaGrantNumber] = useState('');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<StatusResult | null>(null);
  const [error, setError] = useState('');

  const mockResults: { [key: string]: StatusResult } = {
    '65879-108795-15478': {
      applicationNumber: '65879-108795-15478',
      status: 'approved',
      expiryDate: '05 March 2026',
      issuedDate: '06 December 2025',
      applicantName: 'Rukhsar Ahmed',
      eVisaNumber: 'NBVXCFDEWO',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-YTEHGFDVCFTE',
      numberOfEntries: 'multiple',
      nationality: 'Pakistani'
    },
    '65879-108795-15543': {
      applicationNumber: '65879-108795-15543',
      status: 'approved',
      expiryDate: '15 June 2026',
      issuedDate: '18 December 2025',
      applicantName: 'ABDUL BASIT',
      eVisaNumber: 'NBVXCFSPRZ',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-YKDSKLWYCNAP',
      numberOfEntries: 'multiple',
      nationality: 'Pakistani'
    },
     '434649-941611-': {
      applicationNumber: '434649-941611-65563',
      status: 'approved',
      expiryDate: '05 MARCH 2026',
      issuedDate: '07 DECEMBER 2025',
      applicantName: 'MD SHAHIDUL ISLAM',
      eVisaNumber: 'NBESLKJHET',
      eVisaGrantNumber:'G7N403Z-2JX5-8MRY-6TP1-9KVB1HWBFD2',
      numberOfEntries: 'single',
      nationality: 'Bangladeshi'
    },
    
    '15379-108795-579': {
      applicationNumber: '15379-108795-57935',
      status: 'approved',
      expiryDate: '25 March 2026',
      issuedDate: '26 September 2025',
      applicantName: 'MD ABDULLAH AL MAMUN',
      eVisaNumber: 'ROFLDRTKTP',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-YTEHGFDHRSDL',
      numberOfEntries: 'multiple',
      nationality: 'Bangladeshi'
    },
    '15379-10': {
      applicationNumber: '15379-108795-56348',
      status: 'approved',
      expiryDate: '25 March 2026',
      issuedDate: '26 September 2025',
      applicantName: 'MUNNA HUSSIN',
      eVisaNumber: 'KDLTFKXFTS',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-YTEHGFDAJULF',
      numberOfEntries: 'multiple',
      nationality: 'Bangladeshi'
    },
    '65879-10': {
      applicationNumber: '65879-108795-15452',
      status: 'approved',
      expiryDate: '16 September 2026',
      issuedDate: '19 September 2025',
      applicantName: 'MOHAMMED RAHI AHMED',
      eVisaNumber: ' NBVXCFPLMH',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-QALMVFTYAKFP',
      numberOfEntries: 'multiple',
      nationality: 'Bangladeshi'
    },
    '65879': {
      applicationNumber: '65879-108795-',
      status: 'approved',
      expiryDate: '16 September 2025',
      issuedDate: '19 September 2025',
      applicantName: 'MD ABDUR RAHAMAN',
      eVisaNumber: 'MNASLKRPZR',
      eVisaGrantNumber:'POLKNBX-BQHN-OIJN-YTEHGFERMDYW',
      numberOfEntries: 'multiple',
      nationality: 'Bangladeshi'
    },
    'ETA987654321': {
      applicationNumber: 'ETA987654321',
      status: 'pending',
      expiryDate: '20 March 2024',
      issuedDate: '20 March 2024',
      applicantName: 'Jane Doe',
      nationality: 'Bangladeshi'
    },
    'ETA555666777': {
      applicationNumber: 'ETA555666777',
      status: 'under-review',
      expiryDate: '10 March 2024',
      issuedDate: '22 March 2024',
      applicantName: 'Michael Johnson',
      nationality: 'Bangladeshi',
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);
    
    if (!applicationNumber || !passportNumber || !dateOfBirth) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = mockResults[applicationNumber.toUpperCase()];
      
      if (mockResult) {
        setResult(mockResult);
      } else {
        setError('No application found with the provided details. Please check your information and try again.');
      }
      
      setIsLoading(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-600" />;
      case 'under-review':
        return <AlertCircle className="w-6 h-6 text-blue-600" />;
      case 'declined':
        return <XCircle className="w-6 h-6 text-red-600" />;
      default:
        return <Clock className="w-6 h-6 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'pending':
        return 'text-yellow-600';
      case 'under-review':
        return 'text-blue-600';
      case 'declined':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'pending':
        return 'Pending Review';
      case 'under-review':
        return 'Under Review';
      case 'declined':
        return 'Declined';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Check Your Application Status</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="applicationNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Application Number *
            </label>
            <input
              type="text"
              id="applicationNumber"
              value={applicationNumber}
              onChange={(e) => setApplicationNumber(e.target.value)}
              placeholder="e.g., 123-456-789"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
            <div>
            <label htmlFor="applicationNumber" className="block text-sm font-medium text-gray-700 mb-2">
               E-visa Grant Decision Number *
            </label>
            <input
              type="text"
              id="eVisaGrantNumber"
              value={eVisaGrantNumber}
              onChange={(e) => setEVisaGrantNumber(e.target.value)}
              placeholder="e.g., HSDK-DGDG-HHDC"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
 <div>
            <label htmlFor="applicationNumber" className="block text-sm font-medium text-gray-700 mb-2">
             Applicant Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
           <div>
            <label htmlFor="applicationNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Nationality *
            </label>
            <input
              type="text"
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder=""
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Passport Number *
            </label>
            <input
              type="text"
              id="passportNumber"
              value={passportNumber}
              onChange={(e) => setPassportNumber(e.target.value)}
              placeholder="Enter your passport number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth *
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          ) : (
            <Search className="w-5 h-5 mr-2" />
          )}
          {isLoading ? 'Checking...' : 'Check Status'}
        </button>

        <p className="text-sm text-gray-600 mt-4">
          * Required fields. try application number: 123-456-789, 987-654-321, or 555-666-777
        </p>
      </form>

      {result && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Application Status</h3>
          
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {getStatusIcon(result.status)}
                <span className={`ml-2 font-semibold text-lg ${getStatusColor(result.status)}`}>
                  {getStatusText(result.status)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Application Number</p>
                <p className="font-medium">{result.applicationNumber}</p>
              </div>
              <div>
                <p className="text-gray-600">Applicant Name</p>
                <p className="font-medium">{result.applicantName}</p>
              </div>
              <div>
                <p className="text-gray-600">Expiry Date</p>
                <p className="font-medium">{result.expiryDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Issue Date</p>
                <p className="font-medium">{result.issuedDate}</p>
              </div>
                <div>
                <p className="text-gray-600">Nationality</p>
                <p className="font-medium">{result.nationality}</p>
              </div>

              {result.eVisaGrantNumber && (
                <div className="md:col-span-2">
                  <p className="text-gray-600">e-Visa Grant Number</p>
                  <p className="font-medium text-green-600">{result.eVisaGrantNumber}</p>
                </div>
              )}
              {result.eVisaNumber && (
                <div className="md:col-span-2">
                  <p className="text-gray-600">e-Visa Number</p>
                  <p className="font-medium text-green-600">{result.eVisaNumber}</p>
                </div>
              )}
     {result.numberOfEntries && (
                <div className="md:col-span-2">
                  <p className="text-gray-600">Number of Entries</p>
                  <p className="font-medium text-green-600">{result.numberOfEntries}</p>
                </div>
              )}
            </div>
          </div>

          {result.status === 'approved' && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-green-800">Your e-Visa has been approved!</h4>
                  <p className="text-green-700 mt-1 text-sm">
                    Your Serbia Travel Visa is now valid for travel. 
                    Save your e-Visa number for your records.
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.status === 'pending' && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-yellow-800">Your application is being processed</h4>
                  <p className="text-yellow-700 mt-1 text-sm">
                    We are currently reviewing your application. You will be notified once a decision has been made.
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.status === 'under-review' && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-800">Additional review required</h4>
                  <p className="text-blue-700 mt-1 text-sm">
                    Your application requires additional review. This may take longer than usual processing times.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusForm;