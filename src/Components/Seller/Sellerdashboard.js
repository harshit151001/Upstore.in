import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';
import Overview from './Overview';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import { HeaderDiv, Main } from '../Users/Userdashboard';
import ShopOrders from './ShopOrders';
import MyShop from './MyShop';
import Upload from './Upload';
import MyProducts from './MyProducts';

const TitleDiv = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-left: 8vh;

  @media (max-width: 990px) {
    margin-left: 1vh;
  }
`;

const ShopBtnWrapper = styled.div`
  margin-left: 6vh;

  @media (max-width: 990px) {
    margin-left: 1vh;
  }
`;

const Sidenav = styled.div`
  vertical-align: top;

  text-align: center;

  border-right: 1px solid #d4d5d9;
`;

const Wrapper = styled.div`
  @media (min-width: 780px) {
    margin: 4% auto;
    width: 100%;
  }

  @media (min-width: 1050px) {
    max-width: 100%;
  }
`;

const Text = styled.p`
  padding: 20px 22px;
  width: 200px;

  margin: 0;
`;

const Button = styled.button`
  margin-right: 2vh;
  background-color: #ec436f;
  border-radius: 15px;
  border: solid #ec436f;
  color: white;
  font-weight: 500;
`;

const Sellerdashboard = props => {
  const { width } = useWindowDimensions();
  const { user } = isAutheticated();
  const [shop, setShop] = useState(user.shopIds[0]);

  return (
    <Wrapper>
      <HeaderDiv>
        {' '}
        <TitleDiv>Shop </TitleDiv>
        <ShopBtnWrapper>
          {user.shopIds.map((document, index) => {
            return (
              <Button style={document.shopId === shop.shopId ? { backgroundColor: '#5c6adf' } : {}} onClick={() => setShop(document)} key={index} value={document.shopId}>
                {document.shopName}
              </Button>
            );
          })}
        </ShopBtnWrapper>
      </HeaderDiv>

      <div style={{ display: 'flex' }}>
        {width >= 991 && (
          <Sidenav>
            <Link style={{ textDecoration: 'none' }} to="/seller">
              <Text>Overview</Text>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/seller/orders">
              <Text>Orders</Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/seller/upload">
              <Text>Upload </Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/seller/my-products">
              <Text>My Products </Text>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/seller/my-shop">
              <Text>My Shop</Text>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/support">
              <Text>Support</Text>
            </Link>
          </Sidenav>
        )}

        <Main>
          {props.match.path === '/seller' && <Overview shop={shop} />}
          {props.match.path === '/seller/orders' && <ShopOrders shop={shop} />}
          {props.match.path === '/seller/my-shop' && <MyShop shop={shop} />}
          {props.match.path === '/seller/upload' && <Upload shop={shop} />}
          {props.match.path === '/seller/my-products' && <MyProducts shop={shop} />}
        </Main>
      </div>
    </Wrapper>
  );
};

export default withRouter(Sellerdashboard);
