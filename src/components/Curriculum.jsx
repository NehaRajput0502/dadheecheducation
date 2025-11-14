import React, { useState } from 'react';

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("Primary");

  const curriculumData = {
    Primary: {
      title: "Primary (Grades 1-5)",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Physical Education", "Moral Science"],
      description: "Our primary curriculum focuses on building strong foundational skills in core subjects while encouraging creativity and curiosity.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    Secondary: {
      title: "Secondary (Grades 6-10)",
      subjects: ["English", "Mathematics", "Science (Physics, Chemistry, Biology)", "Social Studies", "Computer Science", "Physical Education", "Art", "Second Language"],
      description: "The secondary curriculum challenges students to deepen their knowledge and develop critical thinking skills across a broad range of subjects.",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    Senior: {
      title: "Senior Secondary (Grades 11-12)",
      streams: [
        {
          name: "Science Stream",
          subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "English"]
        },
        {
          name: "Commerce Stream",
          subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Informatic Practices"]
        }
      ],
      description: "Our senior secondary program offers specialized streams to prepare students for higher education and professional careers.",
      image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  };

  const activeData = curriculumData[activeTab];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-red-600">
          Our Curriculum
        </h1>

        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white rounded-full p-1 shadow-md">
            {Object.keys(curriculumData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-red-700">{activeData.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{activeData.description}</p>
              
              {activeData.subjects ? (
                <>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Subjects</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {activeData.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-red-50 rounded-lg p-3 text-center">
                        <span className="text-red-700 font-medium">{subject}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">Streams</h4>
                  {activeData.streams.map((stream, streamIdx) => (
                    <div key={streamIdx} className="mb-6">
                      <h5 className="text-lg font-semibold mb-3 text-red-700">{stream.name}</h5>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {stream.subjects.map((subject, subIdx) => (
                          <div key={subIdx} className="bg-red-50 rounded-lg p-3 text-center">
                            <span className="text-red-700 font-medium">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
              
              <button className="cta-button">
                Download Detailed Curriculum
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              title: "Teaching Methodologies",
              description: "We use a blend of traditional and modern teaching techniques to cater to different learning styles, including project-based learning, collaborative activities, and technology integration.",
              icon: "📚"
            },
            {
              title: "Educational Resources",
              description: "Digital classrooms, interactive learning modules, access to online educational platforms, well-equipped labs, and a comprehensive library support our curriculum delivery.",
              icon: "💻"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{item.icon}</span>
                <h3 className="text-2xl font-bold text-red-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;