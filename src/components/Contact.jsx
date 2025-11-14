import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';

function Contact() {
    const form = useRef();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', 
                'YOUR_TEMPLATE_ID', 
                form.current, 
                'YOUR_PUBLIC_KEY'
            );
            setSubmitStatus('success');
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setSubmitStatus('error');
            console.error('Failed to send message:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            
            <div className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: "url('https://Dadheech.peelschools.org/images/b82d5de2-8621-4a01-9259-2a45f8789911')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
                    <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">
                        <form ref={form} onSubmit={sendEmail} className='bg-white bg-opacity-95 max-w-2xl mx-auto p-8 md:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300'>
                            <h2 className='text-3xl md:text-5xl font-extrabold mb-6 text-center text-red-600'>Contact Us</h2>
                            
                            {submitStatus === 'success' && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                    Message sent successfully! Redirecting...
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <input type="text" name="user_name" placeholder='Your Name' className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300" required />
                                <input type="email" name="user_email" placeholder='Your Email Address' className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300" required />
                            </div>
                            <textarea name="message" placeholder='Your Message' className='w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300' rows="5" required></textarea>
                            <button 
                                type='submit' 
                                className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 transition duration-300 text-lg font-semibold transform hover:scale-105 flex items-center justify-center"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

          
            <div className="container mx-auto py-12 md:py-20 px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-12 md:mb-16 text-center text-red-600">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-red-600 mb-6 mx-auto " style={{fontSize:"3rem"}} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-red-800">Office Hours</h3>
                        <p className="text-gray-600 text-center">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-center">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-600 text-center">Sunday: Closed</p>
                    </div>
                    <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-red-600 mb-6 mx-auto" style={{fontSize:"3rem"}}/>
                        <h3 className="text-2xl font-semibold mb-4 text-center text-red-800">Visit Us</h3>
                        <p className="text-gray-600 text-center">1234 School Street, Education City, EC 12345</p>
                    </div>
                </div>
            </div>


            <div className="bg-blue-50 py-12 md:py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-red-600">Admission Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-red-800">Admission Process</h3>
                            <p className="text-gray-600 mb-6">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                            <a href="https://i.pinimg.com/474x/88/6c/72/886c729c5e6310e29e269031d73a5625.jpg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:from-red-600 hover:to-red-700 transition duration-300 transform hover:scale-105">
                                <GetApp className="mr-2" />
                                Download Admission Form
                            </a>
                        </div>
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-red-800">Criteria</h3>
                            <p className="text-gray-600">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        </div>
                        <div className="p-6 md:p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-red-800">Important Dates</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Admission Form Availability: March 1st</li>
                                <li>Last Date for Submission: March 31st</li>
                                <li>Entrance Test: April 15th</li>
                                <li>Announcement of Results: April 30th</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="container mx-auto py-12 md:py-20 px-6">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-red-600">Find Us On The Map</h2>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25765.067332804723!2d-94.16618081142514!3d36.17547421545538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c914b302758579%3A0xa131eaadd43bbc5a!2sDadheech%2C%20AR%2C%20USA!5e0!3m2!1sen!2sin!4v1721770478701!5m2!1sen!2sin"
                        frameBorder="0"
                        className="w-full h-64 md:h-96 border-0"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact;