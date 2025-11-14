import React, { useState } from 'react';

const eventsData = [
  {
    category: "Primary Events",
    events: [
      {
        title: "Math Wizard Competition",
        date: "2024-08-15",
        description: "An exciting competition where students showcase their mathematical skills through fun puzzles and challenges.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Art Fair",
        date: "2024-09-10",
        description: "A creative event where students display their artwork, including paintings, drawings, and crafts.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Physical Fitness Week",
        date: "2024-10-05",
        description: "A week dedicated to various physical activities and sports to promote health and fitness among students.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    category: "Secondary Events",
    events: [
      {
        title: "Science Fair",
        date: "2024-11-20",
        description: "A fair where students present their science projects and experiments, showcasing their understanding and innovation.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Computer Science Quiz",
        date: "2024-12-15",
        description: "A quiz competition focused on computer science topics, including programming, algorithms, and tech trivia.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Social Studies Debate",
        date: "2025-01-10",
        description: "A debate competition where students discuss and argue on various social studies topics, enhancing their public speaking and critical thinking skills.",
        image: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  },
  {
    category: "Senior Secondary Events",
    events: [
      {
        title: "Science Olympiad",
        date: "2025-02-25",
        description: "An advanced competition covering physics, chemistry, and biology, aimed at encouraging scientific inquiry and excellence.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Commerce Fair",
        date: "2025-03-15",
        description: "A fair showcasing projects and presentations related to accountancy, business studies, and economics.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      },
      {
        title: "Mathematics Challenge",
        date: "2025-04-20",
        description: "A challenging event featuring advanced mathematical problems and puzzles designed to test and improve students' mathematical skills.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      }
    ]
  }
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState('Primary Events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const renderEvents = () => {
    const categoryData = eventsData.find((data) => data.category === activeCategory);
    return categoryData ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.events.map((event, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 interactive-card cursor-pointer"
            onClick={() => handleEventClick(event)}
          >
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-red-700">{event.title}</h4>
              <p className="text-gray-600 mb-3 text-sm">{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-gray-700 line-clamp-2">{event.description}</p>
              <button className="text-red-600 font-medium mt-3 hover:underline">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">No events found for this category.</p>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-red-600">Upcoming Events</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
        {eventsData.map((data, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === data.category 
                ? 'bg-red-600 text-white font-bold shadow-lg' 
                : 'bg-white text-red-600 hover:bg-red-100 border border-red-200'
            }`}
            onClick={() => handleCategoryClick(data.category)}
          >
            {data.category}
          </button>
        ))}
      </div>
      
      {selectedEvent ? (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          <button 
            onClick={() => setSelectedEvent(null)}
            className="mb-6 text-red-600 hover:text-red-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to events
          </button>
          
          <img 
            src={selectedEvent.image} 
            alt={selectedEvent.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">{selectedEvent.title}</h3>
          
          <div className="flex items-center mb-4">
            <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-600">{new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          
          <p className="text-gray-700 mb-6 leading-relaxed">{selectedEvent.description}</p>
          
          <button className="cta-button">
            Register for this event
          </button>
        </div>
      ) : (
        renderEvents()
      )}
    </div>
  );
};

export default Events;