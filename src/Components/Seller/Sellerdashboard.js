import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isAutheticated } from '../../auth/helper/index';
//import styled from 'styled-components';
import Overview from './Overview';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import {
  HeaderDiv,
  Text,
  Wrapper,
  Sidenav,
  Main,
} from '../Users/Userdashboard';

const Sellerdashboard = (props) => {
  console.log(props.match.path);
  const { width } = useWindowDimensions();
  const { user } = isAutheticated();
  return (
    <Wrapper>
      {width >= 780 && (
        <HeaderDiv>
          <div style={{ fontSize: '18px', fontWeight: '800' }}>Account </div>
          <div>{user.name || user.phoneNumber}</div>
        </HeaderDiv>
      )}
      <div style={{ display: 'flex' }}>
        {width >= 780 && (
          <Sidenav>
            <Link style={{ textDecoration: 'none' }} to="/userdashboard">
              <Text>Overview</Text>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/userdashboard/details"
            >
              <Text>Details</Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/orders">
              <Text>Orders</Text>
            </Link>
            <Link
              style={{ textDecoration: 'none' }}
              to="/userdashboard/address"
            >
              <Text>Address</Text>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/support">
              <p>Support</p>
            </Link>
          </Sidenav>
        )}

        <Main>{props.match.path === '/seller' && <Overview />}</Main>
      </div>
    </Wrapper>
  );
};

export default withRouter(Sellerdashboard);
