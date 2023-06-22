import React from 'react';

import './App.css';
import Navbar from './components/Navbar_custom'
import { Banner } from './components/Banner';
import Skills from './components/Skills';
import { Projects } from './components/Project';
import { ContactUs } from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
       <ContactUs/>
       <Footer/>
    </div>
  );
}

export default App;
