import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Workout Your Way</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
          <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
          </Nav.Link>
          {/* <Nav.Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </Nav.Link> */}
          <NavDropdown title="Services" id="basic-nav-dropdown">

            <NavDropdown.Item href="#action/3.1">
              <Nav.Link>
                <Link to="/workout-plans" style={{ textDecoration: 'none' }}>Workout Plans</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              <Nav.Link>
                <Link to="/workout-log" style={{ textDecoration: 'none' }}>Workout Log</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <Nav.Link>
                <Link to="/calendar" style={{ textDecoration: 'none' }}>Calendar</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              <Nav.Link>
                <Link to="/workouts" style={{ textDecoration: 'none' }}>Workouts</Link>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
          <Link to="/signin" style={{ textDecoration: 'none' }}>Signin</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavbar;

