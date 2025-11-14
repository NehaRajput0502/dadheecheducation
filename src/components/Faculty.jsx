import React, { useState } from 'react';

const aboutData = [
  {
    name: "John Doe",
    description: "Principal",
    image: "https://studentaffairs.unl.edu/images/news-article/EmilyJohnson.jpg", 
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
    subjects: ["Leadership", "Administration"],
    experience: "15+ years"
  },
  {
    name: "Jane Smith",
    description: "Vice Principal",
    image: "https://ichef.bbci.co.uk/news/943/cpsprodpb/1f5c/live/316a9df0-e05b-11ed-bc98-4bd262d15a9f.jpg", 
    quote: "Together, we can achieve greatness. Let's work hand-in-hand to shape the future and build a thriving school environment.",
    subjects: ["Management", "Student Affairs"],
    experience: "12+ years"
  },
  {
    name: "Emily Johnson",
    description: "English Teacher",
    image: "https://t4.ftcdn.net/jpg/03/13/37/31/360_F_313373132_b9Az7XaGLRvSLHXlINXBIGPMIOLok8ZB.jpg", 
    quote: "Teaching is not just about imparting knowledge; it's about inspiring a love for learning and encouraging growth.",
    subjects: ["English Literature", "Language Arts"],
    experience: "8+ years"
  },
  {
    name: "Michael Brown",
    description: "Mathematics Teacher",
    image: "https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-600nw-1850821510.jpg", 
    quote: "Mathematics is the language of the universe. Let's unlock its secrets together.",
    subjects: ["Algebra", "Calculus", "Geometry"],
    experience: "10+ years"
  },
  {
    name: "Sophia Davis",
    description: "Science Teacher",
    image: "https://media.istockphoto.com/id/1171197670/photo/mid-adult-teacher-poses-for-portrait-in-classroom.jpg?s=612x612&w=0&k=20&c=lBqeVyIQKsBn4bIGVgRQdoE_FHc0bx58HIOVqraHTfY=", 
    quote: "Science is a journey of discovery. Let's explore and learn together.",
    subjects: ["Physics", "Chemistry", "Biology"],
    experience: "9+ years"
  },
  {
    name: "David Wilson",
    description: "Computer Science Teacher",
    image: "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.webp?b=1&s=170667a&w=0&k=20&c=XKyPqI4mZGKQLoUXMqJKkJ3Ovm69rIWG-sq_UstDyY4=", 
    quote: "Technology is transforming our world. Let's harness its potential and shape the future.",
    subjects: ["Programming", "Data Structures", "Web Development"],
    experience: "7+ years"
  }
];

function Faculty() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const principal = aboutData.find(member => member.description === "Principal");
  const vicePrincipal = aboutData.find(member => member.description === "Vice Principal");
  const otherFaculty = aboutData.filter(member => member.description !== "Principal" && member.description !== "Vice Principal");

  const openTeacherModal = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const closeTeacherModal = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-red-600">Our Faculty</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-16">
        {principal && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 interactive-card cursor-pointer" onClick={() => openTeacherModal(principal)}>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-600">{principal.experience} experience</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {vicePrincipal && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 interactive-card cursor-pointer" onClick={() => openTeacherModal(vicePrincipal)}>
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src={vicePrincipal.image} alt={vicePrincipal.name} />
              </div>
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">{vicePrincipal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{vicePrincipal.name}</h2>
                <p className="mt-2 text-gray-500">{vicePrincipal.quote}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-600">{vicePrincipal.experience} experience</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {otherFaculty.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-red-600">Our Dedicated Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherFaculty.map((data, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 interactive-card cursor-pointer" onClick={() => openTeacherModal(data)}>
                <img className="h-56 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">{data.description}</div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">{data.name}</h3>
                  <p className="mt-2 text-gray-500 line-clamp-2">{data.quote}</p>
                  <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-600">{data.experience} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeTeacherModal}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button 
                onClick={closeTeacherModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img 
                src={selectedTeacher.image} 
                alt={selectedTeacher.name}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <div className="uppercase tracking-wide text-sm text-red-600 font-semibold">{selectedTeacher.description}</div>
                <h2 className="text-2xl font-bold mt-1 text-gray-800">{selectedTeacher.name}</h2>
                
                <div className="mt-4 flex items-center text-sm text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedTeacher.experience} of teaching experience
                </div>
                
                <p className="mt-4 text-gray-600 italic">"{selectedTeacher.quote}"</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeacher.subjects.map((subject, index) => (
                      <span key={index} className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Education Philosophy</h4>
                  <p className="text-gray-600">
                    {selectedTeacher.description === "Principal" || selectedTeacher.description === "Vice Principal" 
                      ? "Believes in creating an inclusive environment where every student can thrive and reach their full potential through strong leadership and community engagement."
                      : "Committed to student-centered learning approaches that foster critical thinking, creativity, and lifelong learning skills."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Faculty;