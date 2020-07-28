import React, { useContext } from 'react';
import { appContext } from '../../../Statemanagement/Statecontext';
import Addtocart from '../../Buttons/Addtocart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import API from '../../../backend';

const Price = styled.p`
  color: grey;
  font-size: 15px;
  margin-bottom: 1px;
`;
const Card = styled.div`
  
  max-width: 300px;
  max-height: 100px
  margin: auto;
  text-align: center;
  font-family: arial;
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
const Img = styled.img`
width: 100%;
object-fit:cover;
height:100%;
} 
`;

const Carddesktop = ({ name, size, price, path, id }) => {
  const src = path.substr(6);
  const { state } = useContext(appContext);

  return (
    <Card key={id}>
      <Link style={{ textDecoration: 'none' }} to={`/product/${id}`}>
        <div style={{ height: '350px', display: 'block' }}>
          <Img src={`${API}${src}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt="Denim Jeans" />
        </div>
      </Link>

      <Price>
        Rs.{price} <strike>$24.5</strike> (40% Off)
      </Price>
      <small style={{ marginBottom: 0 }}> Nike Prozone Aurangabad</small>
      <p>
        {state.loggedIn && <Addtocart id={id} />}

        <Button>Add to Cart</Button>
      </p>
    </Card>
  );
};

export default Carddesktop;
