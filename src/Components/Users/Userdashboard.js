import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Userdetailsform from './Userdetailsform';
import Myorders from './Myorders';
import Addressform from './Addressform';
import UserNav from '../Navbar/UserNav';
import useWindowDimensions from '../../customapis/useWindowDimensions';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const MenuItems = styled.div`
  font-size: 50px;
  color: #818181;
  display: block;
  transition: 0.3s;
`;

const Userdashboard = (props) => {
  const { width } = useWindowDimensions();
  console.log(props.match.path);

  return (
    <Row style={{ justifyContent: 'center' }}>
      <div>
        <UserNav
          initialHeight={width < 990 ? '0' : '100%'}
          finalHeight={'100%'}
          height={'100%'}
          textAlign={width < 990 ? 'center' : 'left'}
          marginTop={''}
          finalWidth={width > 990 ? '30%' : ''}
          initialWidth={width < 990 ? '0' : '30%'}
        >
          <Link style={{ textDecoration: 'none' }} to="/userdashboard/details">
            <MenuItems>Details</MenuItems>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/userdashboard/orders">
            <MenuItems>Orders</MenuItems>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/userdashboard/address">
            <MenuItems>Addresses</MenuItems>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/support">
            <MenuItems>Support</MenuItems>
          </Link>
        </UserNav>
      </div>

      <Wrapper>
        <Col
          lg={8}
          md={10}
          sm={12}
          style={
            props.match.path === '/userdashboard/details' ||
            props.match.path === '/userdashboard'
              ? { display: 'inline-block' }
              : { display: 'none' }
          }
        >
          <Userdetailsform />
        </Col>
        <Col
          lg={8}
          md={10}
          sm={12}
          style={
            props.match.path === '/userdashboard/orders'
              ? { display: 'inline-block' }
              : { display: 'none' }
          }
        >
          <Myorders />
        </Col>
        <Col
          lg={8}
          md={10}
          sm={12}
          style={
            props.match.path === '/userdashboard/address'
              ? { display: 'inline-block' }
              : { display: 'none' }
          }
        >
          <Addressform />
        </Col>
      </Wrapper>
    </Row>
  );
};

export default withRouter(Userdashboard);
