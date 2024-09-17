import React from 'react';
import logo from '../assets/logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
export const Navbar = () => {
  return (
    <div>
        <header className='navbar'>
        <img src={logo} className="App-logo" alt="logo" />
        <nav className='menu'>
          <a href='/'><li>Home</li></a>
          <a href='/Projects'><li>Projects</li></a>
          <a href='/Techstack'><li>Tech Stack</li></a>
          <a href='/About'><li>About</li></a>
          <a href='/Contact'><li>Contact</li></a>
          <a target='blank' href='https://github.com/Shaheryar0054'>
          <img src={github} className="icon" alt="logo" />
          </a>
          {/* <a target='_blank' href='https://x.com/sharyar0310'>
          <img src={twiter} className="icon" alt="logo" />
          </a> */}
          <a target='blank' href='https://www.linkedin.com/in/shaheryar-abid/'>
          <img src={linkedin} className="icon" alt="logo" />
          </a>
        </nav>
        </header>
    </div>
  )
}
