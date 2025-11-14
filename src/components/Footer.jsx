import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Dadheech Memorial</h3>
            <p className="mb-4 text-gray-300">
              Providing quality education since 2002. Empowering students with knowledge, values, and skills for a successful future.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-red-400 transition-colors' aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-red-400 transition-colors' aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className='text-gray-400 hover:text-red-400 transition-colors' aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="text-gray-300 hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link to="/faculty" className="text-gray-300 hover:text-red-400 transition-colors">Faculty</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-red-400 transition-colors">Events</Link></li>
              <li><Link to="/curriculum" className="text-gray-300 hover:text-red-400 transition-colors">Academics</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <LocationOnIcon className="text-red-400 mr-3" />
                <span className="text-gray-300">Dadheech Building, Ramghat Road Jargwan, Bulandshahr, UP</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="text-red-400 mr-3" />
                <span className="text-gray-300">+91 9758975880</span>
              </div>
              <div className="flex items-center">
                <EmailIcon className="text-red-400 mr-3" />
                <span className="text-gray-300">contact@dadheech.edu</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates and news.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
              <button 
                type="submit" 
                className="cta-button"
                disabled={subscribed}
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dadheech Memorial Public School. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and developed with ❤️ by Neha Rajput
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;