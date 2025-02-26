import React from 'react'
import html from '../assets/image/html.jpg'
import css from '../assets/image/css.png'
import js from '../assets/image/js.png'
import reactimage from '../assets/image/react.png'
import tailwindcss from '../assets/image/tailwindcss.png'
import node from '../assets/image/nodejs.png'
import mongodb from '../assets/image/momgodb.png'
import expressimage from '../assets/image/express-js.png'
import github from '../assets/image/github-1.png'

const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id:3,
            src:js,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:4,
            src:reactimage,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id:5,
            src:tailwindcss,
            title: "Tailwind ",
            style: "shadow-sky-400"
        },
        {
            id:6,
            src: node,
            title: "Node js",
            style: "shadow-green-400"
        },
       
        {
            id:7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
        {
            id:8,
            src:mongodb,
            title: "MongoDB",
            style: "shadow-green-500"
        },
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
         <div>
           <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
           <p className='py-6'>These are the technologies I've worked with</p>
         </div>
         
          <div className='w-full grid  grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

             {techs.map(({ id, src, title, style }) => (

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt='' className='w-20 mx-auto '/>
                <p className='mt-4 '>{title}</p>
            </div>
             ))}

           
          </div>

       </div>
    </div>
  )
}

export default Experience
