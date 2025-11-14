import React, { useState, useEffect } from 'react';

const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [events] = useState([
    {
      id: 1,
      name: "Dadheech Online Quiz",
      date: "2024-03-27",
      description: "Showcasing innovative science projects by our students",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Sports Day",
      date: "2024-04-15",
      description: "Annual sports competition and athletic events",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Annual Day Celebration",
      date: "2024-05-20",
      description: "Cultural performances and award ceremony",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(events[currentEventIndex].date);
      const currentDate = new Date();
      const difference = eventDate - currentDate;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Move to next event if current event has passed
        setCurrentEventIndex((prev) => (prev + 1) % events.length);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [currentEventIndex, events]);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
          {/* Event Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button 
              onClick={prevEvent}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Previous event"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="text-center flex-1 mx-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentEvent.name}</h3>
              <p className="text-white/80">{currentEvent.description}</p>
              <p className="text-sm mt-2">
                {new Date(currentEvent.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            <button 
              onClick={nextEvent}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Next event"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-white/10 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.days}</div>
              <div className="text-sm uppercase tracking-wide">Days</div>
            </div>
            
            <div className="text-center p-4 bg-white/10 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.hours}</div>
              <div className="text-sm uppercase tracking-wide">Hours</div>
            </div>
            
            <div className="text-center p-4 bg-white/10 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.minutes}</div>
              <div className="text-sm uppercase tracking-wide">Minutes</div>
            </div>
            
            <div className="text-center p-4 bg-white/10 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">{timeLeft.seconds}</div>
              <div className="text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Time until event</span>
              <span>{Math.floor((timeLeft.days / 365) * 100)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white h-2 rounded-full transition-all duration-1000"
                style={{ width: `${100 - (timeLeft.days / 365) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button className="cta-button bg-white text-red-600 hover:bg-gray-100">
              Register Now
            </button>
            <button className="cta-button secondary-button bg-transparent border-2 border-white hover:bg-white/10">
              View Details
            </button>
          </div>
        </div>

        {/* Event Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentEventIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentEventIndex ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;