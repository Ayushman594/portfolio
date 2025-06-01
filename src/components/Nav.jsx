import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
function Nava() {
  return (
      <Navbar expand="lg" className="bg-body-secondary">
        <NavLink to="/"><Navbar.Brand className='ms-1 text-decoration-none'>Personal Portfolio</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" className="ms-5">About</NavLink>
            <NavLink to="/projects" className="ms-5">Projects</NavLink>
            <NavLink to="/skills" className="ms-5">Skills</NavLink>
            <NavLink to="/contact" className="ms-5">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Nava
