import React from "react";
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LightMode from '../Lightmode/LightMode.js';
import { Link } from 'react-router-dom';
import { useEffect } from "react";


const NavBar = () => {
  useEffect(() => {
    const darkCheck = document.getElementById('flexSwitchCheckChecked');
    if (localStorage.getItem('setTheme')) {
        document.body.className = 'light';
        darkCheck.checked = true;
        console.log("existe el local");
    }else{
        console.log("no existe el local");
    }
  
    return () => {
      console.log("funciona");
    }
  }, [])
  

  return (
    <>
      <div className="container-navbar-menu">
        <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>Msalas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/works"}>Works</Nav.Link>
              </Nav>
              <Nav>
                <div className="container-light-mode">
                  <h1>Light Mode</h1>
                  <div className="form-check form-switch">
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={LightMode}/>
                  </div>
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
