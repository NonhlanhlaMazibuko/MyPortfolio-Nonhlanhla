import './App.css';
import React from 'react';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact';
import Navbar from "./Components/Navbar/navbar";
import Skills from './Components/Skills/skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Skills />
    <Contact />
    </div>
  
  );
};

export default App;