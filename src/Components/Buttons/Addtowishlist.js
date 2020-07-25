import React, { useContext } from 'react';
import API from '../../backend';

import {
  appContext,
  dispatchContext,
} from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
const { token, user } = isAutheticated();
const { _id } = user;
const Addtowishlist = (props) => {
  const { state } = useContext(appContext);
  const dispatch = useContext(dispatchContext);
  const { wishlist } = state;

  const addToWishlist = (id) => {
    wishlist.forEach((element) => {
      if (element.product._id !== id) {
        dispatch({ type: 'LOADING' });
        fetch(`${API}/api/user/addToCart/${_id}?wishlist=1`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: _id,
            products: [
              {
                product: id,
                wishlist: 1,
                quantity: '1',
              },
            ],
          }),
        })
          .then((response) => {
            response.json().then(function (data) {
              console.log(data.products);
              dispatch({ type: 'UPDATEWISHLIST', payload: data.products });
              dispatch({ type: 'LOADED' });
            });
          })
          .catch((err) => console.log(err));
      }
      if (element.product._id === id) {
        alert('product already exists in your cart');
      }
    });
  };
  return (
    <button
      onClick={() => {
        addToWishlist(props.id);
      }}
    >
      {props.children}
    </button>
  );
};

export default Addtowishlist;
