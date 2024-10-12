import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    // Set submitted state to true
    setIsSubmitted(true);
    // Close the modal after a short delay
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Join Our Waitlist</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        {!isSubmitted ? (
          <>
            <p className="mb-4">
              LinkedInsight is coming soon! Be the first to know when we launch by joining our waitlist.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <button
                type="submit"
                className="w-full bg-linkedin text-white font-bold py-2 px-4 rounded hover:bg-linkedin transition duration-300"
              >
                Join Waitlist
              </button>
            </form>
          </>
        ) : (
          <p className="text-green-600 font-semibold text-center">
            Thank you for joining our waitlist! We'll be in touch soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailCaptureModal;