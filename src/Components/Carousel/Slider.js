import React, { useState } from 'react';
import styled from 'styled-components';

import ImgComp from '../Carousel/ImgComp';

import i1 from '../Images/i1.jpg';
import i2 from '../Images/i2.jpg';
import i3 from '../Images/i3.jpg';
import i4 from '../Images/i4.jpg';
import i5 from '../Images/i5.jpg';

const Sliderbox = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: black;
  z-index: 1;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  transition: 0.5s;
  overflow: hidden;
`;

const Move = styled.button`
  display: flex;
  position: absolute;
  top: 50%;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  font-size: 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  outline: none;
  transition: 0.5s;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

function Slider() {
  const sliderArr = [
    <ImgComp src={i3} />,
    <ImgComp src={i2} />,
    <ImgComp src={i1} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    console.log(sliderArr);
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Sliderbox>
      {sliderArr.map((item, index) => {
        return (
          <Slide key={index} style={{ transform: `translateX(${x}%)` }}>
            {item}
          </Slide>
        );
      })}
      <Move style={{ left: '.5rem' }} onClick={goLeft}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </Move>
      <Move style={{ right: '.5rem' }} onClick={goRight}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </Move>
    </Sliderbox>
  );
}

export default Slider;
