import React from 'react';
import './projects-section.css';

const projects = [
  {
    title: 'Portfolio',
    description:
      'Personal portfolio showcasing frontend work, responsive layouts, and polished UI sections.',
    tags: ['React', 'CSS', 'UI'],
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'Valora',
    description:
      'An AI-powered mock interview platform focused on practice flows and feedback-driven improvement.',
    tags: ['JavaScript', 'Product', 'UX'],
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'nirman-infrastructure',
    description:
      'A clean, informative site for an infrastructure brand with service highlights and clear CTAs.',
    tags: ['TypeScript', 'Brand', 'Web'],
    links: {
      live: '#',
      repo: '#',
    },
  },
  {
    title: 'eco-cart_frontend',
    description:
      'Frontend for a sustainable shopping experience with cart flows and product discovery.',
    tags: ['JavaScript', 'E-commerce', 'Frontend'],
    links: {
      live: '#',
      repo: '#',
    },
  },
];

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-eyebrow">Projects</span>
          <h2>Selected work that highlights impact</h2>
          <p>
            A quick snapshot of recent builds. Each project focuses on clear UX, clean
            architecture, and scalable components.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
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
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
