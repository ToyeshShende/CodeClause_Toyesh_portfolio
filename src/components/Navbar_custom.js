import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import { BrowserRouter as Router } from "react-router-dom";

import Linkedinicon from "../assets/images/nav-icon1.svg";
import Githubicon from "../assets/images/github-mark.svg";
import React from 'react'

export default function Navbar_custom() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={'https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...KGqRVKmRrOwXs1M3EMoAJtligrjvtt...PQ7'} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
         
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/ToyeshShende"><img src={Githubicon} alt="" /></a>
                <a href="https://www.linkedin.com/in/toyesh-shende-6a9a491b3/"><img src={Linkedinicon} alt="" /></a>
                
              </div>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}



  