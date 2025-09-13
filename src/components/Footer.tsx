import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">eVisa Serbia</h3>
                <p className="text-gray-400 text-sm">Republic of Serbia</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              The official electronic visa portal of the Republic of Serbia. 
              Apply for your Serbian visa online with our secure and efficient system.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">support@evisa.gov.rs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+381 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Belgrade, Serbia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Apply for eVisa</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Check Application Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Visa Requirements</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Processing Times</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Republic of Serbia Ministry of Foreign Affairs. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <select className="bg-gray-800 border border-gray-700 text-white text-sm px-3 py-1 rounded">
                <option value="en">English</option>
                <option value="sr">Српски</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This is an official government website. Information and services are provided by the 
              Republic of Serbia Ministry of Foreign Affairs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;