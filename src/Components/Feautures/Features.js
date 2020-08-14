import React from 'react';
//import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import fb from '../Images/UpBag-01.png';
import fm from '../Images/UpMap-01.png';
import fg from '../Images/UpGift-01.png';
import ft from '../Images/UpTime-01.png';
import bos from '../Images/forJumbotron.svg';
const Section = styled.div`
  width: 90%;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 991px) {
    width: 92%;
    padding-left: 2.3vw;
    padding-right: 2.3vw;
  }
`;
const Cardbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 10px;
  align-items: center;
  @media (min-width: 576px) {
    width: 50%;
    &:nth-child(2n + 1) {
      padding-right: 20px;
    }
    &:nth-child(2n) {
      padding-left: 20px;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const Img = styled.div`
  pointer-events: none;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 991px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 991px) {
    width: 160px !important;
    height: 160px;
  }
  @media (max-width: 768px) {
    width: 130px !important;
    height: 130px;
  }
  @media (max-width: 576px) {
    width: 150px !important;
    height: 150px;
  }
  @media (max-width: 400px) {
    width: 130px !important;
    height: 130px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.strong`
  color: #181e2f;
  @media (min-width: 991px) {
    font-size: 38px;
  }
  @media (max-width: 991px) {
    font-size: 34px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 26px;
  }
  @media (max-width: 400px) {
    font-size: 22px;
  }
`;
export const Quote = styled.strong`
  color: #181e2f;
  @media (min-width: 991px) {
    font-size: 30px;
  }
  @media (max-width: 991px) {
    font-size: 26px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

const Features = () => {
  return (
    <Section>
      <Title>
        <Header>Leave it on us!</Header>
        <img
          src={bos}
          alt="icon"
          style={{ width: '6vw', minWidth: '50px', paddingTop: '6px' }}
        />
      </Title>
      <Cardbox>
        <Card>
          <Img>
            <img
              style={{ height: 'inherit', width: 'inherit' }}
              src={fb}
              alt="Bag"
            />
          </Img>
          <div
            style={{
              marginLeft: '3vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Quote>hygiene</Quote>
            <strong className="mt-2" style={{ color: '#5f5f5f' }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a
            </strong>
          </div>
        </Card>
        <Card>
          <Img>
            <img
              style={{ height: 'inherit', width: 'inherit' }}
              src={fm}
              alt="map"
            />
          </Img>
          <div
            style={{
              marginLeft: '3vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Quote>hygiene</Quote>
            <strong className="mt-2" style={{ color: '#5f5f5f' }}>
              It is a long established fact that a reader will be distracted by
              point of using Lorem Ipsum
            </strong>
          </div>
        </Card>
        <Card>
          <Img>
            <img
              style={{ height: 'inherit', width: 'inherit' }}
              src={ft}
              alt="time"
            />
          </Img>
          <div
            style={{
              marginLeft: '3vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Quote>hygiene</Quote>
            <strong className="mt-2" style={{ color: '#5f5f5f' }}>
              It is a long established fact that a reader will be distracted
              point
            </strong>
          </div>
        </Card>
        <Card>
          <Img>
            <img
              style={{ height: 'inherit', width: 'inherit' }}
              src={fg}
              alt="gift"
            />
          </Img>
          <div
            style={{
              marginLeft: '3vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Quote>hygiene</Quote>
            <strong className="mt-2" style={{ color: '#5f5f5f' }}>
              of a page when looking at its la Ipsum
            </strong>
          </div>
        </Card>
      </Cardbox>
    </Section>
  );
};

export default Features;
