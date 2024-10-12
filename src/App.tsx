import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EmailCaptureModal from './components/EmailCaptureModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer openModal={openModal} />
      <EmailCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;