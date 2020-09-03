import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Up from '../Images/Up.png';

const Jumbotron = styled.div`
  background: #ffebf0;
  text-align: right;
  margin-bottom: 0px;
  opacity: 48%;
  margin-top: -10px;
  justify-content: space-between;
  display: flex;
`;

const Button = styled.button`
  margin-top: 7vh;
  margin-left: 9vh;
`;

function WelcomeBanner({ categoryId }) {
  return (
    <>
      <Jumbotron style={{ marginBottom: 0 }}>
        <Link to={`/shops/${categoryId}/5eff8e76d75ecb3735b243b1?page=1`}>
          <Button>View Shops</Button>
        </Link>
        <img style={{ height: '18vh' }} src={Up} alt="" />
      </Jumbotron>
    </>
  );
}

export default WelcomeBanner;
