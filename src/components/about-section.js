import React from 'react';
import './about-section.css';

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <span className="about-eyebrow">About</span>
          <h2>Crafting clean, fast, and accessible web experiences</h2>
          <p>
            I’m a frontend developer focused on building responsive interfaces and
            thoughtful user experiences. I care about performance, design systems,
            and writing maintainable code that scales.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3>What I do</h3>
            <ul>
              <li>Responsive UI with React</li>
              <li>Reusable component systems</li>
              <li>Performance tuning &amp; accessibility</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>How I work</h3>
            <ul>
              <li>Design → Build → Iterate</li>
              <li>Detail-oriented collaboration</li>
              <li>Pixel-perfect implementation</li>
            </ul>
          </div>
          <div className="about-card">
            <h3>Tech I enjoy</h3>
            <ul>
              <li>React, JavaScript, TypeScript</li>
              <li>CSS, Tailwind, Styled Components</li>
              <li>Vite, Git, Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
