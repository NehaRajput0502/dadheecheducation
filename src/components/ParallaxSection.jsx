import React from 'react';

const ParallaxSection = ({ image, title, subtitle }) => {
  return (
    <section 
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </section>
  );
};

export default ParallaxSection;