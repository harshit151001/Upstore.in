import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAutheticated } from './index';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAutheticated() && isAutheticated().user.role > 1 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/loginsignup',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AdminRoute;
