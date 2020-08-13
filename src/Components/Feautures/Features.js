import React from 'react';
//import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import fb from '../Images/finallyBag .png';
import fm from '../Images/finallyMap .png';
import fg from '../Images/finallyGift .png';
import ft from '../Images/finallyTime .png';
const Section = styled.div`
  width: 92%;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 991px) {
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
  object-fit: cover;
  @media (min-width: 991px) {
    width: 200px !important;
    height: 200px;
  }
  @media (max-width: 991px) {
    width: 180px !important;
    height: 180px;
  }
  @media (max-width: 768px) {
    width: 160px !important;
    height: 160px;
  }
  @media (max-width: 576px) {
    width: 180px !important;
    height: 180px;
  }
  @media (max-width: 400px) {
    width: 160px !important;
    height: 160px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Header = styled.strong`
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
          <div style={{ marginLeft: '3vw' }}>
            <Quote>hygiene</Quote>
            <p className="mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
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
          <div style={{ marginLeft: '3vw' }}>
            <Quote>hygiene</Quote>
            <p className="mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
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
          <div style={{ marginLeft: '3vw' }}>
            <Quote>hygiene</Quote>
            <p className="mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
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
          <div style={{ marginLeft: '3vw' }}>
            <Quote>hygiene</Quote>
            <p className="mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
          </div>
        </Card>
      </Cardbox>
    </Section>
  );
};

export default Features;
