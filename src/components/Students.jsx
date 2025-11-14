import React, { useState } from 'react';

const Students = () => {
  const [activeTab, setActiveTab] = useState("activities");

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-red-600">Student Life at Dadheech Memorial</h1>

      <div className="flex justify-center mb-8 md:mb-12">
        <div className="bg-white rounded-full p-1 shadow-md">
          <button
            onClick={() => setActiveTab("activities")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "activities"
                ? 'bg-red-600 text-white shadow-lg'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Activities
          </button>
          <button
            onClick={() => setActiveTab("clubs")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "clubs"
                ? 'bg-red-600 text-white shadow-lg'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Clubs
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "achievements"
                ? 'bg-red-600 text-white shadow-lg'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => setActiveTab("council")}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeTab === "council"
                ? 'bg-red-600 text-white shadow-lg'
                : 'text-gray-700 hover:text-red-600'
            }`}
          >
            Student Council
          </button>
        </div>
      </div>

      {activeTab === "activities" && (
        <section className="mb-12 md:mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            Our students engage in a variety of extracurricular activities including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'].map((activity, index) => (
              <div key={index} className="bg-red-50 rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105 interactive-card">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-red-700">{activity}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "clubs" && (
        <section className="mb-12 md:mb-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Clubs and Societies</h2>
          <p className="text-xl text-gray-600 text-center mb-8">
            Students can join various clubs and societies to explore their interests:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Literary Society", description: "Explore creative writing, poetry, and literature discussions", icon: "📚" },
              { name: "Environmental Club", description: "Promote sustainability and environmental awareness", icon: "🌿" },
              { name: "Astronomy Club", description: "Study celestial objects and organize stargazing events", icon: "🔭" },
              { name: "Coding Club", description: "Learn programming and develop software projects", icon: "💻" }
            ].map((club, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 transition-transform duration-300 hover:scale-105 interactive-card">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{club.icon}</span>
                  <h3 className="text-xl font-semibold text-red-700">{club.name}</h3>
                </div>
                <p className="text-gray-600">{club.description}</p>
                <button className="text-red-600 font-medium mt-4 hover:underline">
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "achievements" && (
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Achievements</h2>
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'John Smith', achievement: 'National Level Math Olympiad Winner', year: '2023' },
                { name: 'Sarah Lee', achievement: 'Gold Medalist in State Swimming Championship', year: '2023' },
                { name: 'Tech Innovators Club', achievement: 'Winners of Inter-School Robotics Competition', year: '2022' },
                { name: 'Debate Team', achievement: 'Regional Debate Championship Winners', year: '2023' },
                { name: 'Art Club', achievement: 'Best Exhibition at State Art Fair', year: '2022' },
                { name: 'Science Team', achievement: 'Innovation Award at Science Congress', year: '2023' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-semibold text-gray-800">{item.name}:</span>
                      <span className="ml-2 text-gray-600">{item.achievement}</span>
                      <div className="text-sm text-red-600 mt-1">{item.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "council" && (
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-red-700">Student Council</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { role: 'President', name: 'Amy Parker', grade: 'Grade 12', description: 'Amy leads the student council with a vision to enhance student engagement and academic success.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { role: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11', description: 'Rajiv supports the president and coordinates various student initiatives and events.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
              { role: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10', description: 'Lisa manages the student council\'s records and communication, ensuring smooth operations.', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 interactive-card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-red-100"
                />
                <h3 className="text-xl font-semibold text-red-700 mb-2 text-center">{member.role}</h3>
                <p className="text-lg text-gray-800 mb-1 text-center">{member.name}</p>
                <p className="text-md text-gray-600 mb-4 text-center">{member.grade}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Students;