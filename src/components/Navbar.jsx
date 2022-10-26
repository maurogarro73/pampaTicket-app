import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#inicio">
            <img alt="logo" src={logo} width="100%" height="40" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <Nav.Link href="#productos">Productos</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}
