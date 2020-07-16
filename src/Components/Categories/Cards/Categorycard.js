//!library
import React from 'react';
import styled from 'styled-components';
//!host adress
import API from '../../../backend';

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 90px;
  border: 1px solid black;
`;

const Categorycard = ({ name, path }) => {
  const src = path.substr(6);
  return (
    <Box>
      <div
        style={{
          width: '40%',
          height: '100%',
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          style={{ width: '36%', height: '90px' }}
          src={`${API}/${src}`}
          alt={name}
        />
      </div>
      <div
        style={{
          width: '60%',
          height: '100%',
          display: 'flex',
          placeItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h5 className="card-title">{name}</h5>
      </div>
    </Box>
  );
};

export default Categorycard;
