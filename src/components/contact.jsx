import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className='contact-container'>
        <h3>Contact Me</h3>
        <div className="contact">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <GitHubIcon className='icon' fontSize="large" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    <LinkedInIcon className='icon' fontSize="large" />
                </a>
                <a href="mailto:siddharthvhatkar4@gamil.com" target="_blank" rel="noreferrer">
                    <EmailIcon className='icon' fontSize="large" />
                </a>
            </div>
    </div>
  );
}

export default Contact;