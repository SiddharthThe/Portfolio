import React from 'react'
import SiddLogo from '../assets/sidd-logo.png';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
    return (
        <footer className='footer-main'>
            <div className='footer-content'>
                <div className='footer-section footer-brand'>
                    <img src={SiddLogo} alt="Siddharth Vhatkar Logo" className='footer-logo' />
                    <p className='footer-tagline'>Building digital experiences with passion and precision</p>
                    <p className='footer-copyright'>© 2026 Siddharth Vhatkar. All rights reserved.</p>
                </div>

                <div className='footer-section footer-links'>
                    <h3 className='footer-heading'>Navigation</h3>
                    <div className='footer-nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </div>

                <div className='footer-section footer-social'>
                    <h3 className='footer-heading'>Connect</h3>
                    <div className='social-links'>
                        <a href="https://github.com/SiddharthThe" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <span className='social-icon'>📧</span> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/siddharth-vhatkar/" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <span className='social-icon'>💼</span> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/siddharthvhatkar/" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <span className='social-icon'>📷</span> Instagram
                        </a>
                        <a href="https://x.com/SiddharthThe_" target="_blank" rel="noopener noreferrer" className='social-link'>
                            <span className='social-icon'>🐦</span> Twitter
                        </a>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>Designed by Siddharth Vhatkar</p>
            </div>
        </footer>
    )
}