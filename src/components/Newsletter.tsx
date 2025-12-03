'use client';

import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset the subscription message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <div className="bg-white text-black p-10 rounded-xl shadow-lg max-w-3xl mx-auto mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-6">Subscribe to our Newsletter</h3>
        <p className="text-xl text-black-600 mb-8">
          Stay updated with the latest sports news and updates.
        </p>
      </div>
      {isSubscribed ? (
        <div className="p-6 text-xl bg-green-100 text-green-700 rounded-xl text-center">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-8 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-10 py-4 text-xl font-medium rounded-xl hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
