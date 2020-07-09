import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #7dffee,
    #6cf7ff,
    #97e9ff,
    #d2d7ff,
    #fdc5fc
  );
  width: 100vw;
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    min-width: 300px;
    width: 95vw;
    max-width: 400px;
    background: white;
    height: 600px;
    border-radius: 10px;
    box-shadow: 0px 0px 18px 2px rgba(176, 57, 176, 1);
  }
`;

const Loginsignupform = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

export default Loginsignupform;
