import React from "react";
import blogimage from '../assets/image/logo_blog.jpg';
import zomatocloneimage from '../assets/image/zomato-logo.jpg';

import calImage from '../assets/image/calculator.webp';

export default function Project() {
  const projects = [
    {
      id: 1,
      src: blogimage,
      title: "Blog Project",
      description: "A dynamic MERN stack blog platform that allows users to share, edit, and read posts seamlessly.",
      href: "https://blog-mjx4.onrender.com/",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: zomatocloneimage,
      title: "Zomato Clone",
      description: "This project highlights my front-end design skills and ability to create visually appealing, responsive web pages without using JavaScript or backend technologies.",
      href: "https://1zomato-clone.netlify.app/",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: calImage,
      title: "Calculator",
      description: "A simple and responsive calculator built with React.js. It performs basic arithmetic operations.",
      href: "https://calculatorr-00.netlify.app/",
      style: "shadow-red-400",
    },
  ];

  return (
    <div name="project" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen py-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">My Projects</p>
          <p className="py-6">These are the projects I've worked on:</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-6 lg:px-8">
          {projects.map(({ id, src, title, style, description, href }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 px-2 rounded-lg ${style} flex flex-col items-center`}
            >
              <p className="mt-2 text-xl md:text-2xl font-bold">{title}</p>
              <img
                src={src}
                alt={title}
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4"
              />
              <p className="mt-4 text-sm md:text-base px-2">{description}</p>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-lg mt-4 inline-block hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
