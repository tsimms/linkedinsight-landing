import React from 'react';
import { Upload, Bell, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-linkedin" />,
    title: 'Upload your key connections',
    description: `Select and upload the LinkedIn connections you want to track.`,
  },
  {
    icon: <Bell className="h-12 w-12 text-linkedin" />,
    title: 'Get notified of new posts',
    description: `Receive real-time notifications when your key connections share content.`,
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-linkedin" />,
    title: 'Engage with AI-generated suggestions',
    description: `Comment on posts using our AI-powered engagement prompts.`,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;