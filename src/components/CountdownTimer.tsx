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
    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Clock className="w-5 h-5 text-white animate-pulse" />
        <span className="text-white font-semibold text-lg">Offer Ends In:</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HOURS' },
          { value: timeLeft.minutes, label: 'MINS' },
          { value: timeLeft.seconds, label: 'SECS' }
        ].map((item, index) => (
          <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
              {item.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-white/80 font-medium mt-1">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}