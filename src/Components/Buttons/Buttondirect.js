import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 5px 8px 5px 8px;
  border: none;
  background: #ff6700;
  border-radius: 5px;
  font-size: 1.5rem;

  transition: all 2s;
  &:focus {
    outline: none;
  }
  &:hover {
  }
  a {
    color: #ebebeb;
  }
`;

const Buttondirect = (props) => {
  return (
    <Button>
      <a href={`https://www.${props.direct}`}>{props.text}</a>
    </Button>
  );
};

export default Buttondirect;
