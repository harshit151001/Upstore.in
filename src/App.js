//!library
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//!Css import
import './custom.scss';
//!Components most likely
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
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
import Userpage from './Components/Routes/Userpage';
import PrivateRoute from './auth/helper/PrivateRoute';
import Productsearch from './Components/Products/List/Productsearch';

//!context
import { Statecontext } from './Statemanagement/Statecontext';

function App() {
  return (
    <Statecontext>
      <BrowserRouter>
        <div style={{ width: '100vw', overflowX: 'hidden' }}>
          <Navbar />
          <Loader />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/aboutus" component={Aboutus}></Route>
            <Route exact path="/termsandcondition" component={Termsandcondition}></Route>
            <Route exact path="/loginsignup" component={Loginsignuppage}></Route>
            <PrivateRoute path="/userdashboard/details" component={Userpage}></PrivateRoute>
            <PrivateRoute path="/userdashboard/orders" component={Userpage}></PrivateRoute>
            <PrivateRoute path="/userdashboard/address" component={Userpage}></PrivateRoute>
            <PrivateRoute path="/userdashboard" component={Userpage}></PrivateRoute>
            <Route path="/searchlist/products" component={Productsearch}></Route>
            <Route path="/products/:categoryId/5eff8e76d75ecb3735b243b1/" component={Products}></Route>
            <Route path="/productpage" component={Productpage}></Route>
            <Route path="/cart/:userId" component={Cart}></Route>
            <Route component={err}></Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Statecontext>
  );
}

export default App;
