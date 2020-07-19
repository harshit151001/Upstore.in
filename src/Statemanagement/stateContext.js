import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API from '../backend';
import appReducer from './appReducer';
import { useImmerReducer } from 'use-immer';

export const appContext = createContext();
export const dispatchContext = createContext();

export const Statecontext = props => {
  const initialState = {
    Cart: [],
    Wishlist: [],
    loggedIn: Boolean(localStorage.getItem('Upstorejwt'))
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  const [categorydata, setcategoryData] = useState([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('Cart', JSON.stringify(state.Cart));
    }
  }, [state.Cart]);

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(`${API}/api/categories`);
      console.log(response);

      if (mounted) {
        setcategoryData(response.data.categories);
      }
    };
    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <appContext.Provider value={{ state, categorydata }}>
      <dispatchContext.Provider value={dispatch}>{props.children}</dispatchContext.Provider>
    </appContext.Provider>
  );
};
