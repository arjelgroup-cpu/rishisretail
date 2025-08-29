import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-08-31T23:59:59').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl relative overflow-hidden">
      {/* Urgency overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/30"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3 border border-red-200 animate-pulse">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <span className="text-gray-800 font-bold text-xl md:text-2xl">⏰ OFFER ENDS IN:</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { value: timeLeft.days, label: 'DAYS', color: 'from-red-500 to-red-600', urgency: timeLeft.days <= 3 },
            { value: timeLeft.hours, label: 'HOURS', color: 'from-orange-500 to-orange-600', urgency: timeLeft.hours <= 24 },
            { value: timeLeft.minutes, label: 'MINS', color: 'from-yellow-500 to-yellow-600', urgency: timeLeft.minutes <= 60 },
            { value: timeLeft.seconds, label: 'SECS', color: 'from-green-500 to-green-600', urgency: true }
          ].map((item, index) => (
            <div key={index} className={`rounded-xl p-3 md:p-4 text-center border-2 transition-all duration-300 transform hover:scale-105 ${
              item.urgency 
                ? 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200 shadow-lg animate-pulse' 
                : 'bg-white/80 border-gray-200 shadow-md hover:shadow-lg'
            }`}>
              <div className={`bg-gradient-to-r ${item.color} rounded-lg p-3 mb-2 shadow-lg`}>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-black text-white tabular-nums ${
                  item.urgency ? 'animate-bounce' : ''
                }`}>
                  {item.value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className={`text-xs md:text-sm font-bold ${
                item.urgency ? 'text-red-700' : 'text-gray-600'
              }`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Urgency message */}
        <div className="text-center mt-4">
          <p className="text-red-600 font-bold text-sm md:text-base animate-pulse">
            ⚡ HURRY! Don't miss out on these incredible savings!
          </p>
        </div>
      </div>
    </div>
  );
}