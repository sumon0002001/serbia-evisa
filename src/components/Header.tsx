import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'apply', label: 'Apply Now' },
    { id: 'status', label: 'Check Status' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-700">eVisa Serbia</h1>
                <p className="text-sm text-gray-600">Republic of Serbia</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? 'bg-blue-700 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white">
              <option value="en">English</option>
              <option value="sr">Српски</option>
            </select>
            
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 pt-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;