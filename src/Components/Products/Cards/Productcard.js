import React from 'react';
import useWindowDimensions from '../../../customapis/useWindowDimensions';
import Carddesktop from './Carddesktop';
import Cardmobile from './Cardmobile';

const Productcard = () => {
  const { width } = useWindowDimensions();
  return <>{width > 768 ? <Carddesktop /> : <Cardmobile />}</>;
};

export default Productcard;
