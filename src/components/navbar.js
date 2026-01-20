import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import SiddLogo from '../assets/sidd-logo.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='name'>
        <img src={SiddLogo} alt='Siddharth Vhatkar Logo' className='navbar-logo' />
      </div>
      <div className='links'>
        <Link to='/' className='nv-links'>Home</Link>
        <a href='#about' className='nv-links'>About</a>
        <a href='#projects' className='nv-links'>Projects</a>
        <Link to='/contact' className='nv-links'>Contact</Link>
      </div>
      <div className='resume-link'>
        <a href='https://drive.google.com/file/d/1b0hlSR9x8fJaKHNtr7gjKMTlQGZh4PLw/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Resume</a>
      </div>
    </div>
  )
}
