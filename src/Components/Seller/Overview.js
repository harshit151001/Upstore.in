import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
//import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import OrderImage from '../Images/profile-orders.png';
import AddressImage from '../Images/profile-address.png';
import EditImage from '../Images/profile-edit.png';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import { signout } from '../../auth/helper/index';
import { PreviousButton, OrderWrapper, Card as MobileCard, CardContent as MobileCardContent, DetailsWrapper } from '../Users/Myorders';
import UserImage from '../Images/userAccount.png';
import GoToIcon from '../Images/arrow.png';
import { dispatchContext } from '../../Statemanagement/Statecontext';
import { MobileCardImage, MobileJumbotronWrapper, MobileJumbotron, EditProfileButtom, PaddedContainer, CardImage, Card, Jumbotron, CardWrapper, CardContent } from '../Users/Overview';

const Overview = props => {
  const dispatchLogin = useContext(dispatchContext);
  const { width } = useWindowDimensions();
  return (
    <>
      {width < 780 && (
        <MobileJumbotronWrapper>
          <MobileJumbotron>
            <img style={{ height: '130px', marginTop: '6vh' }} src={UserImage} alt="" />
          </MobileJumbotron>
        </MobileJumbotronWrapper>
      )}
      {width >= 780 && (
        <Jumbotron>
          <PaddedContainer>
            <img style={{ height: '130px', width: '130px' }} src={UserImage} alt="User" />
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/details/edit">
              <EditProfileButtom style={{ height: '25px' }}>Edit Profile</EditProfileButtom>
            </Link>
          </PaddedContainer>
        </Jumbotron>
      )}

      {width < 780 && (
        <OrderWrapper>
          <MobileCard onClick={() => props.history.push('/seller/orders')}>
            <MobileCardContent>
              <MobileCardImage src={OrderImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div
                  style={{
                    color: '#3E4152',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginTop: '1vh'
                  }}
                >
                  Orders
                </div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>View recent orders</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>

          <MobileCard onClick={() => props.history.push('/seller/upload')}>
            <MobileCardContent>
              <MobileCardImage src={AddressImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div
                  style={{
                    color: '#3E4152',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginTop: '1vh'
                  }}
                >
                  Upload
                </div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>Upload Products</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>

          <MobileCard onClick={() => props.history.push('/seller/my-shop')}>
            <MobileCardContent>
              <MobileCardImage src={EditImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div
                  style={{
                    color: '#3E4152',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginTop: '1vh'
                  }}
                >
                  My Shop
                </div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>View/edit your Shop details</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>

          <MobileCard onClick={() => props.history.push('/support')}>
            <MobileCardContent>
              <MobileCardImage src={EditImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div
                  style={{
                    color: '#3E4152',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    marginTop: '1vh'
                  }}
                >
                  Support
                </div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>Contact us for any queries you have</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={async () => {
                signout(() => {
                  dispatchLogin({ type: 'logout' });
                  props.history.push('/');
                });
              }}
              style={{
                backgroundColor: '#ec436f',
                color: 'white',
                marginTop: '3vh',
                width: '95%',
                padding: '10px',
                fontWeight: '800'
              }}
            >
              Logout
            </Button>
          </div>
        </OrderWrapper>
      )}

      {width >= 780 && (
        <>
          <CardWrapper>
            <Card onClick={() => props.history.push('/seller/orders')}>
              <CardContent>
                <CardImage src={OrderImage} alt="order image" />
                <div style={{ textAlign: 'center' }}>Orders</div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94969F',
                    textAlign: 'center'
                  }}
                >
                  View recent orders
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => props.history.push('/seller/upload')}>
              <CardContent>
                <CardImage src={AddressImage} alt="order image" />
                <div style={{ textAlign: 'center' }}>Upload</div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94969F',
                    textAlign: 'center'
                  }}
                >
                  Upload Products{' '}
                </div>
              </CardContent>
            </Card>

            <Card onClick={() => props.history.push('/seller/my-shop')}>
              {' '}
              <CardContent>
                <CardImage src={EditImage} alt="Edit image" />
                <div style={{ textAlign: 'center' }}>My Shop</div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94969F',
                    textAlign: 'center'
                  }}
                >
                  View/edit your shop details
                </div>
              </CardContent>
            </Card>
            <Card onClick={() => props.history.push('/support')}>
              {' '}
              <CardContent>
                <CardImage src={EditImage} alt="Edit image" />
                <div style={{ textAlign: 'center' }}>Support</div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94969F',
                    textAlign: 'center'
                  }}
                >
                  Contact us for any queries you have
                </div>
              </CardContent>
            </Card>
          </CardWrapper>
          <Button
            variant="contained"
            onClick={async () => {
              signout(() => {
                dispatchLogin({ type: 'logout' });
                props.history.push('/');
              });
            }}
            style={{
              backgroundColor: '#ec436f',
              color: 'white',
              width: '250px',
              height: '48px',
              marginTop: '4vh'
            }}
          >
            Logout
          </Button>
        </>
      )}
    </>
  );
};

export default withRouter(Overview);
