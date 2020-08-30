import React from 'react';
import API from '../../../backend';
import styled from 'styled-components';

const Card = styled.div` 
  border: 1px solid rgb(224, 224, 224) !important;
  border-image: initial;
  @media (min-width: 1080px) {
    box-shadow: 0px 0px 10px 0px rgba(97, 97, 97, 0.3);
    padding: 24px;
    width: 24vw;
    display: flex;
    margin-top: 1vw;
    margin-bottom: 1vw;
    border: 1px solid;
    border-radius: 3px;
    &:hover {
    }
  }
  @media (max-width: 1080px) {
    box-shadow: 0px 0px 10px 0px rgba(97, 97, 97, 0.3);
    width: 41vw;
    padding: 24px;
    display: flex;
    margin-top: 1vw;
    margin-bottom: 1vw;
    border: 1px solid;
    border-radius: 3px;
  }
  @media (max-width: 768px) {
    box-shadow: none;
    border: 1px solid rgb(224, 224, 224);
    width: 22.5vw;
    height: 24vw;
    justify-content: center;
    align-items: center;
    padding: 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0px;
  }
  @media (max-width: 400px) {
    box-shadow: none;
    border: 1px solid rgb(224, 224, 224);
    width: 30vw;
    height: 30vw;
    justify-content: center;
    align-items: center;
    padding: 0px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0px;
  }
  img {
    width: 65px;
    height: 65px;
    margin-right: 24px;
    object-fit: contain;
    @media (max-width: 768px) {
      margin: 0px;
      width: 60%;
      height: 60%;
      align-self: center;
      justify-self: center;
    }
    @media (max-width: 576px) {
      margin: 0px;
      width: 55%;
      height: 55%;
      align-self: center;
      justify-self: center;
    }
  }
`;
const Name = styled.strong`
  text-decoration: none;
  font-family: Gilroy, sans-serif;
  color: rgb(23, 30, 48);
  text-align: left;
  flex-wrap: wrap;
  font-size: 19px;
  font-spacing: 0.3pt;
  letter-spacing: 1px;
  @media (min-width: 767px) {
    align-self: center;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 19px;
    letter-spacing: 1px;
    margin-top: 14px;
  }
  @media (max-width: 600px) {
    text-align: center;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 1px;
    margin-top: 12px;
  }
  @media (max-width: 508px) {
    text-align: center;
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 18px;
    margin-top: 10px;
  }
  @media (max-width: 468px) {
    text-align: center;
    font-size: 12px;
    letter-spacing: 0px;
    line-height: 16px;
    margin-top: 10px;
  }
`;

const Categorycard = ({ name, path }) => {
  const src = path.substr(6);
  return (
    <Card>
      <img src={`${API}${src}`} alt="" />
      <Name>{name}</Name>
    </Card>
  );
};

export default Categorycard;
