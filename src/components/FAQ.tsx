import React from 'react';

const faqs = [
  {
    question: 'What is LinkedInsight?',
    answer: `LinkedInsight is a tool that helps you stay on top of your LinkedIn network by notifying you when your key connections post content and providing AI-generated suggestions for engagement.`,
  },
  {
    question: 'How will this help me on LinkedIn?',
    answer: `LinkedInsight allows you to engage more effectively with your most important connections, ensuring you never miss an opportunity to interact and stay top-of-mind in your professional network.`,
  },
  {
    question: 'What does early access mean?',
    answer: `Early access gives you the opportunity to be among the first users to try LinkedInsight before its public launch. You'll have a chance to provide feedback and shape the product's development.`,
  },
  {
    question: 'When will LinkedInsight be available?',
    answer: `We're currently in the final stages of development. By signing up for early access, you'll be notified as soon as LinkedInsight is ready for use.`,
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;