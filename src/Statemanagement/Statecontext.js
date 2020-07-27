import React, { createContext, useEffect } from 'react';
import appReducer from './appReducer';
import useThunkReducer from '../customapis/useThunkReducer';
import { getCart, getWishlist, getCategories } from '../App/helper/index';

export const appContext = createContext();
export const dispatchContext = createContext();

export const Statecontext = (props) => {
  const initialState = {
    categorydata: [],
    cart: [],
    wishlist: [],
    loggedIn: Boolean(localStorage.getItem('Upstorejwt')),
    loading: false,
  };

  const [state, dispatch] = useThunkReducer(appReducer, initialState);
  let { loggedIn } = state;
  useEffect(() => {
    let mounted = true;
    const getcategorycartwishlist = () => {
      if (mounted) {
        dispatch(getCategories);
        if (loggedIn) {
          dispatch(getCart);
          dispatch(getWishlist);
        }
      }
    };
    getcategorycartwishlist();
    return () => {
      mounted = false;
    };
  }, [dispatch, loggedIn]);

  return (
    <appContext.Provider value={{ state }}>
      <dispatchContext.Provider value={dispatch}>
        {props.children}
      </dispatchContext.Provider>
    </appContext.Provider>
  );
};
