import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isAutheticated } from '../../auth/helper/index';

import Overview from './Overview';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import { HeaderDiv, Text, Wrapper, Sidenav, Main } from '../Users/Userdashboard';
import ShopOrders from './ShopOrders';
import MyShop from './MyShop';
import Upload from './Upload';

const Sellerdashboard = props => {
  const { width } = useWindowDimensions();
  const { user } = isAutheticated();
  const [shop, setShop] = useState(user.shopIds[0]);

  return (
    <Wrapper>
      {width >= 780 && (
        <HeaderDiv>
          <div style={{ fontSize: '18px', fontWeight: '800' }}>Shop </div>
          <div>
            {user.shopIds.map((document, index) => {
              return (
                <span style={document.shopId === shop.shopId ? { backgroundColor: 'green' } : {}} onClick={() => setShop(document)} key={index} value={document.shopId}>
                  {document.shopName}
                </span>
              );
            })}
          </div>
        </HeaderDiv>
      )}
      <div style={{ display: 'flex' }}>
        {width >= 780 && (
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
            <Link style={{ textDecoration: 'none' }} to="/seller/my-shop">
              <Text>My Shop</Text>
            </Link>

            <Link style={{ textDecoration: 'none' }} to="/support">
              <p>Support</p>
            </Link>
          </Sidenav>
        )}

        <Main>
          {props.match.path === '/seller' && <Overview shop={shop} />}
          {props.match.path === '/seller/orders' && <ShopOrders shop={shop} />}
          {props.match.path === '/seller/my-shop' && <MyShop shop={shop} />}
          {props.match.path === '/seller/upload' && <Upload shop={shop} />}
        </Main>
      </div>
    </Wrapper>
  );
};

export default withRouter(Sellerdashboard);
