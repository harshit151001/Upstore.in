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
  padding-top: 20px;
  padding-bottom: 10px;
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
    &:nth-child(1) {
      padding-top: 30px;
    }
  }
`;
const Img = styled.div`
  object-fit: scale-down;
  display: flex;
  justify-content: center;
  @media (min-width: 991px) {
    width: 140px;
    height: 140px;
  }
  @media (max-width: 991px) {
    width: 120px !important;
    height: 120px;
  }
  @media (max-width: 768px) {
    width: 90px !important;
    height: 90px;
  }
  @media (max-width: 576px) {
    width: 120px !important;
    height: 120px;
  }
  @media (max-width: 400px) {
    width: 90px !important;
    height: 90px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.strong`
  color: #181e2f;
  @media (min-width: 991px) {
    font-size: 36px;
  }
  @media (max-width: 991px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
export const Quote = styled.strong`
  color: #4f4f4f;
  @media (min-width: 991px) {
    font-size: 26px;
  }
  @media (max-width: 991px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
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
          style={{ width: '6vw', minWidth: '50px', paddingTop: 'px' }}
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
              marginLeft: '4vw',
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
              marginLeft: '4vw',
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
              marginLeft: '4vw',
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
              marginLeft: '4vw',
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
