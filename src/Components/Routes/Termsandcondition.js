import React from 'react';
import styled from 'styled-components';

const About = styled.div`
  position: absolute;
  top: 9vh;
  width: 100%;
  background: aliceblue;
  box-sizing: border-box;
  padding-top: 10vh;
  align-items: center;
  justify-content: center;
  display: flex;
  h1 {
    margin-bottom: 8px !important;
  }
  div {
    width: 80%;
  }
  h1 > span {
    color: #004e98;
  }
`;
const Design = styled.div`
  display: flex;
  width: 9.5 rem;
  height: 7px;
  span:nth-child(1) {
    background: #004e98;
    width: 7rem;
    height: 7px;
    border-radius: 5px;
  }
  span:nth-child(2) {
    background: black;
    width: 1rem;
    height: 7px;
    border-radius: 5px;
    margin-left: 1rem;
  }
`;

const Aboutus = () => {
  return (
    <About>
      <div>
        <h1>
          Terms and <span>conditions</span>
        </h1>
        <Design>
          <span></span>
          <span></span>
        </Design>
        <p>populate your content here</p>
        <p>populate your content here</p>
        <h3>change styles carefully</h3>
      </div>
    </About>
  );
};

export default Aboutus;
