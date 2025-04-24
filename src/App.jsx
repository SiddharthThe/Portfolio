import { useState } from 'react'
import Intro from './components/intro'
import AboutMe from './components/aboutMe';
import Edu from './components/Edu';
import Skills from './components/skill';
import Footer from './components/footer';
import Contact from './components/contact';
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='navbar'>
        <div className='logo'>
          <div className='nav-img'>

            {/* <img className='img-prof' src={introImg} /> */}
          </div>
          <h1>Siddharth Vhatkar</h1>
        </div>
        <div className='nav-links'>
          <a href="#about">About me</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className='app-content'>
        <div className='app-columns'>
          <div className='app-left'>
            <Intro />
            <Edu />
          </div>
          <Skills />
        </div>
      </div>
      <div className='app-columns'>
        <Contact />
      <AboutMe />
      </div>
      <Footer />
    </div>
  )
}

export default App
