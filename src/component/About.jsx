import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
        </div>
        <p className='text-xl mt-20'> Hello! My name is Ishant Yadav, and I am a passionate Web Developer and a dedicated B.Tech student at G.C.R.G Group of Institution, specializing in Computer Science Engineering.

I come from Siwan, Bihar, and I am driven by a love for technology and innovation. My goal is to build impactful web applications using modern technologies, especially the MERN stack.

I welcome you to my personal website, where you can explore my projects, learn about my skills, and connect with me. Let’s build something amazing together!</p>

        <br/>

        <p className='text-xl'>
        I have a experience building and designing web .
                Currently I have to work on web application using technologies like
                React, Tailwind , Node Js , Express Js,  MongoDB
        </p>
      </div>
    
    </div>
  )
}

export default About
