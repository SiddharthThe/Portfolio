import React from 'react'
import Hero_portrait from '../assets/hero-portrait.png';
import './hero-section.css';


export const HeroSection = () => {
  return (
    <div>
      <div className='hero-div'>
        <h1>Welcome to the Hero Section</h1>
         <img src={Hero_portrait} className="hero-img" alt="logo" />
      </div>
    </div>
  )
}
