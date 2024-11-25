import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Navbar from "./Components/Navbar/navbar";
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    <Contact />
    </div>
  
  );
};

export default App;