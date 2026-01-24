import React from 'react';

export const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.links.live && (
          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-button">
            View Live
          </a>
        )}
        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="project-link-button">
          Source
        </a>
      </div>
    </article>
  );
};
