import React from 'react';

import Addtocart from '../../Buttons/Addtocart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Price = styled.p`
  color: grey;
  font-size: 15px;
  margin-bottom: 1px;
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  max-height: 100px
  margin: auto;
  text-align: center;
  font-family: arial;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
`;
const Button = styled.button`
  border: none;
  outline: 0;
  padding: 2px;
  margin-bottom: 5px;
  color: #ec436f;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  font-weight: bolder;
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

      <Price>
        Rs.{price} <strike>$24.5</strike> (40% Off)
      </Price>
      <small style={{ marginBottom: 0 }}> Nike Prozone Aurangabad</small>
      <p>
        {/* <Addtocart src={src} name={name} price={price} id={id} /> */}
        <Button>Add to Cart</Button>
      </p>
    </Card>
  );
};

export default Carddesktop;
