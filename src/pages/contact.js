import React from 'react';
import './contact.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-eyebrow">Contact</span>
          <h1>Let’s build something great together</h1>
          <p>
            Have a project in mind or want to collaborate? Send a message and I’ll get
            back to you within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Reach me directly</h2>
            <p>
                Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="contact-list">
              <div>
                <span className="contact-label">Email</span>
                <a href="mailto:siddharthvhatkar4@example.com">siddharthvhatkar4@example.com</a>
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span>Kolhapur, India</span>
              </div>
            </div>
            <div className="contact-availability">
              <span>Open to</span>
              <strong>Freelance • Full-time • Remote</strong>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="siddharth" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="siddharthvhatkar4@example.com" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project inquiry" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell me about your project" required />
            </div>
            <button type="submit" className="contact-button">Send message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
