import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImgComp from './ImgComp';

import i1 from '../Images/i1.png';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel interval={1000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ImgComp className="d-block w-100" src={i1} alt={`Second slide`} />
      </Carousel.Item>
      <Carousel.Item>
        <ImgComp className="d-block w-100" src={i1} alt={`Second slide`} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
