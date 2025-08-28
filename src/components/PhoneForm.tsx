import React, { useState } from 'react';
import { Phone, CheckCircle, Loader2 } from 'lucide-react';
import { submitPhoneNumber } from '../lib/supabase';

export function PhoneForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) return;

    setIsSubmitting(true);
    setError('');

    const result = await submitPhoneNumber(phoneNumber);
    
    if (result.success) {
      setIsSubmitted(true);
      // Reset after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setPhoneNumber('');
      }, 8000);
    } else {
      setError(result.error || 'Something went wrong');
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform animate-pulse">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎉 Offer Claimed!</h2>
        <p className="text-lg text-gray-600 mb-6">
          We'll contact you soon with your exclusive 40% OFF code!
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Phone className="w-4 h-4" />
          <span>+91 70990 79777</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Claim Your 40% OFF Code
        </h2>
        <p className="text-gray-600">
          Enter your mobile number to get exclusive offers
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="Enter your mobile number"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-red-500 focus:outline-none transition-all duration-300"
            required
          />
        </div>
        
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={phoneNumber.length !== 10 || isSubmitting}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Claiming...</span>
            </>
          ) : (
            <span>Get My 40% OFF Code 🎁</span>
          )}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          ✅ No spam • ✅ Instant offers • ✅ EMI available
        </p>
      </div>
    </div>
  );
}