import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  let products = [
    {
      title: 'Milk',
      description: '500ml Full cream Milk',
    },
    {
      title: 'Apples',
      description: 'Red Delicious Apples',
    },
    {
      title: 'Bread',
      description: 'Whole Wheat Bread',
    },
    {
      title: 'Eggs',
      description: 'Large Eggs',
    },
    {
      title: 'Coffee',
      description: 'Ground Coffee',
    },
    {
      title: 'Pasta',
      description: 'Spaghetti Pasta',
    },
    {
      title: 'Tomato Ketchup',
      description: 'Tomato Ketchup',
    },
    {
      title: 'Olive Oil',
      description: 'Extra Virgin Olive Oil',
    },
    {
      title: 'Chicken Breast',
      description: 'Boneless, Skinless Chicken Breast',
    },
    {
      title: 'Bananas',
      description: 'Ripe Bananas',
    },
  ];
  return (
    <div className="products">
      <ul>
        {products.map((item) => {
          return (
            <li key={item.title}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
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
