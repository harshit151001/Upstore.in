import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100vw;
  height: 42vw;
  object-fit: cover;
  @media (min-width: 991px) {
    height: 28vw;
  }
`;

function ImgComp({ src }) {
  return <Img src={src} alt="carousel-img" />;
}

export default ImgComp;
