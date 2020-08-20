import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import OrderImage from '../Images/profile-orders.png';
import AddressImage from '../Images/profile-address.png';
import EditImage from '../Images/profile-edit.png';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import { PreviousButton, OrderWrapper, Card as MobileCard, CardContent as MobileCardContent, DetailsWrapper } from './Myorders';
import UserImage from '../Images/userAccount.png';
import GoToIcon from '../Images/arrow.png';

const MobileCardImage = styled.img`
  height: 4vh;
  margin: auto;
`;

const MobileJumbotronWrapper = styled.div`
  width: 100%;
  padding-bottom: 25px;
`;

const MobileJumbotron = styled.div`
  text-align: center;
  background: #f5f5f6;
  height: 180px;
  padding: 25px 30px;
`;

const EditProfileButtom = styled.div`
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 800;
  cursor: pointer;
  border: 1px solid #3e4152;
`;

const PaddedContainer = styled.div`
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
`;

const CardImage = styled.img`
  height: 5vh;
  width: 5vh;
`;

const Card = styled.div`
  justify-content: center;
  cursor: pointer;
  margin-top: 2vh;
  display: flex;
  border: 0.5px solid #eaeaec;
  width: 30%;
`;
const Jumbotron = styled.div`
  background-color: #f5f5f6;
  width: 100%;
`;
const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 1vh;
  flex-wrap: wrap;
`;

const CardContent = styled.div`
  text-align: center;
  margin: 5vh 1vh;
  padding: 0px 12px;
`;

const Overview = props => {
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
            <img style={{ height: '130px', width: '130px' }} src={UserImage} alt="User Image" />
            <Link style={{ textDecoration: 'none' }} to="/userdashboard/details/edit">
              <EditProfileButtom style={{ height: '25px' }}>Edit Profile</EditProfileButtom>
            </Link>
          </PaddedContainer>
        </Jumbotron>
      )}

      {width < 780 && (
        <OrderWrapper>
          <MobileCard onClick={() => props.history.push('/userdashboard/orders')}>
            <MobileCardContent>
              <MobileCardImage src={OrderImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase', marginTop: '1vh' }}>Orders</div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>View recent orders</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>

          <MobileCard onClick={() => props.history.push('/userdashboard/address')}>
            <MobileCardContent>
              <MobileCardImage src={AddressImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase', marginTop: '1vh' }}>Address</div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>Save addresses</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>

          <MobileCard onClick={() => props.history.push('/userdashboard/details/edit')}>
            <MobileCardContent>
              <MobileCardImage src={EditImage} alt="Product" />
              <DetailsWrapper style={{ margin: 'auto' }}>
                <PreviousButton style={{ marginTop: '1vh' }}>
                  {' '}
                  <img style={{ height: '12px' }} src={GoToIcon} alt="Go to svg" />{' '}
                </PreviousButton>
                <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase', marginTop: '1vh' }}>Profile</div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>View or edit your profile</div>
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
                <div style={{ color: '#3E4152', fontWeight: '800', textTransform: 'uppercase', marginTop: '1vh' }}>Support</div>
                <div style={{ color: '#7e818c', fontSize: '14px' }}>Contact us for any queries you have</div>
              </DetailsWrapper>
            </MobileCardContent>
          </MobileCard>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={async () => {
                // logout code
                props.history.push('/');
              }}
              style={{ backgroundColor: '#ec436f', color: 'white', marginTop: '3vh', width: '95%', padding: '10px', fontWeight: '800' }}
            >
              Logout
            </Button>
          </div>
        </OrderWrapper>
      )}

      {width >= 780 && (
        <>
          <CardWrapper>
            <Card onClick={() => props.history.push('/userdashboard/orders')}>
              <CardContent>
                <CardImage src={OrderImage} alt="order image" />
                <div style={{ textAlign: 'center' }}>Orders</div>
                <div style={{ fontSize: '12px', color: '#94969F', textAlign: 'center' }}>View recent orders</div>
              </CardContent>
            </Card>

            <Card onClick={() => props.history.push('/userdashboard/address')}>
              <CardContent>
                <CardImage src={AddressImage} alt="order image" />
                <div style={{ textAlign: 'center' }}>Addresses</div>
                <div style={{ fontSize: '12px', color: '#94969F', textAlign: 'center' }}>Save addresses </div>
              </CardContent>
            </Card>

            <Card onClick={() => props.history.push('/userdashboard/details')}>
              {' '}
              <CardContent>
                <CardImage src={EditImage} alt="Edit image" />
                <div style={{ textAlign: 'center' }}>Profile</div>
                <div style={{ fontSize: '12px', color: '#94969F', textAlign: 'center' }}>View or edit your profile</div>
              </CardContent>
            </Card>
            <Card onClick={() => props.history.push('/support')}>
              {' '}
              <CardContent>
                <CardImage src={EditImage} alt="Edit image" />
                <div style={{ textAlign: 'center' }}>Support</div>
                <div style={{ fontSize: '12px', color: '#94969F', textAlign: 'center' }}>Contact us for any queries you have</div>
              </CardContent>
            </Card>
          </CardWrapper>
          <Button
            variant="contained"
            onClick={async () => {
              // logout code
              props.history.push('/');
            }}
            style={{ backgroundColor: '#ec436f', color: 'white', width: '250px', height: '48px', marginTop: '4vh' }}
          >
            Logout
          </Button>
        </>
      )}
    </>
  );
};

export default withRouter(Overview);
