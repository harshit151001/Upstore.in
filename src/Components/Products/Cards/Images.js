import React from 'react';
import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 3px;
  @media (max-width: 368px) {
    width: 111px;
    height: 148px;
    object-fit: cover;
  }
  @media (min-width: 368px) {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  @media (min-width: 570px) {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 165px;
    height: 220px;
    object-fit: cover;
  }
  @media (min-width: 991px) {
    width: 180px;
    height: 240px;
    object-fit: cover;
  }
  @media (min-width: 1025px) {
    width: 210px;
    height: 280px;
    object-fit: cover;
  }
`;

const Images = props => {
  return <Img src={props.src} alt={props.alt}></Img>;
};

export default Images;
