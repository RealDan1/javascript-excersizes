import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  let productArray = ['Milk', 'Cigars', 'Eggs', 'Robertson Spice', 'Chicken'];
  return (
    <div className="products">
      <ul>
        {productArray.map((item) => {
          return (
            <li key={item}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item}</Card.Title>
                  <Card.Text>Description</Card.Text>
                  <Button variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
