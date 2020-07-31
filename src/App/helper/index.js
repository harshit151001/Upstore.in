import Axios from 'axios';
import { isAutheticated } from '../../auth/helper/index';
import API from '../../backend';

export const getCart = async dispatch => {
  const { token, user } = isAutheticated();

  const { _id } = user;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const response = await Axios.get(`${API}/api//user/getCart/${_id}?wishlist=0`, config);

    dispatch({ type: 'GETCART', payload: response.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const getWishlist = async dispatch => {
  const { token, user } = isAutheticated();

  const { _id } = user;

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  try {
    const response = await Axios.get(`${API}/api//user/getCart/${_id}?wishlist=1`, config);

    dispatch({ type: 'GETWISHLIST', payload: response.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const getCategories = async dispatch => {
  try {
    const response = await Axios.get(`${API}/api/categories/`);
    dispatch({ type: 'GETCATEGORIES', payload: response.data.categories });
  } catch (err) {
    console.error(err.message);
  }
};
