import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  let products = [
    {
      title: 'Milk',
      description: '500ml Full cream Milk',
      price: 49.99,
    },
    {
      title: 'Apples',
      description: 'Red Delicious Apples',
      price: 29.99,
    },
    {
      title: 'Bread',
      description: 'Whole Wheat Bread',
      price: 39.99,
    },
    {
      title: 'Eggs',
      description: 'Large Eggs',
      price: 44.99,
    },
    {
      title: 'Coffee',
      description: 'Ground Coffee',
      price: 119.99,
    },
    {
      title: 'Pasta',
      description: 'Spaghetti Pasta',
      price: 24.99,
    },
    {
      title: 'Tomato Ketchup',
      description: 'Tomato Ketchup',
      price: 19.99,
    },
    {
      title: 'Olive Oil',
      description: 'Extra Virgin Olive Oil',
      price: 169.99,
    },
    {
      title: 'Chicken Breast',
      description: 'Boneless, Skinless Chicken Breast',
      price: 119.99,
    },
    {
      title: 'Bananas',
      description: 'Ripe Bananas',
      price: 24.99,
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
                  <Card.Text>
                    Price:
                    {item.price}
                    Description:
                    {item.description}
                  </Card.Text>
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
