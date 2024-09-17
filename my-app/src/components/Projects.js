import React from 'react';
import ProjectCard from './ProjectCard';
import '../styling/projects.css'; // Import the CSS for the grid layout

function Projects() {
  const projects = [
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 1',
      description: 'A brief description of Project 1. It’s an awesome project that does cool things.',
      liveLink: 'https://live-project-1.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-1', // Replace with actual GitHub link
    },
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 2',
      description: 'A brief description of Project 2. It’s a wonderful project that solves problems.',
      liveLink: 'https://live-project-2.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-2', // Replace with actual GitHub link
    },
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 3',
      description: 'A brief description of Project 3. It’s a great project that enhances user experience.',
      liveLink: 'https://live-project-3.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-3', // Replace with actual GitHub link
    },
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 3',
      description: 'A brief description of Project 3. It’s a great project that enhances user experience.',
      liveLink: 'https://live-project-3.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-3', // Replace with actual GitHub link
    },
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 3',
      description: 'A brief description of Project 3. It’s a great project that enhances user experience.',
      liveLink: 'https://live-project-3.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-3', // Replace with actual GitHub link
    },
    {
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      title: 'Project 3',
      description: 'A brief description of Project 3. It’s a great project that enhances user experience.',
      liveLink: 'https://live-project-3.com', // Replace with actual live preview link
      codeLink: 'https://github.com/project-3', // Replace with actual GitHub link
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p>Things I’ve built so far</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
