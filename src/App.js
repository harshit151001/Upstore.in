//!library
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
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
//!context
import appContext from './Statemanagement/Createcontext';

function App() {
  const [categorydata, setcategoryData] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/categories/`).then((response) => {
      setcategoryData(response.data.categories);
    });
  }, []);

  return (
    <appContext.Provider value={categorydata}>
      <BrowserRouter>
        <div style={{ width: '100vw', overflowX: 'hidden' }}>
          <Navbar />
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
            <Route
              path="/products/:categoryId/5eff8e76d75ecb3735b243b1"
              component={Products}
            ></Route>
            <Route component={err}></Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </appContext.Provider>
  );
}

export default App;
//!always list flexible paths last because they can interfere other paths.
