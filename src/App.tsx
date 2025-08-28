import React from 'react';
import { CountdownTimer } from './components/CountdownTimer';
import { PhoneForm } from './components/PhoneForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header with Logo */}
      <header className="relative z-10 pt-6 pb-4">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/rishis transparent.png" 
            alt="Rishis Retail" 
            className="h-16 md:h-20 drop-shadow-2xl"
          />
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-semibold text-sm md:text-base">
              9 Stores Across Assam • Since 2014
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            AUGUST-END
            <br />
            <span className="text-yellow-300">MEGA DHAMAKA</span>
          </h1>
          <div className="bg-red-600 text-white px-8 py-3 rounded-full text-xl md:text-2xl font-bold shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            UP TO 40% OFF
          </div>
        </div>

        {/* Offer Image */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <img 
            src="/rishis-og.png" 
            alt="August-End Mega Dhamaka - Up to 40% OFF" 
            className="max-w-xs md:max-w-sm w-full h-auto rounded-2xl shadow-2xl border-4 border-white/30"
          />
        </div>

        {/* Countdown Timer */}
        <div className="mb-8">
          <CountdownTimer />
        </div>

        {/* Phone Form */}
        <PhoneForm />

        {/* Product Categories */}
        <div className="mt-8 text-center">
          <p className="text-white/90 text-lg font-medium mb-4">
            TVs • Refrigerators • Washing Machines • ACs • Laptops • Mobiles
          </p>
          <div className="flex justify-center space-x-6 text-white/80">
            <span className="text-sm">📱 Samsung</span>
            <span className="text-sm">💳 EMI Available</span>
            <span className="text-sm">🔄 Exchange Program</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 mt-auto">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Phone className="w-4 h-4 text-white" />
          <a href="tel:+917099079777" className="text-white font-semibold hover:text-yellow-300 transition-colors">
            +91 70990 79777
          </a>
        </div>
        <p className="text-white/80 text-sm">
          © 2025 Rishis Retail. All Rights Reserved. • Offers subject to T&C
        </p>
      </footer>
    </div>
  );
}

export default App;