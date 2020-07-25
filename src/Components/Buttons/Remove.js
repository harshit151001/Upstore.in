import React, { useContext } from 'react';
import API from '../../backend';

import { dispatchContext } from '../../Statemanagement/Statecontext';
import { isAutheticated } from '../../auth/helper/index';
const { token, user } = isAutheticated();
const { _id } = user;
const Remove = (props) => {
  const dispatch = useContext(dispatchContext);

  const remove = (id) => {
    dispatch({ type: 'LOADING' });
    fetch(`${API}/api/cart/${id}/${_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        response.json().then(function (data) {
          dispatch({ type: 'REMOVEDFROMCART', payload: id });
          dispatch({ type: 'LOADED' });
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <button
      type="button"
      className="btn btn-danger btn-light text-muted btn-block "
      onClick={() => {
        remove(props.id);
      }}
    >
      {props.children}
    </button>
  );
};

export default Remove;
