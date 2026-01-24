import React from 'react';
import './projects-section.css';
import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'Portfolio',
    description:
      'Personal portfolio showcasing frontend work, responsive layouts, and polished UI sections.',
    tags: ['React', 'CSS', 'UI'],
    links: {
      live: 'https://siddharth-11-portfolio.netlify.app/',
      repo: 'https://github.com/SiddharthThe/Portfolio',
    },
  },
  {
    title: 'Valora',
    description:
      'An AI-powered mock interview platform focused on practice flows and feedback-driven improvement.',
    tags: ['JavaScript', 'Product', 'UX'],
    links: {
      live: null,
      repo: 'https://github.com/Atharv-28/Valora',
    },
  },
  {
    title: 'nirman-infrastructure',
    description:
      'A clean, informative site for an infrastructure brand with service highlights and clear CTAs.',
    tags: ['TypeScript', 'Brand', 'Web'],
    links: {
      live: 'https://nirmaninfrastructure.com/',
      repo: 'https://github.com/SiddharthThe/nirman-infrastructure',
    },
  },
  {
    title: 'eco-cart_frontend',
    description:
      'Frontend for a sustainable shopping experience with cart flows and product discovery.',
    tags: ['JavaScript', 'E-commerce', 'Frontend'],
    links: {
      live: 'https://eco-cart-frontend.vercel.app',
      repo: 'https://github.com/Atharv-28/eco-cart_frontend',
    },
  },
];

export const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-eyebrow">Projects</span>
          <h2>Highlighted Projects</h2>
          <p className="projects-subtitle">
            Recent work across product UX, brand sites, and web interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
