<<<<<<< HEAD
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ImgComp from './ImgComp'

=======
import React,{useState} from 'react'
import '../Carousel/slider.scss'
import ImgComp from '../Carousel/ImgComp'
import Dots from '../Carousel/Dots'
>>>>>>> 043270acd292a954decedffd5c3f8d633a963c2a
import i1 from '../Images/i1.jpg'
import i2 from '../Images/i2.jpg'
import i3 from '../Images/i3.jpg'
import i4 from '../Images/i4.jpg'
import i5 from '../Images/i5.jpg'

<<<<<<< HEAD


const Slider = () => {

const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return  <Carousel interval={2000}  activeIndex={index} onSelect={handleSelect}  style={{height: '30vw'}}>
<Carousel.Item>
    <ImgComp
      className="d-block w-100 h-30"
      src={i1}
      alt={`First slide`}
      
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100 h-30"
      src={i2}
      alt={`Second slide`}
    />
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100 h-30"
      src={i3}
      alt={`Third slide`}
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100 h-30"
      src={i4}
      alt={`Fourth slide`}
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <ImgComp
      className="d-block w-100 h-30"
      src={i5}
      alt={`Fifth slide`}
    />
    
  </Carousel.Item>
</Carousel>;
};
=======
function Slider() {

    let sliderArr = [<ImgComp src={i1}/>, <ImgComp src={i2}/>, <ImgComp src={i3}/>, <ImgComp src={i4}/>, <ImgComp src={i5}/>,];
    const [x,setX] = useState(0);

    const goLeft = () =>{
        //console.log(x);
        //setX(x + 100);
        x === 0 ? setX(-100*(sliderArr.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        //console.log(x);
        x === -100*(sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className='slider'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                        

                    )
                })
            }
            <button id='goLeft'  onClick={goLeft}>
                <i class='fa fa-arrow-left' aria-hidden='true'></i>
            </button>
            <button id='goRight' onClick={goRight}>
                <i class='fa fa-arrow-right' aria-hidden='true'></i>
            </button>
        </div>
    )
}
>>>>>>> 043270acd292a954decedffd5c3f8d633a963c2a

export default Slider;
