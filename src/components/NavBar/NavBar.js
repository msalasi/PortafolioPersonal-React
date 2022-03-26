import React from "react";
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
//import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="container-navbar-menu">
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
          <Container>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/works">Works</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Dark mode</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
