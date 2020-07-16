import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ImgComp from './ImgComp'

import i1 from '../Images/i1.jpg'
import i2 from '../Images/i2.jpg'
import i3 from '../Images/i3.jpg'
import i4 from '../Images/i4.jpg'
import i5 from '../Images/i5.jpg'



const Slider = () => {

const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return  <Carousel interval={1000}  activeIndex={index} onSelect={handleSelect}>
<Carousel.Item>
    <ImgComp
      className="d-block w-100 "
      src={i1}
      alt={`First slide`}
      />
    
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100"
      src={i2}
      alt={`Second slide`}
    />
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100 "
      src={i3}
      alt={`Third slide`}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100"
      src={i4}
      alt={`Fourth slide`}
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100"
      src={i5}
      alt={`Fifth slide`}
    />
    
  </Carousel.Item>
</Carousel>;
};

export default Slider;
