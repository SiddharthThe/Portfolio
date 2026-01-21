import React from 'react'
import { HeroSection } from '../components/hero-section'
import { AboutSection } from '../components/about-section'
import { ProjectsSection } from '../components/projects-section'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}

export default Home