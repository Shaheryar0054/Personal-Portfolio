import React from 'react'
import logo from '../assets/logo.png';

export const Navbar = () => {
  return (
    <div>
        <header className='navbar'>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        </header>
    </div>
  )
}
