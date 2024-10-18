import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropDown from './DropDown';
import CardGroup from 'react-bootstrap/CardGroup';
import belt from '../assets/images/belt.jpeg';
import dress from '../assets/images/dress.jpeg';
import sneakers from '../assets/images/sneakers.jpeg';
import shirt from '../assets/images/shirt.jpeg';
import jacket from '../assets/images/jacket.jpg';
import jeans from '../assets/images/jeans.jpeg';
import sunglasses from '../assets/images/sunglasses.jpg';
import watch from '../assets/images/watch.jpeg';
import socks from '../assets/images/socks.jpeg';
import hat from '../assets/images/hat.jpeg';

function Products() {
  let productData = [
    {
      title: 'Sneakers',
      description: 'Running Sneakers',
      price: 999.99,
      color: ['black', 'white', 'red'],
      src: sneakers,
    },
    {
      title: 'T-shirt',
      description: 'Cotton T-shirt',
      price: 199.99,
      color: ['blue', 'gray', 'green'],
      src: shirt,
    },
    {
      title: 'Jacket',
      description: 'Leather Jacket',
      price: 1499.99,
      color: ['brown', 'black', 'tan'],
      src: jacket,
    },
    {
      title: 'Jeans',
      description: 'Denim Jeans',
      price: 799.99,
      color: ['blue', 'black', 'gray'],
      src: jeans,
    },
    {
      title: 'Hat',
      description: 'Wool Hat',
      price: 249.99,
      color: ['red', 'navy', 'beige'],
      src: hat,
    },
    {
      title: 'Socks',
      description: 'Cotton Socks',
      price: 59.99,
      color: ['white', 'black', 'gray'],
      src: socks,
    },
    {
      title: 'Dress',
      description: 'Silk Dress',
      price: 1299.99,
      color: ['red', 'black', 'gold'],
      src: dress,
    },
    {
      title: 'Watch',
      description: 'Analog Wrist Watch',
      price: 4999.99,
      color: ['silver', 'gold', 'black'],
      src: watch,
    },
    {
      title: 'Sunglasses',
      description: 'Polarized Sunglasses',
      price: 899.99,
      color: ['black', 'brown', 'gray'],
      src: sunglasses,
    },
    {
      title: 'Belt',
      description: 'Leather Belt',
      price: 299.99,
      color: ['black', 'brown', 'tan'],
      src: belt,
    },
  ];

  return (
    <div className="products">
      <ul>
        <CardGroup>
          {productData.map((item) => {
            return (
              <li key={item.title}>
                <Card className="product-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.src} />
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
