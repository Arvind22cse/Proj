import React from 'react';
import img from './assets/logo.jpg';
import { Button, useColorMode } from '@chakra-ui/react';
import './Navbar.css';
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components

function NavbarComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Navbar 
      collapseOnSelect 
      expand="lg" 
      bg={colorMode === 'light' ? 'light' : 'dark'} 
      variant={colorMode === 'light' ? 'light' : 'dark'} 
      fixed="top"
      className="shadow-sm py-3"
      id='size'
    >
      <Container>
        {/* Logo and SHB aligned to the left */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={img} alt="Logo" className="logo me-2" />
          <span className="fw-bold fs-5">SHB</span>
        </Navbar.Brand>
        
        {/* Hamburger menu for smaller screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        {/* Links and icons aligned to the right */}
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> {/* justify-content-end pushes it to the right */}
          <Nav className="d-flex align-items-center text-start text-lg-end"> {/* Ensure left align on small screens */}
            <Nav.Link href="/" className="nav-item">Home</Nav.Link>
            <Nav.Link href="/calender" className="nav-item">SH Bookings</Nav.Link>
            <Nav.Link href="/events" className="nav-item">Events</Nav.Link>
            <Nav.Link href="/card" className="nav-item">Card</Nav.Link>

            <a href="https://maps.app.goo.gl/Zi5KrJ1WN1sqdcDt9" className="nav-map me-3">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdIl-_TNg0Z5-oFSHZSvmluwCYv61pEJzAA&s" 
                alt="Map" 
                className="nav-map-icon" 
              />
            </a>

            <Button 
              onClick={toggleColorMode} 
              style={{ 
                backgroundColor: colorMode === 'light' ? 'white' : 'black', 
                color: colorMode === 'light' ? 'black' : 'white', 
                border: "none", 
                outline: "none", 
                boxShadow: "none" 
              }}
              _focus={{ boxShadow: "none" }}
            >
              {colorMode === "light" ? <BsMoon /> : <FiSun size="20" />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
