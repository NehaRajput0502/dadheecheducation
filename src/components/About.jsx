import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-red-600">Dadheech Memorial Public School</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nurturing young minds and shaping future leaders since 2002
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 gap-8 md:gap-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-red-600">About Us</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Dadheech Memorial Public School, we are dedicated to fostering an environment of academic excellence, creativity, and holistic development. Our state-of-the-art facilities and passionate faculty ensure a quality education that empowers students to reach their full potential.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="cta-button">Get In Touch</Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://encyclopediaofBulandshahr.net/wp-content/uploads/2022/08/DadheechHS2_f.jpg" 
              alt="Dadheech Memorial Public School Campus"
              className="w-full h-auto object-cover rounded-lg shadow-xl md:shadow-2xl transform hover:scale-105 transition duration-700"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* Founders Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10 text-red-600 text-center">Our Founders</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Founder 1 */}
            <div className='bg-white p-6 lg:p-8 rounded-xl shadow-md border-l-4 border-red-600'>
              <div className='flex items-center gap-4 mb-6'>
                <img 
                  src="/images/boss.png" 
                  className='shadow-lg rounded-full w-16 lg:w-20 h-16 lg:h-20 object-cover border-2 border-red-600' 
                  alt="Founder" 
                />
                <div className='flex flex-col'>
                  <span className='lg:text-xl text-lg font-bold text-gray-800'>Late Shri. Douli Singh Rajput</span>
                  <span className='text-sm text-gray-600'>Founder & Visionary</span>
                </div>
              </div>
              
              <div className="relative">
                <p className={`text-justify text-gray-700 leading-relaxed ${isExpanded1 ? '' : 'line-clamp-4'}`}>
                  "Education is not just about acquiring knowledge, but about building character and shaping futures. Our vision for Dadheech Memorial Public School was to create an institution that would serve as a beacon of quality education while honoring the memory of our ancestors who valued learning above all else. Established in 2002, this school stands as a tribute to the Dadheech family's longstanding commitment to education and community development. We believe in nurturing not just academic excellence but also moral values that help students become responsible citizens of tomorrow."
                </p>
                
                <button 
                  onClick={() => setIsExpanded1(!isExpanded1)}
                  className="text-red-600 font-medium mt-2 flex items-center hover:underline"
                >
                  {isExpanded1 ? 'Read less' : 'Read more'}
                  <svg 
                    className={`ml-1 w-4 h-4 transform ${isExpanded1 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Founder 2 */}
            <div className='bg-white p-6 lg:p-8 rounded-xl shadow-md border-l-4 border-blue-600'>
              <div className='flex items-center gap-4 mb-6'>
                <img 
                  src="/images/boss1.png" 
                  className='shadow-lg rounded-full w-16 lg:w-20 h-16 lg:h-20 object-cover border-2 border-blue-600' 
                  alt="Co-Founder" 
                />
                <div className='flex flex-col'>
                  <span className='lg:text-xl text-lg font-bold text-gray-800'>Late Smt. Shanti Devi</span>
                  <span className='text-sm text-gray-600'>Co-Founder</span>
                </div>
              </div>
              
              <div className="relative">
                <p className={`text-justify text-gray-700 leading-relaxed ${isExpanded2 ? '' : 'line-clamp-4'}`}>
                  "A school should be a second home where children feel safe, valued, and inspired to learn. Along with my husband, I envisioned Dadheech Memorial as a place that would combine modern education with traditional values. The school is built on the principles of compassion, integrity, and excellence - values that were dear to our family elders whose memory we honor through this institution. Every brick of this school represents our commitment to providing quality education to the children of our community, ensuring they have the foundation to build successful futures while staying connected to their roots."
                </p>
                
                <button 
                  onClick={() => setIsExpanded2(!isExpanded2)}
                  className="text-blue-600 font-medium mt-2 flex items-center hover:underline"
                >
                  {isExpanded2 ? 'Read less' : 'Read more'}
                  <svg 
                    className={`ml-1 w-4 h-4 transform ${isExpanded2 ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-red-600 text-center">Our Legacy</h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Since our establishment in 2002, Dadheech Memorial Public School has grown into a premier institution known for its commitment to educational excellence. We've continuously evolved, integrating modern teaching methodologies and expanding our curriculum to meet the changing needs of our students. Our nurturing and dynamic learning environment has built a reputation that spans decades.
          </p>
          
          <hr className="my-6 border-gray-200" />
          
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-600">The Memorial Foundation</h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Dadheech Memorial Public School was established in loving memory of the Dadheech family elders who were passionate advocates for education in rural communities. The school stands on land that has been in the Dadheech family for generations, now transformed into a center of learning that serves hundreds of students each year. Our founders believed that the greatest tribute to their ancestors would be an institution that empowers future generations through education while preserving the values and principles that defined the Dadheech family legacy.
          </p>
        </div>

        <div className="text-center">
          <Link to="/events" className="cta-button secondary-button">
            Explore Our Programs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;