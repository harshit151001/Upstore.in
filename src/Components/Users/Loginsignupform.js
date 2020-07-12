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
const Formbox = styled.div`
<<<<<<< HEAD
  width: 95%;
  margin: auto;
  align-items: center;
`;

const Loginsignupform = () => {
  const methods = [
    { type: 'Log in/Sign up', information: '*login with phone number' },
    { type: 'Log in with email', information: '' },
    { type: 'Register', information: '' },
  ];
=======
width: 95%;
margin: auto;
align-items: center;
`;

const Loginsignupform = () => {
  const methods = [{type:"Log in with Mobile Number",information: "*login with phone number" }, {type:'Log in with email', information: ""},{type:'Register Email', information: ""}];
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
  const [form, setForm] = useState(0);

  const clickHandler = (idx) => {
    setForm(idx);
  };
<<<<<<< HEAD
  const active = (idx, form) => (idx === form ? { background: 'blue' } : {});
=======

const active = (idx,form) => (idx==form? {background: 'blue'}:{})
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862

  return (
    <Wrapper>
      <Formwrapper>
        <Buttonbox>
          {methods.map((item, index) => (
            <Button
<<<<<<< HEAD
              style={active(index, form)}
              onClick={() => {
=======
              onClick={() => { 
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
                clickHandler(index);
              }}
              key={index}
            >
              {item.type}
            </Button>
          ))}
        </Buttonbox>
<<<<<<< HEAD
        <h3 style={{ textAlign: 'center', color: '#ec436f' }}>
          {methods[form].type}
        </h3>
        <h6 style={{ textAlign: 'center', color: 'black' }}>
          {methods[form].information}
        </h6>
=======
        <h3 style={{textAlign: 'center',color: '#ec436f'}}>{methods[form].type}</h3>
        <h6 style={{textAlign: 'center', color: 'black'}}>{methods[form].information}</h6>
>>>>>>> 73a79e3cc20c269c79db2c495eb0682777acc862
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
