//!library
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useImmerReducer } from 'use-immer';
//!api
import API from './backend';
//!Css import
import './custom.scss';
//Components most likely
import Navbar from './Components/Navbar/Navbar';
//!routes
import Home from './Components/Routes/Home';
import err from './err';
import Aboutus from './Components/Routes/Aboutus';
import Termsandcondition from './Components/Routes/Termsandcondition';
import Loginsignuppage from './Components/Routes/Loginsignuppage';
import Products from './Components/Routes/Products';
import Footer from './Components/Footer/Footer';
import Productpage from './Components/Routes/Productpage';
//!context
import appContext from './Statemanagement/appContext';
import dispatchContext from './Statemanagement/dispatchContext';
//!Reducer
import appReducer from './Statemanagement/appReducer';

function App() {
  const initialState = {
    Cart: [],
    Wishlist: []
  };

  const [state, dispatch] = useImmerReducer(appReducer, initialState);

  const [categorydata, setcategoryData] = useState([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem('Cart', JSON.stringify(state.Cart));
    }
  }, [state.Cart]);
  console.log(state.Cart);

  useEffect(() => {
    axios.get(`${API}/api/categories/`).then(response => {
      setcategoryData(response.data.categories);
    });
  }, []);

  return (
    <appContext.Provider value={{ state, categorydata }}>
      <dispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <div style={{ width: '100vw', overflowX: 'hidden' }}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/aboutus" component={Aboutus}></Route>
              <Route exact path="/termsandcondition" component={Termsandcondition}></Route>
              <Route exact path="/loginsignup" component={Loginsignuppage}></Route>
              <Route path="/products/:categoryId/5eff8e76d75ecb3735b243b1" component={Products}></Route>
              <Route path="/productpage" component={Productpage}></Route>
              <Route component={err}></Route>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </dispatchContext.Provider>
    </appContext.Provider>
  );
}

export default App;
//!always list flexible paths last because they can interfere other paths.
