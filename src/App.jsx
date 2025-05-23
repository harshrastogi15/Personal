import React from 'react';
import './App.module.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Achievement from './components/Achievement';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Education from './components/Education';
import CodingProfiles from './components/CodingProfile';
import MetaTags from './components/MetaTags';


function App() {
  return (
    <div className="App">
      <MetaTags/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Achievement/>
      <Project/>
      <Resume/>
      <CodingProfiles/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
