import React, { useState } from 'react';
import styled from 'styled-components';

import Loginwithemail from './Loginwithemail';
import Loginwithphone from './Loginwithphone';
import Register from './Register';

const Wrapper = styled.div`
  background-image: linear-gradient(
    to right top,
    #f0e9ff,
    #e0edff,
    #c7f4ff,
    #affaff,
    #a4fff9
  );

  width: 100vw;
  min-height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Formwrapper = styled.div`
  min-width: 300px;
  width: 95vw;
  max-width: 400px;
  background: white;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;
const Buttonbox = styled.div`
  width: 90% !important;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: auto;
  margin-top: 10px;
  justify-self: center;
  margin-bottom: 20px;
`;
const Button = styled.button`
  display: block;
  margin-top: 14px;
  height: 2.2rem;
  outline: none;
  border: none;
  font-size: 1.2rem;
  color: black;
  font-family: 'Roboto';
  background: #ec436f;
  color: white;
  border-radius: 4px;
`;

const Loginsignupform = () => {
  const methods = ['Log in/Sign up', 'Log in with email', 'Register'];
  const [form, setForm] = useState(0);

  const clickHandler = (idx) => {
    setForm(idx);
  };

  return (
    <Wrapper>
      <Formwrapper>
        <Buttonbox>
          {methods.map((item, index) => (
            <Button
              onClick={() => {
                clickHandler(index);
              }}
              key={index}
            >
              {item}
            </Button>
          ))}
        </Buttonbox>
        <div>
          {form === 0 ? (
            <Loginwithphone />
          ) : form === 1 ? (
            <Loginwithemail />
          ) : (
            <Register />
          )}
        </div>
      </Formwrapper>
    </Wrapper>
  );
};

export default Loginsignupform;
