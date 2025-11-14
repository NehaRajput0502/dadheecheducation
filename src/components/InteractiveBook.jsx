import React, { useState } from 'react';
import { MenuBook } from '@mui/icons-material';

const InteractiveBook = ({ title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed right-8 bottom-8 z-30 cursor-pointer transition-all duration-500 ${
        isHovered ? 'animate-pulse' : 'animate-float3'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative">
        <MenuBook 
          fontSize="large" 
          className={`text-yellow-600 drop-shadow-lg ${
            isHovered ? 'scale-110' : 'scale-100'
          } transition-transform duration-300`} 
        />
        {isHovered && (
          <div className="absolute -top-10 -left-10 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium whitespace-nowrap">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveBook;