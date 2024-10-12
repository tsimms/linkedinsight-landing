import React from 'react';
import { Linkedin } from 'lucide-react';

interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Linkedin className="h-8 w-8 text-linkedin mr-2" />
            <span className="text-xl font-bold">LinkedInsight</span>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2">Don't miss out on transforming your LinkedIn strategy!</p>
            <button
              onClick={openModal}
              className="bg-linkedin text-white font-bold py-2 px-6 rounded-full hover:bg-linkedin-dark transition duration-300"
            >
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; 2024 LinkedInsight. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;