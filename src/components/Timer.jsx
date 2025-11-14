import React, { useState } from 'react'

function Timer() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(true);
    setTimeout(() => setIsRegistered(false), 3000);
  };

  return (
    <div className='w-full py-3 text-white bg-gradient-to-r from-red-600 to-red-800'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
          {/* Event Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-bold'>Dadheech Online Quiz</h3>
            <p className='text-sm opacity-90'>March 27-28, 2024 • School Main Ground</p>
          </div>
          
          {/* Action Button */}
          <button 
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg ${
              isRegistered 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-white text-red-600 hover:bg-gray-100 hover:scale-105'
            }`}
            onClick={handleRegister}
            disabled={isRegistered}
          >
            {isRegistered ? 'Registered ✓' : 'Register Now'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Timer