import React, { useContext } from 'react';
import { appContext, dispatchContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';

const { token, user } = isAutheticated();
const { _id } = user;
const Addtocart = props => {
  const { state } = useContext(appContext);
  const dispatch = useContext(dispatchContext);
  const { cart } = state;

  const addToCart = id => {
    const filteredCart = cart.filter(item => item.product._id === id);
    if (filteredCart.length === 1) {
      alert('product already exists in your cart');
    }
    if (filteredCart.length === 0) {
      dispatch({ type: 'LOADING' });
      fetch(`${API}/api/user/addToCart/${_id}?wishlist=1`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: _id,
          products: [
            {
              product: id,
              wishlist: 0,
              quantity: 1
            }
          ]
        })
      })
        .then(response => {
          response.json().then(function (data) {
            dispatch({ type: 'UPDATECART', payload: data.products });
            dispatch({ type: 'LOADED' });
          });
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <button
      onClick={() => {
        addToCart(props.id);
      }}
    >
      Add to cart
    </button>
  );
};

export default Addtocart;
