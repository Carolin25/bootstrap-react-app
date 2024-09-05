import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('Checkout successful!');
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <Button variant="success" onClick={handleCheckout}>Confirm Purchase</Button>
    </Container>
  );
}

export default Checkout;
