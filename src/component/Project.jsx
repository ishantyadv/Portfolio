import React from "react";
import blogimage from '../assets/image/logo_blog.jpg'
import zomatocloneimage from '../assets/image/zomato-logo.jpg'
import emsimage from '../assets/image/images.jpeg'
import calImage from '../assets/image/calculator.webp'
export default function Project() {
     

    const prject = [
        {
            id:1,
            src:blogimage,
            title:"Blog Project",
            description:"A dynamic MERN stack blog platform that allows users to share, edit, and read posts seamlessly.",
            href:"https://blog-mjx4.onrender.com/",
            style:"shadow-blue-500",
        },
        {
            id:2,
            src:emsimage ,
            title:"Employee Management System",
            description:"A React-based system designed for efficient employee data management and tracking.",
           href:"https://shiny-1.netlify.app/",
            style:"shadow-green-500",
        },
        {
            id:3,
            src:zomatocloneimage,
            title:"Zomato Clone",
            description:" This project highlights my front-end design skills and ability to create visually appealing, responsive web pages without using JavaScript or backend technologies",
            href:"https://1zomato-clone.netlify.app/",
            style:"shadow-gray-400",
        },
        {
          id:4,
          src:calImage,
          title:"Calculator",
          description:"A simple and responsive calculator built with React.js. It performs basic arithmetic operations ",
          href:"https://01-calculatorr.netlify.app/",
          style:"shadow-red-400",
      }
    ]
  return (
    <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div>
        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>My Project</p>
        <p className='py-6'>These are the project I've worked with</p>
      </div>
      
       <div className='w-full grid  grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {prject.map(({ id, src, title, style , description, href}) => (

             <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
             <p className="mt-2 text-2xl font-signature">{title}</p>
             <img src={src} alt='' className='w-20 mx-auto mt-2 '/>
             <p className="mt-2 ">{description}</p>
             <a href={href} className="text-blue-400 text-xl mt-4 inline-block  md:text-base">View Project</a>
         </div>
          ))}

        
       </div>

    </div>
 </div>
  );
}
