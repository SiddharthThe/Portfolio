import React, { useState, useEffect } from 'react'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'
import SiddLogo from '../assets/sidd-logo.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className='navbar-container'>
        <div className='name'>
          <Link to='/'>
            <img src={SiddLogo} alt='Siddharth Vhatkar Logo' className='navbar-logo' />
          </Link>
        </div>
        <div className='links'>
          <Link to='/' className={`nv-links ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <a href='#about' className='nv-links'>About</a>
          <a href='#projects' className='nv-links'>Projects</a>
          <Link to='/contact' className={`nv-links ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </div>
        <div className='resume-link'>
          <a href='https://drive.google.com/file/d/1b0hlSR9x8fJaKHNtr7gjKMTlQGZh4PLw/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
            <span>Resume</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
