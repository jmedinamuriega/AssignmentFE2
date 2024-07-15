import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/exercises">Exercises</NavLink>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
