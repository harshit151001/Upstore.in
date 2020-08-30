import React /*useContext, useEffect, useRef */ from 'react';
// import Axios from 'axios';
// import API from '../../backend';
//? statecontext
// import {
//   appContext,
//   dispatchContext,
// } from '../../Statemanagement/Statecontext';
// import { isAutheticated } from '../../auth/helper/index';

const Quant = ({ quantity, id }) => {
  //? statecontext
  // const {
  //   state: { cart, loggedIn },
  // } = useContext(appContext);
  // console.log(appContext);

  // const dispatch = useContext(dispatchContext);

  // if (loggedIn) {
  //   const { token, user } = isAutheticated();
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  // }

  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     const updateData = setTimeout(() => {});
  //   }

  //   return () => {
  //     clearTimeout(updateData);
  //   };
  // });

  return (
    <>
      <input
        type="text"
        style={{
          width: '44px',
          fontSize: '15px',
          pointerEvents: 'none',
        }}
        value={quantity}
        className="btn"
      />
    </>
  );
};

export default Quant;
