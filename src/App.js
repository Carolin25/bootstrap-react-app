import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import NavigationBar from './components/navbar';
import Slider from './components/Slider';
import ProductCard from './components/productCard';
import LoginForm from './components/LoginForm';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';

const products = [
  { id: 1, title: "Product 1", description: "This is product 1 description", imageUrl: "https://via.placeholder.com/150", price: 29.99 },
  { id: 2, title: "Product 2", description: "This is product 2 description", imageUrl: "https://via.placeholder.com/150", price: 39.99 },
  { id: 3, title: "Product 3", description: "This is product 3 description", imageUrl: "https://via.placeholder.com/150", price: 49.99 }
];

function App() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Container className="mt-5">
              <Row>
                <Col>
                  <LoginForm />
                </Col>
              </Row>
              <Row className="mt-5">
                {products.map(product => (
                  <Col key={product.id} md={4}>
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      onAddToCart={() => handleAddToCart(product)}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
