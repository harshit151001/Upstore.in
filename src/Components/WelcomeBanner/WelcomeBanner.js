import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function WelcomeBanner({ title }) {
  return (
    <>
      <Jumbotron style={{ marginBottom: 0 }}>
        <h2>{title}</h2>
      </Jumbotron>
    </>
  );
}

export default WelcomeBanner;
