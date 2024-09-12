import React from 'react';
import logo from '../assets/logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import twiter from '../assets/twiter.svg';
export const Navbar = () => {
  return (
    <div>
        <header className='navbar'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='menu'>
          <a href='/'><li>Home</li></a>
          <a href='/About'><li>About</li></a>
          <a href='/Techstack'><li>Tech Stack</li></a>
          <a href='/Projects'><li>Projects</li></a>
          <a href='/Contact'><li>Contact</li></a>
          <img src={github} className="icon" alt="logo" />
          <img src={twiter} className="icon" alt="logo" />
          <img src={linkedin} className="icon" alt="logo" />
        </nav>
        </header>
    </div>
  )
}
