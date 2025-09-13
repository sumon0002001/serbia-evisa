import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationSteps from './components/ApplicationSteps';
import Requirements from './components/Requirements';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import ProcessingInfo from './components/ProcessingInfo';
import CheckStatus from './components/CheckStatus';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {currentSection === 'home' && (
        <>
          <Hero setCurrentSection={setCurrentSection} />
          <ApplicationSteps />
          <Requirements />
          <ProcessingInfo />
        </>
      )}
      
      {currentSection === 'apply' && <ApplicationForm />}
       {currentSection === 'status' && <CheckStatus />}
      
      <Footer />
    </div>
  );
}

export default App;