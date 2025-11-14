import React from 'react';
import { School, MenuBook, SportsSoccer, Science, Brush, Calculate } from '@mui/icons-material';

const AnimatedBackground = () => {
  return (
    <>
      {/* Floating educational icons */}
      <div className="fixed top-1/5 left-8 text-blue-400 opacity-30 animate-float1">
        <School fontSize="large" />
      </div>
      <div className="fixed top-1/3 right-14 text-green-400 opacity-30 animate-float2">
        <MenuBook fontSize="large" />
      </div>
      <div className="fixed bottom-1/4 left-24 text-yellow-500 opacity-30 animate-float3">
        <SportsSoccer fontSize="large" />
      </div>
      <div className="fixed top-1/2 right-24 text-purple-400 opacity-30 animate-float4">
        <Science fontSize="large" />
      </div>
      <div className="fixed bottom-1/3 left-16 text-pink-400 opacity-30 animate-float5">
        <Brush fontSize="large" />
      </div>
      <div className="fixed top-3/4 right-16 text-red-400 opacity-30 animate-float6">
        <Calculate fontSize="large" />
      </div>
      
      {/* Falling elements (books, pencils, etc.) */}
      <div className="fixed top-0 left-1/4 text-yellow-600 opacity-20 animate-fall1">
        <div className="text-2xl">📚</div>
      </div>
      <div className="fixed top-0 left-2/4 text-blue-600 opacity-20 animate-fall2">
        <div className="text-2xl">✏️</div>
      </div>
      <div className="fixed top-0 left-3/4 text-red-600 opacity-20 animate-fall3">
        <div className="text-2xl">🔬</div>
      </div>
      <div className="fixed top-0 left-1/5 text-green-600 opacity-20 animate-fall4">
        <div className="text-2xl">🎓</div>
      </div>
      <div className="fixed top-0 left-4/5 text-purple-600 opacity-20 animate-fall5">
        <div className="text-2xl">📝</div>
      </div>
      
      {/* Animated circles */}
      <div className="fixed -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="fixed -top-32 -right-32 w-80 h-80 bg-green-200 rounded-full opacity-10 animate-pulse-slower"></div>
      <div className="fixed top-1/4 -right-24 w-64 h-64 bg-blue-200 rounded-full opacity-10 animate-pulse-medium"></div>
      <div className="fixed bottom-1/3 -left-16 w-72 h-72 bg-yellow-200 rounded-full opacity-10 animate-pulse-medium"></div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="fixed w-2 h-2 bg-gray-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-particle ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
    </>
  );
};

export default AnimatedBackground;