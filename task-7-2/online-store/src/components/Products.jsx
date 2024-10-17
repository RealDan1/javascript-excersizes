import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropDown from './DropDown';
import CardGroup from 'react-bootstrap/CardGroup';

function Products() {
  let products = [
    {
      title: 'Sneakers',
      description: 'Running Sneakers',
      price: 999.99,
      color: ['black', 'white', 'red'],
    },
    {
      title: 'T-shirt',
      description: 'Cotton T-shirt',
      price: 199.99,
      color: ['blue', 'gray', 'green'],
    },
    {
      title: 'Jacket',
      description: 'Leather Jacket',
      price: 1499.99,
      color: ['brown', 'black', 'tan'],
    },
    {
      title: 'Jeans',
      description: 'Denim Jeans',
      price: 799.99,
      color: ['blue', 'black', 'gray'],
    },
    {
      title: 'Hat',
      description: 'Wool Hat',
      price: 249.99,
      color: ['red', 'navy', 'beige'],
    },
    {
      title: 'Socks',
      description: 'Cotton Socks',
      price: 59.99,
      color: ['white', 'black', 'gray'],
    },
    {
      title: 'Dress',
      description: 'Silk Dress',
      price: 1299.99,
      color: ['red', 'black', 'gold'],
    },
    {
      title: 'Watch',
      description: 'Analog Wrist Watch',
      price: 4999.99,
      color: ['silver', 'gold', 'black'],
    },
    {
      title: 'Sunglasses',
      description: 'Polarized Sunglasses',
      price: 899.99,
      color: ['black', 'brown', 'gray'],
    },
    {
      title: 'Belt',
      description: 'Leather Belt',
      price: 299.99,
      color: ['black', 'brown', 'tan'],
    },
  ];

  return (
    <div className="products">
      <ul>
        <CardGroup>
          {products.map((item) => {
            return (
              <li key={item.title}>
                <Card
                  className="product-card"
                  style={{ width: '18rem' }}
                  bg="dark"
                >
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Price: R{item.price}
                      <br />
                      Description:
                      {item.description}
                    </Card.Text>
                    <DropDown
                      color1={item.color[0]}
                      color2={item.color[1]}
                      color3={item.color[2]}
                    />
                    <Button variant="primary">Buy</Button>
                  </Card.Body>
                </Card>
              </li>
            );
          })}
        </CardGroup>
      </ul>
    </div>
  );
}

export default Products;
