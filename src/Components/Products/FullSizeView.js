import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import API from '../../backend';

const FullSizeView = props => {
  const [index, setIndex] = useState(parseInt(`${!props.location.state ? 0 : props.location.state.index}`));

  console.log(props);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const CarouselImages = images => {
    return images.map((image, index) => {
      return (
        <Carousel.Item key={index}>
          <img style={{ width: '100vw' }} src={API + image.substr(6)} alt={`Second slide`} />
        </Carousel.Item>
      );
    });
  };

  if (!props.location.state) {
    props.history.push('/');
  }

  return (
    <div style={{ position: 'absolute', top: '0' }}>
      {' '}
      {props.location.state && (
        <div>
          <div onClick={() => props.history.goBack()} style={{ fontSize: '35px', paddingLeft: '5px', color: 'gray' }}>
            <div>&times;</div>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {CarouselImages(props.location.state.photos, index)}
          </Carousel>
        </div>
      )}
    </div>
  );
};
export default withRouter(FullSizeView);
