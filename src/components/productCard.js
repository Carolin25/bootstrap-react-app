import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ title, description, imageUrl, onAddToCart }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={onAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

