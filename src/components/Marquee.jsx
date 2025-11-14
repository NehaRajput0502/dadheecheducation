import React, { useState, useEffect } from 'react';

function Marquee({ text }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative py-2 text-white font-bold overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-t border-gray-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='2'/%3E%3Ccircle cx='13' cy='13' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      
      <div className="relative flex items-center">
        <div 
          className={`whitespace-nowrap flex items-center ${isPaused ? 'animate-pause' : 'animate-marquee'}`}
        >
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="mx-4 flex items-center">
              <span className="text-sm text-white/90 hover:text-white transition-colors duration-200">
                {text}
              </span>
              <svg 
                className="w-4 h-4 mx-2 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </span>
          ))}
        </div>
      </div>
      
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-gray-900 to-transparent"></div>

      {/* Decorative dots - smaller and more subtle */}
      <div className="absolute top-1 left-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-1 right-3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-40"></div>
    </div>
  );
}

export default Marquee;