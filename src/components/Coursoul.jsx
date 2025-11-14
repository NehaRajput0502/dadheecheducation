import React, { useState, useEffect } from 'react';

function Coursoul() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/school101.jpeg",
      title: "Dadheech Memorial Public School",
      subtitle: "Bulandshahr Districts"
    },
    {
      image: "/images/dm-25.jpg",
      title: "Excellence in Education",
      subtitle: "Since 2002"
    },
    {
      image: "/images/dm-52.jpg",
      title: "Nurturing Future Leaders",
      subtitle: "Holistic Development"
    },
    {
      image: "/images/dm-6.jpg",
      title: "Performance & Achievement",
      subtitle: "Personal Development"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[25rem] lg:h-[40rem] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <h4 className="text-lg lg:text-xl text-white font-semibold">
              {slide.subtitle}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coursoul;
