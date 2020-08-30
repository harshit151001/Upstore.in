import React from 'react';
import styled from 'styled-components';
import Up from '../Images/Up.png';

const Jumbotron = styled.div`
  background: #ffebf0;
  text-align: right;
  margin-bottom: 0px;
  opacity: 48%;
  margin-top: -10px;
`;

function WelcomeBanner({ title }) {
  return (
    <>
      <Jumbotron style={{ marginBottom: 0 }}>
        <img style={{ height: '18vh' }} src={Up} alt="" />
        <h2>{title}</h2>
      </Jumbotron>
    </>
  );
}

export default WelcomeBanner;
