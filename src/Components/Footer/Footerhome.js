import React from 'react';
import styled from 'styled-components';
import logo from '../Images/UpLogoFinal.png';

const Footer = styled.div`
  width: 100%;
  margin-top: 4vw;
  background: #131733;
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  width: 90%;
  color: #ffffff;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3vw;
  padding-bottom: 3vw;
  @media (min-width: 991px) {
    width: 92%;
    padding-right: 2.3vw;
    padding-left: 2.3vw;
  }
`;

const Footerhome = () => {
  return (
    <Footer>
      <Section>
        <strong style={{ color: 'rgb(255, 255, 255)' }}>
          Why{' '}
          <img
            style={{
              height: '3.5vh',

              maxHeight: '44px'
            }}
            src={logo}
          />{' '}
          ?
        </strong>
        <p style={{ fontSize: '14px', color: '#e3e3e3 ' }}>Because we are the One-stop Shopping Destination for buying anything in the city! E-commerce is revolutionizing the way we all shop in India. Who wants to hop from one store to another in search of the best products for the best price  when you can find it on the Internet in a single click? </p>
      </Section>
      <div
        style={{
          width: '80%',
          height: '1px',
          background: '#ffffff',
          display: 'block',
          margin: 'auto'
        }}
      ></div>
      <Section>
        <strong style={{ color: 'rgb(255, 255, 255)' }}>
          Is <span style={{ color: '#ec436f' }}>Up Store</span> just a Hyperlocal delivery provider?
        </strong>
        <p style={{ fontSize: '14px', color: '#e3e3e3 ' }}>No, Up Store is much more than just a hyperlocal delivery provider! With the hyperlocal delivery services already available, one can buy from any store locally only when he/she knows beforehand what to buy and which shop would have it.There is no platform for people to view all the products available in the city just like they view products on any other E-Commerce platform.Be it a necessity or a luxury, we aim to suffice all your wants through the network of our esteemed retailers.   </p>
      </Section>
      <div
        style={{
          width: '80%',
          height: '1px',
          background: '#ffffff',
          display: 'block',
          margin: 'auto'
        }}
      ></div>
      <Section>
        <strong style={{ color: 'rgb(255, 255, 255)' }}>Make Money with Us....</strong>
        <p style={{ fontSize: '14px', color: '#e3e3e3 ' }}>We love retailers! If you own a retail shop in the city and plan to expand your reach by taking your business online then Up Store is the place for you. Our Web App is built on the latest technologies and therefore outperforms the majority.  Reach a wider audience by being featured in our intensive and super local ad campaigns and also super charge your virtual shop with the speed and scalability which no CMS provider can help you achieve.With the easiest on boarding process start selling your products online within minutes after contacting us and let us take care of all the technical aspects of your virtual shop for you.</p>
      </Section>
    </Footer>
  );
};

export default Footerhome;
