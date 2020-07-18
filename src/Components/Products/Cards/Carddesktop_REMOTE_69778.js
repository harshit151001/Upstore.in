import React from 'react';

import Addtocart from '../../Buttons/Addtocart';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Price = styled.p`
  color: grey;
  font-size: 22px;
`;
const Card = styled.div`
  
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
   border: 1px solid grey;
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
const Img = styled.img`
width: 100%;
object-fit:cover;
height:100%;
} 
`;

const Carddesktop = ({ price, path, id }) => {
  const src = path.substr(6);
  return (
    <Card key={id}>
      <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
        <Img src={`http://159.65.159.82:8000${src}`} alt="Denim Jeans" />
      </Link>
      
      <Price>$19.99</Price>
      <p> Nike Prozone Aurangabad</p>
      <p>
    <Addtocart source={src}  price={price} id={id} />
        <Button>Add to Cart</Button>
      </p>
    </Card>

  );
};

export default Carddesktop;
