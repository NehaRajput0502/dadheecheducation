import React, { useState, useEffect } from 'react';

function Main2() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of image paths - add all your image paths here
  const images = [
    "/images/dm-52.jpg",
    "/images/dm-54.jpg",
    "/images/dm-25.jpg",
    "/images/dm-6.jpg",
    // Add more images as needed
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const downloadBrochure = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      const anchor = document.createElement('a');
      anchor.href = "/home/neha/Dadheech_School/dadheecheducation/public/dadheech_brochure.pdf";
      anchor.download = 'dadheech_brochure.pdf';
      anchor.click();
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className='py-10 lg:py-16 bg-gradient-to-br from-peach-100 to-blue-100'>
      <div className='container mx-auto px-4'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-gray-800 flex flex-col justify-center">
            <span className='text-red-600 font-semibold text-lg mb-2'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-4xl mb-4 text-gray-800'>About Dadheech Memorial</h1>
            <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
              Dadheech Memorial Public School, founded in 2002, is dedicated to providing quality education and holistic development. The school emphasizes academic excellence, critical thinking, and ethical values. It boasts modern infrastructure, including advanced science labs, spacious classrooms, a well-stocked library, and comprehensive sports facilities. Dadheech aims to empower students with knowledge and skills for a successful future.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Modern Infrastructure</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Qualified Faculty</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Holistic Development</span>
              </div>
            </div>
            
            <button 
              className={`cta-button flex items-center justify-center ${isDownloading ? 'opacity-75' : ''}`} 
              onClick={downloadBrochure}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  Download Brochure
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </>
              )}
            </button>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={images[currentImageIndex]} 
                  className="w-full h-auto transition-opacity duration-500 ease-in-out"
                  alt="School Campus" 
                />
              </div>
              
              {/* Navigation buttons */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={goToPrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;