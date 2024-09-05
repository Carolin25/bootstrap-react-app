import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { removeFromCart } from '../redux/actions';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Row>
          {cart.map((item) => (
            <Col key={item.id} md={4}>
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <Button variant="danger" onClick={() => handleRemove(item.id)}>Remove</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Cart;
