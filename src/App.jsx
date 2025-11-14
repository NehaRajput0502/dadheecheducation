import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';

// Import your existing components
import Coursoul from './components/Coursoul';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import Main3 from './components/Main3';
import Footer from './components/Footer';
import About from './components/About';
import Moto from './components/Moto';
import Campus from './components/Campus';
import Contact from './components/Contact';
import Timer from './components/Timer';
import Events from './components/Events';
import Curriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Students from './components/Students';

// NEW: Import the dynamic components (add these lines)
import YouTubeGallery from './components/YouTubeGallery';
import AnimatedBackground from './components/AnimatedBackground';
import InteractiveCard from './components/InteractiveCard';
import ParallaxSection from './components/ParallaxSection';
import InteractiveBook from './components/InteractiveBook'; // Add this if you want the floating book

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(loadingTimer);
    };
  }, []);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // NEW: Function for book click
  const handleBookClick = () => {
    window.open('/curriculum', '_self');
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Dadheech Memorial Public School</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className='App'>
        {/* NEW: Add animated background */}
        <AnimatedBackground />
        
        {/* NEW: Add interactive floating book */}
        <InteractiveBook 
          title="Explore Our Curriculum" 
          onClick={handleBookClick} 
        />
        
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div>
                <Coursoul />
                <Marquee text={`"Welcome to Dadheech Memorial Public School, where we nurture young minds for a brighter future."`} />
                <Timer />
                
                {/* NEW: Parallax section with school motto */}
                <ParallaxSection 
                  image="/images/school101.jpeg" // CHANGE THIS to your actual image path
                  title="Excellence in Education"
                  subtitle="Since 1995"
                />
                
                <Main2 />
                
                {/* NEW: YouTube video gallery - UPDATE with your real video IDs */}
                <YouTubeGallery 
                  title="School Events & Activities"
                  channelType="activities" // This will show videos from your activities channel
                />
                
                <Checkout />
                
                {/* NEW: Interactive cards section */}
                <div className="container mx-auto px-4 py-12">
                  <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our School?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InteractiveCard 
                      title="Qualified Faculty"
                      description="Our teachers are highly qualified and experienced."
                      icon="👨‍🏫"
                      image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    />
                    <InteractiveCard 
                      title="Modern Infrastructure"
                      description="State-of-the-art facilities for holistic development."
                      icon="🏫"
                      image="https://images.unsplash.com/photo-1615716175455-9a086e5c2440?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    />
                    <InteractiveCard 
                      title="Sports Excellence"
                      description="Excellent sports facilities and coaching."
                      icon="⚽"
                      image="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    />
                  </div>
                </div>
                
                <Main1 />
                <Main3 />
              </div>
            }
          />

          {/* Other routes with similar enhancements */}
          <Route
            exact
            path='/faculty'
            element={
              <>
                <Faculty />
                {/* NEW: YouTube gallery for faculty page */}
                <YouTubeGallery 
                  title="Faculty Development Programs"
                  channelType="education" // This will show videos from your education channel
                />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/students'
            element={
              <>
                <Students />
                {/* NEW: YouTube gallery for students page */}
                <YouTubeGallery 
                  title="Student Achievements"
                  channelType="activities" // This will show videos from your activities channel
                />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          {/* Other routes remain similar but can be enhanced similarly */}
          <Route
            exact
            path='/campus'
            element={
              <>
                <Campus />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/events'
            element={
              <>
                <Events />
                {/* NEW: YouTube gallery for events page */}
                <YouTubeGallery 
                  title="Recent Events"
                  channelType="activities" // This will show videos from your activities channel
                />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/curriculum'
            element={
              <>
                <Curriculum />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/moto'
            element={
              <>
                <Moto />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/aboutus'
            element={
              <>
                <About />
                {/* NEW: Parallax section for about us page */}
                <ParallaxSection 
                  image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // CHANGE THIS to your actual image
                  title="Our Legacy"
                  subtitle="Over 25 years of educational excellence"
                />
                <Main2 />
                <Checkout />
                <Main1 />
                <Main3 />
              </>
            }
          />

          <Route
            exact
            path='/contact'
            element={
              <>
                <Contact />
                <Main2 />
                <Checkout />
                <Main3 />
              </>
            }
          />

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>

        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-40"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <KeyboardArrowUp />
          </button>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;