import React from 'react';
import styled from 'styled-components';

import Loginwithphone from './Loginwithphone';

import Login from '../Images/Login.webp';
export const Wrapper = styled.div`
  background-image: linear-gradient(to right top, #f0e9ff, #e0edff, #c7f4ff, #affaff, #a4fff9);

  width: 100vw;
  min-height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Formwrapper = styled.div`
  min-width: 300px;
  width: 95vw;
  max-width: 400px;
  background: white;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

export const Formbox = styled.div`
  width: 95%;
  margin: auto;
  align-items: center;
`;

const Loginsignupform = () => {
  return (
    <Wrapper>
      <Formwrapper>
        <picture>
          <img style={{ width: '100%', heigth: '100%' }} src={Login} />
        </picture>

        <h3 style={{ textAlign: 'center', color: '#ec436f', paddingTop: '4vh' }}>Log in with Mobile Number</h3>

        <Formbox style={{ marginTop: '3vh' }}>
          <Loginwithphone />
        </Formbox>
      </Formwrapper>
    </Wrapper>
  );
};

export default Loginsignupform;
