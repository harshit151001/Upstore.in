import React, { useContext } from 'react';
import styled from 'styled-components';
import dispatchContext from '../../Statemanagement/dispatchContext';
const Button = styled.button``;

const Addtocart = (props) => {
  const cartDispatch = useContext(dispatchContext);
  const addtocart = () => {
    cartDispatch({ type: 'Addtocart', value: { ...props } });
  };
  return (
    <Button
      onClick={() => {
        addtocart(props);
      }}
    >
      Add to carte
    </Button>
  );
};

export default Addtocart;
