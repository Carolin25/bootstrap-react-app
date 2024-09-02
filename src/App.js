import React from 'react';

import NavigationBar from './components/navbar';	
import Slider from './components/Slider';	
import ProductCard from './components/productCard';	
import { Container, Row, Col } from 'react-bootstrap';	
			function App() {	
									
return (													
<div>											
<NavigationBar />											
<Slider />											
<Container className="mt-5">									
<Row>													
<Col>												
<ProductCard title="Product 1" description="This is product 1 description" imageUrl="https://via.placeholder.com/150"/>			
</Col>													
<Col>												
<ProductCard title="Product 2" description="This is product 2description" imageUrl="https://via.placeholder.com/150"/>						
</Col>													
<Col>
<ProductCard title="Product 3" description="This is product 3 description"  imageUrl="https://via.placeholder.com/150"/>
</Col>									
</Row>									
</Container>										
</div>												
);};													
export default App;
