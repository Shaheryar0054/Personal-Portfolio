import React from 'react'
import logo from '../assets/logo.png';
export const Navbar = () => {
  return (
    <div>
        <header className='navbar'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <a href='/'><li>Home</li></a>
          <a href='/About'><li>About</li></a>
          <a href='/'><li>Tech Stack</li></a>
          <a href='/'><li>Projects</li></a>
          <a href='/'><li>Contact</li></a>
        </ul>
        </header>
    </div>
  )
}
