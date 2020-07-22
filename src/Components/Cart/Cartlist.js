import React, { useContext, } from 'react';
import { appContext } from '../../Statemanagement/Statecontext';

const Cartlist = (props) => {
  const { state } = useContext(appContext);

  
  return (
    <div>
      {state.Cart.map((items, index) => {
        return (
          <div>
            <h1 key={items.id}>{items.price}</h1>
            <p>{items.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cartlist;
