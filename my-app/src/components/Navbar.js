import React from 'react';
import { Link } from 'react-scroll'; // Importing Link from react-scroll for smooth scrolling
import logo from '../assets/logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

export const Navbar = () => {
  return (
    <header className="navbar">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="menu">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="techstack" smooth={true} duration={500}>Tech Stack</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
        <a target='_blank' href='https://github.com/Shaheryar0054'>
          <img src={github} className="icon" alt="GitHub" />
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/shaheryar-abid/'>
          <img src={linkedin} className="icon" alt="LinkedIn" />
        </a>
      </nav>
    </header>
  );
};
