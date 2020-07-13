import React, { useEffect } from 'react';
import Slider from '../Carousel/Slider';
//import Carousell from '../Cards/Carousel';
import Loginmodal from '../Modals/Loginmodal';
import { isAutheticated } from '../../auth/helper/index';
import Productcard from '../Products/Cards/Productcard';
import Categorycard from '../Categories/Cards/Categorycard';

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalShow(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Slider />
      {!isAutheticated() && (
        <Loginmodal show={modalShow} onHide={() => setModalShow(false)} />
      )}
      <Productcard />
      <Categorycard />
    </>
  );
};

export default Home;
