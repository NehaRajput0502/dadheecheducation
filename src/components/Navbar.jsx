import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Close } from '@mui/icons-material';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [gradientPosition, setGradientPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Animate gradient background
    const gradientInterval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 100);
    }, 50);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(gradientInterval);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-white font-bold drop-shadow-md' : 'text-white';
  };

  // Darker gradient background for better text visibility
  const navbarStyle = {
    background: scrolled 
      ? `linear-gradient(45deg, 
         rgba(178, 34, 34, 0.9) 0%, 
         rgba(205, 133, 63, 0.9) ${gradientPosition}%, 
         rgba(65, 105, 225, 0.9) 100%)`
      : `linear-gradient(45deg, 
         rgba(178, 34, 34, 0.85) 0%, 
         rgba(205, 133, 63, 0.85) ${gradientPosition}%, 
         rgba(65, 105, 225, 0.85) 100%)`,
    backdropFilter: 'blur(12px)',
    boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.25)' : '0 2px 15px rgba(0, 0, 0, 0.2)',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    transition: 'all 0.4s ease'
  };

  return (
    <nav className="w-full z-50 transition-all duration-400" style={navbarStyle}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/dmps.png" 
              alt="Dadheech Memorial Logo" 
              className="h-12 w-12 rounded-full border-1 border-white/80 shadow-lg group-hover:border-white transition-colors duration-300"
            />
            <div className="ml-3">
              <h1 className="font-bold text-2xl text-white drop-shadow-md">Dadheech</h1>
              <p className="text-sm text-white/90 drop-shadow-md">Memorial Public School</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/')}`}>Home</Link>
            <Link to="/aboutus" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/aboutus')}`}>About Us</Link>
            <Link to="/faculty" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/faculty')}`}>Faculty</Link>
            <Link to="/students" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/students')}`}>Students</Link>
            <Link to="/events" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/events')}`}>Events</Link>
            <Link to="/curriculum" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/curriculum')}`}>Academics</Link>
            <Link to="/moto" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/moto')}`}>Mission</Link>
            <Link to="/campus" className={`py-2 px-3 rounded-lg hover:bg-white/10 transition-all duration-300 ${isActive('/campus')}`}>Campus</Link>
            <Link to="/contact" className="bg-white text-red-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-br from-red-800/95 to-blue-800/95 shadow-xl rounded-b-xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-1 p-4">
            <Link to="/" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/aboutus" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/aboutus')}`} onClick={closeMenu}>About Us</Link>
            <Link to="/faculty" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/faculty')}`} onClick={closeMenu}>Faculty</Link>
            <Link to="/students" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/students')}`} onClick={closeMenu}>Students</Link>
            <Link to="/events" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/events')}`} onClick={closeMenu}>Events</Link>
            <Link to="/curriculum" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/curriculum')}`} onClick={closeMenu}>Academics</Link>
            <Link to="/moto" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/moto')}`} onClick={closeMenu}>Mission</Link>
            <Link to="/campus" className={`py-3 px-4 rounded-lg hover:bg-white/10 transition-colors ${isActive('/campus')}`} onClick={closeMenu}>Campus</Link>
            <Link to="/contact" className="bg-white text-red-800 py-3 px-4 rounded-lg font-semibold text-center mt-2 hover:bg-gray-100 transition-colors" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Animated underline effect for desktop */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent">
        <div 
          className="h-full bg-white/80"
          style={{
            width: '20%',
            transform: `translateX(${gradientPosition * 3}%)`,
            transition: 'transform 0.4s ease',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }}
        />
      </div>

      {/* Subtle particle effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${gradientPosition + i * 10}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
