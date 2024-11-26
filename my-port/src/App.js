import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Navbar from "./Components/Navbar/navbar";
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className='App'>
      <Navbar isPopupOpen={isPopupOpen}/>
      <Home />
      <About />
      <Skills />
      <Projects setIsPopupOpen={setIsPopupOpen}/>
      <Contact />
    </div>
  
  );
};

export default App;