import React from 'react';
import useWindowDimensions from '../../customapis/useWindowDimensions';
const { width } = useWindowDimensions;

function ImgComp({ src }) {
  return <img src={src} alt="carousel-img" style={{ width: '100vw', height: '25vw' }} />;
}

export default ImgComp;
