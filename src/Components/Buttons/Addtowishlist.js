import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../backend';

import { appContext, dispatchContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';

const Addtowishlist = props => {
  const { state } = useContext(appContext);
  const dispatch = useContext(dispatchContext);
  const { wishlist } = state;

  if (state.loggedIn) {
    const { token, user } = isAutheticated();
    const { _id } = user;

    const addToWishlist = id => {
      console.log(wishlist);
      let filteredWishlist = wishlist.filter(item => item.product._id === id);
      if (filteredWishlist.length === 1) {
        alert('product already exists in your wishlist');
      }
      if (filteredWishlist.length === 0) {
        dispatch({ type: 'LOADING' });
        fetch(`${API}/api/user/addToCart/${_id}`, {
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
                wishlist: 1,
                quantity: 1
              }
            ]
          })
        })
          .then(response => {
            response.json().then(function (data) {
              console.log(data.products);
              dispatch({ type: 'UPDATEWISHLIST', payload: data.products });
              dispatch({ type: 'REMOVEDFROMCART', payload: id });
              dispatch({ type: 'LOADED' });
            });
          })
          .catch(err => console.log(err));
      }
    };

    return (
      <button
        style={{ margin: '8px' }}
        className={props.classes}
        onClick={() => {
          addToWishlist(props.id);
        }}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        onClick={() =>
          props.history.push({
            pathname: '/loginsignup',
            state: {
              snackbarMessage: 'Login to Add to wishlist'
            }
          })
        }
        style={{ margin: '8px' }}
        className={props.classes}
      >
        {props.children}
      </button>
    );
  }
};

export default withRouter(Addtowishlist);
