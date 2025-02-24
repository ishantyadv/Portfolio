import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'education' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'project' },
    { id: 6, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-2 sm:px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-signature ml-1 sm:ml-2">Ishant Yadav</h1>
      </div>

      {/* Desktop & Tablet Navigation */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-2 sm:px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-2 sm:pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-2 cursor-pointer capitalize py-4 text-2xl sm:text-3xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
