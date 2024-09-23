import React from 'react';
import profile from '../assets/profile.jpeg';
import resume from '../assets/Shaheryar-Resume.pdf'

function Home() {
  return (
    <div className='main-container'>
    <div className='second-container'>
      <h1 className='typing-effect'>
        Hi 👋,<br/> My name is<br/><span className='gradient-color'>Shaheryar Abid</span><br/> I build things for the web
      </h1>
      <div className='profile-img'>
        <img src={profile} alt="Profile" />
      </div>
    </div>
    <a href={resume} className='resume-button' target="blank">
        Download Resume
      </a>
    </div>
  );
}

export default Home;
