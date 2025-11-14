import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

function Main3() {
  return (
    <div className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-100 to-peach-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          <div className="flex flex-col justify-center">
            <h1 className='font-bold text-3xl lg:text-4xl mb-6 text-gray-800'>Dadheech Memorial Public School</h1>
            <p className='text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed'>
              Dadheech Memorial Public School offers a rich and diverse educational experience that goes beyond the classroom. Our campus is designed to support a wide range of activities and interests, ensuring that every student has the opportunity to explore and excel.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m0 12H5m2 0h2m-2 0V9M9 21h6m-6 0V9m0 12v-3m0 0H7m2 0h2" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Modern Infrastructure</span>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Qualified Faculty</span>
              </div>
              
              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Holistic Development</span>
              </div>
            </div>
            
            <Link to="/campus" className="cta-button inline-flex items-center justify-center group">
              Explore Our Campus
              <ArrowRightAltIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="hidden lg:flex justify-center relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <img 
                src="/images/dm-26.jpg" 
                alt="School Campus" 
                className="relative rounded-xl shadow-2xl transform hover:scale-105 transition duration-700 w-full max-w-lg"
              />
              
              {/* Floating info cards */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800">500+ Students</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg animate-float animation-delay-2000">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m2 0V9m0 12H5m2 0h2m-2 0V9M9 21h6m-6 0V9m0 12v-3m0 0H7m2 0h2" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-gray-800">25+ Classrooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;