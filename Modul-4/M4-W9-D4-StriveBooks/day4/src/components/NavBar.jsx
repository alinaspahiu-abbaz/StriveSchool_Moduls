import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (prop) => {
  return (
    <Navbar bg="dark" variant='dark'>
      <Navbar.Brand href="#home">{prop.title}</Navbar.Brand>
      <Nav.Link href="#home" className='ml-auto'>Home</Nav.Link>
  <Nav.Link href="#home">{prop.title}</Nav.Link>
    </Navbar>
  );
};

export default NavBar;