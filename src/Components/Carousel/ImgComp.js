import React from 'react';

function ImgComp({ src }) {
  let imgStyles = {
    width: 100 + '%',
    height: 100 + '%',
  };
  return <img src={src} alt="carousel-img" style={imgStyles}></img>;
}

export default ImgComp;
