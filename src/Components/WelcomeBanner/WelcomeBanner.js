import React from 'react';
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

function WelcomeBanner({ categoryId }) {
  return (
    <>
      <Jumbotron style={{ marginBottom: 0 }}>
        <div></div>
        <img style={{ height: '18vh' }} src={Up} alt="" />
      </Jumbotron>
    </>
  );
}

export default WelcomeBanner;
