import React from 'react';
import '../styling/projects.css'; // Import the CSS for styling

function ProjectCard({ image, title, description, liveLink, codeLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="live-preview">
          Live Preview
        </a>
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="view-code">
          View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
