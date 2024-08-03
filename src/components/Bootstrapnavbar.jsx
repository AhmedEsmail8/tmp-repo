import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

export default function Bootstrapnavbar() {
  return (
    <Navbar expand="lg" className="fixed-top">
    <Container>
      <NavLink to={'home'} className='text-decoration-none text-uppercase fs-2 fw-bolder text-white'>start framework</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex flex-column flex-lg-row column-gap-4 row-gap-3">
          <NavLink to={'about'} className={'nav-link mt-3 mt-lg-0'}>ABOUT</NavLink>
          <NavLink to={'portfolio'} className={'nav-link'}>PORTFOLIO</NavLink>
          <NavLink to={'contact'} className={'nav-link'}>CONTACT</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
