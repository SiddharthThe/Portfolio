import React from 'react'
import SiddLogo from '../assets/sidd-logo.png';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='f-logo-container'>
                <div className='f-logo'>
                    <img src={SiddLogo} alt="logo" className='f-logo-img' />
                </div>
                <div className='f-text'>
                    <p>Designed & Built by Siddharth Vhatkar</p>
                </div>
            </div>

            <div className='f-navigate'>
                <Link to='/' className='f-navigate'>Home</Link>
                <Link to='/about' className='f-navigate'>About</Link>
                <Link to='/projects' className='f-navigate'>Projects</Link>
                <Link to='/contact' className='f-navigate'>Contact</Link>
            </div>
            
            <div className='f-contact'>
              <a href="https://github.com/SiddharthThe" target='blank'>GitHub</a>
             <a href="https://www.linkedin.com/in/siddharth-vhatkar/" target='blank' >LinkedIn</a>  
             <a href="https://www.instagram.com/siddharthvhatkar/"target='blank'>Instagram</a>  
             <a href="https://x.com/SiddharthThe_" target='blank'>Twitter</a>

            </div>
        </div>
    )
}