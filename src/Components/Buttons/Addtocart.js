import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { appContext, dispatchContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';
import MySnackbar from '../Snackbar/Snackbar';

const Addtocart = props => {
  const { state } = useContext(appContext);
  const dispatch = useContext(dispatchContext);
  const { cart } = state;
  const [show, setShow] = useState(false);

  if (state.loggedIn) {
    const { token, user } = isAutheticated();
    const { _id } = user;
    const addToCart = id => {
      console.log(cart);
      let filteredCart = cart.filter(item => item.product._id === id);
      if (filteredCart.length === 1) {
        setShow(true);
        setTimeout(function () {
          setShow(false);
        }, 2000);
      }
      if (filteredCart.length === 0) {
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
                wishlist: 0,
                quantity: 1
              }
            ]
          })
        })
          .then(response => {
            response.json().then(function (data) {
              console.log(data.products);
              dispatch({ type: 'UPDATECART', payload: data.products });
              dispatch({ type: 'REMOVEDFROMWISHLIST', payload: id });
              dispatch({ type: 'LOADED' });
            });
          })
          .catch(err => console.log(err));
      }
    };
    return (
      <>
        <button
          className={props.classes}
          onClick={() => {
            addToCart(props.id);
          }}
        >
          {show && <MySnackbar vertical={'top'} horizontal={'center'} message={'Already exists in cart'} />}
          {props.children}
        </button>
      </>
    );
  } else {
    return (
      <>
        <Link
          to={{
            pathname: '/loginsignup',
            state: {
              snackbarMessage: 'Login to Add to cart'
            }
          }}
        >
          <button className={props.classes}>add to cart</button>
        </Link>
      </>
    );
  }
};

export default Addtocart;
