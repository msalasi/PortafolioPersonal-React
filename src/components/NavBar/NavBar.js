import React from "react";
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LightMode from '../Lightmode/LightMode.js';
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
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={LightMode}/>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
