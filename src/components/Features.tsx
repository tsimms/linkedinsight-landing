import React from 'react';
import { Target, Clock, Upload } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-12 w-12 text-linkedin" />,
    title: 'Targeted Tracking',
    description: `Select the connections that matter most and get notified when they post.`,
  },
  {
    icon: <Clock className="h-12 w-12 text-linkedin" />,
    title: 'Real-Time Engagement Prompts',
    description: `Stay active by commenting on posts with AI-suggested responses.`,
  },
  {
    icon: <Upload className="h-12 w-12 text-linkedin" />,
    title: 'Easy Setup',
    description: `Upload your connection data, and you're ready to go in minutes.`,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;