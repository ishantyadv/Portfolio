import React from 'react';

const educationData = [
  {
    level: "10th Grade",
    description: "Completed High School from CBSE Board with 56%.",
    year: "2018-2019",
  },
  {
    level: "12th Grade",
    description: "Completed Senior Secondary from Bihar Board with 68%.",
    year: "2020-2021",
  },
  {
    level: "Bachelor's Degree",
    description: "Pursuing B.Tech in Computer Science from AKTU University.",
    year: "2021-2025",
  },
  {
    level: "Internship",
    description: "Completed Internship from Sipher Web Pvt Ltd, Lucknow, UP.",
    year: "2024",
  },
];

const Education = () => {
  return (
    <div name="education" className="w-full min-h-screen bg-gradient-to-b from-black  to-gray-800 text-white py-10">
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center">
                {edu.level}
              </h3>
              <p className="text-sm md:text-base mb-4 text-center">
                {edu.description}
              </p>
              <span className="text-gray-400 text-center">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
