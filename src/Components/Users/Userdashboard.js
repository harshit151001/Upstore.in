import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import Userdetailsform from './Userdetailsform';
import Myorders from './Myorders';
import Addressform from './Addressform';
import Overview from './Overview';
import EditDetails from './EditDetails';

import CheckCircle from '@material-ui/icons/CheckCircle';

import useWindowDimensions from '../../customapis/useWindowDimensions';

export const HeaderDiv = styled.div`
  border-bottom: 1px solid #d4d5d9;
  padding: 15px 0px;
  text-align: left;
`;

export const Text = styled.p`
  padding: 20px 0px;
  width: 145px;

  margin: 0;
`;

export const Wrapper = styled.div`
  @media (min-width: 780px) {
    margin: 4% auto;
    width: 90%;
  }
  @media (min-width: 1050px) {
    max-width: 980px;
  }
`;

export const Sidenav = styled.div`
  vertical-align: top;

  text-align: left;

  border-right: 1px solid #d4d5d9;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 780px) {
    margin: 15px;
    padding: 10px;
  }
`;

const Userdashboard = props => {
  console.log(props.match.path);
  const { width } = useWindowDimensions();
  const { user } = isAutheticated();
  console.log(props);
  return (
    <Wrapper>
      {props.location.state && (
        <div style={{ width: '100%', padding: '14px', backgroundColor: '#DFF2BF', color: '#059' }}>
          <div>
            <CheckCircle />
            {props.location.state.confirmation}
          </div>
        </div>
      )}
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
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/details">
              <Text>Details</Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/orders">
              <Text>Orders</Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/address">
              <Text>Address</Text>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/support">
              <p>Support</p>
            </Link>
          </Sidenav>
        )}

        <Main>
          {props.match.path === '/userdashboard' && <Overview />}
          {props.match.path === '/userdashboard/details' && <Userdetailsform />}
          {props.match.path === '/userdashboard/details/edit' && <EditDetails />}
          {props.match.path === '/userdashboard/orders' && <Myorders />}
          {props.match.path === '/userdashboard/address' && <Addressform />}
        </Main>
      </div>
    </Wrapper>
  );
};

export default withRouter(Userdashboard);
