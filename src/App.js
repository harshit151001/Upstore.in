import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './custom.scss';

import Navbar from './Components/Navbar/Navbar';

import Home from './Components/Routes/Home';
import err from './err';
import Aboutus from './Components/Routes/Aboutus';
import Termsandcondition from './Components/Routes/Termsandcondition';
import Loginsignuppage from './Components/Routes/Loginsignuppage';
import Products from './Components/Routes/Products';

import Footer from './Components/Footer/Footer';






function App() {
  const Ancestor = styled.div`
    width: 100vw;
    overflow-x: hidden;
    min-height: 200vh;
  `;
  return (
    <BrowserRouter>
      <Ancestor>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutus" component={Aboutus}></Route>
          <Route
            exact
            path="/termsandcondition"
            component={Termsandcondition}
          ></Route>
          <Route exact path="/loginsignup" component={Loginsignuppage}></Route>
          <Route
            path="/products/:categoryId/5eff8e76d75ecb3735b243b1"
            component={Products}
          ></Route>
          <Route component={err}></Route>
        </Switch>
        <Footer />
      </Ancestor>
    </BrowserRouter>
  );
}

export default App;
//!always list flexible paths last because they can interfere other paths.
