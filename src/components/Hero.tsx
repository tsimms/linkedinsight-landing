import React from 'react';
import { Bell } from 'lucide-react';

interface HeroProps {
  openModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ openModal }) => {
  return (
    <section className="bg-linkedin text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Boost Your LinkedIn Engagement with Targeted Real-Time Notifications!
          </h1>
          <p className="text-xl mb-8">
            Never miss an opportunity to engage with your most important prospects and connections.
          </p>
          <button
            onClick={openModal}
            className="bg-white text-linkedin font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Join Waitlist
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1713946598432-9bb1f09acf9b?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional using LinkedInsight on laptop"
              className="rounded-lg shadow-2xl max-h-[500px] object-cover"
            />
            <Bell className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;