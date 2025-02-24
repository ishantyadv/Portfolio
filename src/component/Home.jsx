import React from "react";
import HeroImage from "../assets/image/Hero.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import resume from '../assets/image/Ishant_resume  2.pdf'

const links = [
  {
    id: 1,
    child: (
      <>
        LinkedIn <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/ishant-kumar-yadav-945a73298/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/ishantyadv",
  },
  {
    id: 3,
    child: (
      <>
        Mail <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:ishantkumar407@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        Instagram <FaInstagram size={30} />
      </>
    ),
    href: "https://www.instagram.com/ishant___yadav05/",
    style: "rounded-br-md",
  },
];

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I specialize in building and designing modern web applications. My current focus is on developing scalable and responsive solutions using React, Tailwind CSS, Node.js, Express.js, and MongoDB to deliver efficient and user-centric experiences.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            <a download={true} target="_blank" rel="noreferrer" href={resume}>Resume</a>
              
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>

          <div className=" shadow-lg rounded-b-2xl flex px-2  items-center w-40 justify-around  lg:hidden">
            {links.map(({ id, href, child }) => (
              <a
                key={id}
                href={href}
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex flex-col items-center"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-xl">{child.props.children[1]}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="ruonded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
