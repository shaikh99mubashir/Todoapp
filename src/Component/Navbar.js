import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Signout from './Signout';
const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ToDo</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home">DashBoard</Nav.Link>
          </Nav>
        </Container>
        <Signout/>
      </Navbar>
    </div>
  )
}

export default Navbars
