import React, { useState } from 'react';

function Main1() {
  const [isExpandedPrincipal, setIsExpandedPrincipal] = useState(false);
  const [isExpandedManager, setIsExpandedManager] = useState(false);

  return (
    <div className='p-4 lg:p-8 mt-6 mb-8 shadow-lg bg-gradient-to-br from-peach-100 to-blue-50 rounded-xl'>
      <div className='flex flex-col items-center justify-center mb-6'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-2 w-full text-center'>
          <span className='text-dark text-2xl lg:text-4xl font-bold'>Today's Vision</span>
          <span className='text-red-600 text-2xl lg:text-4xl font-bold'>Tomorrow's Technology</span>
        </div>
      </div>
      <hr className='w-full border-blue-200 mb-6' />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
        {/* Principal Section */}
        <div className='bg-white p-6 lg:p-8 rounded-xl shadow-md border-l-4 border-blue-600'>
          <div className='flex items-center gap-4 mb-6'>
            <img 
              src="/images/rani.png " 
              className='shadow-lg rounded-full w-16 lg:w-20 h-16 lg:h-20 object-cover border-2 border-blue-600' 
              alt="Principal" 
            />
            <div className='flex flex-col'>
              <span className='lg:text-xl text-lg font-bold text-gray-800'>Kavita Rani</span>
              <span className='text-sm text-gray-600'>Principal</span>
            </div>
          </div>
          
          <div className="relative">
            <p className={`text-justify text-gray-700 leading-relaxed ${isExpandedPrincipal ? '' : 'line-clamp-4'}`}>
              Dear Students, Parents, and Well-wishers,<br /><br />
              "As the Principal of Dadheech Memorial Public School, it is my privilege to lead an institution that is committed to academic excellence and character building. We focus on creating a nurturing environment where students can explore their potential, develop critical thinking skills, and grow into responsible global citizens. Our dedicated faculty works tirelessly to provide a holistic education that balances academic rigor with extracurricular activities. I believe that every child has unique talents, and our mission is to help them discover and nurture these abilities to achieve their fullest potential."
            </p>
            
            <button 
              onClick={() => setIsExpandedPrincipal(!isExpandedPrincipal)}
              className="text-blue-600 font-medium mt-2 flex items-center hover:underline"
            >
              {isExpandedPrincipal ? 'Read less' : 'Read more'}
              <svg 
                className={`ml-1 w-4 h-4 transform ${isExpandedPrincipal ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="cta-button">Academic Programs</button>
            <button className="cta-button secondary-button">School Calendar</button>
          </div>
        </div>

        {/* Manager Section */}
        <div className='bg-white p-6 lg:p-8 rounded-xl shadow-md border-l-4 border-red-600'>
          <div className='flex items-center gap-4 mb-6'>
            <img 
              src="/images/modi.png" 
              className='shadow-lg rounded-full w-16 lg:w-20 h-16 lg:h-20 object-cover border-2 border-red-600' 
              alt="Manager" 
            />
            <div className='flex flex-col'>
              <span className='lg:text-xl text-lg font-bold text-gray-800'>Pramod Kumar</span>
              <span className='text-sm text-gray-600'>Manager</span>
            </div>
          </div>
          
          <div className="relative">
            <p className={`text-justify text-gray-700 leading-relaxed ${isExpandedManager ? '' : 'line-clamp-4'}`}>
              Dear Parents and Students,<br /><br />
              "Welcome to Dadheech Memorial Public School, where we are dedicated to nurturing young minds and shaping future leaders. At Dadheech Memorial, we believe in fostering an environment that encourages academic excellence, creativity, and holistic development. Our commitment to quality education and student well-being is reflected in our state-of-the-art facilities and our dedicated faculty. We strive to create a learning experience that empowers students to reach their full potential and excel in all aspects of life. I invite you to explore our website and learn more about our vibrant school community. Together, let's work towards a brighter future for every student."
            </p>
            
            <button 
              onClick={() => setIsExpandedManager(!isExpandedManager)}
              className="text-red-600 font-medium mt-2 flex items-center hover:underline"
            >
              {isExpandedManager ? 'Read less' : 'Read more'}
              <svg 
                className={`ml-1 w-4 h-4 transform ${isExpandedManager ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button className="cta-button">Learn More</button>
            <button className="cta-button secondary-button">Admission Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;