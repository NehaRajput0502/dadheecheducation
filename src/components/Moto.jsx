import React from 'react';
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material';

const Moto = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-red-600">Our Mission & Motto</h1>
          <p className="text-xl md:text-2xl font-semibold text-red-700">
            Challenge Yourself, Inspire Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 interactive-card"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  {React.cloneElement(item.icon, { className: "text-red-600 text-3xl" })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-800 text-center">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-red-800 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            At <span className="font-semibold text-red-700">Dadheech Memorial Public School</span>, our mission is to cultivate a nurturing and inclusive environment where every student is empowered to reach their full potential. We are committed to providing a holistic education that fosters academic excellence, critical thinking, creativity, and personal growth. Through a balanced approach to learning, we aim to equip our students with the skills and values necessary to become compassionate, responsible, and successful global citizens.
          </p>
        </div>
      </div>
    </div>
  );
}

const mottoItems = [
  {
    title: 'Innovation',
    description: 'We strive to cultivate a spirit of innovation among our students, encouraging them to think outside the box, explore new ideas, and pioneer groundbreaking solutions to real-world challenges.',
    icon: <Lightbulb />,
  },
  {
    title: 'Teamwork',
    description: 'We recognize the importance of teamwork in achieving collective success. Through collaborative projects and extracurricular activities, we foster a collaborative mindset among our students.',
    icon: <Group />,
  },
  {
    title: 'Quality',
    description: 'Quality is at the core of everything we do. From our rigorous academic standards to our state-of-the-art facilities and experienced faculty, we are committed to delivering excellence in education.',
    icon: <ThumbUp />,
  },
];

export default Moto;