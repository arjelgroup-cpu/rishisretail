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
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full text-center border border-gray-200">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">🎉 Thank You!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Our Rishis executives will call you back soon to guide you on your purchase!
        </p>
        <div className="flex items-center justify-center space-x-2 text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1">
          <Phone className="w-3 h-3" />
          <span>+91 70990 79777</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-sm w-full shadow-lg">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-3">
          <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
            <div className="text-2xl">📞</div>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Get Expert Guidance
        </h2>
        <p className="text-gray-600 text-sm">
          Enter your mobile number and our Rishis executives will call you back to guide you on your purchase
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            placeholder="Enter your mobile number"
            className="w-full pl-10 pr-3 py-3 text-base border-2 border-gray-300 rounded-xl focus:border-yellow-500 focus:outline-none transition-all duration-300 bg-white text-gray-800 placeholder-gray-400"
            required
          />
        </div>
        
        {error && (
          <p className="text-red-500 text-xs text-center">{error}</p>
        )}
        
        <button
          type="submit"
          disabled={phoneNumber.length !== 10 || isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-xl text-base hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Claiming...</span>
            </>
          ) : (
            <>
              <span>Get Expert Call Back</span>
              <div className="text-lg">📞</div>
            </>
          )}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          ✅ No spam • ✅ Instant offers • ✅ EMI available
        </p>
      </div>
    </div>
  );
}