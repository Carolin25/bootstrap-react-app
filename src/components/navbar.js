import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">MyStore</Navbar.Brand>
      <Nav className="ml-auto">
        <LinkContainer to="/cart">
          <Nav.Link>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/checkout">
          <Nav.Link>Checkout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
