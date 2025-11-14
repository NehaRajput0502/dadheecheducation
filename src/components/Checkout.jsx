import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("UPI-ID-FOR-PAYMENT");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className='py-12 bg-gradient-to-br from-blue-50 to-peach-50'>
      <div className="container mx-auto px-4">
        <h1 className='text-center mb-8 text-3xl lg:text-4xl font-bold text-gray-800'>Explore Our Dadheech Online Quiz!</h1>
        
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-16 items-center'>
          <div className='flex flex-col items-center'>
            <div className="relative group">
              <div className="absolute -inset-2 bg-red-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://dadheecheducation.example.com/exhibition" 
                  alt="Exhibition QR Code" 
                  className='w-64 h-64 lg:w-80 lg:h-80 mx-auto'
                />
              </div>
            </div>
            
            <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
              <h3 className="font-semibold text-gray-800 mb-2">Direct Payment</h3>
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                <span className="font-mono text-gray-700">UPI-ID-FOR-PAYMENT</span>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center text-red-600 hover:text-red-800 ml-2"
                >
                  {isCopied ? (
                    <span className="text-green-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Copied!
                    </span>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col gap-6'>
            <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600'>
              <h2 className='text-2xl font-bold text-gray-800 mb-4'>Special Recognition Awards</h2>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Outstanding Presentation</h3>
                    <p className="text-2xl font-bold text-red-600">₹2,100</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-peach-50 rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Most Creative Display</h3>
                    <p className="text-2xl font-bold text-red-600">₹1,100</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-gray-800 mb-4">Event Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>March 27-28, 2024</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>School Main Ground</span>
                </div>
              </div>
              
              <button className="cta-button w-full mt-6">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;