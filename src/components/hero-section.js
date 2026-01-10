import React from 'react'
import Hero_portrait from '../assets/hero-portrait.png';
import './hero-section.css';


export const HeroSection = () => {
  return (
    <div>
      <div className='hero-div'>
      <div className='hero-text'>
        <h1>Frontend Developer</h1>
        <p>
          Welcome to my portfolio! 
        </p>
      </div>
         <img src={Hero_portrait} className="hero-img" alt="logo" />
      </div>
    </div>
  )
}
