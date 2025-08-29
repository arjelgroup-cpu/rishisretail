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
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-center space-x-3 mb-6">
        <div className="bg-yellow-100 rounded-full p-2 border border-yellow-200">
          <Clock className="w-5 h-5 text-yellow-600" />
        </div>
        <span className="text-gray-800 font-semibold text-lg">Offer Ends In:</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {[
          { value: timeLeft.days, label: 'DAYS', color: 'from-red-500 to-red-600' },
          { value: timeLeft.hours, label: 'HOURS', color: 'from-orange-500 to-orange-600' },
          { value: timeLeft.minutes, label: 'MINS', color: 'from-yellow-500 to-yellow-600' },
          { value: timeLeft.seconds, label: 'SECS', color: 'from-green-500 to-green-600' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-xl p-3 md:p-4 text-center border border-gray-200 hover:bg-gray-100 transition-all duration-300">
            <div className={`bg-gradient-to-r ${item.color} rounded-lg p-2 mb-2`}>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white tabular-nums">
                {item.value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}