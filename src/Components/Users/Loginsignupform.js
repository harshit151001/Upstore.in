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
  font-family: 'poppins';
  background: #ec436f;
  color: white;
  border-radius: 4px;
`;
const Formbox = styled.div`
  width: 95%;
  margin: auto;
  align-items: center;
`;

const Loginsignupform = () => {
  const methods = [
    {
      type: 'Log in with Mobile Number',
      information: '*login with phone number',
    },
    { type: 'Log in with email', information: '' },
    { type: 'Register Email', information: '' },
  ];
  const [form, setForm] = useState(0);

  const clickHandler = (idx) => {
    setForm(idx);
  };

  const active = (idx, form) => (idx === form ? { background: 'green' } : {});

  return (
    <Wrapper>
      <Formwrapper>
        <Buttonbox>
          {methods.map((item, index) => (
            <Button
              style={active(index, form)}
              onClick={() => {
                clickHandler(index);
              }}
              key={index}
            >
              {item.type}
            </Button>
          ))}
        </Buttonbox>
        <h3 style={{ textAlign: 'center', color: '#ec436f' }}>
          {methods[form].type}
        </h3>
        <h6 style={{ textAlign: 'center', color: 'black' }}>
          {methods[form].information}
        </h6>
        <Formbox>
          {form === 0 ? (
            <Loginwithphone />
          ) : form === 1 ? (
            <Loginwithemail />
          ) : (
            <Register />
          )}
        </Formbox>
      </Formwrapper>
    </Wrapper>
  );
};

export default Loginsignupform;
