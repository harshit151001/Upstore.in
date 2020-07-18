import React from 'react';

import Addtocart from '../../Buttons/Addtocart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Price = styled.p`
  color: grey;
  font-size: 22px;
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 90%;
  font-size: 18px;

  :hover {
    opacity: 0.7;
  }
`;

const Carddesktop = ({ price, path, id }) => {
  const src = path.substr(6);
  return (
    <Card key={id}>
      <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
        <div style={{ height: '300px', display: 'block' }}>
          <img src={`http://159.65.159.82:8000${src}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="Denim Jeans" />
        </div>
      </Link>

      <Price>$19.99</Price>
      <p> Nike Prozone Aurangabad</p>
      <p>
        {/* <Addtocart src={src} name={name} price={price} id={id} /> */}
        <Button>Add to Cart</Button>
      </p>
    </Card>
  );
};

export default Carddesktop;
