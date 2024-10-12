import React from 'react';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://timjimsimms.com/linkedinsight/assets/linkedinsight-logo-cnBYzn_0.png" 
            alt="LinkedInsight Logo" 
            className="h-8 mr-2"
          />
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><a href="#features" className="text-gray-600 hover:text-linkedin">Features</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-linkedin">How It Works</a></li>
            <li><a href="#faq" className="text-gray-600 hover:text-linkedin">FAQ</a></li>
          </ul>
          <button
            onClick={openModal}
            className="bg-linkedin text-white font-bold py-2 px-4 rounded-full hover:bg-linkedin-dark transition duration-300"
          >
            Join Waitlist
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;