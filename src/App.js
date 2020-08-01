//!library
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//!Css import
import './custom.scss';
//!Components most likely
import Navbar from './Components/Navbar/Navbar';

import Loader from './Components/Loader/Loader';
//!routes
import Home from './Components/Routes/Home';
import err from './err';
import Aboutus from './Components/Routes/Aboutus';
import Termsandcondition from './Components/Routes/Termsandcondition';
import Loginsignuppage from './Components/Routes/Loginsignuppage';
import Products from './Components/Routes/Products';
import Productpage from './Components/Routes/Productpage';
import Cart from './Components/Routes/Cart';
import Wishlist from './Components/Routes/Wishlist';
import Addresses from './Components/Routes/Addresses';
import Userpage from './Components/Routes/Userpage';
import PrivateRoute from './auth/helper/PrivateRoute';

import OTP from './Components/Users/OTP';

//!context
import { Statecontext } from './Statemanagement/Statecontext';

function App() {
  return (
    <Statecontext>
      <BrowserRouter>
        <div style={{ width: '100vw', minHeight: '90vh', overflowX: 'hidden' }}>
          <Navbar />
          <Loader />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/aboutus" component={Aboutus}></Route>
            <Route
              exact
              path="/termsandcondition"
              component={Termsandcondition}
            ></Route>
            <Route
              exact
              path="/loginsignup"
              component={Loginsignuppage}
            ></Route>
            <PrivateRoute
              path="/userdashboard/details"
              component={Userpage}
            ></PrivateRoute>
            <PrivateRoute
              path="/userdashboard/orders"
              component={Userpage}
            ></PrivateRoute>
            <PrivateRoute
              path="/userdashboard/address"
              component={Userpage}
            ></PrivateRoute>
            <PrivateRoute
              path="/userdashboard"
              component={Userpage}
            ></PrivateRoute>
            <PrivateRoute
              path="/wishlist/:userId"
              component={Wishlist}
            ></PrivateRoute>
            <Route
              path="/products/:categoryId/5eff8e76d75ecb3735b243b1"
              component={Products}
            ></Route>
            <Route path="/productpage" component={Productpage}></Route>
            <Route path="/products/:categoryId" component={Products}></Route>
            <Route path="/cart/:userId" component={Cart}></Route>
            <Route path="/address" component={Addresses}></Route>
            <Route exact path="/OTP" component={OTP}></Route>
            <Route component={err}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Statecontext>
  );
}

export default App;
